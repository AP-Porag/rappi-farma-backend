/*! For license information please see 898.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[898],{1028:(t,e,r)=>{r.d(e,{Z:()=>o});var n=r(3645),a=r.n(n)()((function(t){return t[1]}));a.push([t.id,".datatable-search[data-v-059cb735]{width:0!important}",""]);const o=a},6898:(t,e,r)=>{r.r(e),r.d(e,{default:()=>p});function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function a(){a=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function d(t,e,r,n){var a=e&&e.prototype instanceof f?e:f,i=Object.create(a.prototype),s=new C(n||[]);return o(i,"_invoke",{value:k(t,r,s)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var h={};function f(){}function v(){}function g(){}var m={};l(m,s,(function(){return this}));var y=Object.getPrototypeOf,w=y&&y(y(O([])));w&&w!==e&&r.call(w,s)&&(m=w);var _=g.prototype=f.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function a(o,i,s,c){var u=p(t[o],t,i);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==n(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){a("next",t,s,c)}),(function(t){a("throw",t,s,c)})):e.resolve(d).then((function(t){l.value=t,s(l)}),(function(t){return a("throw",t,s,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){a(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function k(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return j()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var s=L(i,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=p(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function L(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=p(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function O(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return v.prototype=g,o(_,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:v,configurable:!0}),v.displayName=l(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,u,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},x(b.prototype),l(b.prototype,c,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new b(d(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(_),l(_,u,"Generator"),l(_,s,(function(){return this})),l(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=O,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;E(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function o(t,e,r,n,a,o,i){try{var s=t[o](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,a)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function s(t){o(i,n,a,s,c,"next",t)}function c(t){o(i,n,a,s,c,"throw",t)}s(void 0)}))}}const s={name:"Index",data:function(){return{search:"",loading:!1,page:1,per_page:0,dialog:!1,itemToDelete:"",success:!1,error:!1,message:"",activityLog:[{title:"Total User",amount:50,icon:"mdi-account",color:"cyan lighten-3"},{title:"Total Admin",amount:3433,icon:"mdi-account-group-outline",color:"green darken-2"},{title:"Total Customer",amount:3433,icon:"mdi-account-group-outline",color:"purple darken-2"},{title:"Total Driver",amount:3433,icon:"mdi-account-group-outline",color:"deep-orange darken-1"}],headers:[{text:"Full Name",align:"start",sortable:!1,value:"full_name"},{text:"Avatar",value:"avatar",sortable:!1},{text:"Email",value:"email"},{text:"Phone",value:"phone"},{text:"DOB",value:"date_of_birth"},{text:"Gender",value:"gender"},{text:"User Type",value:"user_type"},{text:"Actions",value:"action",sortable:!1}],users:[],total:0}},methods:{onButtonClick:function(t){console.log("click on "+t.no)},datatableSearch:function(t){var e=this;return i(a().mark((function r(){var n,o;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(t.length>=3)){r.next=4;break}return n=JSON.parse(window.localStorage.getItem("token")),r.next=4,axios.get("/api/user/search-user/".concat(t,"?page=").concat(e.page),{params:{per_page:e.per_page},headers:{Authorization:"Bearer "+n}}).then((function(t){200!=t.data.status?console.log(t.data.status):(e.total=t.data.data.total,e.users=t.data.data.users)})).catch((function(t){e.message="Something went wrong !",e.error=!0}));case 4:if(!(t.length<=0)){r.next=8;break}return o=JSON.parse(window.localStorage.getItem("token")),r.next=8,axios.get("/api/user?page=".concat(e.page),{params:{per_page:e.per_page},headers:{Authorization:"Bearer "+o}}).then((function(t){200!=t.data.status?console.log(t.data.status):(e.total=t.data.data.total,e.users=t.data.data.users)})).catch((function(t){e.message="Something went wrong !",e.error=!0}));case 8:case"end":return r.stop()}}),r)})))()},paginate:function(t){var e=this;return i(a().mark((function r(){var n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.page=t.page,e.per_page=t.itemsPerPage,n=JSON.parse(window.localStorage.getItem("token")),r.next=5,axios.get("/api/user?page=".concat(e.page),{params:{per_page:e.per_page},headers:{Authorization:"Bearer "+n}}).then((function(t){200!=t.data.status?console.log(t.data.status):(e.total=t.data.data.total,e.users=t.data.data.users)})).catch((function(t){e.message="Something went wrong !",e.error=!0}));case 5:case"end":return r.stop()}}),r)})))()},getAllUsersData:function(){var t=this;return i(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:axios.interceptors.request.use((function(e){return t.loading=!0,e}),(function(e){return t.loading=!1,t.message=e.data.status,t.error=!0,Promise.reject(e)})),axios.interceptors.response.use((function(e){return t.loading=!1,e}),(function(e){return t.loading=!1,t.message=e.data.status,t.error=!0,Promise.reject(e)}));case 2:case"end":return e.stop()}}),e)})))()},showDeleteDialog:function(t){this.dialog=!0,this.itemToDelete=t.id},closeDelete:function(){this.dialog=!1},deleteItem:function(){var t=this;return i(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=JSON.parse(window.localStorage.getItem("token")),e.next=3,axios.delete("/api/user/".concat(t.itemToDelete),{headers:{Authorization:"Bearer "+r}}).then((function(e){200!=e.data.status?(t.message=e.data.message,t.dialog=!1,t.error=!0):(t.getAllUsersData(),t.message=e.data.message,t.dialog=!1,t.success=!0)})).catch((function(e){t.message="Something went wrong !",t.error=!0}));case 3:case"end":return e.stop()}}),e)})))()}},created:function(){this.getAllUsersData()}};var c=r(3379),u=r.n(c),l=r(1028),d={insert:"head",singleton:!1};u()(l.Z,d);l.Z.locals;const p=(0,r(1900).Z)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"dashboard"},[r("v-subheader",{staticClass:"py-0 d-flex justify-space-between rounded-lg"},[r("h3",{staticClass:"text-capitalize"},[t._v(t._s(this.$route.meta.title))])]),t._v(" "),r("br"),t._v(" "),r("v-row",[r("v-col",{attrs:{lg:"12",cols:"12"}},[r("v-row",t._l(t.activityLog,(function(e,n){return r("v-col",{key:n,attrs:{lg:"3",cols:"12"}},[r("v-card",{staticClass:"rounded-lg",attrs:{elevation:"2"}},[r("v-card-text",{staticClass:"d-flex justify-space-between align-center"},[r("div",[r("strong",[t._v(t._s(e.title))]),t._v(" "),r("br")]),t._v(" "),r("v-avatar",{staticStyle:{border:"3px solid #444"},attrs:{size:"60",color:e.color}},[r("span",{staticStyle:{color:"white"}},[t._v(t._s(e.amount)+" +")])])],1)],1)],1)})),1)],1),t._v(" "),r("v-col",[r("v-card",[r("v-snackbar",{attrs:{top:"",color:"green"},model:{value:t.success,callback:function(e){t.success=e},expression:"success"}},[t._v("\n                    "+t._s(t.message)+"\n                ")]),t._v(" "),r("v-snackbar",{attrs:{top:"",color:"red"},model:{value:t.error,callback:function(e){t.error=e},expression:"error"}},[t._v("\n                    "+t._s(t.message)+"\n                ")]),t._v(" "),r("v-data-table",{staticClass:"elevation-1 py-16",attrs:{headers:t.headers,"server-items-length":t.total,items:t.users,"items-per-page":5,search:t.search,loading:t.loading,"loading-text":"Loading... Please wait","footer-props":{"items-per-page-options":[5,10,20],"items-per-page-text":"Items per page","show-current-page":!0,"show-first-last-page":!0}},on:{pagination:t.paginate},scopedSlots:t._u([{key:"top",fn:function(){return[r("v-toolbar",{attrs:{flat:""}},[r("v-toolbar-title",{staticClass:"text-capitalize"},[t._v(t._s(t.$route.meta.title)+"'s List")]),t._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-text-field",{staticClass:"datatable-search",attrs:{"append-icon":"mdi-magnify",label:"Search...","single-line":"","hide-details":""},on:{input:t.datatableSearch}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"mb-2",attrs:{color:"primary",dark:"",link:""},on:{click:function(e){return t.$router.push({name:"create-user"})}}},[t._v("\n                                Add "+t._s(t.$route.meta.title)+"\n                            ")])],1)]},proxy:!0},{key:"item.avatar",fn:function(t){var e=t.item;return[r("v-avatar",{attrs:{size:"36px"}},[r("img",{attrs:{src:e.avatar,alt:e.full_name}})])]}},{key:"item.user_type",fn:function(e){var n=e.item;return[r("v-chip",{staticClass:"text-capitalize",attrs:{color:"admin"==n.user_type?"green":"deep-purple accent-4 white--text",dark:""}},[t._v("\n                            "+t._s(n.user_type)+"\n                        ")])]}},{key:"item.action",fn:function(e){var n=e.item;return[r("v-btn",{attrs:{icon:"",color:"blue"},on:{click:function(e){return t.$router.push({name:"edit-user",params:{id:n.id}})}}},[r("v-icon",{attrs:{small:""}},[t._v("mdi-pencil")])],1),t._v(" "),r("v-btn",{attrs:{color:"red lighten-2",dark:"",icon:""},on:{click:function(e){return t.showDeleteDialog(n)}}},[r("v-icon",{attrs:{small:""}},[t._v("mdi-delete")])],1)]}}])}),t._v(" "),r("v-dialog",{attrs:{width:"400"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("div",{staticClass:"text-center pt-2"},[r("v-avatar",{attrs:{size:"100",color:"red lighten-4"}},[r("v-icon",{attrs:{size:"40",color:"red"}},[t._v("mdi-comment-question")])],1),t._v(" "),r("h3",{staticClass:"error--text"},[t._v("Are you sure?")])],1),t._v(" "),r("v-card-text",{staticClass:"text-center"},[r("p",[t._v("You wont be revert this !")])]),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"blue darken-1"},on:{click:t.closeDelete}},[t._v("Cancel")]),t._v(" "),r("v-btn",{attrs:{color:"red"},on:{click:t.deleteItem}},[t._v("\n                                Confirm\n                            ")])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"059cb735",null).exports}}]);