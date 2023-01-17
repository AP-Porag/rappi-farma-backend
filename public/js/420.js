/*! For license information please see 420.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[420],{5420:(t,r,e)=>{e.r(r),e.d(r,{default:()=>l});function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){o=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,a=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var o=r&&r.prototype instanceof h?r:h,i=Object.create(o.prototype),s=new k(n||[]);return a(i,"_invoke",{value:O(t,e,s)}),i}function d(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var p={};function h(){}function v(){}function m(){}var y={};l(y,s,(function(){return this}));var w=Object.getPrototypeOf,g=w&&w(w(E([])));g&&g!==r&&e.call(g,s)&&(y=g);var b=m.prototype=h.prototype=Object.create(y);function _(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function x(t,r){function o(a,i,s,c){var u=d(t[a],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==n(f)&&e.call(f,"__await")?r.resolve(f.__await).then((function(t){o("next",t,s,c)}),(function(t){o("throw",t,s,c)})):r.resolve(f).then((function(t){l.value=t,s(l)}),(function(t){return o("throw",t,s,c)}))}c(u.arg)}var i;a(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}})}function O(t,r,e){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return S()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var s=P(i,e);if(s){if(s===p)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var c=d(t,r,e);if("normal"===c.type){if(n=e.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n="completed",e.method="throw",e.arg=c.arg)}}}function P(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,P(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=d(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,p;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,p):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function L(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function E(t){if(t){var r=t[s];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return v.prototype=m,a(b,"constructor",{value:m,configurable:!0}),a(m,"constructor",{value:v,configurable:!0}),v.displayName=l(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===v||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},_(x.prototype),l(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(r,e,n,o,a){void 0===a&&(a=Promise);var i=new x(f(r,e,n,o),a);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(b),l(b,u,"Generator"),l(b,s,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=E,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=e.call(a,"catchLoc"),c=e.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),p},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),L(e),p}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;L(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:E(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},t}function a(t,r,e,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void e(t)}s.done?r(c):Promise.resolve(c).then(n,o)}function i(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function s(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?i(Object(e),!0).forEach((function(r){c(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function c(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}const u={name:"ChangePassword",data:function(){return{valid:!1,success:!1,error:!1,loading:!1,message:"",menu:!1,confirmPassword:"",form_data:{old_password:"",new_password:""},data:{email:null,password:null},rules:{old_password:[function(t){return!!t||"Old password is required"},function(t){return t&&t.length>=6||"Minimum 6 characters"}],new_password:[function(t){return!!t||"New password is required"},function(t){return t&&t.length>=6||"Minimum 6 characters"}],confirmPassword:[function(t){return!!t||"Confirm password is required"}]}}},methods:s(s({},(0,e(629).nv)({signIn:"login"})),{},{submit:function(){var t,r=this;return(t=o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.valid){t.next=8;break}return axios.interceptors.request.use((function(t){return r.loading=!0,t}),(function(t){return r.loading=!1,r.message=t.data.status,r.error=!0,Promise.reject(t)})),axios.interceptors.response.use((function(t){return r.loading=!1,t}),(function(t){return r.loading=!1,r.message=t.data.status,r.error=!0,Promise.reject(t)})),e=JSON.parse(window.localStorage.getItem("token")),t.next=6,axios.post("/api/user/change-password",r.form_data,{headers:{Authorization:"Bearer "+e}}).then((function(t){200!=t.data.status?(r.message=t.data.message,r.error=!0):(r.data.email=t.data.data.email,r.data.password=r.form_data.new_password,r.signIn(r.data),console.log(r.data),r.message=t.data.message,r.success=!0)})).catch((function(t){r.message="Something went wrong !",r.error=!0}));case 6:t.next=10;break;case 8:r.loading=!0,setTimeout((function(){r.loading=!1,r.message="Validation error !",r.error=!0}),3e3);case 10:case"end":return t.stop()}}),t)})),function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function s(t){a(i,n,o,s,c,"next",t)}function c(t){a(i,n,o,s,c,"throw",t)}s(void 0)}))})()}}),computed:{passwordConfirmationRule:function(){var t=this;return function(){return t.form_data.new_password===t.confirmPassword||"Password must match"}}}};const l=(0,e(1900).Z)(u,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"dashboard"},[e("v-subheader",{staticClass:"py-0 d-flex justify-space-between rounded-lg"},[e("h3",{staticClass:"text-capitalize"},[t._v(t._s(this.$route.meta.title))])]),t._v(" "),e("br"),t._v(" "),e("v-row",[e("v-col",[e("v-card",[e("v-snackbar",{attrs:{top:"",color:"green"},model:{value:t.success,callback:function(r){t.success=r},expression:"success"}},[t._v("\n                    "+t._s(t.message)+"\n                ")]),t._v(" "),e("v-snackbar",{attrs:{top:"",color:"red"},model:{value:t.error,callback:function(r){t.error=r},expression:"error"}},[t._v("\n                    "+t._s(t.message)+"\n                ")]),t._v(" "),e("v-toolbar",{attrs:{flat:""}},[e("v-toolbar-title",{},[t._v("Fill the form")])],1),t._v(" "),e("v-form",{model:{value:t.valid,callback:function(r){t.valid=r},expression:"valid"}},[e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"12",md:"8"}},[e("v-text-field",{attrs:{rules:t.rules.oldPassword,label:"Old Password",required:"",outlined:"",clearable:"",type:"password"},model:{value:t.form_data.old_password,callback:function(r){t.$set(t.form_data,"old_password",r)},expression:"form_data.old_password"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"8"}},[e("v-text-field",{attrs:{rules:t.rules.password,label:"New Password",required:"",outlined:"",clearable:"",type:"password"},model:{value:t.form_data.new_password,callback:function(r){t.$set(t.form_data,"new_password",r)},expression:"form_data.new_password"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"8"}},[e("v-text-field",{attrs:{rules:t.rules.confirmPassword.concat(t.passwordConfirmationRule),label:"Confirm password",required:"",outlined:"",clearable:"",type:"password"},model:{value:t.confirmPassword,callback:function(r){t.confirmPassword=r},expression:"confirmPassword"}})],1)],1)],1)],1),t._v(" "),e("v-card-actions",{staticClass:"text-right"},[e("v-spacer"),t._v(" "),e("v-btn",{attrs:{loading:t.loading,type:"submit",color:"indigo"},on:{click:t.submit}},[e("span",{staticClass:"white--text px-8"},[t._v("Save")])])],1)],1)],1)],1)],1)}),[],!1,null,"75662e1c",null).exports}}]);