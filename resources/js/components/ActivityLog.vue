<template>
<div class="">
    <v-row>
        <v-col lg="3" cols="12" v-for="(item,index) in activityLog" :key="index">
            <v-card elevation="2" class="rounded-lg">
                <v-card-text class="">
                    <div class="d-flex justify-space-between align-center" v-if="item.amount > 0">
                        <div>
                            <strong>{{ item.title }}</strong> <br>
                        </div>
                        <v-avatar size="60" :color="item.color" style="border: 3px solid #444">
                            <span style="color: white">{{item.amount}} <span v-if="item.amount > 0">+</span></span>
                        </v-avatar>
                    </div>
                    <div v-else>
                        <strong>No Item found {{item.amount}}</strong>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</div>
</template>

<script>
export default {
    name: "ActivityLog",
    data(){
        return{
            category_count:'hek',
            hys:this.category_count,
            activityLog: [
                {title: 'Total Categories', amount: self.category_count, icon: 'mdi-account', color: 'cyan lighten-3'},
                {title: 'Total Brand', amount: this.category_count, icon: 'mdi-account-group-outline', color: 'purple darken-2'},
            ],
        }
    },
    created() {
        this.loadActivityData()
        console.log(this.category_count)
    },
    methods:{
        async loadActivityData(){
            let token = JSON.parse(window.localStorage.getItem('token'))
            await axios.get('/api/brand/all/categories', {headers: { 'Authorization': 'Bearer ' + token }})
                .then((response)=>{
                    if (response.data.status != 200){
                        this.message = response.data.message;
                        this.error = true;
                    }else {
                        this.category_count = response.data.data.total
                        //console.log(response.data.data.total)
                    }
                })
                .catch((error)=>{
                    this.message = 'Something went wrong !';
                    this.error = true;
                })
        }
    }
}
</script>

<style scoped>

</style>
