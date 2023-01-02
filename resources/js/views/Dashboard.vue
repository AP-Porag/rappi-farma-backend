<template>
    <div class="dashboard">
        <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
            <h3 class="text-capitalize">{{this.$route.meta.title}}</h3>
            <v-btn color="success" @click="$router.push({ name: 'order' })">
                View Orders
            </v-btn>
        </v-subheader>
        <br>
        <v-row>
            <v-col lg="7" cols="12">
                <v-alert dense text type="success">
                    Login Successfully! Welcome to <strong class="text-capitalize">Rappi farma admin</strong>
                </v-alert>
                <v-row>
                    <v-col lg="6" cols="12" v-for="(item,index) in activityLog" :key="index">
                        <v-card elevation="2" class="rounded-lg">
                            <v-card-text class="d-flex justify-space-between align-center">
                                <div>
                                    <strong>{{ item.title }}</strong> <br>
                                    <span>Last 3 weeks</span>
                                </div>
                                <v-avatar size="60" :color="item.color" style="border: 3px solid #444">
                                    <span style="color: white">{{item.amount}} +</span>
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
                        <v-timeline align-top dense>
                            <v-timeline-item color="indigo" small>
                                <strong>5 Minuts ago</strong>
                                <div class="text-caption">
                                   You have new order please check this out
                                </div>
                            </v-timeline-item>
                            <v-timeline-item color="green" small>
                                <strong>35 Minuts ago</strong>
                                <div class="text-caption mb-2">
                                    A Product has delivered!
                                </div>
                            </v-timeline-item>

                            <v-timeline-item color="indigo" small>
                                <strong>44 Minuts ago</strong>
                                <div class="text-caption">
                                    You have new order please check this out
                                </div>
                            </v-timeline-item>
                        </v-timeline>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" lg="12">
                <v-card class="pa-15">
                    <v-card-title class="text-capitalize">Monthly stock in and stock out</v-card-title>
                    <StockBarChart/>
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
<!--                <v-card>-->
<!--                    <v-data-table-->
<!--                            caption="Recent Order list"-->
<!--                            :headers="headers"-->
<!--                            :items="desserts"-->
<!--                            :items-per-page="5"-->
<!--                            class="elevation-1"-->
<!--                    >-->
<!--                        <template v-slot:item.action="">-->
<!--                            <v-btn color="success" outlined small shaped >View</v-btn>-->
<!--                        </template>-->
<!--                    </v-data-table>-->
<!--                </v-card>-->
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
                        <template v-slot:item.action="">
                            <v-btn color="success" outlined small shaped >View</v-btn>
                        </template>
                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import StockBarChart from "../components/charts/StockBarChart";
    import SaleDoughnutChart from "../components/charts/SaleDoughnutChart";
    import SaleGraphLineChart from "../components/charts/SaleGraphLineChart";
    export default {
        name: "Dashboard",
        components: {SaleGraphLineChart, SaleDoughnutChart, StockBarChart },
        data() {
            return {
                activityLog: [
                    {title: 'Total Products', amount: 50, icon: 'mdi-account', color: 'cyan lighten-3'},
                    {title: 'Total Customer', amount: 3433, icon: 'mdi-account-group-outline', color: 'green darken-2'},
                    {title: 'Total Sale', amount: 3433, icon: 'mdi-account-group-outline', color: 'blue-grey darken-1'},
                    {
                        title: 'Pending Orders',
                        amount: 3433,
                        icon: 'mdi-account-group-outline',
                        color: 'deep-orange darken-1'
                    },
                ],
                loaded: false,
                stockBarChartData: null,
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
            }
        },
        mounted() {
        },
        methods: {
        },

    }
</script>

<style scoped>

</style>
