"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[942],{3448:(t,e,a)=>{a.d(e,{Z:()=>s});var n=a(3645),i=a.n(n)()((function(t){return t[1]}));i.push([t.id,".upload-btn[data-v-e8736176]{background:#8a2be2;background:#7dc6a3;background:linear-gradient(50deg,#7dc6a3,#23d8e3 72%);color:#5f9ea0;position:absolute!important;top:121px;z-index:1}.bg[data-v-e8736176]{background:#ffc5b9;background:linear-gradient(0deg,rgba(255,197,185,.712),rgba(220,246,223,.667) 35%,hsla(0,0%,100%,.754) 74%),url(http://unblast.com/wp-content/uploads/2021/09/Real-Estate-Agent-Illustration.jpg)}.avatar-shadow[data-v-e8736176]{box-shadow:0 0 10px 0 rgba(50,12,112,.75);-webkit-box-shadow:0 0 10px 0 rgba(50,12,112,.75);-moz-box-shadow:0 0 10px 0 rgba(50,12,112,.75)}",""]);const s=i},4942:(t,e,a)=>{a.r(e),a.d(e,{default:()=>c});const n={name:"Profile",data:function(){return{Phone:"00 00000-0000",editBio:!1,Bio:"my bio test about myself, what do you know about me?",bioIcon:"mdi-pencil",focus:"",type:"month",typeToLabel:{month:"Month",week:"Week",day:"Day","4day":"4 Days"},selectedEvent:{},selectedElement:null,selectedOpen:!1,events:[],colors:["blue","indigo","deep-purple","cyan","green","orange","grey darken-1"],names:["Meeting","Holiday","PTO","Travel","Event","Birthday","Conference","Party"],tab:null,items:["Minha agenda","Sobre Mim"],text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},mounted:function(){},methods:{saveBio:function(){this.editBio=!this.editBio,this.bioIcon="mdi-content-save",this.editBio||(this.bioIcon="mdi-pencil",alert("salvo com sucesso!"))},onButtonClick:function(){var t=this;this.isSelecting=!0,window.addEventListener("focus",(function(){t.isSelecting=!1}),{once:!0}),this.$refs.uploader.click()},onFileChanged:function(t){this.selectedFile=t.target.files[0]},viewDay:function(t){var e=t.date;this.focus=e,this.type="day"},getEventColor:function(t){return t.color},setToday:function(){this.focus=""},prev:function(){this.$refs.calendar.prev()},next:function(){this.$refs.calendar.next()},showEvent:function(t){var e=this,a=t.nativeEvent,n=t.event,i=function(){e.selectedEvent=n,e.selectedElement=a.target,requestAnimationFrame((function(){return requestAnimationFrame((function(){return e.selectedOpen=!0}))}))};this.selectedOpen?(this.selectedOpen=!1,requestAnimationFrame((function(){return requestAnimationFrame((function(){return i()}))}))):i(),a.stopPropagation()},updateRange:function(t){for(var e=t.start,a=t.end,n=[],i=new Date("".concat(e.date,"T00:00:00")),s=new Date("".concat(a.date,"T23:59:59")),o=(s.getTime()-i.getTime())/864e5,r=this.rnd(o,o+20),c=0;c<r;c++){var l=0===this.rnd(0,3),d=this.rnd(i.getTime(),s.getTime()),u=new Date(d-d%9e5),v=9e5*this.rnd(2,l?288:8),h=new Date(u.getTime()+v);n.push({name:this.names[this.rnd(0,this.names.length-1)],start:u,end:h,color:this.colors[this.rnd(0,this.colors.length-1)],timed:!l})}this.events=n},rnd:function(t,e){return Math.floor((e-t+1)*Math.random())+t}}};var i=a(3379),s=a.n(i),o=a(3448),r={insert:"head",singleton:!1};s()(o.Z,r);o.Z.locals;const c=(0,a(1900).Z)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard"},[a("v-subheader",{staticClass:"py-0 d-flex justify-space-between rounded-lg"},[a("h3",{staticClass:"text-capitalize"},[t._v(t._s(this.$route.meta.title))])]),t._v(" "),a("br"),t._v(" "),a("v-row",[a("v-col",{attrs:{lg:"6",cols:"12"}},[a("v-card",{staticClass:"bg pt-8",attrs:{elevation:"2"}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{staticClass:"d-flex justify-center align-center pa-0",attrs:{"align-self":"start",cols:"12"}},[a("v-avatar",{staticClass:"profile avatar-center-heigth avatar-shadow",attrs:{color:"grey",size:"164"}},[a("v-btn",{staticClass:"upload-btn",attrs:{"x-large":"",icon:""},on:{click:t.onButtonClick}},[a("v-icon",[t._v("\n                                    mdi-camera\n                                ")])],1),t._v(" "),a("input",{ref:"uploader",staticClass:"d-none",attrs:{type:"file",accept:"image/*",change:t.onFileChanged}}),t._v(" "),a("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"}})],1)],1)],1),t._v(" "),a("v-list-item",{staticClass:"profile-text-name ma-4 pt-8",attrs:{color:"#0000"}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-h6 text-center"},[t._v("\n                            Marcus Obrien\n                        ")]),t._v(" "),a("v-list-item-subtitle",{staticClass:"text-center"},[t._v("Network Engineer")])],1)],1)],1)],1),t._v(" "),a("v-col",{attrs:{lg:"6",cols:"12"}},[a("v-card",{staticClass:"rounded-lg",attrs:{elevation:"2"}},[a("v-simple-table",{staticClass:"p-5"},[[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("\n                                Key\n                            ")]),t._v(" "),a("th",{staticClass:"text-left"},[t._v("\n                                Value\n                            ")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("First Name")]),t._v(" "),a("td",[t._v("Jhon")])]),t._v(" "),a("tr",[a("td",[t._v("Last Name")]),t._v(" "),a("td",[t._v("Doe")])])])]],2)],1)],1)],1)],1)}),[],!1,null,"e8736176",null).exports}}]);