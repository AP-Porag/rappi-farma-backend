import Vue from 'vue'
import Vuex from 'vuex';
import auth from './modules/user/auth';
import setting from './modules/settings/setting';

Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        auth,
        setting
    }
})
