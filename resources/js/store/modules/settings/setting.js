export default {
    namespace:true,
    state:{
        settings:[]
    },
    getters:{
        settings(state){
            return state.settings
        },
    },
    mutations:{
        setSetting (state,payload) {
            state.settings = payload
            // console.log(state.settings)
            // console.log('hello from store')
        }
    },
}
