<template>
    <div class="dashboard">
        <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
            <h3 class="text-capitalize">Order details</h3>
            <v-btn
                color="primary"
                dark
                class="mb-2"
                @click="$router.push({ name: 'order' })"
                link
            >
                All Orders
            </v-btn>
        </v-subheader>
        <br>
        <v-row>
            <v-col cols="12" md="7">
                <v-card>
                    <v-card-title>Order Info</v-card-title>
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
                                <td>Total product</td>
                                <td>{{ item.total_product_quantity }}</td>
                            </tr>
                            <tr>
                                <td>Subtotal</td>
                                <td>{{ item.subtotal }}</td>
                            </tr>
                            <tr>
                                <td>Shipping type</td>
                                <td>{{ item.shipping_type }}</td>
                            </tr>
                            <tr>
                                <td>Shipping charge</td>
                                <td>{{ item.shipping_charge }}</td>
                            </tr>
                            <tr>
                                <td>Total price</td>
                                <td>{{ item.total_price }}</td>
                            </tr>
                            <tr>
                                <td>SKU</td>
                                <td>{{ item.SKU }}</td>
                            </tr>
                            <tr>
                                <td>Discount type</td>
                                <td>{{ item.discount_type }}</td>
                            </tr>
                            <tr>
                                <td>Discount amount</td>
                                <td>{{ item.discount_amount }}</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>{{ item.address }}</td>
                            </tr>
                            <tr>
                                <td>City</td>
                                <td>{{ item.city }}</td>
                            </tr>
                            <tr>
                                <td>Country</td>
                                <td>{{ item.country }}</td>
                            </tr>
                            <tr>
                                <td>Zip code</td>
                                <td>{{ item.zip_code }}</td>
                            </tr>
                            <tr>
                                <td>WhatsApp</td>
                                <td>{{ item.whats_app_number }}</td>
                            </tr>
                            <tr>
                                <td>Status</td>
                                <td>{{ item.status }}</td>
                            </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-card>
            </v-col>
            <v-col cols="12" md="5">
                <v-card>
                    <v-card-title>Ordered product</v-card-title>
                    <v-simple-table>
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
                            <tr v-for="product in item.products" :key="product.id">
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

                <v-card class="mt-5">
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
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "Show",
    components: {
    },
    data: () => ({
        success:false,
        error:false,
        thumbnail_error:false,
        loading:false,
        message:'',
        item:'',
        user:'',
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
            await axios.get(`/api/order/${this.$route.params.id}`, {headers: { 'Authorization': 'Bearer ' + token }})
                .then((response)=>{
                    if (response.data.status != 200){
                        this.message = response.data.message;
                        this.error = true;
                    }else {
                        if (response.data.item != null){
                            this.item = response.data.item;
                            this.user = response.data.item.user;
                        }

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
