<template>
    <div class="dashboard">
        <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
            <h3 class="text-capitalize">{{this.$route.meta.title}}</h3>
            <v-btn color="indigo" class="white--text" @click="$router.push({ name: 'order' })">
                View Orders
            </v-btn>
        </v-subheader>
        <br>
        <v-row>
            <v-col lg="7" cols="12">
                <v-alert dense text type="success" color="indigo">
                    Login Successfully! Welcome to <strong class="text-capitalize">{{settings.name}} admin</strong>
                </v-alert>
                <v-row>
                    <v-col lg="6" cols="12">
                        <v-card elevation="2" class="rounded-lg">
                            <v-card-text class="d-flex justify-space-between align-center">
                                <div>
                                    <strong>Total Products</strong> <br>
                                </div>
                                <v-avatar size="60" color="cyan lighten-3" style="border: 3px solid #444">
                                    <span style="color: white">{{total_products}} +</span>
                                </v-avatar>
                            </v-card-text>
                            <v-card-actions class="d-flex justify-space-between">
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col lg="6" cols="12">
                        <v-card elevation="2" class="rounded-lg">
                            <v-card-text class="d-flex justify-space-between align-center">
                                <div>
                                    <strong>Total Customer</strong> <br>
                                </div>
                                <v-avatar size="60" color="green darken-2" style="border: 3px solid #444">
                                    <span style="color: white">{{total_customers}} +</span>
                                </v-avatar>
                            </v-card-text>
                            <v-card-actions class="d-flex justify-space-between">
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col lg="6" cols="12">
                        <v-card elevation="2" class="rounded-lg">
                            <v-card-text class="d-flex justify-space-between align-center">
                                <div>
                                    <strong>Total Sale</strong> <br>
                                </div>
                                <v-avatar size="60" color="blue-grey darken-1" style="border: 3px solid #444">
                                    <span style="color: white">{{total_sells}} +</span>
                                </v-avatar>
                            </v-card-text>
                            <v-card-actions class="d-flex justify-space-between">
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col lg="6" cols="12">
                        <v-card elevation="2" class="rounded-lg">
                            <v-card-text class="d-flex justify-space-between align-center">
                                <div>
                                    <strong>Pending Orders</strong> <br>
                                </div>
                                <v-avatar size="60" color="deep-orange darken-1" style="border: 3px solid #444">
                                    <span style="color: white">{{total_pending_orders}} +</span>
                                </v-avatar>
                            </v-card-text>
                            <v-card-actions class="d-flex justify-space-between">
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" lg="5">
                <v-card>
                    <v-card-title>Activities</v-card-title>
                    <v-card-text class="py-0">
                        <v-timeline align-top dense v-if="histories.length">
                            <v-timeline-item :color="history.type === 'order' ? 'indigo' : 'green'" small v-for="(history,index) in histories" :key="index">
                                <strong>{{history.created_at}}</strong>
                                <div class="text-caption">
                                   {{history.message}}
                                </div>
                            </v-timeline-item>
                        </v-timeline>
                        <p v-else>No activities found</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" lg="12">
                <v-card class="pa-15">
                    <v-card-title class="text-capitalize">Monthly Total Order Price</v-card-title>
                    <OrderPriceBarChart/>
                </v-card>
            </v-col>
            <v-col cols="12" lg="4">
                <v-card class="pa-15">
                    <v-card-title>Sale Status</v-card-title>
                    <SaleDoughnutChart/>
                </v-card>
            </v-col>
            <v-col cols="12" lg="8">
                <v-card class="pa-15">
                    <v-card-title>Monthly Sales Graph</v-card-title>
                    <SaleGraphLineChart/>
                </v-card>
            </v-col>
            <v-col cols="12" lg="12">
                <v-card>
                    <v-snackbar top color="green" v-model="success">
                        {{message}}
                    </v-snackbar>
                    <v-snackbar top color="red" v-model="error">
                        {{message}}
                    </v-snackbar>
                    <v-data-table
                        :headers="headers"
                        :items="items"
                        class="elevation-1 py-16 px-10"
                        :loading="loading"
                        :items-per-page="5"
                        :hide-default-footer="true"
                        loading-text="Loading... Please wait"
                    >

                        <template v-slot:top>
                            <v-toolbar flat>
                                <v-toolbar-title class="text-capitalize">Recent Orders</v-toolbar-title>
                                <v-divider
                                    class="mx-4"
                                    inset
                                    vertical
                                ></v-divider>
                            </v-toolbar>
                        </template>
                        <template v-slot:item.status="{ item }">
                            <v-chip
                                :color="item.status == 'pending' ? 'red':'deep-purple accent-4 white--text'"
                                dark
                                class="text-capitalize"
                            >
                                {{ item.status }}
                            </v-chip>
                        </template>
                        <template v-slot:item.action="{ item }">
                            <v-btn color="success" outlined small shaped @click="$router.push({ name: 'show-product',params:{id:item.id} })">View</v-btn>
                        </template>
                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import OrderPriceBarChart from "../components/charts/OrderPriceBarChart";
    import SaleDoughnutChart from "../components/charts/SaleDoughnutChart";
    import SaleGraphLineChart from "../components/charts/SaleGraphLineChart";
    import {mapGetters} from "vuex";
    export default {
        name: "Dashboard",
        components: {SaleGraphLineChart, SaleDoughnutChart, OrderPriceBarChart },
        data() {
            return {
                total_products:'',
                total_customers:'',
                total_sells:'',
                total_pending_orders:'',
                histories:[],
                loaded: false,
                loading:false,
                success:false,
                error:false,
                message:'',
                headers: [
                    {
                        text: 'SKU',
                        align: 'start',
                        sortable: false,
                        value: 'SKU',
                    },
                    {
                        text: 'Total Product',
                        sortable: false,
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
            }
        },
        created() {
            this.getRecentOrderData();
            this.getDashBoardCardData();
            this.getLastHistoryData();
            //console.log('hello from dashboard')
        },
        methods: {
            async getRecentOrderData(){
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
                let token = JSON.parse(window.localStorage.getItem('token'))
                await axios.get(`/api/recent-order-limit`, {headers: { 'Authorization': 'Bearer ' + token }})
                    .then((response)=>{
                        if (response.data.status != 200){
                            this.message = response.data.message;
                            this.error = true;
                        }else {
                            if (response.data.data != null){
                                this.items = response.data.data
                            }

                        }
                    })
                    .catch((error)=>{
                        this.message = 'Something went wrong !';
                        this.error = true;
                    })
            },

            async getLastHistoryData(){
                let token = JSON.parse(window.localStorage.getItem('token'))
                await axios.get(`/api/last-order-history-data`, {headers: { 'Authorization': 'Bearer ' + token }})
                    .then((response)=>{
                        if (response.data.status != 200){
                            console.log(response.data.status)
                        }else {
                            if (response.data.data != null){
                                this.histories = response.data.data
                            }

                        }
                    })
                    .catch((error)=>{
                        this.message = 'Something went wrong !';
                        this.error = true;
                    })
            },

            async getDashBoardCardData(){
                let token = JSON.parse(window.localStorage.getItem('token'))
                await axios.get(`/api/dashboard-card-data`, {headers: { 'Authorization': 'Bearer ' + token }})
                    .then((response)=>{
                        if (response.data.status != 200){
                            console.log(response.data.status)
                        }else {
                            if (response.data.data != null){
                                this.total_products = response.data.data.total_products;
                                this.total_customers = response.data.data.total_customers;
                                this.total_sells = response.data.data.total_sells;
                                this.total_pending_orders = response.data.data.total_pending_orders;
                            }

                        }
                    })
                    .catch((error)=>{
                        this.message = 'Something went wrong !';
                        this.error = true;
                    })
            }
        },
        computed: {
            ...mapGetters({
                settings:'settings'
            })
        },

    }
</script>

<style scoped>

</style>
