<template>
    <div class="dashboard">
        <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
            <h3 class="text-capitalize">{{this.$route.meta.title}}</h3>
        </v-subheader>
        <br>
        <v-row>
            <v-col lg="12" cols="12">
<!--                <ActivityLog/>-->
                <v-row>
                    <v-col lg="3" cols="12">
                        <v-card elevation="2" class="rounded-lg">
                            <v-card-text class="">
                                <div class="d-flex justify-space-between align-center">
                                    <div>
                                        <strong>Total Categories</strong> <br>
                                    </div>
                                    <v-avatar size="60" color="cyan lighten-3" style="border: 3px solid #444">
                                        <span style="color: white">{{total_categories}} <span>+</span></span>
                                    </v-avatar>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <v-col lg="3" cols="12">
                        <v-card elevation="2" class="rounded-lg">
                            <v-card-text class="">
                                <div class="d-flex justify-space-between align-center">
                                    <div>
                                        <strong>Total Brands</strong> <br>
                                    </div>
                                    <v-avatar size="60" color="purple darken-2" style="border: 3px solid #444">
                                        <span style="color: white">{{total_brands}} <span>+</span></span>
                                    </v-avatar>
                                </div>
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
                        :items="items"
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
<!--                                <v-toolbar-title class="text-capitalize">{{$route.meta.title}}'s List</v-toolbar-title>-->
                                <v-toolbar-title class="text-capitalize">Brands List</v-toolbar-title>
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
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="primary"
                                    dark
                                    class="mb-2"
                                    @click="$router.push({ name: 'create-brand' })"
                                    link
                                >
                                    Add {{$route.meta.title}}
                                </v-btn>
                            </v-toolbar>
                        </template>

                        <template v-slot:item.thumb="{ item }">
                            <v-avatar size="36px">
                                <img
                                    :src="item.thumb"
                                    :alt="item.slug"
                                >
                            </v-avatar>
                        </template>
                        <template v-slot:item.status="{ item }">
                            <v-chip
                                :color="item.status == 'active' ? 'green':'deep-purple accent-4 white--text'"
                                dark
                                class="text-capitalize"
                            >
                                {{ item.status }}
                            </v-chip>
                        </template>
                        <template v-slot:item.action="{ item }">

                            <v-menu transition="slide-x-transition">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        v-bind="attrs"
                                        v-on="on"
                                        color="black"
                                        dark
                                        small
                                    >
                                        <v-icon>mdi-dots-vertical</v-icon>
                                    </v-btn>
                                </template>

                                <v-list>
                                    <v-list-item-group class="datatable-action-item">

                                        <v-list-item @click="$router.push({ name: 'edit-brand',params:{id:item.id} })" class="datatable-dropdown-item">
                                            <v-list-item-icon>
                                                <v-icon color="blue" small>mdi-pencil</v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content>
                                                <v-list-item-title class="edit-text">Edit</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>

                                        <v-list-item @click="showDeleteDialog(item)" class="datatable-dropdown-item">
                                            <v-list-item-icon>
                                                <v-icon color="red lighten-2" small>mdi-delete</v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content>
                                                <v-list-item-title class="delete-text">Delete</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>

                                    </v-list-item-group>
                                </v-list>
                            </v-menu>

<!--                            <v-btn icon color="blue" @click="$router.push({ name: 'edit-brand',params:{id:item.id} })">-->
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
                        </template>
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
import ActivityLog from "../../components/ActivityLog";
export default {
    name: "Index",
    components: {ActivityLog},
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
            headers: [
                {
                    text: 'Name',
                    align: 'start',
                    sortable: true,
                    value: 'name',
                },
                {text: 'Category', value: 'category.category_name',sortable: false},
                {text: 'Thumbnail', value: 'thumb',sortable: false},
                {text: 'Status', value: 'status',sortable: false},
                {text: 'Actions', value: 'action',sortable: false},
            ],
            activityLog: [
                {title: 'Total Categories', amount: self.category_count, icon: 'mdi-account', color: 'cyan lighten-3'},
                {title: 'Total Brand', amount: this.category_count, icon: 'mdi-account-group-outline', color: 'purple darken-2'},
            ],
            items: [],
            total:0,
            category_count:10,
        }
    },
    created() {
        this.getAllItemsData()
        this.categoryCount()
        this.getPreRequisitionCardData()
    },
    methods: {
        async datatableSearch($e){
            if ($e.length >= 3){
                let token = JSON.parse(window.localStorage.getItem('token'))
                await axios.get(`/api/brand/search-brand/${$e}?page=${this.page}`, {params:{'per_page':this.per_page},headers: { 'Authorization': 'Bearer ' + token }})
                    .then((response)=>{
                        if (response.data.status != 200){
                            console.log(response.data.status)
                        }else {
                            this.total = response.data.data.total
                            this.items = response.data.data.items
                        }
                    })
                    .catch((error)=>{
                        this.message = 'Something went wrong !';
                        this.error = true;
                    })
            }
            if ($e.length <= 0){
                let token = JSON.parse(window.localStorage.getItem('token'))
                await axios.get(`/api/brand?page=${this.page}`, {params:{'per_page':this.per_page},headers: { 'Authorization': 'Bearer ' + token }})
                    .then((response)=>{
                        if (response.data.status != 200){
                            console.log(response.data.status)
                        }else {
                            this.total = response.data.data.total
                            this.items = response.data.data.items
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
            await axios.get(`/api/brand?page=${this.page}`, {params:{'per_page':this.per_page},headers: { 'Authorization': 'Bearer ' + token }})
                .then((response)=>{
                    if (response.data.status != 200){
                        console.log(response.data.status)
                    }else {
                        this.total = response.data.data.total
                        this.items = response.data.data.items
                    }
                })
                .catch((error)=>{
                    this.message = 'Something went wrong !';
                    this.error = true;
                })
        },
        async getAllItemsData(){

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
            await axios.delete(`/api/brand/${this.itemToDelete}`, {headers: { 'Authorization': 'Bearer ' + token }})
                .then((response)=>{
                    if (response.data.status != 200){
                        this.message = response.data.message;
                        this.dialog = false;
                        this.error = true;
                    }else {
                        window.location.reload();
                        this.getAllItemsData();
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
        async categoryCount(){
            let token = JSON.parse(window.localStorage.getItem('token'))
            await axios.get('/api/brand/all/categories', {headers: { 'Authorization': 'Bearer ' + token }})
                .then((response)=>{
                    if (response.data.status != 200){
                        this.message = response.data.message;
                        this.error = true;
                    }else {
                        this.category_count = response.data.data.total
                    }
                })
                .catch((error)=>{
                    this.message = 'Something went wrong !';
                    this.error = true;
                })
        },

        async getPreRequisitionCardData(){
            let token = JSON.parse(window.localStorage.getItem('token'))
            await axios.get(`/api/category/card/card-data`, {headers: { 'Authorization': 'Bearer ' + token }})
                .then((response)=>{
                    if (response.data.status != 200){
                        console.log(response.data.status)
                    }else {
                        if (response.data.data != null){
                            this.total_categories = response.data.data.total_categories;
                            this.total_brands = response.data.data.total_brands;
                        }

                    }
                })
                .catch((error)=>{
                    this.message = 'Something went wrong !';
                    this.error = true;
                })
        }
    },

}
</script>

<style scoped>
.datatable-search{
    width: 0px !important;
}
.datatable-action-item .v-list-item__icon:first-child{
    margin-right: 0px !important;
}

.v-list-item{
    padding-right: 70px;
    padding-top: 5px;
    padding-bottom: 5px;
    min-height: 0px !important;
}
.v-list-item__icon{
    margin-top: 5px !important;
    margin-bottom: 5px !important;
}
.v-list-item__content{
    padding: 0px !important;
}

.edit-text{
    color: #2196f3;
}.delete-text{
     color: #e57373;
 }
</style>
