/*! For license information please see 666.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[666],{8574:(t,e,r)=>{r.d(e,{Z:()=>n});var a=r(3645),o=r.n(a)()((function(t){return t[1]}));o.push([t.id,".datatable-search[data-v-9b6c7fc6]{width:0!important}",""]);const n=o},8666:(t,e,r)=>{r.r(e),r.d(e,{default:()=>v});function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},i=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function d(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(t){d=function(t,e,r){return t[e]=r}}function u(t,e,r,a){var o=e&&e.prototype instanceof h?e:h,s=Object.create(o.prototype),i=new E(a||[]);return n(s,"_invoke",{value:S(t,r,i)}),s}function v(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var p={};function h(){}function f(){}function g(){}var _={};d(_,i,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(L([])));y&&y!==e&&r.call(y,i)&&(_=y);var w=g.prototype=h.prototype=Object.create(_);function b(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(n,s,i,c){var l=v(t[n],t,s);if("throw"!==l.type){var d=l.arg,u=d.value;return u&&"object"==a(u)&&r.call(u,"__await")?e.resolve(u.__await).then((function(t){o("next",t,i,c)}),(function(t){o("throw",t,i,c)})):e.resolve(u).then((function(t){d.value=t,i(d)}),(function(t){return o("throw",t,i,c)}))}c(l.arg)}var s;n(this,"_invoke",{value:function(t,r){function a(){return new e((function(e,a){o(t,r,e,a)}))}return s=s?s.then(a,a):a()}})}function S(t,e,r){var a="suspendedStart";return function(o,n){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===o)throw n;return j()}for(r.method=o,r.arg=n;;){var s=r.delegate;if(s){var i=k(s,r);if(i){if(i===p)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var c=v(t,e,r);if("normal"===c.type){if(a=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a="completed",r.method="throw",r.arg=c.arg)}}}function k(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var a=v(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,p;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function L(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function e(){for(;++a<t.length;)if(r.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=g,n(w,"constructor",{value:g,configurable:!0}),n(g,"constructor",{value:f,configurable:!0}),f.displayName=d(g,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,d(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(x.prototype),d(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,a,o,n){void 0===n&&(n=Promise);var s=new x(u(e,r,a,o),n);return t.isGeneratorFunction(r)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},b(w),d(w,l,"Generator"),d(w,i,(function(){return this})),d(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var a in e)r.push(a);return r.reverse(),function t(){for(;r.length;){var a=r.pop();if(a in e)return t.value=a,t.done=!1,t}return t.done=!0,t}},t.values=L,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(r,a){return s.type="throw",s.arg=t,e.next=r,a&&(e.method="next",e.arg=void 0),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o],s=n.completion;if("root"===n.tryLoc)return a("end");if(n.tryLoc<=this.prev){var i=r.call(n,"catchLoc"),c=r.call(n,"finallyLoc");if(i&&c){if(this.prev<n.catchLoc)return a(n.catchLoc,!0);if(this.prev<n.finallyLoc)return a(n.finallyLoc)}else if(i){if(this.prev<n.catchLoc)return a(n.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return a(n.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var n=o;break}}n&&("break"===t||"continue"===t)&&n.tryLoc<=e&&e<=n.finallyLoc&&(n=null);var s=n?n.completion:{};return s.type=t,s.arg=e,n?(this.method="next",this.next=n.finallyLoc,p):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var a=r.completion;if("throw"===a.type){var o=a.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function n(t,e,r,a,o,n,s){try{var i=t[n](s),c=i.value}catch(t){return void r(t)}i.done?e(c):Promise.resolve(c).then(a,o)}function s(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var s=t.apply(e,r);function i(t){n(s,a,o,i,c,"next",t)}function c(t){n(s,a,o,i,c,"throw",t)}i(void 0)}))}}const i={name:"Index",data:function(){return{search:"",loading:!1,page:1,per_page:0,dialog:!1,itemToDelete:"",success:!1,error:!1,message:"",total_orders:"",total_pending_orders:"",total_shipped_orders:"",total_delivered_orders:"",total_rejected_orders:"",total_canceled_orders:"",status:["pending","shipped","delivered","canceled","rejected"],headers:[{text:"SKU",align:"start",sortable:!1,value:"SKU"},{text:"Total Product",sortable:!0,value:"total_product_quantity"},{text:"Total Price",value:"total_price",sortable:!1},{text:"Shipping Type",value:"shipping_type",sortable:!1},{text:"Address",value:"address",sortable:!1},{text:"WhatsApp",value:"whats_app_number",sortable:!1},{text:"Status",value:"status",sortable:!1},{text:"Actions",value:"action",sortable:!1}],items:[],total:0,rules:{status:[function(t){return!!t||"Status is required"}]},form_data:{status:""}}},created:function(){this.getAllItemsData(),this.getOrderCardData()},methods:{datatableSearch:function(t){var e=this;return s(o().mark((function r(){var a,n;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(t.length>=3)){r.next=4;break}return a=JSON.parse(window.localStorage.getItem("token")),r.next=4,axios.get("/api/order/search-canceled-order/".concat(t,"?page=").concat(e.page),{params:{per_page:e.per_page},headers:{Authorization:"Bearer "+a}}).then((function(t){200!=t.data.status?console.log(t.data.status):(e.total=t.data.data.total,e.items=t.data.data.items)})).catch((function(t){e.message="Something went wrong !",e.error=!0}));case 4:if(!(t.length<=0)){r.next=8;break}return n=JSON.parse(window.localStorage.getItem("token")),r.next=8,axios.get("/api/order/canceled-order?page=".concat(e.page),{params:{per_page:e.per_page},headers:{Authorization:"Bearer "+n}}).then((function(t){200!=t.data.status?console.log(t.data.status):(e.total=t.data.data.total,e.items=t.data.data.items)})).catch((function(t){e.message="Something went wrong !",e.error=!0}));case 8:case"end":return r.stop()}}),r)})))()},paginate:function(t){var e=this;return s(o().mark((function r(){var a;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.page=t.page,e.per_page=t.itemsPerPage,a=JSON.parse(window.localStorage.getItem("token")),r.next=5,axios.get("/api/order/canceled-order?page=".concat(e.page),{params:{per_page:e.per_page},headers:{Authorization:"Bearer "+a}}).then((function(t){200!=t.data.status?console.log(t.data.status):(e.total=t.data.data.total,e.items=t.data.data.items)})).catch((function(t){e.message="Something went wrong !",e.error=!0}));case 5:case"end":return r.stop()}}),r)})))()},getAllItemsData:function(){var t=this;return s(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:axios.interceptors.request.use((function(e){return t.loading=!0,e}),(function(e){return t.loading=!1,t.message=e.data.status,t.error=!0,Promise.reject(e)})),axios.interceptors.response.use((function(e){return t.loading=!1,e}),(function(e){return t.loading=!1,t.message=e.data.status,t.error=!0,Promise.reject(e)}));case 2:case"end":return e.stop()}}),e)})))()},showDeleteDialog:function(t){this.dialog=!0,this.itemToDelete=t.id},closeDelete:function(){this.dialog=!1},deleteItem:function(){var t=this;return s(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=JSON.parse(window.localStorage.getItem("token")),e.next=3,axios.post("/api/order/change-status/".concat(t.itemToDelete),t.form_data,{headers:{Authorization:"Bearer "+r}}).then((function(e){200!=e.data.status?(t.message=e.data.message,t.dialog=!1,t.error=!0):(window.location.reload(),t.getAllItemsData(),t.message=e.data.message,t.dialog=!1,t.success=!0)})).catch((function(e){t.message="Something went wrong !",t.error=!0}));case 3:case"end":return e.stop()}}),e)})))()},getOrderCardData:function(){var t=this;return s(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=JSON.parse(window.localStorage.getItem("token")),e.next=3,axios.get("/api/order/card/card-data",{headers:{Authorization:"Bearer "+r}}).then((function(e){200!=e.data.status?console.log(e.data.status):null!=e.data.data&&(t.total_orders=e.data.data.total_orders,t.total_pending_orders=e.data.data.total_pending_orders,t.total_shipped_orders=e.data.data.total_shipped_orders,t.total_delivered_orders=e.data.data.total_delivered_orders,t.total_rejected_orders=e.data.data.total_rejected_orders,t.total_canceled_orders=e.data.data.total_canceled_orders)})).catch((function(e){t.message="Something went wrong !",t.error=!0}));case 3:case"end":return e.stop()}}),e)})))()}}};var c=r(3379),l=r.n(c),d=r(8574),u={insert:"head",singleton:!1};l()(d.Z,u);d.Z.locals;const v=(0,r(1900).Z)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"dashboard"},[r("v-subheader",{staticClass:"py-0 d-flex justify-space-between rounded-lg"},[r("h3",{staticClass:"text-capitalize"},[t._v(t._s(this.$route.meta.title))])]),t._v(" "),r("br"),t._v(" "),r("v-row",[r("v-col",{attrs:{lg:"12",cols:"12"}},[r("v-row",[r("v-col",{attrs:{lg:"3",cols:"12"}},[r("v-card",{staticClass:"rounded-lg",attrs:{elevation:"2"}},[r("v-card-text",{staticClass:"d-flex justify-space-between align-center"},[r("div",[r("strong",[t._v("Total Orders")]),t._v(" "),r("br")]),t._v(" "),r("v-avatar",{staticStyle:{border:"3px solid #444"},attrs:{size:"60",color:"cyan lighten-3"}},[r("span",{staticStyle:{color:"white"}},[t._v(t._s(t.total_orders)+" +")])])],1)],1)],1),t._v(" "),r("v-col",{attrs:{lg:"3",cols:"12"}},[r("v-card",{staticClass:"rounded-lg",attrs:{elevation:"2"}},[r("v-card-text",{staticClass:"d-flex justify-space-between align-center"},[r("div",[r("strong",[t._v("Total Pending Orders")]),t._v(" "),r("br")]),t._v(" "),r("v-avatar",{staticStyle:{border:"3px solid #f4511e"},attrs:{size:"60",color:t.$variables.ORDER_STATUS_PENDING_COLOR}},[r("span",{staticStyle:{color:"white"}},[t._v(t._s(t.total_pending_orders)+" +")])])],1)],1)],1),t._v(" "),r("v-col",{attrs:{lg:"3",cols:"12"}},[r("v-card",{staticClass:"rounded-lg",attrs:{elevation:"2"}},[r("v-card-text",{staticClass:"d-flex justify-space-between align-center"},[r("div",[r("strong",[t._v("Total Shipped Orders")]),t._v(" "),r("br")]),t._v(" "),r("v-avatar",{staticStyle:{border:"3px solid #7b1fa2"},attrs:{size:"60",color:t.$variables.ORDER_STATUS_SHIPPED_COLOR}},[r("span",{staticStyle:{color:"white"}},[t._v(t._s(t.total_shipped_orders)+" +")])])],1)],1)],1),t._v(" "),r("v-col",{attrs:{lg:"3",cols:"12"}},[r("v-card",{staticClass:"rounded-lg",attrs:{elevation:"2"}},[r("v-card-text",{staticClass:"d-flex justify-space-between align-center"},[r("div",[r("strong",[t._v("Total Delivered Orders")]),t._v(" "),r("br")]),t._v(" "),r("v-avatar",{staticStyle:{border:"3px solid #02522f"},attrs:{size:"60",color:t.$variables.ORDER_STATUS_DELIVERED_COLOR}},[r("span",{staticStyle:{color:"white"}},[t._v(t._s(t.total_delivered_orders)+" +")])])],1)],1)],1),t._v(" "),r("v-col",{attrs:{lg:"3",cols:"12"}},[r("v-card",{staticClass:"rounded-lg",attrs:{elevation:"2"}},[r("v-card-text",{staticClass:"d-flex justify-space-between align-center"},[r("div",[r("strong",[t._v("Total Rejected Orders")]),t._v(" "),r("br")]),t._v(" "),r("v-avatar",{staticStyle:{border:"3px solid #ff0500"},attrs:{size:"60",color:t.$variables.ORDER_STATUS_REJECTED_COLOR}},[r("span",{staticStyle:{color:"white"}},[t._v(t._s(t.total_rejected_orders)+" +")])])],1)],1)],1),t._v(" "),r("v-col",{attrs:{lg:"3",cols:"12"}},[r("v-card",{staticClass:"rounded-lg",attrs:{elevation:"2"}},[r("v-card-text",{staticClass:"d-flex justify-space-between align-center"},[r("div",[r("strong",[t._v("Total Canceled Orders")]),t._v(" "),r("br")]),t._v(" "),r("v-avatar",{staticStyle:{border:"3px solid #670016"},attrs:{size:"60",color:t.$variables.ORDER_STATUS_CANCELED_COLOR}},[r("span",{staticStyle:{color:"white"}},[t._v(t._s(t.total_canceled_orders)+" +")])])],1)],1)],1)],1)],1),t._v(" "),r("v-col",[r("v-card",[r("v-snackbar",{attrs:{top:"",color:"green"},model:{value:t.success,callback:function(e){t.success=e},expression:"success"}},[t._v("\n                        "+t._s(t.message)+"\n                    ")]),t._v(" "),r("v-snackbar",{attrs:{top:"",color:"red"},model:{value:t.error,callback:function(e){t.error=e},expression:"error"}},[t._v("\n                        "+t._s(t.message)+"\n                    ")]),t._v(" "),r("v-data-table",{staticClass:"elevation-1 py-16",attrs:{headers:t.headers,"server-items-length":t.total,items:t.items,"items-per-page":5,search:t.search,loading:t.loading,"loading-text":"Loading... Please wait","footer-props":{"items-per-page-options":[5,10,20],"items-per-page-text":"Items per page","show-current-page":!0,"show-first-last-page":!0}},on:{pagination:t.paginate},scopedSlots:t._u([{key:"top",fn:function(){return[r("v-toolbar",{attrs:{flat:""}},[r("v-toolbar-title",{staticClass:"text-capitalize"},[t._v("All Canceled Orders")]),t._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-text-field",{staticClass:"datatable-search",attrs:{"append-icon":"mdi-magnify",label:"Search with name or SKU...","single-line":"","hide-details":""},on:{input:t.datatableSearch}})],1)]},proxy:!0},{key:"item.status",fn:function(e){var a=e.item;return[r("v-chip",{staticClass:"text-capitalize",attrs:{color:t.$helpers.getOrderStatusColor(a.status),dark:""}},[t._v("\n                                "+t._s(a.status)+"\n                            ")])]}},{key:"item.action",fn:function(e){var a=e.item;return[r("v-btn",{attrs:{icon:"",color:"green"},on:{click:function(e){return t.$router.push({name:"customer-chat",params:{id:a.user.id}})}}},[r("v-icon",{attrs:{small:""}},[t._v("mdi-comment")])],1),t._v(" "),r("v-btn",{attrs:{icon:"",color:"blue"},on:{click:function(e){return t.$router.push({name:"invoice",params:{id:a.id}})}}},[r("v-icon",{attrs:{small:""}},[t._v("mdi-download")])],1),t._v(" "),r("v-btn",{attrs:{icon:"",color:"yellow darken-4"},on:{click:function(e){return t.$router.push({name:"show-order",params:{id:a.id}})}}},[r("v-icon",{attrs:{small:""}},[t._v("mdi-eye")])],1),t._v(" "),r("v-btn",{attrs:{color:"red lighten-2",dark:"",icon:""},on:{click:function(e){return t.showDeleteDialog(a)}}},[r("v-icon",{attrs:{small:""}},[t._v("mdi-check-decagram")])],1)]}}])}),t._v(" "),r("v-dialog",{attrs:{width:"400"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("div",{staticClass:"text-center pt-2"},[r("h3",{staticClass:"error--text"},[t._v("Change order status")])]),t._v(" "),r("v-card-text",{staticClass:"text-center"},[r("v-row",{staticClass:"mt-2"},[r("v-col",{attrs:{cols:"12",md:"12"}},[r("v-select",{attrs:{items:t.status,rules:t.rules.status,label:"Status",outlined:"",clearable:""},model:{value:t.form_data.status,callback:function(e){t.$set(t.form_data,"status",e)},expression:"form_data.status"}})],1)],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"blue darken-1"},on:{click:t.closeDelete}},[t._v("Cancel")]),t._v(" "),r("v-btn",{attrs:{color:"red"},on:{click:t.deleteItem}},[t._v("\n                                    Confirm\n                                ")])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"9b6c7fc6",null).exports}}]);