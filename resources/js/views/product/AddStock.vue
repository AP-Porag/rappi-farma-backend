<template>
    <div class="dashboard">
        <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
            <h3 class="text-capitalize">{{this.$route.meta.title}}</h3>
            <v-btn
                color="primary"
                dark
                class="mb-2"
                @click="$router.push({ name: 'product' })"
                link
            >
                All Products
            </v-btn>
        </v-subheader>
        <br>
        <v-row>
            <v-col cols="12" md="5">
                <v-card>
                    <v-card-title>Select products</v-card-title>
                    <v-text-field
                        @input="datatableSearch"
                        append-icon="mdi-magnify"
                        label="Search with name or SKU..."
                        single-line
                        hide-details
                        class="datatable-search"
                    ></v-text-field>
                </v-card>
                <v-card v-if="items.length > 0" class="scroll">
                    <v-list-item-group>
                        <v-list-item v-for="item in items" :key="item.id" @click="itemSelected(item.id,item.name,item.thumb)">
                            <v-list-item-avatar>
                                <v-img
                                    aspect-ratio="30"
                                    :src="item.thumb"
                                />
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title v-text="item.name"></v-list-item-title>
                                <v-list-item-subtitle v-text="item.current_stock"></v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-icon>mdi-plus</v-icon>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list-item-group>
                </v-card>
            </v-col>
            <v-col cols="12" md="7">
                <v-card>
                    <v-snackbar top color="green" v-model="success">
                        {{message}}
                    </v-snackbar>
                    <v-snackbar top color="red" v-model="error">
                        {{message}}
                    </v-snackbar>
                    <div class="d-flex justify-space-between pr-4">
                        <v-card-title>Product list to add stock</v-card-title>
                        <v-btn @click="resetProductList" class="mt-4" dark>Reset</v-btn>
                    </div>
                    <v-form v-model="valid">
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                <th class="text-left">
                                    Name
                                </th>
                                <th class="text-left">
                                    Quantity
                                </th>
                                <th class="text-left">
                                    Action
                                </th>
                            </tr>
                                </thead>
                                <tbody v-if="form_data.products.length > 0">
                                    <tr v-for="(product,index) in form_data.products" :key="product.id">
                                <td>{{product.name}}</td>
                                <td>
                                    <v-text-field
                                        class="product_quantity"
                                        v-model="product.quantity"
                                        :rules="rules.quantity"
                                        label="Quantity"
                                        required
                                        clearable
                                    ></v-text-field>
                                </td>
                                <td>
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn
                                                color="red lighten-2"
                                                dark
                                                icon
                                                @click="removeProduct(index)"
                                                v-bind="attrs"
                                                v-on="on"
                                            >
                                                <v-icon small>mdi-delete</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Remove</span>
                                    </v-tooltip>
                                </td>
                            </tr>
                                    <tr class="text-right">
                                <td colspan="100">
                                    <v-btn :loading="loading" type="button" color="indigo" @click="submit">
                                        <span class="white--text px-8">Save</span>
                                    </v-btn>
                                </td>
                            </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "AddStock",
    data: () => ({
        valid: false,
        success:false,
        error:false,
        loading:false,
        message:'',
        items:[],
        rules:{
            quantity: [
                v => !!v || 'Quantity is required',
            ]
        },

        form_data:{
            products:[],
        }
    }),
    methods:{
        async datatableSearch($e){
            if ($e.length >= 3){
                let token = JSON.parse(window.localStorage.getItem('token'))
                await axios.get(`/api/product/search-product-for-stock-add/${$e}`, {headers: { 'Authorization': 'Bearer ' + token }})
                    .then((response)=>{
                        if (response.data.status != 200){
                            this.isLoading = false
                        }else {
                            this.items = response.data.data.items
                            this.isLoading = false
                        }
                    })
                    .catch((error)=>{
                        this.message = 'Something went wrong !';
                        this.error = true;
                        this.isLoading = false
                    })
            }
            if ($e.length <= 2){
                this.items = []
            }

        },

        itemSelected(id,name,thumb){
            let obj = {
                'id':id,
                'name':name,
                'image':thumb,
                'quantity':'',
            };

            this.form_data.products.push(obj)
        },

        resetProductList(){
            this.form_data.products = [];
        },

        removeProduct(index){
            this.form_data.products.splice(index)
        },

        async submit(){
            if (this.valid){

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
                await axios.post('/api/stock/stock-add',this.form_data, {headers: { 'Authorization': 'Bearer ' + token }})
                    .then((response)=>{
                        if (response.data.status != 200){
                            this.message = response.data.message;
                            this.error = true;
                        }else {
                            window.location.reload();
                            this.message = response.data.message;
                            this.success = true;
                        }
                    })
                    .catch((error)=>{
                        this.message = 'Something went wrong !';
                        this.error = true;
                    })

            }else {
                this.loading = true
                setTimeout(()=> {
                    this.loading = false
                    this.message = 'Validation error !';
                    this.error = true
                },3000)
            }
        },
    },

}
</script>

<style scoped>
.scroll {
    height: 400px;
    margin-top: 5px;
    overflow-y: scroll
}
.datatable-search{
    margin-left: 15px;
    margin-right: 15px;
}
.product_quantity{
    width: 150px;
}
</style>
