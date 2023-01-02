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
            <v-col>

                <v-card>

                    <v-snackbar top color="green" v-model="success">
                        {{message}}
                    </v-snackbar>
                    <v-snackbar top color="red" v-model="error">
                        {{message}}
                    </v-snackbar>

                    <v-toolbar flat>
                        <v-toolbar-title class="">Edit the form</v-toolbar-title>
                    </v-toolbar>
                    <v-form v-model="valid">
                        <v-container>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-row>
                                        <v-col cols="12" md="12">
                                            <v-row>
                                                <v-col
                                                    cols="12"
                                                    md="12"
                                                >
                                                    <v-text-field
                                                        v-model="form_data.name"
                                                        :rules="rules.name"
                                                        label="Name"
                                                        required
                                                        outlined
                                                        clearable
                                                    ></v-text-field>
                                                </v-col>

                                                <v-col
                                                    cols="12"
                                                    md="6"
                                                >
                                                    <v-select
                                                        v-model="form_data.category_id"
                                                        :items="categories"
                                                        label="Category"
                                                        outlined
                                                        clearable
                                                        @change="loadCategoryBrand"
                                                    ></v-select>
                                                </v-col>
                                                <v-col
                                                    cols="12"
                                                    md="6"
                                                >
                                                    <v-select
                                                        v-model="form_data.brand_id"
                                                        :items="brands"
                                                        label="Brand"
                                                        outlined
                                                        clearable
                                                    ></v-select>
                                                </v-col>

                                                <v-col
                                                    cols="12"
                                                    md="12"
                                                >
                                                    <v-textarea
                                                        v-model="form_data.short_description"
                                                        label="Short Description"
                                                        required
                                                        outlined
                                                        clearable
                                                    ></v-textarea>
                                                </v-col>

                                                <v-col
                                                    cols="12"
                                                    md="12"
                                                >
                                                    <v-textarea
                                                        v-model="form_data.description"
                                                        label="Description"
                                                        required
                                                        outlined
                                                        clearable
                                                    ></v-textarea>
                                                </v-col>

                                                <v-col
                                                    cols="12"
                                                    md="6"
                                                >
                                                    <v-text-field
                                                        v-model="form_data.price"
                                                        :rules="rules.price"
                                                        label="Price"
                                                        type="number"
                                                        required
                                                        outlined
                                                        clearable
                                                    ></v-text-field>
                                                </v-col>

                                                <v-col
                                                    cols="12"
                                                    md="6"
                                                >
                                                    <v-text-field
                                                        v-model="form_data.current_stock"
                                                        label="Stock"
                                                        type="number"
                                                        required
                                                        outlined
                                                        clearable
                                                    ></v-text-field>
                                                </v-col>

                                                <v-col
                                                    cols="12"
                                                    md="6"
                                                >
                                                    <v-text-field
                                                        v-model="form_data.unit"
                                                        label="Unit"
                                                        required
                                                        outlined
                                                        clearable
                                                    ></v-text-field>
                                                </v-col>

                                                <v-col
                                                    cols="12"
                                                    md="6"
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
                                        </v-col>
                                    </v-row>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-card
                                        class="mx-auto"
                                        max-width="300"
                                    >
                                        <v-img
                                            :src="form_data.thumbnail_image? form_data.thumbnail_image : require('../../assets/default_image.png')"
                                            height="300px"
                                        ></v-img>

                                        <v-card-actions>
                                            <thumbnail-upload field="img"
                                                              langType="en"
                                                              @crop-success="thumbnailCropSuccess"
                                                              v-model="thumbnail_image_upload"
                                                              :width="200"
                                                              :height="200"
                                                              img-format="png"></thumbnail-upload>

                                            <v-btn block class="mt-3" @click="toggleThumbnailImageUpload" color="cyan" dark>
                                                <v-icon dark>mdi-cloud-upload</v-icon>
                                                Upload thumbnail
                                            </v-btn>
                                            <p class="red--text" v-if="thumbnail_error">Thumbnail is required</p>
                                        </v-card-actions>
                                    </v-card>

                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>

                    <v-card-actions class="text-right">
                        <v-spacer></v-spacer>
                        <v-btn :loading="loading" type="submit" color="indigo" @click="submit">
                            <span class="white--text px-8">Save</span>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import upload from "vue-image-crop-upload/upload-2";
export default {
    name: "Edit",
    components: {
        'thumbnail-upload': upload,
    },
    data: () => ({
        valid: false,
        success:false,
        error:false,
        thumbnail_error:false,
        loading:false,
        message:'',
        status: ['active', 'in-active'],
        categories: [],
        brands: [],
        thumbnail_image_upload: false,
        banner_image_upload: false,
        form_data:{
            category_id:'',
            brand_id:'',
            name:'',
            short_description:'',
            description:'',
            price:'',
            current_stock:'',
            unit:'',
            status:'',
            thumbnail_image:'',
        },
        rules:{
            name: [
                v => !!v || 'Name is required',
            ],
            status: [
                v => !!v || 'Status is required',
            ],
            thumbnail_image: [
                v => !!v || 'Thumbnail is required',
            ],
            price: [
                v => !!v || 'Price is required',
            ],
        },
    }),
    created() {
        this.getItemData();
        this.loadCategories();
    },
    methods:{
        toggleThumbnailImageUpload() {
            this.thumbnail_image_upload = !this.thumbnail_image_upload;
        },
        thumbnailCropSuccess(imgDataUrl, field) {
            this.form_data.thumbnail_image = imgDataUrl;
            if (this.thumbnail_error = true && this.form_data.thumbnail_image != ''){
                this.thumbnail_error = false;
            }
            //console.log(this.form_data.image)
        },

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
            await axios.get(`/api/product/${this.$route.params.id}`, {headers: { 'Authorization': 'Bearer ' + token }})
                .then((response)=>{
                    if (response.data.status != 200){
                        this.message = response.data.message;
                        this.error = true;
                    }else {
                        if (response.data.item != null){
                            this.form_data.category_id = response.data.item.category.category_id;
                            this.form_data.brand_id = response.data.item.brand.brand_id;
                            this.form_data.name = response.data.item.name;
                            this.form_data.short_description = response.data.item.short_description;
                            this.form_data.description = response.data.item.description;
                            this.form_data.price = response.data.item.price;
                            this.form_data.unit = response.data.item.unit;
                            this.form_data.current_stock = response.data.item.current_stock;
                            this.form_data.status = response.data.item.status;
                            this.form_data.thumbnail_image = response.data.item.thumb;

                            if (this.form_data.category_id){
                                this.loadCategoryBrand();
                            }
                            console.log(response.data.item)
                        }

                    }
                })
                .catch((error)=>{
                    this.message = 'Something went wrong !';
                    this.error = true;
                })
        },
        async submit(){
            if (this.form_data.thumbnail_image == ''){
                this.thumbnail_error = true;
                return
            }
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
                await axios.put(`/api/product/${this.$route.params.id}`,this.form_data, {headers: { 'Authorization': 'Bearer ' + token }})
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
        async loadCategories(){
            let token = JSON.parse(window.localStorage.getItem('token'))
            await axios.get('/api/brand/all/categories', {headers: { 'Authorization': 'Bearer ' + token }})
                .then((response)=>{
                    if (response.data.status != 200){
                        this.message = response.data.message;
                        this.error = true;
                    }else {
                        this.categories = response.data.data.items
                    }
                })
                .catch((error)=>{
                    this.message = 'Something went wrong !';
                    this.error = true;
                })
        },
        async loadCategoryBrand(){
            let category_id = this.form_data.category_id
            let token = JSON.parse(window.localStorage.getItem('token'))
            await axios.get(`/api/product/all/category-brand/${category_id}`, {headers: { 'Authorization': 'Bearer ' + token }})
                .then((response)=>{
                    if (response.data.status != 200){
                        this.message = response.data.message;
                        this.error = true;
                    }else {
                        //console.log(response)
                        this.brands = response.data.data.items
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

</style>
