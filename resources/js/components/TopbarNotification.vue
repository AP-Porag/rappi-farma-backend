<template>
    <v-menu offset-y>
        <template v-slot:activator="{ attrs, on }">
            <span
                class="mx-5 mr-10"
                style="cursor: pointer"
                v-bind="attrs"
                v-on="on"
            >
              <v-badge :content="notifications.length" color="red" offset-y="10" offset-x="10" v-if="notifications.length > 0">
                <v-icon>mdi-comment</v-icon>
              </v-badge>
                <v-icon v-else>mdi-comment</v-icon>
        </span>
        </template>
        <v-list width="300" class="py-0">
            <v-list-item one-line>
                New WhatsApp Messages
            </v-list-item>
            <v-divider />
            <div class="chat-screen">
                <v-list-item
                    link
                    @click="$router.push({ name: 'customer-chat',params: { id: notification.customer_id } }); handleMessageNotificationClicked(notification.customer_id)"
                    v-for="(notification,index) in notifications"
                    :key="notification.id">
                    <v-list-item-icon class="notification-chat-icon">
                        <v-icon size="small">mdi-comment</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        {{notification.message}}
                    </v-list-item-title>
                </v-list-item>
            </div>
        </v-list>
    </v-menu>
</template>

<script>
export default {
    name: "TopbarNotification",
    data(){
        return{
            notifications:[],
            admin:'',
        }
    },
    created(){
        this.getNotification();
        this.admin = JSON.parse(localStorage.getItem('user') || "[]");
        // window.Echo.channel('status')
        //     .listen('MessageStatueChangedEvent', (e) => {
        //         console.log('event fired from echo')
        //         //console.log(e.data);
        //         let ids = e.data
        //         ids.forEach((id) => {
        //             console.log('id '+id)
        //             const indexOfNotification = this.notifications.findIndex(object => {
        //                 return object.id === id;
        //             });
        //             this.notifications.splice(indexOfNotification, 1);
        //         });
        //
        //         //calling emit event
        //         // this.$on('MessageStatusChanged', (data) => {
        //         //     console.log('event fired from emit')
        //         // })
        //     });
    },
    methods:{
        async getNotification(){
            let token = JSON.parse(window.localStorage.getItem('token'))
            await axios.get(`/api/notification/get/all/unread`, {headers: { 'Authorization': 'Bearer ' + token }})
                .then((response)=>{
                    if (response.data.status != null){
                        this.notifications = response.data.message;
                    }
                })
                .catch((error)=>{
                    this.message = 'Something went wrong !';
                    this.error = true;
                })
        },
        async handleMessageNotificationClicked(customer_id){

            let token = JSON.parse(window.localStorage.getItem('token'))
            let form_data ={
                'customer_id':customer_id,
                'admin_id':this.admin.id,
            }
            await axios.post(`/api/notification/change/all/status`,form_data ,{headers: { 'Authorization': 'Bearer ' + token }})
                .then((response)=>{
                    let ids = response.data.data
                    ids.forEach((id) => {
                        const indexOfNotification = this.notifications.findIndex(object => {
                            return object.id === id;
                        });
                        this.notifications.splice(indexOfNotification, 1);
                    });
                })
                .catch((error)=>{
                    console.log(error)
                })
        }
    }
}
</script>

<style scoped>
.chat-screen {
    max-height: 350px;
    min-height: 350px;
    overflow-y: auto;
    overflow-x: hidden;
    padding-left: 0px;
}
.notification-chat-icon{
    margin-right: 0px !important;
}
</style>
