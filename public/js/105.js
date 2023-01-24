/*! For license information please see 105.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[105],{1961:(t,e,i)=>{i.d(e,{Z:()=>o});var a=i(3645),r=i.n(a)()((function(t){return t[1]}));r.push([t.id,".v-slide-group__wrapper{border-right:20px solid #f3f9fd!important}.custom-file{border:1px solid #999;border-radius:4px;padding:10px}.custom-file label{margin-right:30px}",""]);const o=r},1105:(t,e,i)=>{i.r(e),i.d(e,{default:()=>m});function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function r(){r=function(){return t};var t={},e=Object.prototype,i=e.hasOwnProperty,o=Object.defineProperty||function(t,e,i){t[e]=i.value},n="function"==typeof Symbol?Symbol:{},s=n.iterator||"@@iterator",l=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function d(t,e,i){return Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(t){d=function(t,e,i){return t[e]=i}}function u(t,e,i,a){var r=e&&e.prototype instanceof _?e:_,n=Object.create(r.prototype),s=new N(a||[]);return o(n,"_invoke",{value:F(t,i,s)}),n}function m(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f={};function _(){}function v(){}function g(){}var h={};d(h,s,(function(){return this}));var p=Object.getPrototypeOf,b=p&&p(p(S([])));b&&b!==e&&i.call(b,s)&&(h=b);var w=g.prototype=_.prototype=Object.create(h);function y(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(o,n,s,l){var c=m(t[o],t,n);if("throw"!==c.type){var d=c.arg,u=d.value;return u&&"object"==a(u)&&i.call(u,"__await")?e.resolve(u.__await).then((function(t){r("next",t,s,l)}),(function(t){r("throw",t,s,l)})):e.resolve(u).then((function(t){d.value=t,s(d)}),(function(t){return r("throw",t,s,l)}))}l(c.arg)}var n;o(this,"_invoke",{value:function(t,i){function a(){return new e((function(e,a){r(t,i,e,a)}))}return n=n?n.then(a,a):a()}})}function F(t,e,i){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return P()}for(i.method=r,i.arg=o;;){var n=i.delegate;if(n){var s=k(n,i);if(s){if(s===f)continue;return s}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if("suspendedStart"===a)throw a="completed",i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);a="executing";var l=m(t,e,i);if("normal"===l.type){if(a=i.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:i.done}}"throw"===l.type&&(a="completed",i.method="throw",i.arg=l.arg)}}}function k(t,e){var i=t.iterator[e.method];if(void 0===i){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var a=m(i,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,f;var r=a.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function S(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,r=function e(){for(;++a<t.length;)if(i.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:P}}function P(){return{value:void 0,done:!0}}return v.prototype=g,o(w,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:v,configurable:!0}),v.displayName=d(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,d(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},y(x.prototype),d(x.prototype,l,(function(){return this})),t.AsyncIterator=x,t.async=function(e,i,a,r,o){void 0===o&&(o=Promise);var n=new x(u(e,i,a,r),o);return t.isGeneratorFunction(i)?n:n.next().then((function(t){return t.done?t.value:n.next()}))},y(w),d(w,c,"Generator"),d(w,s,(function(){return this})),d(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),i=[];for(var a in e)i.push(a);return i.reverse(),function t(){for(;i.length;){var a=i.pop();if(a in e)return t.value=a,t.done=!1,t}return t.done=!0,t}},t.values=S,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(i,a){return n.type="throw",n.arg=t,e.next=i,a&&(e.method="next",e.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],n=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var s=i.call(o,"catchLoc"),l=i.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var n=o?o.completion:{};return n.type=t,n.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(n)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),C(i),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var a=i.completion;if("throw"===a.type){var r=a.arg;C(i)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:S(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=void 0),f}},t}function o(t,e,i,a,r,o,n){try{var s=t[o](n),l=s.value}catch(t){return void i(t)}s.done?e(l):Promise.resolve(l).then(a,r)}function n(t){return function(){var e=this,i=arguments;return new Promise((function(a,r){var n=t.apply(e,i);function s(t){o(n,a,r,s,l,"next",t)}function l(t){o(n,a,r,s,l,"throw",t)}s(void 0)}))}}const s={name:"index",data:function(){return{success:!1,error:!1,message:"",loading:!1,form_data:{site_title:"",site_email:"",site_contact:"",site_address:"",site_facebook_link:"",site_instagram_link:"",site_twitter_link:"",admin_stock_sku:"",admin_order_sku:"",admin_shipping_charge:"",admin_estimated_delivery_time:"",admin_twilio_order_message:"",twilio_auth_sid:"",twilio_auth_token:"",twilio_whatsapp_from:""},logoImageFile:null,logoImageFileName:null,faviconImageFile:null,faviconImageFileName:null,websiteLoginFile:null,websiteLoginFileName:null,websiteRegistrationFile:null,websiteRegistrationFileName:null,websiteCustomerProfileBgFile:null,websiteCustomerProfileBgFileName:null,adminLoginFile:null,adminLoginFileName:null}},created:function(){this.loadSettings()},methods:{submit:function(){var t=this;return n(r().mark((function e(){var i,a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return axios.interceptors.request.use((function(e){return t.loading=!0,e}),(function(e){return t.loading=!1,t.message=e.data.status,t.error=!0,Promise.reject(e)})),axios.interceptors.response.use((function(e){return t.loading=!1,e}),(function(e){return t.loading=!1,t.message=e.data.status,t.error=!0,Promise.reject(e)})),i=JSON.parse(window.localStorage.getItem("token")),(a=new FormData).append("logoImageFile",t.logoImageFile),a.append("logoImageFileName",t.logoImageFileName),a.append("faviconImageFile",t.faviconImageFile),a.append("faviconImageFileName",t.faviconImageFileName),a.append("websiteLoginFile",t.websiteLoginFile),a.append("websiteLoginFileName",t.websiteLoginFileName),a.append("websiteRegistrationFile",t.websiteRegistrationFile),a.append("websiteRegistrationFileName",t.websiteRegistrationFileName),a.append("websiteCustomerProfileBgFile",t.websiteCustomerProfileBgFile),a.append("websiteCustomerProfileBgFileName",t.websiteCustomerProfileBgFileName),a.append("adminLoginFile",t.adminLoginFile),a.append("adminLoginFileName",t.adminLoginFileName),_.each(t.form_data,(function(t,e){a.append(e,t)})),e.next=19,axios.post("/api/setting/save",a,{headers:{Authorization:"Bearer "+i},"content-type":"multipart/form-data;charset=utf-8; boundary="+Math.random().toString().substr(2)}).then((function(e){200!=e.data.status?(t.message=e.data.message,t.error=!0):(window.location.reload(),t.message=e.data.message,t.success=!0)})).catch((function(e){t.message="Something went wrong !",t.error=!0}));case 19:case"end":return e.stop()}}),e)})))()},loadSettings:function(){var t=this;return n(r().mark((function e(){var i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=JSON.parse(window.localStorage.getItem("token")),e.next=3,axios.get("/api/setting/get",{headers:{Authorization:"Bearer "+i}}).then((function(e){200!=e.data.status?(t.message=e.data.message,t.error=!0):(console.log(e.data.data.settings),t.form_data.site_title=e.data.data.settings.site_title,t.form_data.site_email=e.data.data.settings.site_email,t.form_data.site_contact=e.data.data.settings.site_contact,t.form_data.site_address=e.data.data.settings.site_address,t.form_data.site_facebook_link=e.data.data.settings.site_facebook_link,t.form_data.site_instagram_link=e.data.data.settings.site_instagram_link,t.form_data.site_twitter_link=e.data.data.settings.site_twitter_link,t.form_data.admin_stock_sku=e.data.data.settings.admin_stock_sku,t.form_data.admin_order_sku=e.data.data.settings.admin_order_sku,t.form_data.admin_shipping_charge=e.data.data.settings.admin_shipping_charge,t.form_data.admin_twilio_order_message=e.data.data.settings.admin_twilio_order_message,t.form_data.twilio_auth_sid=e.data.data.settings.twilio_auth_sid,t.form_data.twilio_auth_token=e.data.data.settings.twilio_auth_token,t.form_data.twilio_whatsapp_from=e.data.data.settings.twilio_whatsapp_from,t.form_data.admin_estimated_delivery_time=e.data.data.settings.admin_estimated_delivery_time,t.logoImageFileName=e.data.data.settings.site_logo,t.faviconImageFileName=e.data.data.settings.site_favicon,t.websiteLoginFileName=e.data.data.settings.website_login_bg,t.websiteRegistrationFileName=e.data.data.settings.website_registration_bg,t.websiteCustomerProfileBgFileName=e.data.data.settings.website_customer_profile_bg,t.adminLoginFileName=e.data.data.settings.admin_login_bg)})).catch((function(e){t.message="Something went wrong !",t.error=!0}));case 3:case"end":return e.stop()}}),e)})))()},handleLogoFileObject:function(){this.logoImageFile=this.$refs.file.files[0],this.logoImageFileName=this.logoImageFile.name},handleFaviconFileObject:function(){this.faviconImageFile=this.$refs.faviconFile.files[0],this.faviconImageFileName=this.faviconImageFile.name},handleWebsiteLoginFileObject:function(){this.websiteLoginFile=this.$refs.WebsiteLoginFile.files[0],this.websiteLoginFileName=this.websiteLoginFile.name},handleWebsiteRegistrationFileObject:function(){this.websiteRegistrationFile=this.$refs.WebsiteRegistrationFile.files[0],this.websiteRegistrationFileName=this.websiteRegistrationFile.name},handleWebsiteCustomerProfileBgFileObject:function(){this.websiteCustomerProfileBgFile=this.$refs.WebsiteCustomerProfileBgFile.files[0],this.websiteCustomerProfileBgFileName=this.websiteCustomerProfileBgFile.name},handleAdminLoginFileObject:function(){this.adminLoginFile=this.$refs.adminLoginFile.files[0],this.adminLoginFileName=this.adminLoginFile.name}}};var l=i(3379),c=i.n(l),d=i(1961),u={insert:"head",singleton:!1};c()(d.Z,u);d.Z.locals;const m=(0,i(1900).Z)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dashboard"},[i("v-subheader",{staticClass:"py-0 d-flex justify-space-between rounded-lg"},[i("h3",{staticClass:"text-capitalize"},[t._v(t._s(this.$route.meta.title))])]),t._v(" "),i("br"),t._v(" "),i("v-row",[i("v-col",[i("v-card",[i("v-snackbar",{attrs:{top:"",color:"green"},model:{value:t.success,callback:function(e){t.success=e},expression:"success"}},[t._v("\n                    "+t._s(t.message)+"\n                ")]),t._v(" "),i("v-snackbar",{attrs:{top:"",color:"red"},model:{value:t.error,callback:function(e){t.error=e},expression:"error"}},[t._v("\n                    "+t._s(t.message)+"\n                ")]),t._v(" "),i("v-tabs",{attrs:{vertical:""}},[i("v-tab",{staticClass:"text-left"},[i("v-icon",{attrs:{left:""}},[t._v("\n                            mdi-spider-web\n                        ")]),t._v("\n                        Common\n                        "),i("v-spacer")],1),t._v(" "),i("v-tab",[i("v-icon",{attrs:{left:""}},[t._v("\n                            mdi-web\n                        ")]),t._v("\n                        Website\n                        "),i("v-spacer")],1),t._v(" "),i("v-tab",{staticClass:"text-left"},[i("v-icon",{attrs:{left:""}},[t._v("\n                                mdi-security\n                            ")]),t._v("\n                            Admin\n                        "),i("v-spacer")],1),t._v(" "),i("v-tab-item",[i("v-card",{attrs:{flat:""}},[i("v-card-title",[t._v("Common Settings")]),t._v(" "),i("v-form",{attrs:{enctype:"multipart/form-data"}},[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12",md:"12"}},[i("v-text-field",{attrs:{label:"Site Title",required:"",outlined:"",clearable:""},model:{value:t.form_data.site_title,callback:function(e){t.$set(t.form_data,"site_title",e)},expression:"form_data.site_title"}})],1),t._v(" "),i("v-col",{attrs:{cols:"12",md:"12"}},[i("v-text-field",{attrs:{label:"Email Address",required:"",outlined:"",clearable:""},model:{value:t.form_data.site_email,callback:function(e){t.$set(t.form_data,"site_email",e)},expression:"form_data.site_email"}})],1),t._v(" "),i("v-col",{attrs:{cols:"12",md:"12"}},[i("v-text-field",{attrs:{label:"Contact Number",required:"",outlined:"",clearable:""},model:{value:t.form_data.site_contact,callback:function(e){t.$set(t.form_data,"site_contact",e)},expression:"form_data.site_contact"}})],1),t._v(" "),i("v-col",{attrs:{cols:"12",md:"12"}},[i("v-text-field",{attrs:{label:"Address",required:"",outlined:"",clearable:""},model:{value:t.form_data.site_address,callback:function(e){t.$set(t.form_data,"site_address",e)},expression:"form_data.site_address"}})],1),t._v(" "),i("v-col",{attrs:{cols:"12",md:"12"}},[i("v-text-field",{attrs:{label:"Facebook Page Link",required:"",outlined:"",clearable:""},model:{value:t.form_data.site_facebook_link,callback:function(e){t.$set(t.form_data,"site_facebook_link",e)},expression:"form_data.site_facebook_link"}})],1),t._v(" "),i("v-col",{attrs:{cols:"12",md:"12"}},[i("v-text-field",{attrs:{label:"Instagram Page Link",required:"",outlined:"",clearable:""},model:{value:t.form_data.site_instagram_link,callback:function(e){t.$set(t.form_data,"site_instagram_link",e)},expression:"form_data.site_instagram_link"}})],1),t._v(" "),i("v-col",{attrs:{cols:"12",md:"12"}},[i("v-text-field",{attrs:{label:"Twitter Page Link",required:"",outlined:"",clearable:""},model:{value:t.form_data.site_twitter_link,callback:function(e){t.$set(t.form_data,"site_twitter_link",e)},expression:"form_data.site_twitter_link"}})],1),t._v(" "),i("v-col",{attrs:{cols:"12",md:"12"}},[i("div",{staticClass:"custom-file d-flex"},[i("div",{},[i("label",{staticClass:"custom-file-label text-left",attrs:{for:"logo-input"}},[t._v("Site Logo")]),t._v(" "),i("input",{ref:"file",staticClass:"custom-file-input",attrs:{type:"file",id:"logo-input"},on:{change:function(e){return t.handleLogoFileObject()}}})]),t._v(" "),i("v-spacer"),t._v(" "),i("img",{attrs:{src:t.logoImageFileName,width:"80",height:"80",alt:""}})],1)]),t._v(" "),i("v-col",{attrs:{cols:"12",md:"12"}},[i("div",{staticClass:"custom-file d-flex"},[i("div",{},[i("label",{staticClass:"custom-file-label text-left",attrs:{for:"favicon-input"}},[t._v("Site Favicon")]),t._v(" "),i("input",{ref:"faviconFile",staticClass:"custom-file-input",attrs:{type:"file",id:"favicon-input"},on:{change:function(e){return t.handleFaviconFileObject()}}})]),t._v(" "),i("v-spacer"),t._v(" "),i("img",{attrs:{src:t.faviconImageFileName,width:"80",height:"80",alt:""}})],1)])],1)],1)],1),t._v(" "),i("v-card-actions",{staticClass:"text-right"},[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{loading:t.loading,type:"submit",color:"indigo"},on:{click:t.submit}},[i("span",{staticClass:"white--text px-8"},[t._v("Save")])])],1)],1)],1),t._v(" "),i("v-tab-item",[i("v-card",{attrs:{flat:""}},[i("v-card-title",[t._v("Website Settings")]),t._v(" "),i("v-form",{attrs:{enctype:"multipart/form-data"}},[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12",md:"12"}},[i("div",{staticClass:"custom-file d-flex"},[i("div",{},[i("label",{staticClass:"custom-file-label text-left",attrs:{for:"website-login-input"}},[t._v("Login Page background")]),t._v(" "),i("input",{ref:"WebsiteLoginFile",staticClass:"custom-file-input",attrs:{type:"file",id:"website-login-input"},on:{change:function(e){return t.handleWebsiteLoginFileObject()}}})]),t._v(" "),i("v-spacer"),t._v(" "),i("img",{attrs:{src:t.websiteLoginFileName,width:"80",height:"80",alt:""}})],1)]),t._v(" "),i("v-col",{attrs:{cols:"12",md:"12"}},[i("div",{staticClass:"custom-file d-flex"},[i("div",{},[i("label",{staticClass:"custom-file-label text-left",attrs:{for:"website-login-input"}},[t._v("Registration Page background")]),t._v(" "),i("input",{ref:"WebsiteRegistrationFile",staticClass:"custom-file-input",attrs:{type:"file",id:"website-registration-input"},on:{change:function(e){return t.handleWebsiteRegistrationFileObject()}}})]),t._v(" "),i("v-spacer"),t._v(" "),i("img",{attrs:{src:t.websiteRegistrationFileName,width:"80",height:"80",alt:""}})],1)]),t._v(" "),i("v-col",{attrs:{cols:"12",md:"12"}},[i("div",{staticClass:"custom-file d-flex"},[i("div",{},[i("label",{staticClass:"custom-file-label text-left",attrs:{for:"website-login-input"}},[t._v("Customer Profile Page background")]),t._v(" "),i("input",{ref:"WebsiteCustomerProfileBgFile",staticClass:"custom-file-input",attrs:{type:"file",id:"website-customer-input"},on:{change:function(e){return t.handleWebsiteCustomerProfileBgFileObject()}}})]),t._v(" "),i("v-spacer"),t._v(" "),i("img",{attrs:{src:t.websiteCustomerProfileBgFileName,width:"80",height:"80",alt:""}})],1)])],1)],1)],1),t._v(" "),i("v-card-actions",{staticClass:"text-right"},[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{loading:t.loading,type:"submit",color:"indigo"},on:{click:t.submit}},[i("span",{staticClass:"white--text px-8"},[t._v("Save")])])],1)],1)],1),t._v(" "),i("v-tab-item",[i("v-card",{attrs:{flat:""}},[i("v-card-title",[t._v("Admin Settings")]),t._v(" "),i("v-form",{attrs:{enctype:"multipart/form-data"}},[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12",md:"12"}},[i("v-text-field",{attrs:{label:"Stock SKU",required:"",outlined:"",clearable:""},model:{value:t.form_data.admin_stock_sku,callback:function(e){t.$set(t.form_data,"admin_stock_sku",e)},expression:"form_data.admin_stock_sku"}})],1),t._v(" "),i("v-col",{attrs:{cols:"12",md:"12"}},[i("v-text-field",{attrs:{label:"Order SKU",required:"",outlined:"",clearable:""},model:{value:t.form_data.admin_order_sku,callback:function(e){t.$set(t.form_data,"admin_order_sku",e)},expression:"form_data.admin_order_sku"}})],1),t._v(" "),i("v-col",{attrs:{cols:"12",md:"12"}},[i("v-text-field",{attrs:{label:"Estimated Delivery Time",required:"",outlined:"",clearable:""},model:{value:t.form_data.admin_estimated_delivery_time,callback:function(e){t.$set(t.form_data,"admin_estimated_delivery_time",e)},expression:"form_data.admin_estimated_delivery_time"}})],1),t._v(" "),i("v-col",{attrs:{cols:"12",md:"12"}},[i("v-text-field",{attrs:{label:"Shipping Charge",required:"",outlined:"",clearable:""},model:{value:t.form_data.admin_shipping_charge,callback:function(e){t.$set(t.form_data,"admin_shipping_charge",e)},expression:"form_data.admin_shipping_charge"}})],1),t._v(" "),i("v-col",{attrs:{cols:"12",md:"12"}},[i("v-text-field",{attrs:{label:"Twilio message for order",required:"",outlined:"",clearable:""},model:{value:t.form_data.admin_twilio_order_message,callback:function(e){t.$set(t.form_data,"admin_twilio_order_message",e)},expression:"form_data.admin_twilio_order_message"}})],1),t._v(" "),i("v-col",{attrs:{cols:"12",md:"12"}},[i("v-text-field",{attrs:{label:"Twilio Auth SID",required:"",outlined:"",clearable:""},model:{value:t.form_data.twilio_auth_sid,callback:function(e){t.$set(t.form_data,"twilio_auth_sid",e)},expression:"form_data.twilio_auth_sid"}})],1),t._v(" "),i("v-col",{attrs:{cols:"12",md:"12"}},[i("v-text-field",{attrs:{label:"Twilio Auth Token",required:"",outlined:"",clearable:""},model:{value:t.form_data.twilio_auth_token,callback:function(e){t.$set(t.form_data,"twilio_auth_token",e)},expression:"form_data.twilio_auth_token"}})],1),t._v(" "),i("v-col",{attrs:{cols:"12",md:"12"}},[i("v-text-field",{attrs:{label:"Twilio whatsapp form",required:"",outlined:"",clearable:""},model:{value:t.form_data.twilio_whatsapp_from,callback:function(e){t.$set(t.form_data,"twilio_whatsapp_from",e)},expression:"form_data.twilio_whatsapp_from"}})],1),t._v(" "),i("v-col",{attrs:{cols:"12",md:"12"}},[i("div",{staticClass:"custom-file d-flex"},[i("div",{},[i("label",{staticClass:"custom-file-label text-left",attrs:{for:"admin-login-input"}},[t._v("Login Page background")]),t._v(" "),i("input",{ref:"adminLoginFile",staticClass:"custom-file-input",attrs:{type:"file",id:"admin-login-input"},on:{change:function(e){return t.handleAdminLoginFileObject()}}})]),t._v(" "),i("v-spacer"),t._v(" "),i("img",{attrs:{src:t.adminLoginFileName,width:"80",height:"80",alt:""}})],1)])],1)],1)],1),t._v(" "),i("v-card-actions",{staticClass:"text-right"},[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{loading:t.loading,type:"submit",color:"indigo"},on:{click:t.submit}},[i("span",{staticClass:"white--text px-8"},[t._v("Save")])])],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);