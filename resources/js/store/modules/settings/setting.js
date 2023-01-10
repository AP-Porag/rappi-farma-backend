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
        SET_SETTINGS (state, value) {
            state.settings = value
        },
    },
    actions:{
        async getData({commit},payload){
            return await axios.post('api/v1/setting/front/get')
                .then(({data})=>{
                    alert('hell')
                    console.log(data)
                    commit('SET_SETTINGS',data.data.settings)
                }).catch((err)=>{
                    commit('SET_SETTINGS',{})
                })
        },

    },
}
