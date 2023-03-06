<template>
    <div class="text-xs-center">
        <v-menu
            min-width = 300
            top
            v-model="menu"
            :close-on-click="false"
            :close-on-content-click="false"
            :nudge-top="60"
            offset-x
        >
            <template v-slot:activator="{ on }">
                <v-fab-transition>
                    <v-btn
                        v-model="fab"
                        v-on="on"
                        color='green darken-4'
                        @click="fab = !fab; menu = false"
                        dark
                        fixed
                        bottom
                        right
                        fab
                    >
                        <v-icon>mdi-comment</v-icon>
                    </v-btn>
                </v-fab-transition>
            </template>
            <v-card style="height: 485px;">
                <div dark class="chat-header py-2 pl-4 pr-4 d-flex">
                    <p class="white--text">Chat with {{customer.full_name}}</p>
                    <v-spacer/>
                    <v-btn
                        icon
                        @click="fab = !fab; menu = false"
                        class="white--text"
                    >
                        <v-icon right>mdi-close</v-icon>
                    </v-btn>
                </div>
                <v-divider></v-divider>
                <v-container class="chat-container">
                    <ul class="chat-screen" id="style-2" v-chat-scroll>
                        <v-card v-for="(message,index) in messages" :key="message.id" flat>
                            <v-list-item
                                :key="message.id"
                                v-if="message.from_id !== admin.id"
                                class="message-item text_right"
                            >
                                <v-list-item-avatar class="align-self-start mr-2">
                                    <v-avatar size="40">
                                        <v-img :src="message.avatar"></v-img>
                                    </v-avatar>
                                </v-list-item-avatar>
                                <v-list-item-content class="received-message">
                                    <v-card color="success" class="flex-none">
                                        <v-card-text class="white--text pa-2 d-flex flex-column">
                                            <span class="text-caption">{{message.full_name}} </span>
                                            <span class="align-self-start text-subtitle-1">{{ message.message }}</span>
                                            <span class="text-caption font-italic align-self-end">{{
                                                    message.time
                                                }}</span>
                                        </v-card-text>
                                    </v-card>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item v-else :key="message.id" class="message-item text_left">
                                <v-list-item-content class="sent-message justify-end">
                                    <v-card color="primary" class="flex-none">
                                        <v-card-text class="white--text pa-2 d-flex flex-column">
                                            <span class="text-caption">{{message.full_name}} </span>
                                            <span class="text-subtitle-1 chat-message">{{ message.message }}</span>
                                            <span class="text-caption font-italic align-self-start">{{
                                                    message.time
                                                }}</span>
                                        </v-card-text>
                                    </v-card>
                                </v-list-item-content>
                                <v-list-item-avatar class="align-self-start ml-2">
                                    <v-img :src="message.avatar"></v-img>
                                </v-list-item-avatar>
                            </v-list-item>
                        </v-card>
                    </ul>
                </v-container>
                <v-divider></v-divider>
                <div class="text-box d-flex">
                    <textarea
                        rows="2"
                        class="text-input"
                        v-model="text" @keyup.enter="send"
                    ></textarea>
                    <v-icon small class="white--text send-btn" @click="send" @keyup.enter="send">mdi-send</v-icon>
                </div>
            </v-card>
        </v-menu>
    </div>
</template>

<script>
import customer from "../../views/user/customer";

export default {
    name: "PageChatComponent",
    props:['customer'],
    data(){
        return{
            fab: false,
            fav: true,
            menu: false,
            admin:'',
            messages :[],
            hints: true,
            text: "",
        }
    },
    created() {
        this.admin = JSON.parse(localStorage.getItem('user') || "[]");
        setTimeout(()=>{
            this.fetchMessages();
        },2000);

        // window.Echo.private('chat')
        //     .listen('MessageSent', (e) => {
        //         console.log(e)
        //         //this.messages.push(e.data.message)
        //     });
        window.Echo.channel('chat')
            .listen('.server.created', (e) => {
                //console.log(e.message);
                this.messages.push(e.message)
            });

    },
    methods: {
        async send(){
            if (this.text.length > 0){
                let newMessage = {
                    customer_id:this.customer.id,
                    admin_id:this.admin.id,
                    message: this.text,
                }
                await axios.post('/api/v1/customer/message/save',newMessage)
                    .then((response)=>{
                        if (response.data.status === 200){
                            //console.log(response)
                            this.text='';
                            this.messages.push(response.data.message)
                        }
                    })
                    .catch((error)=>{
                        console.log(error)
                    })

            }
        },

        async fetchMessages() {
            await axios.get(`/api/v1/customer/message/get/${this.customer.id}`).then(response => {
                this.messages = response.data.message;
            });
        },

        isMobile() {
            var check = false;
            (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
            return check;
        },
    }

}


</script>

<style scoped>
/*.text-input{*/
/*    padding-top: 0px;*/
/*    padding-bottom: 0px;*/
/*    border-radius: 100px;*/
/*}*/
.chat-container{
    max-width:300px;
    padding: 0 0;
}
.chat-header {
    background-color: #075E54 !important
}

.chat-message {
    display: unset !important;
    white-space: break-spaces;
}
.chat-screen {
    max-height: 350px;
    min-height: 350px;
    overflow-y: auto;
    overflow-x: hidden;
    padding-left: 0px;
}
.flex-none {
    flex: unset;
}
.received-message::after {
    content: ' ';
    position: absolute;
    width: 0;
    height: 0;
    left: 54px;
    right: auto;
    top: 12px;
    bottom: auto;
    border: 12px solid;
    border-color: #4caf50 transparent transparent transparent;
}
.sent-message::after {
    content: ' ';
    position: absolute;
    width: 0;
    height: 0;
    left: auto;
    right: 54px;
    top: 12px;
    bottom: auto;
    border: 12px solid;
    border-color: #3F51B5 transparent transparent transparent;
}
.text-box{
    padding: 10px 5px;
}
.text-input{
    background: #f2efef;
    width: 100%;
    border-radius: 50px;
    resize: none;
    border: none;
    outline: none;
    padding: 5px 15px;
}
.text-input:focus{
    border: none;
    outline: none;
}
.send-btn{
    font-size: 18px;
    background: #3d783d;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 50px;
    height: 37px;
    margin-top: 12px;
}
.text_right{
    text-align: right;
}
.text_left{
    text-align: left;
}
.v-text-field__details{
    display: none !important;
}
</style>
