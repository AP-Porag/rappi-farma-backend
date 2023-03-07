import router from "../../../router";


let token = window.localStorage.getItem('token');
let user = window.localStorage.getItem('user');
export default {
    namespace:true,
    state:{
        message:'',
        error:false,
        token: token ? JSON.parse(token) : '',
        user:user ? JSON.parse(user) : {},
    },
    getters:{
        user(state){
            return state.user
        },
        token(state){
            return state.token
        }
    },
    mutations:{
        SET_USER (state, value) {
            window.localStorage.setItem('user', JSON.stringify(value));
            state.user = value
        },
        SET_TOKEN (state, value) {
            state.token = value
        },
        SET_TOKEN_TO_LOCALSTORAGE(state){
            window.localStorage.setItem('token', JSON.stringify(state.token));
        },
        REMOVE_TOKEN_FROM_LOCALSTORAGE(){
            window.localStorage.removeItem('token');
        },
        SET_ERROR (state, value) {
            state.message = value
            state.error = true
        },
    },
    actions:{
        async login({commit},payload){
            //console.log('from store login')
            return await axios.post('/api/auth/login',{email:payload.email,'password':payload.password})
                .then(({data})=>{
                    if (data.status === 403){
                        commit('SET_ERROR',data.message)
                    }else {
                        commit('SET_USER',data.data)
                        commit('SET_TOKEN',data.data.token)
                        commit('SET_TOKEN_TO_LOCALSTORAGE')
                        router.push('/home')
                    }
                    //router.push({name:'home'})
            }).catch((err)=>{
                    commit('SET_USER',{})
                    commit('REMOVE_TOKEN_FROM_LOCALSTORAGE')

            })
        },
        async logout({commit}){

            return await axios.post('/api/auth/logout')
                .then((data)=>{
                    if (data.status == 200){
                        commit('SET_USER',{})
                        commit('REMOVE_TOKEN_FROM_LOCALSTORAGE')
                        commit('SET_TOKEN','')
                        router.push('/login')
                    }else {
                        console.log('something went wrong !')
                    }
                }).catch((err)=>{
                    console.log(err)
                })
        },

    },
}
