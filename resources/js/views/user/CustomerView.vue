<template>
    <div class="dashboard">
        <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
            <h3 class="text-capitalize">Customer Details</h3>
            <v-btn
                color="primary"
                dark
                class="mb-2"
                @click="$router.push({ name: 'customer' })"
                link
            >
                All Customer
            </v-btn>
        </v-subheader>
        <br>
        <v-row>
            <v-col cols="12" md="5">
                <v-card class="">
                    <v-card-title>Customer info</v-card-title>
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                            <tr>
                                <th class="text-left">
                                    Key
                                </th>
                                <th class="text-left">
                                    Value
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Name</td>
                                <td>
                                    {{user.full_name}}
                                </td>
                            </tr>
                            <tr>
                                <td>Avatar</td>
                                <td>
                                    <v-avatar size="36px">
                                        <img
                                            :src="user.avatar"
                                            :alt="user.first_name"
                                        >
                                    </v-avatar>
                                </td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>
                                    {{user.email}}
                                </td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td>
                                    {{user.phone}}
                                </td>
                            </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-card>
                <page-chat :customer="user"/>
            </v-col>
            <v-col cols="12" md="7">
                <v-card class="mb-5">
                    <v-card-title>Order History</v-card-title>
                </v-card>
                <v-card
                    class="mb-5"
                    v-if="orders.length > 0"
                    v-for="(order,index) in orders"
                    :key="order.id">
                    <v-card-title>
                        <div class="">#{{order.SKU}}</div>
                        <v-spacer></v-spacer>
                        <v-chip
                            :color="$helpers.getOrderStatusColor(order.status)"
                            dark
                            class="text-capitalize"
                        >
                            {{order.status}}
                        </v-chip>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                            <tr>
                                <th class="text-left">
                                    Key
                                </th>
                                <th class="text-left">
                                    Value
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Total Product Quantity</td>
                                <td>
                                    {{order.total_product_quantity}}
                                </td>
                            </tr>
                            <tr>
                                <td>Total Price</td>
                                <td>
                                    {{order.total_price}}
                                </td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>
                                    {{order.address}}
                                </td>
                            </tr>
                            <tr>
                                <td>Order Date</td>
                                <td>
                                    {{order.created_at}}
                                </td>
                            </tr>
                            </tbody>
                        </template>
                    </v-simple-table>

                    <v-card-title>Products</v-card-title>
                    <v-simple-table>
<!--                    <v-simple-table>-->
                        <template v-slot:default>
                            <thead>
                            <tr>
                                <th class="text-left">
                                    Image
                                </th>
                                <th class="text-left">
                                    Name
                                </th>
                                <th class="text-left">
                                    Price
                                </th>
                                <th class="text-left">
                                    Quantity
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-if="order.products.length > 0"
                                v-for="(product,index) in order.products"
                                :key="product.id">
                                <td>
                                    <v-avatar size="36px">
                                        <img
                                            :src="product.image"
                                            :alt="product.name"
                                        >
                                    </v-avatar>
                                </td>
                                <td>{{ product.name }}</td>
                                <td>{{ product.price }}</td>
                                <td>{{ product.quantity }}</td>
                            </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import PageChatComponent from "../../components/chat/PageChatComponent";
export default {
    name: "Show",
    components: {
        'page-chat':PageChatComponent
    },
    data: () => ({
        success:false,
        error:false,
        thumbnail_error:false,
        loading:false,
        message:'',
        item:'',
        user:'',
        orders:'',
        //customer:'',
        stocks:[],
        tab: null,
    }),
    created() {
        this.getItemData();
    },
    methods:{
        async getItemData(){
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
            await axios.get(`/api/customer/get/data/${this.$route.params.id}`, {headers: { 'Authorization': 'Bearer ' + token }})
                .then((response)=>{
                    if (response.data.status != 200){
                        this.message = response.data.message;
                        this.error = true;
                    }else {
                            //this.item = response.data.item;
                            this.user = response.data.user;
                            this.orders = response.data.orders;

                    }
                })
                .catch((error)=>{
                    this.message = 'Something went wrong !';
                    this.error = true;
                })
        },

    },

}
</script>

<style scoped>

</style>
