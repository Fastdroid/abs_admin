(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user"],{"00d8":function(e,t){(function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&r.rotl(e,8)|4278255360&r.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=r.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],r=0,a=0;r<e.length;r++,a+=8)t[a>>>5]|=e[r]<<24-a%32;return t},wordsToBytes:function(e){for(var t=[],r=0;r<32*e.length;r+=8)t.push(e[r>>>5]>>>24-r%32&255);return t},bytesToHex:function(e){for(var t=[],r=0;r<e.length;r++)t.push((e[r]>>>4).toString(16)),t.push((15&e[r]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],r=0;r<e.length;r+=2)t.push(parseInt(e.substr(r,2),16));return t},bytesToBase64:function(e){for(var r=[],a=0;a<e.length;a+=3)for(var s=e[a]<<16|e[a+1]<<8|e[a+2],i=0;i<4;i++)8*a+6*i<=8*e.length?r.push(t.charAt(s>>>6*(3-i)&63)):r.push("=");return r.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var r=[],a=0,s=0;a<e.length;s=++a%4)0!=s&&r.push((t.indexOf(e.charAt(a-1))&Math.pow(2,-2*s+8)-1)<<2*s|t.indexOf(e.charAt(a))>>>6-2*s);return r}};e.exports=r})()},"044b":function(e,t){function r(e){return!!e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function a(e){return"function"===typeof e.readFloatLE&&"function"===typeof e.slice&&r(e.slice(0,0))}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(r(e)||a(e)||!!e._isBuffer)}},1037:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-result",{attrs:{isSuccess:!0,content:!1,title:e.email,"sub-title":e.description},scopedSlots:e._u([{key:"extra",fn:function(){return[r("a-button",{attrs:{size:"large",type:"primary"}},[e._v("查看邮箱")]),r("a-button",{staticStyle:{"margin-left":"8px"},attrs:{size:"large"},on:{click:e.goHomeHandle}},[e._v("返回首页")])]},proxy:!0}])})},s=[],i={name:"RegisterResult",data:function(){return{description:"激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。",form:{}}},computed:{email:function(){var e=this.form&&this.form.email||"xxx";return"你的账户：".concat(e," 注册成功")}},created:function(){this.form=this.$route.params},methods:{goHomeHandle:function(){this.$router.push({name:"login"})}}},o=i,n=r("2877"),l=Object(n["a"])(o,a,s,!1,null,"4a6c53ae",null);t["default"]=l.exports},1348:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main user-layout-register"},[r("h3",[r("span",[e._v(e._s(e.$t("user.register.register")))])]),r("a-form",{ref:"formRegister",attrs:{form:e.form,id:"formRegister"}},[r("a-form-item",[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{required:!0,type:"email",message:e.$t("user.email.required")}],validateTrigger:["change","blur"]}],expression:"['email', {rules: [{ required: true, type: 'email', message: $t('user.email.required') }], validateTrigger: ['change', 'blur']}]"}],attrs:{size:"large",type:"text",placeholder:e.$t("user.register.email.placeholder")}})],1),r("a-popover",{attrs:{placement:"rightTop",trigger:["focus"],getPopupContainer:function(e){return e.parentElement}},model:{value:e.state.passwordLevelChecked,callback:function(t){e.$set(e.state,"passwordLevelChecked",t)},expression:"state.passwordLevelChecked"}},[r("template",{slot:"content"},[r("div",{style:{width:"240px"}},[r("div",{class:["user-register",e.passwordLevelClass]},[e._v(e._s(e.$t(e.passwordLevelName)))]),r("a-progress",{attrs:{percent:e.state.percent,showInfo:!1,strokeColor:e.passwordLevelColor}}),r("div",{staticStyle:{"margin-top":"10px"}},[r("span",[e._v(e._s(e.$t("user.register.password.popover-message"))+" ")])])],1)]),r("a-form-item",[r("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:e.$t("user.password.required")},{validator:this.handlePasswordLevel}],validateTrigger:["change","blur"]}],expression:"['password', {rules: [{ required: true, message: $t('user.password.required') }, { validator: this.handlePasswordLevel }], validateTrigger: ['change', 'blur']}]"}],attrs:{size:"large",placeholder:e.$t("user.register.password.placeholder")},on:{click:e.handlePasswordInputClick}})],1)],2),r("a-form-item",[r("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["password2",{rules:[{required:!0,message:e.$t("user.password.required")},{validator:this.handlePasswordCheck}],validateTrigger:["change","blur"]}],expression:"['password2', {rules: [{ required: true, message: $t('user.password.required') }, { validator: this.handlePasswordCheck }], validateTrigger: ['change', 'blur']}]"}],attrs:{size:"large",placeholder:e.$t("user.register.confirm-password.placeholder")}})],1),r("a-form-item",[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["mobile",{rules:[{required:!0,message:e.$t("user.phone-number.required"),pattern:/^1[3456789]\d{9}$/},{validator:this.handlePhoneCheck}],validateTrigger:["change","blur"]}],expression:"['mobile', {rules: [{ required: true, message: $t('user.phone-number.required'), pattern: /^1[3456789]\\d{9}$/ }, { validator: this.handlePhoneCheck } ], validateTrigger: ['change', 'blur'] }]"}],attrs:{size:"large",placeholder:e.$t("user.login.mobile.placeholder")}},[r("a-select",{attrs:{slot:"addonBefore",size:"large",defaultValue:"+86"},slot:"addonBefore"},[r("a-select-option",{attrs:{value:"+86"}},[e._v("+86")]),r("a-select-option",{attrs:{value:"+87"}},[e._v("+87")])],1)],1)],1),r("a-row",{attrs:{gutter:16}},[r("a-col",{staticClass:"gutter-row",attrs:{span:16}},[r("a-form-item",[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["captcha",{rules:[{required:!0,message:"请输入验证码"}],validateTrigger:"blur"}],expression:"['captcha', {rules: [{ required: true, message: '请输入验证码' }], validateTrigger: 'blur'}]"}],attrs:{size:"large",type:"text",placeholder:e.$t("user.login.mobile.verification-code.placeholder")}},[r("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"mail"},slot:"prefix"})],1)],1)],1),r("a-col",{staticClass:"gutter-row",attrs:{span:8}},[r("a-button",{staticClass:"getCaptcha",attrs:{size:"large",disabled:e.state.smsSendBtn},domProps:{textContent:e._s(!e.state.smsSendBtn&&e.$t("user.register.get-verification-code")||e.state.time+" s")},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.getCaptcha(t)}}})],1)],1),r("a-form-item",[r("a-button",{staticClass:"register-button",attrs:{size:"large",type:"primary",htmlType:"submit",loading:e.registerBtn,disabled:e.registerBtn},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit(t)}}},[e._v(e._s(e.$t("user.register.register"))+" ")]),r("router-link",{staticClass:"login",attrs:{to:{name:"login"}}},[e._v(e._s(e.$t("user.register.sign-in")))])],1)],1)],1)},s=[],i=(r("498a"),r("5530")),o=r("7ded"),n=r("705f"),l=r("ca00"),c={0:"user.password.strength.short",1:"user.password.strength.low",2:"user.password.strength.medium",3:"user.password.strength.strong"},u={0:"error",1:"error",2:"warning",3:"success"},d={0:"#ff0000",1:"#ff0000",2:"#ff7e05",3:"#52c41a"},p={name:"Register",components:{},mixins:[n["a"]],data:function(){return{form:this.$form.createForm(this),state:{time:60,level:0,smsSendBtn:!1,passwordLevel:0,passwordLevelChecked:!1,percent:10,progressColor:"#FF0000"},registerBtn:!1}},computed:{passwordLevelClass:function(){return u[this.state.passwordLevel]},passwordLevelName:function(){return c[this.state.passwordLevel]},passwordLevelColor:function(){return d[this.state.passwordLevel]}},methods:{handlePasswordLevel:function(e,t,r){if(""===t)return r();t.length>=6?(Object(l["a"])(t)>=30&&(this.state.level=1),Object(l["a"])(t)>=60&&(this.state.level=2),Object(l["a"])(t)>=80&&(this.state.level=3)):(this.state.level=0,r(new Error(this.$t("user.password.strength.msg")))),this.state.passwordLevel=this.state.level,this.state.percent=33*this.state.level},handlePasswordCheck:function(e,t,r){var a=this.form.getFieldValue("password");void 0===t&&r(new Error(this.$t("user.password.required"))),t&&a&&t.trim()!==a.trim()&&r(new Error(this.$t("user.password.twice.msg"))),r()},handlePhoneCheck:function(e,t,r){r()},handlePasswordInputClick:function(){this.isMobile?this.state.passwordLevelChecked=!1:this.state.passwordLevelChecked=!0},handleSubmit:function(){var e=this.form.validateFields,t=this.state,r=this.$router;e({force:!0},(function(e,a){e||(t.passwordLevelChecked=!1,r.push({name:"registerResult",params:Object(i["a"])({},a)}))}))},getCaptcha:function(e){var t=this;e.preventDefault();var r=this.form.validateFields,a=this.state,s=this.$message,i=this.$notification;r(["mobile"],{force:!0},(function(e,r){if(!e){a.smsSendBtn=!0;var n=window.setInterval((function(){a.time--<=0&&(a.time=60,a.smsSendBtn=!1,window.clearInterval(n))}),1e3),l=s.loading("验证码发送中..",0);Object(o["b"])({mobile:r.mobile}).then((function(e){setTimeout(l,2500),i["success"]({message:"提示",description:"验证码获取成功，您的验证码为："+e.result.captcha,duration:8})})).catch((function(e){setTimeout(l,1),clearInterval(n),a.time=60,a.smsSendBtn=!1,t.requestFailed(e)}))}}))},requestFailed:function(e){this.$notification["error"]({message:"错误",description:((e.response||{}).data||{}).msg||"请求出现错误，请稍后再试",duration:4}),this.registerBtn=!1}},watch:{"state.passwordLevel":function(e){}}},g=p,m=(r("5d18"),r("5e4e"),r("2877")),f=Object(m["a"])(g,a,s,!1,null,"756bb04e",null);t["default"]=f.exports},"5d18":function(e,t,r){"use strict";var a=r("eeab"),s=r.n(a);s.a},"5e4e":function(e,t,r){"use strict";var a=r("6c71"),s=r.n(a);s.a},6192:function(e,t,r){},6821:function(e,t,r){(function(){var t=r("00d8"),a=r("9a634").utf8,s=r("044b"),i=r("9a634").bin,o=function(e,r){e.constructor==String?e=r&&"binary"===r.encoding?i.stringToBytes(e):a.stringToBytes(e):s(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||(e=e.toString());for(var n=t.bytesToWords(e),l=8*e.length,c=1732584193,u=-271733879,d=-1732584194,p=271733878,g=0;g<n.length;g++)n[g]=16711935&(n[g]<<8|n[g]>>>24)|4278255360&(n[g]<<24|n[g]>>>8);n[l>>>5]|=128<<l%32,n[14+(l+64>>>9<<4)]=l;var m=o._ff,f=o._gg,h=o._hh,v=o._ii;for(g=0;g<n.length;g+=16){var b=c,w=u,y=d,C=p;c=m(c,u,d,p,n[g+0],7,-680876936),p=m(p,c,u,d,n[g+1],12,-389564586),d=m(d,p,c,u,n[g+2],17,606105819),u=m(u,d,p,c,n[g+3],22,-1044525330),c=m(c,u,d,p,n[g+4],7,-176418897),p=m(p,c,u,d,n[g+5],12,1200080426),d=m(d,p,c,u,n[g+6],17,-1473231341),u=m(u,d,p,c,n[g+7],22,-45705983),c=m(c,u,d,p,n[g+8],7,1770035416),p=m(p,c,u,d,n[g+9],12,-1958414417),d=m(d,p,c,u,n[g+10],17,-42063),u=m(u,d,p,c,n[g+11],22,-1990404162),c=m(c,u,d,p,n[g+12],7,1804603682),p=m(p,c,u,d,n[g+13],12,-40341101),d=m(d,p,c,u,n[g+14],17,-1502002290),u=m(u,d,p,c,n[g+15],22,1236535329),c=f(c,u,d,p,n[g+1],5,-165796510),p=f(p,c,u,d,n[g+6],9,-1069501632),d=f(d,p,c,u,n[g+11],14,643717713),u=f(u,d,p,c,n[g+0],20,-373897302),c=f(c,u,d,p,n[g+5],5,-701558691),p=f(p,c,u,d,n[g+10],9,38016083),d=f(d,p,c,u,n[g+15],14,-660478335),u=f(u,d,p,c,n[g+4],20,-405537848),c=f(c,u,d,p,n[g+9],5,568446438),p=f(p,c,u,d,n[g+14],9,-1019803690),d=f(d,p,c,u,n[g+3],14,-187363961),u=f(u,d,p,c,n[g+8],20,1163531501),c=f(c,u,d,p,n[g+13],5,-1444681467),p=f(p,c,u,d,n[g+2],9,-51403784),d=f(d,p,c,u,n[g+7],14,1735328473),u=f(u,d,p,c,n[g+12],20,-1926607734),c=h(c,u,d,p,n[g+5],4,-378558),p=h(p,c,u,d,n[g+8],11,-2022574463),d=h(d,p,c,u,n[g+11],16,1839030562),u=h(u,d,p,c,n[g+14],23,-35309556),c=h(c,u,d,p,n[g+1],4,-1530992060),p=h(p,c,u,d,n[g+4],11,1272893353),d=h(d,p,c,u,n[g+7],16,-155497632),u=h(u,d,p,c,n[g+10],23,-1094730640),c=h(c,u,d,p,n[g+13],4,681279174),p=h(p,c,u,d,n[g+0],11,-358537222),d=h(d,p,c,u,n[g+3],16,-722521979),u=h(u,d,p,c,n[g+6],23,76029189),c=h(c,u,d,p,n[g+9],4,-640364487),p=h(p,c,u,d,n[g+12],11,-421815835),d=h(d,p,c,u,n[g+15],16,530742520),u=h(u,d,p,c,n[g+2],23,-995338651),c=v(c,u,d,p,n[g+0],6,-198630844),p=v(p,c,u,d,n[g+7],10,1126891415),d=v(d,p,c,u,n[g+14],15,-1416354905),u=v(u,d,p,c,n[g+5],21,-57434055),c=v(c,u,d,p,n[g+12],6,1700485571),p=v(p,c,u,d,n[g+3],10,-1894986606),d=v(d,p,c,u,n[g+10],15,-1051523),u=v(u,d,p,c,n[g+1],21,-2054922799),c=v(c,u,d,p,n[g+8],6,1873313359),p=v(p,c,u,d,n[g+15],10,-30611744),d=v(d,p,c,u,n[g+6],15,-1560198380),u=v(u,d,p,c,n[g+13],21,1309151649),c=v(c,u,d,p,n[g+4],6,-145523070),p=v(p,c,u,d,n[g+11],10,-1120210379),d=v(d,p,c,u,n[g+2],15,718787259),u=v(u,d,p,c,n[g+9],21,-343485551),c=c+b>>>0,u=u+w>>>0,d=d+y>>>0,p=p+C>>>0}return t.endian([c,u,d,p])};o._ff=function(e,t,r,a,s,i,o){var n=e+(t&r|~t&a)+(s>>>0)+o;return(n<<i|n>>>32-i)+t},o._gg=function(e,t,r,a,s,i,o){var n=e+(t&a|r&~a)+(s>>>0)+o;return(n<<i|n>>>32-i)+t},o._hh=function(e,t,r,a,s,i,o){var n=e+(t^r^a)+(s>>>0)+o;return(n<<i|n>>>32-i)+t},o._ii=function(e,t,r,a,s,i,o){var n=e+(r^(t|~a))+(s>>>0)+o;return(n<<i|n>>>32-i)+t},o._blocksize=16,o._digestsize=16,e.exports=function(e,r){if(void 0===e||null===e)throw new Error("Illegal argument "+e);var a=t.wordsToBytes(o(e,r));return r&&r.asBytes?a:r&&r.asString?i.bytesToString(a):t.bytesToHex(a)}})()},"6c71":function(e,t,r){},"8df1":function(e,t,r){"use strict";var a=r("6192"),s=r.n(a);s.a},"90b4":function(e,t,r){},"9a634":function(e,t){var r={utf8:{stringToBytes:function(e){return r.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(r.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],r=0;r<e.length;r++)t.push(255&e.charCodeAt(r));return t},bytesToString:function(e){for(var t=[],r=0;r<e.length;r++)t.push(String.fromCharCode(e[r]));return t.join("")}}};e.exports=r},ac2a:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main"},[r("a-form",{ref:"formLogin",staticClass:"user-layout-login",attrs:{id:"formLogin",form:e.form},on:{submit:e.handleSubmit}},[r("a-tabs",{attrs:{activeKey:e.customActiveKey,tabBarStyle:{textAlign:"center",borderBottom:"unset"}},on:{change:e.handleTabClick}},[r("a-tab-pane",{key:"tab1",attrs:{tab:e.$t("user.login.tab-login-credentials")}},[e.isLoginError?r("a-alert",{staticStyle:{"margin-bottom":"24px"},attrs:{type:"error",showIcon:"",message:e.$t("user.login.message-invalid-credentials")}}):e._e(),r("a-form-item",[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["account",{rules:[{required:!0,message:e.$t("user.userName.required")},{validator:e.handleUsernameOrEmail}],validateTrigger:"change"}],expression:"[\n              'account',\n              {rules: [{ required: true, message: $t('user.userName.required') }, { validator: handleUsernameOrEmail }], validateTrigger: 'change'}\n            ]"}],attrs:{size:"large",type:"text",placeholder:e.$t("user.login.username.placeholder"),maxLength:11}},[r("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),r("a-form-item",[r("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:e.$t("user.password.required")}],validateTrigger:"blur"}],expression:"[\n              'password',\n              {rules: [{ required: true, message: $t('user.password.required') }], validateTrigger: 'blur'}\n            ]"}],attrs:{size:"large",placeholder:e.$t("user.login.password.placeholder")}},[r("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1)],1),r("a-tab-pane",{key:"tab2",attrs:{tab:e.$t("user.login.tab-login-mobile")}},[r("a-form-item",[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["mobile",{rules:[{required:!0,pattern:/^1[34578]\d{9}$/,message:e.$t("user.login.mobile.placeholder")}],validateTrigger:"change"}],expression:"['mobile', {rules: [{ required: true, pattern: /^1[34578]\\d{9}$/, message: $t('user.login.mobile.placeholder') }], validateTrigger: 'change'}]"}],attrs:{size:"large",type:"text",placeholder:e.$t("user.login.mobile.placeholder")}},[r("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"mobile"},slot:"prefix"})],1)],1),r("a-row",{attrs:{gutter:16}},[r("a-col",{staticClass:"gutter-row",attrs:{span:16}},[r("a-form-item",[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["captcha",{rules:[{required:!0,message:e.$t("user.verification-code.required")}],validateTrigger:"blur"}],expression:"['captcha', {rules: [{ required: true, message: $t('user.verification-code.required') }], validateTrigger: 'blur'}]"}],attrs:{size:"large",type:"text",placeholder:e.$t("user.login.mobile.verification-code.placeholder")}},[r("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"mail"},slot:"prefix"})],1)],1)],1),r("a-col",{staticClass:"gutter-row",attrs:{span:8}},[r("a-button",{staticClass:"getCaptcha",attrs:{tabindex:"-1",disabled:e.state.smsSendBtn},domProps:{textContent:e._s(!e.state.smsSendBtn&&e.$t("user.register.get-verification-code")||e.state.time+" s")},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.getCaptcha(t)}}})],1)],1)],1)],1),r("a-form-item",[r("a-checkbox",{directives:[{name:"decorator",rawName:"v-decorator",value:["rememberMe",{valuePropName:"checked"}],expression:"['rememberMe', { valuePropName: 'checked' }]"}]},[e._v(e._s(e.$t("user.login.remember-me")))]),r("router-link",{staticClass:"forge-password",staticStyle:{float:"right"},attrs:{to:{name:"recover",params:{user:"aaa"}}}},[e._v(e._s(e.$t("user.login.forgot-password")))])],1),r("a-form-item",{staticStyle:{"margin-top":"24px"}},[r("a-button",{staticClass:"login-button",attrs:{size:"large",type:"primary",htmlType:"submit",loading:e.state.loginBtn,disabled:e.state.loginBtn}},[e._v(e._s(e.$t("user.login.login")))])],1),r("div",{staticClass:"user-login-other"},[r("span",[e._v(e._s(e.$t("user.login.sign-in-with")))]),r("a",[r("a-icon",{staticClass:"item-icon",attrs:{type:"alipay-circle"}})],1),r("a",[r("a-icon",{staticClass:"item-icon",attrs:{type:"taobao-circle"}})],1),r("a",[r("a-icon",{staticClass:"item-icon",attrs:{type:"weibo-circle"}})],1),r("router-link",{staticClass:"register",attrs:{to:{name:"register"}}},[e._v(e._s(e.$t("user.login.signup")))])],1)],1),e.requiredTwoStepCaptcha?r("two-step-captcha",{attrs:{visible:e.stepCaptchaVisible},on:{success:e.stepCaptchaSuccess,cancel:e.stepCaptchaCancel}}):e._e()],1)},s=[],i=(r("d3b7"),r("5530")),o=r("6821"),n=r.n(o),l=function(){var e=this,t=this,r=t.$createElement,a=t._self._c||r;return a("a-modal",{attrs:{centered:"",maskClosable:!1},on:{cancel:t.handleCancel},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[a("div",{style:{textAlign:"center"},attrs:{slot:"title"},slot:"title"},[t._v("两步验证")]),a("template",{slot:"footer"},[a("div",{style:{textAlign:"center"}},[a("a-button",{key:"back",on:{click:t.handleCancel}},[t._v("返回")]),a("a-button",{key:"submit",attrs:{type:"primary",loading:t.stepLoading},on:{click:t.handleStepOk}},[t._v(" 继续 ")])],1)]),a("a-spin",{attrs:{spinning:t.stepLoading}},[a("a-form",{attrs:{layout:"vertical","auto-form-create":function(t){e.form=t}}},[a("div",{staticClass:"step-form-wrapper"},[t.stepLoading?a("p",{staticStyle:{"text-align":"center"}},[t._v("正在验证.."),a("br"),t._v("请稍后")]):a("p",{staticStyle:{"text-align":"center"}},[t._v("请在手机中打开 Google Authenticator 或两步验证 APP"),a("br"),t._v("输入 6 位动态码")]),a("a-form-item",{style:{textAlign:"center"},attrs:{hasFeedback:"",fieldDecoratorId:"stepCode",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入 6 位动态码!",pattern:/^\d{6}$/,len:6}]}}},[a("a-input",{style:{textAlign:"center"},attrs:{placeholder:"000000"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleStepOk(e)}}})],1),a("p",{staticStyle:{"text-align":"center"}},[a("a",{on:{click:t.onForgeStepCode}},[t._v("遗失手机?")])])],1)])],1)],2)},c=[],u={props:{visible:{type:Boolean,default:!1}},data:function(){return{stepLoading:!1,form:null}},methods:{handleStepOk:function(){var e=this,t=this;this.stepLoading=!0,this.form.validateFields((function(r,a){r?(e.stepLoading=!1,e.$emit("error",{err:r})):setTimeout((function(){t.stepLoading=!1,t.$emit("success",{values:a})}),2e3)}))},handleCancel:function(){this.visible=!1,this.$emit("cancel")},onForgeStepCode:function(){}}},d=u,p=(r("edd4"),r("2877")),g=Object(p["a"])(d,l,c,!1,null,"4a462ef6",null),m=g.exports,f=r("5880"),h=r("ca00"),v=r("7ded"),b={components:{TwoStepCaptcha:m},data:function(){return{customActiveKey:"tab1",loginBtn:!1,loginType:0,isLoginError:!1,requiredTwoStepCaptcha:!1,stepCaptchaVisible:!1,form:this.$form.createForm(this),state:{time:60,loginBtn:!1,loginType:0,smsSendBtn:!1}}},created:function(){},methods:Object(i["a"])(Object(i["a"])({},Object(f["mapActions"])(["Login","Logout"])),{},{handleUsernameOrEmail:function(e,t,r){var a=this.state,s=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;s.test(t)?a.loginType=0:a.loginType=1,r()},handleTabClick:function(e){this.customActiveKey=e},handleSubmit:function(e){var t=this;e.preventDefault();var r=this.form.validateFields,a=this.state,s=this.customActiveKey,o=this.Login;a.loginBtn=!0;var l="tab1"===s?["account","password"]:["mobile","captcha"];r(l,{force:!0},(function(e,r){if(e)setTimeout((function(){a.loginBtn=!1}),600);else{var s=Object(i["a"])({},r);delete s.account,s[a.loginType?"account":"email"]=r.account,s.password=n()(r.password),s.vcode="",o(s).then((function(e){return t.loginSuccess(e)})).catch((function(e){return t.requestFailed(e)})).finally((function(){a.loginBtn=!1}))}}))},getCaptcha:function(e){var t=this;e.preventDefault();var r=this.form.validateFields,a=this.state;r(["mobile"],{force:!0},(function(e,r){if(!e){a.smsSendBtn=!0;var s=window.setInterval((function(){a.time--<=0&&(a.time=60,a.smsSendBtn=!1,window.clearInterval(s))}),1e3),i=t.$message.loading("验证码发送中..",0);Object(v["b"])({mobile:r.mobile}).then((function(e){setTimeout(i,2500),t.$notification["success"]({message:"提示",description:"验证码获取成功，您的验证码为："+e.result.captcha,duration:8})})).catch((function(e){setTimeout(i,1),clearInterval(s),a.time=60,a.smsSendBtn=!1,t.requestFailed(e)}))}}))},stepCaptchaSuccess:function(){this.loginSuccess()},stepCaptchaCancel:function(){var e=this;this.Logout().then((function(){e.loginBtn=!1,e.stepCaptchaVisible=!1}))},loginSuccess:function(e){var t=this;this.$router.push({path:"/"}),setTimeout((function(){t.$notification.success({message:"欢迎",description:"".concat(Object(h["b"])(),"，欢迎回来")})}),1e3),this.isLoginError=!1},requestFailed:function(e){this.isLoginError=!0,this.$notification["error"]({message:"错误",description:((e.response||{}).data||{}).msg||"请求出现错误，请稍后再试",duration:4})}})},w=b,y=(r("8df1"),Object(p["a"])(w,a,s,!1,null,"23b003d5",null));t["default"]=y.exports},edd4:function(e,t,r){"use strict";var a=r("90b4"),s=r.n(a);s.a},eeab:function(e,t,r){}}]);