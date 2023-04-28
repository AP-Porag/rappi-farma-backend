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
                            <v-card-text class="d-flex justify-space-between align-center">
                                <div>
                                    <strong>Total Orders</strong> <br>
                                </div>
                                <v-avatar size="60" color="cyan lighten-3" style="border: 3px solid #444">
                                    <span style="color: white">{{total_orders}} +</span>
                                </v-avatar>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col lg="3" cols="12">
                        <v-card elevation="2" class="rounded-lg">
                            <v-card-text class="d-flex justify-space-between align-center">
                                <div>
                                    <strong>Total Pending Orders</strong> <br>
                                </div>
                                <v-avatar size="60" :color="$variables.ORDER_STATUS_PENDING_COLOR" style="border: 3px solid #f4511e">
                                    <span style="color: white">{{total_pending_orders}} +</span>
                                </v-avatar>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col lg="3" cols="12">
                        <v-card elevation="2" class="rounded-lg">
                            <v-card-text class="d-flex justify-space-between align-center">
                                <div>
                                    <strong>Total Shipped Orders</strong> <br>
                                </div>
                                <v-avatar size="60" :color="$variables.ORDER_STATUS_SHIPPED_COLOR" style="border: 3px solid #7b1fa2">
                                    <span style="color: white">{{total_shipped_orders}} +</span>
                                </v-avatar>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col lg="3" cols="12">
                        <v-card elevation="2" class="rounded-lg">
                            <v-card-text class="d-flex justify-space-between align-center">
                                <div>
                                    <strong>Total Delivered Orders</strong> <br>
                                </div>
                                <v-avatar size="60" :color="$variables.ORDER_STATUS_DELIVERED_COLOR" style="border: 3px solid #02522f">
                                    <span style="color: white">{{total_delivered_orders}} +</span>
                                </v-avatar>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col lg="3" cols="12">
                        <v-card elevation="2" class="rounded-lg">
                            <v-card-text class="d-flex justify-space-between align-center">
                                <div>
                                    <strong>Total Rejected Orders</strong> <br>
                                </div>
                                <v-avatar size="60" :color="$variables.ORDER_STATUS_REJECTED_COLOR" style="border: 3px solid #ff0500">
                                    <span style="color: white">{{total_rejected_orders}} +</span>
                                </v-avatar>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col lg="3" cols="12">
                        <v-card elevation="2" class="rounded-lg">
                            <v-card-text class="d-flex justify-space-between align-center">
                                <div>
                                    <strong>Total Canceled Orders</strong> <br>
                                </div>
                                <v-avatar size="60" :color="$variables.ORDER_STATUS_CANCELED_COLOR" style="border: 3px solid #670016">
                                    <span style="color: white">{{total_canceled_orders}} +</span>
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
                                <v-toolbar-title class="text-capitalize">All Shipped Orders</v-toolbar-title>
                                <v-divider
                                    class="mx-4"
                                    inset
                                    vertical
                                ></v-divider>
                                <v-spacer></v-spacer>
                                <v-text-field
                                    @input="datatableSearch"
                                    append-icon="mdi-magnify"
                                    label="Search with name or SKU..."
                                    single-line
                                    hide-details
                                    class="datatable-search"
                                ></v-text-field>
<!--                                <v-spacer></v-spacer>-->
<!--                                <v-btn-->
<!--                                    color="primary"-->
<!--                                    dark-->
<!--                                    class="mb-2 ml-3"-->
<!--                                    @click="$router.push({ name: 'create-product' })"-->
<!--                                    link-->
<!--                                >-->
<!--                                    Add {{$route.meta.title}}-->
<!--                                </v-btn>-->
                            </v-toolbar>
                        </template>
                        <template v-slot:item.status="{ item }">
                            <v-chip
                                :color="$helpers.getOrderStatusColor(item.status)"
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

                                        <v-list-item @click="$router.push({ name: 'customer-chat',params:{id:item.id} })" class="datatable-dropdown-item">
                                            <v-list-item-icon>
                                                <v-icon color="green" small>mdi-comment</v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content>
                                                <v-list-item-title class="chat-text">Chat</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>


                                        <v-list-item @click="$router.push({ name: 'invoice',params:{id:item.id} })" class="datatable-dropdown-item">
                                            <v-list-item-icon>
                                                <v-icon color="blue" small>mdi-download</v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content>
                                                <v-list-item-title class="invoice-text">Invoice</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>

                                        <v-list-item @click="$router.push({ name: 'show-order',params:{id:item.id} })">
                                            <v-list-item-icon>
                                                <v-icon color="orange" small>mdi-eye</v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content>
                                                <v-list-item-title class="details-text">Details</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>


                                        <v-list-item @click="showDeleteDialog(item)" class="datatable-dropdown-item">
                                            <v-list-item-icon>
                                                <v-icon color="red lighten-2" small>mdi-check-decagram</v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content>
                                                <v-list-item-title class="status-text">Change Status</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>

                                    </v-list-item-group>
                                </v-list>
                            </v-menu>


<!--                            <v-btn icon color="green" @click="$router.push({ name: 'customer-chat',params:{id:item.user.id} })">-->
<!--                                <v-icon small>mdi-comment</v-icon>-->
<!--                            </v-btn>-->
<!--                            <v-btn icon color="blue" @click="$router.push({ name: 'invoice',params:{id:item.id} })">-->
<!--                                <v-icon small>mdi-download</v-icon>-->
<!--                            </v-btn>-->
<!--                            <v-btn icon color="yellow darken-4" @click="$router.push({ name: 'show-order',params:{id:item.id} })">-->
<!--                                <v-icon small>mdi-eye</v-icon>-->
<!--                            </v-btn>-->
<!--                            <v-btn-->
<!--                                color="red lighten-2"-->
<!--                                dark-->
<!--                                icon-->
<!--                                @click="showDeleteDialog(item)"-->
<!--                            >-->
<!--                                <v-icon small>mdi-check-decagram</v-icon>-->
<!--                            </v-btn>-->
                        </template>
                    </v-data-table>
                    <v-dialog v-model="dialog" width="400">
                        <v-card>
                            <div class="text-center pt-2">
<!--                                <v-avatar size="100" color="red lighten-4">-->
<!--                                    <v-icon size="40" color="red">mdi-comment-question</v-icon>-->
<!--                                </v-avatar>-->
                                <h3 class="error--text">Change order status</h3>
                            </div>

                            <v-card-text class="text-center">
                                <v-row class="mt-2">
                                    <v-col
                                        cols="12"
                                        md="12"
                                    >
                                        <v-select
                                            v-model="form_data.status"
                                            :items="status"
                                            :rules="rules.status"
                                            label="Status"
                                            outlined
                                            clearable
                                        ></v-select>
                                    </v-col>
                                </v-row>
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
            total_orders:'',
            total_pending_orders:'',
            total_shipped_orders:'',
            total_delivered_orders:'',
            total_rejected_orders:'',
            total_canceled_orders:'',
            status: ['pending', 'shipped','delivered','canceled','rejected'],
            headers: [
                {
                    text: 'SKU',
                    align: 'start',
                    sortable: false,
                    value: 'SKU',
                },
                {
                    text: 'Total Product',
                    sortable: true,
                    value: 'total_product_quantity',
                },
                {text: 'Total Price', value: 'total_price',sortable: false},
                {text: 'Shipping Type', value: 'shipping_type',sortable: false},
                {text: 'Address', value: 'address',sortable: false},
                {text: 'WhatsApp', value: 'whats_app_number',sortable: false},
                {text: 'Status', value: 'status',sortable: false},
                {text: 'Actions', value: 'action',sortable: false},
            ],
            items: [],
            total:0,
            rules:{
                status: [
                    v => !!v || 'Status is required',
                ]
            },
            form_data:{
                status: '',
            }
        }
    },
    created() {
        this.getAllItemsData()
        this.getOrderCardData()
    },
    methods: {
        async datatableSearch($e){
            if ($e.length >= 3){
                let token = JSON.parse(window.localStorage.getItem('token'))
                await axios.get(`/api/order/search-shipped-order/${$e}?page=${this.page}`, {params:{'per_page':this.per_page},headers: { 'Authorization': 'Bearer ' + token }})
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
                await axios.get(`/api/order/shipped-order?page=${this.page}`, {params:{'per_page':this.per_page},headers: { 'Authorization': 'Bearer ' + token }})
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
            await axios.get(`/api/order/shipped-order?page=${this.page}`, {params:{'per_page':this.per_page},headers: { 'Authorization': 'Bearer ' + token }})
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
            await axios.post(`/api/order/change-status/${this.itemToDelete}`,this.form_data, {headers: { 'Authorization': 'Bearer ' + token }})
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

        async getOrderCardData(){
            let token = JSON.parse(window.localStorage.getItem('token'))
            await axios.get(`/api/order/card/card-data`, {headers: { 'Authorization': 'Bearer ' + token }})
                .then((response)=>{
                    if (response.data.status != 200){
                        console.log(response.data.status)
                    }else {
                        if (response.data.data != null){
                            this.total_orders = response.data.data.total_orders;
                            this.total_pending_orders = response.data.data.total_pending_orders;
                            this.total_shipped_orders = response.data.data.total_shipped_orders;
                            this.total_delivered_orders = response.data.data.total_delivered_orders;
                            this.total_rejected_orders = response.data.data.total_rejected_orders;
                            this.total_canceled_orders = response.data.data.total_canceled_orders;
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
}
.delete-text{
    color: #e57373;
}
.details-text{
    color: #ff9800;
}
.chat-text{
    color: #4caf50;
}

.invoice-text{
    color: #2196f3;
}
.status-text{
    color: #e57373;
}
</style>
