<template>
    <div class="dashboard">
        <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
            <h3 class="text-capitalize">{{this.$route.meta.title}}</h3>
        </v-subheader>
        <br>
        <v-row>
            <v-col lg="12" cols="12">
                <v-row>
                    <v-col lg="3" cols="12">
                        <v-card elevation="2" class="rounded-lg">
                            <v-card-text class="d-flex justify-space-between align-center">
                                <div>
                                    <strong>Total User</strong> <br>
                                </div>
                                <v-avatar size="60" color="cyan lighten-3" style="border: 3px solid #444">
                                    <span style="color: white">{{total_users}} +</span>
                                </v-avatar>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col lg="3" cols="12">
                        <v-card elevation="2" class="rounded-lg">
                            <v-card-text class="d-flex justify-space-between align-center">
                                <div>
                                    <strong>Total Admin</strong> <br>
                                </div>
                                <v-avatar size="60" color="green darken-2" style="border: 3px solid #444">
                                    <span style="color: white">{{total_admins}} +</span>
                                </v-avatar>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col lg="3" cols="12">
                        <v-card elevation="2" class="rounded-lg">
                            <v-card-text class="d-flex justify-space-between align-center">
                                <div>
                                    <strong>Total Customer</strong> <br>
                                </div>
                                <v-avatar size="60" color="purple darken-2" style="border: 3px solid #444">
                                    <span style="color: white">{{total_customers}} +</span>
                                </v-avatar>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col lg="3" cols="12">
                        <v-card elevation="2" class="rounded-lg">
                            <v-card-text class="d-flex justify-space-between align-center">
                                <div>
                                    <strong>Total Driver</strong> <br>
                                </div>
                                <v-avatar size="60" color="deep-orange darken-1" style="border: 3px solid #444">
                                    <span style="color: white">{{total_customers}} +</span>
                                </v-avatar>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
            <v-col>
                <v-card>
                    <v-snackbar top color="green" v-model="success">
                        {{message}}
                    </v-snackbar>
                    <v-snackbar top color="red" v-model="error">
                        {{message}}
                    </v-snackbar>
                    <v-data-table
                        :headers="headers"
                        @pagination="paginate"
                        :server-items-length="total"
                        :items="users"
                        :items-per-page="5"
                        :search="search"
                        class="elevation-1 py-16"
                        :loading="loading"
                        loading-text="Loading... Please wait"
                        :footer-props="{
                            'items-per-page-options':[5,10,20],
                            'items-per-page-text': 'Items per page',
                            'show-current-page':true,
                            'show-first-last-page':true
                        }"
                    >

                        <template v-slot:top>
                            <v-toolbar flat>
                                <v-toolbar-title class="text-capitalize">{{$route.meta.title}}'s List</v-toolbar-title>
                                <v-divider
                                    class="mx-4"
                                    inset
                                    vertical
                                ></v-divider>
                                <v-spacer></v-spacer>
                                <v-text-field
                                    @input="datatableSearch"
                                    append-icon="mdi-magnify"
                                    label="Search..."
                                    single-line
                                    hide-details
                                    class="datatable-search"
                                ></v-text-field>
<!--                                <v-spacer></v-spacer>-->
<!--                                <v-btn-->
<!--                                    color="primary"-->
<!--                                    dark-->
<!--                                    class="mb-2"-->
<!--                                    @click="$router.push({ name: 'create-user' })"-->
<!--                                    link-->
<!--                                >-->
<!--                                    Add {{$route.meta.title}}-->
<!--                                </v-btn>-->
                            </v-toolbar>
                        </template>

                        <template v-slot:item.avatar="{ item }">
                            <v-avatar size="36px">
                                <img
                                    :src="item.avatar"
                                    :alt="item.full_name"
                                >
                            </v-avatar>
                        </template>
                        <template v-slot:item.user_type="{ item }">
                            <v-chip
                                :color="item.user_type == 'admin' ? 'green':'deep-purple accent-4 white--text'"
                                dark
                                class="text-capitalize"
                            >
                                {{ item.user_type }}
                            </v-chip>
                        </template>
<!--                        <template v-slot:item.action="{ item }">-->
<!--                            <v-btn icon color="blue" @click="$router.push({ name: 'edit-user',params:{id:item.id} })">-->
<!--                                <v-icon small>mdi-pencil</v-icon>-->
<!--                            </v-btn>-->
<!--                            <v-btn-->
<!--                                color="red lighten-2"-->
<!--                                dark-->
<!--                                icon-->
<!--                                @click="showDeleteDialog(item)"-->
<!--                            >-->
<!--                                <v-icon small>mdi-delete</v-icon>-->
<!--                            </v-btn>-->
<!--                        </template>-->
                    </v-data-table>
                    <v-dialog v-model="dialog" width="400">
                        <v-card>
                            <div class="text-center pt-2">
                                <v-avatar size="100" color="red lighten-4">
                                    <v-icon size="40" color="red">mdi-comment-question</v-icon>
                                </v-avatar>
                                <h3 class="error--text">Are you sure?</h3>
                            </div>

                            <v-card-text class="text-center">
                                <p>You wont be revert this !</p>
                            </v-card-text>

                            <v-divider></v-divider>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" @click="closeDelete">Cancel</v-btn>

                                <v-btn
                                    color="red"
                                    @click="deleteItem"
                                >
                                    Confirm
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "Index",
    data() {
        return {
            search: '',
            loading:false,
            page:1,
            per_page:0,
            dialog:false,
            itemToDelete:'',
            success:false,
            error:false,
            message:'',
            total_admins:'',
            total_customers:'',
            total_drivers:'',
            total_users:'',
            headers: [
                {
                    text: 'Full Name',
                    align: 'start',
                    sortable: false,
                    value: 'full_name',
                },
                {text: 'Avatar', value: 'avatar',sortable: false},
                {text: 'Email', value: 'email'},
                {text: 'Phone', value: 'phone'},
                {text: 'DOB', value: 'date_of_birth'},
                {text: 'Gender', value: 'gender'},
                {text: 'User Type', value: 'user_type'},
                // {text: 'Actions', value: 'action',sortable: false},
            ],
            users: [],
            total:0,
        }
    },
    methods: {
        onButtonClick(item) {
            console.log('click on ' + item.no)
        },
        async datatableSearch($e){
            if ($e.length >= 3){
                let token = JSON.parse(window.localStorage.getItem('token'))
                await axios.get(`/api/customer/search-customer/${$e}?page=${this.page}`, {params:{'per_page':this.per_page},headers: { 'Authorization': 'Bearer ' + token }})
                    .then((response)=>{
                        if (response.data.status != 200){
                            console.log(response.data.status)
                        }else {
                            this.total = response.data.data.total
                            this.users = response.data.data.users
                        }
                    })
                    .catch((error)=>{
                        this.message = 'Something went wrong !';
                        this.error = true;
                    })
            }
            if ($e.length <= 0){
                let token = JSON.parse(window.localStorage.getItem('token'))
                await axios.get(`/api/customer?page=${this.page}`, {params:{'per_page':this.per_page},headers: { 'Authorization': 'Bearer ' + token }})
                    .then((response)=>{
                        if (response.data.status != 200){
                            console.log(response.data.status)
                        }else {
                            this.total = response.data.data.total
                            this.users = response.data.data.users
                        }
                    })
                    .catch((error)=>{
                        this.message = 'Something went wrong !';
                        this.error = true;
                    })
            }
        },
        async paginate($e){
            this.page = $e.page;
            this.per_page = $e.itemsPerPage;
            let token = JSON.parse(window.localStorage.getItem('token'))
            await axios.get(`/api/customer?page=${this.page}`, {params:{'per_page':this.per_page},headers: { 'Authorization': 'Bearer ' + token }})
                .then((response)=>{
                    if (response.data.status != 200){
                        console.log(response.data.status)
                    }else {
                        this.total = response.data.data.total
                        this.users = response.data.data.users
                    }
                })
                .catch((error)=>{
                    this.message = 'Something went wrong !';
                    this.error = true;
                })
        },
        async getAllUsersData(){

            // Add a request interceptor
            axios.interceptors.request.use((config)=> {
                // Do something before request is sent
                this.loading = true;
                return config;
            },  (error) => {
                // Do something with request error
                this.loading = false;
                this.message = error.data.status
                this.error = true;
                return Promise.reject(error);
            });

            // Add a response interceptor
            axios.interceptors.response.use((response) => {
                this.loading = false;
                return response;
            },  (error) => {
                this.loading = false;
                this.message = error.data.status
                this.error = true;
                return Promise.reject(error);
            });
        },

        showDeleteDialog(item){
            this.dialog = true;
            this.itemToDelete = item.id;

        },
        closeDelete(){
            this.dialog = false;
        },
        async deleteItem(){
            let token = JSON.parse(window.localStorage.getItem('token'))
            await axios.delete(`/api/user/${this.itemToDelete}`, {headers: { 'Authorization': 'Bearer ' + token }})
                .then((response)=>{
                    if (response.data.status != 200){
                        this.message = response.data.message;
                        this.dialog = false;
                        this.error = true;
                    }else {
                        this.getAllUsersData();
                        this.message = response.data.message;
                        this.dialog = false;
                        this.success = true;
                    }
                })
                .catch((error)=>{
                    this.message = 'Something went wrong !';
                    this.error = true;
                })
        },

        async getAdministrationCardData(){
            let token = JSON.parse(window.localStorage.getItem('token'))
            await axios.get(`/api/user/card/card-data`, {headers: { 'Authorization': 'Bearer ' + token }})
                .then((response)=>{
                    if (response.data.status != 200){
                        console.log(response.data.status)
                    }else {
                        if (response.data.data != null){
                            this.total_users = response.data.data.total_users;
                            this.total_admins = response.data.data.total_admins;
                            this.total_customers = response.data.data.total_customers;
                            this.total_drivers = response.data.data.total_drivers;
                        }

                    }
                })
                .catch((error)=>{
                    this.message = 'Something went wrong !';
                    this.error = true;
                })
        }
    },
    created() {
        this.getAllUsersData();
        this.getAdministrationCardData();
    }
}
</script>

<style scoped>
.datatable-search{
    width: 0px !important;
}
</style>
