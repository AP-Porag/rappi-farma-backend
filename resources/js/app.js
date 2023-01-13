require('./bootstrap');
//
// window.Vue = require('vue').default;

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// import vuetify from "./plugins/vuetify";
// import router from "./router";
//
// const app = new Vue({
//     router,
//     vuetify,
//     el: '#app',
// });

import Vue from "vue"
import router from "./router";
import vuetify from "./plugins/vuetify";
import App from './pages/App';
import store from './store'


Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// const app = new Vue({
//     mounted(){
//        this.getSettingsData()
//     },
//     methods:{
//         async getSettingsData(){
//             await axios.get('/api/v1/setting/front/get')
//                 .then((response)=>{
//                     console.log('hello appjs')
//                     let setting = response.data.data.settings;
//                     this.$store.commit('setSetting', setting)
//                 })
//                 .catch((error)=>{
//                     console.log(error)
//                 })
//         },
//     },
//     el: '#app',
//     router,
//     store:store,
//     vuetify,
//     render: h => h(App),
// });

fetch('/api/v1/setting/front/get')
    .then(r => r.json())
    .then((data) => {
        let settings = data.data.settings;
        store.commit('setSetting', settings)
        new Vue({
            el: '#app',
            router,
            store:store,
            vuetify,
            render: h => h(App),
        })
    })
    .catch((error) => {
        // Don't forget to handle this
        console.log(error)
    })

//export default app;

