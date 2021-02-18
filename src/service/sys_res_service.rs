use std::collections::HashMap;

use rbatis::core::Result;
use rbatis::crud::CRUD;
use rbatis::plugin::page::{Page, PageRequest};
use rbatis::Error;

use crate::domain::domain::SysRes;
use crate::domain::dto::{ResEditDTO, ResPageDTO};
use crate::domain::vo::SysResVO;
use crate::service::CONTEXT;

/// 资源服务
pub struct SysResService {}

impl SysResService {
    ///资源分页
    pub async fn page(&self, arg: &ResPageDTO) -> Result<Page<SysRes>> {
        let page_req = PageRequest::new(arg.page.unwrap_or(1), arg.size.unwrap_or(10));
        let data = CONTEXT
            .rbatis
            .fetch_page_by_wrapper("", &CONTEXT.rbatis.new_wrapper(), &page_req)
            .await?;
        Ok(data)
    }

    ///添加资源
    pub async fn add(&self, arg: &SysRes) -> Result<u64> {
        let old: Option<SysRes> = CONTEXT
            .rbatis
            .fetch_by_wrapper(
                "",
                &CONTEXT
                    .rbatis
                    .new_wrapper()
                    .eq("permission", &arg.permission),
            )
            .await?;
        if old.is_some() {
            return Err(Error::from("权限已存在!"));
        }
        Ok(CONTEXT.rbatis.save("", arg).await?.rows_affected)
    }

    ///修改资源
    pub async fn edit(&self, arg: &ResEditDTO) -> Result<u64> {
        let mut data = SysRes {
            id: arg.id.clone(),
            parent_id: arg.parent_id.clone(),
            name: arg.name.clone(),
            permission: arg.permission.clone(),
            path: arg.path.clone(),
            del: None,
            create_date: None,
        };
        CONTEXT.rbatis.update_by_id("", &mut data).await
    }

    ///删除资源
    pub async fn remove(&self, id: &str) -> Result<u64> {
        let num = CONTEXT
            .rbatis
            .remove_by_id::<SysRes>("", &id.to_string())
            .await?;
        //删除关联数据
        CONTEXT.sys_role_res_service.remove_by_res_id(id).await;
        return Ok(num);
    }

    /// 查找res数组
    pub async fn finds_all(&self) -> Result<Vec<SysRes>> {
        //TODO 查找的全部数据缓存于Redis，同时 remove，edit方法调用时刷新redis缓存
        CONTEXT.rbatis.fetch_list("").await
    }

    /// 查找res数组
    pub async fn finds_all_map(&self) -> Result<(HashMap<String, SysRes>)> {
        let all = self.finds_all().await?;
        return self.to_hash_map_owner(all);
    }

    /// 查找res数组
    pub fn to_hash_map<'s, 'a>(
        &'s self,
        data: &'a Vec<SysRes>,
    ) -> Result<HashMap<String, &'a SysRes>> {
        let mut map = HashMap::new();
        for x in data {
            map.insert(x.id.clone().unwrap_or(String::new()), x);
        }
        return Ok(map);
    }

    /// 查找res数组
    pub fn to_hash_map_owner(&self, arg: Vec<SysRes>) -> Result<HashMap<String, SysRes>> {
        let mut result = HashMap::new();
        let data = self.to_hash_map(&arg)?;
        for (k, v) in data {
            result.insert(k, v.clone());
        }
        return Ok(result);
    }

    /// 查找res数组
    pub async fn finds(&self, ids: &Vec<String>) -> Result<Vec<SysRes>> {
        CONTEXT
            .rbatis
            .fetch_list_by_wrapper("", &CONTEXT.rbatis.new_wrapper().r#in("id", ids))
            .await
    }

    ///带有层级结构的 res数组
    pub async fn finds_layer(
        &self,
        ids: &Vec<String>,
        all_res: &Vec<SysRes>,
    ) -> Result<Vec<SysResVO>> {
        let res = self.finds(&ids).await?;
        //find tops
        let mut tops = vec![];
        for item in res {
            //parent id null, it is an top resource
            if item.parent_id.is_none() {
                tops.push(SysResVO::from(&item));
            }
        }
        //find child
        for mut item in &mut tops {
            self.loop_find_childs(&mut item, all_res);
        }
        Ok(tops)
    }

    ///死循环找出父-子 关联关系数组
    pub fn loop_find_childs(&self, arg: &mut SysResVO, all_res: &Vec<SysRes>) {
        let mut childs = None;
        for x in all_res {
            if x.parent_id.eq(&arg.id) {
                let mut item = SysResVO::from(x);
                self.loop_find_childs(&mut item, all_res);
                if childs.is_none() {
                    childs = Some(vec![]);
                }
                childs.as_mut().unwrap().push(item);
            }
        }
        arg.childs = childs;
    }
}
