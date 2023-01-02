<template>
    <div class="dashboard">
        <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
            <h3 class="text-capitalize">{{this.$route.meta.title}}</h3>
            <v-btn
                color="primary"
                dark
                class="mb-2"
                @click="$router.push({ name: 'category' })"
                link
            >
                All Categories
            </v-btn>
        </v-subheader>
        <br>
        <v-row>
            <v-col cols="12" md="12">
                <v-card
                    class="mx-auto"
                >
                    <v-img
                        class="white--text align-end"
                        height="200px"
                        :src="form_data.banner_image? form_data.banner_image : require('../../assets/banner-default.jpeg')"
                    >
                        <div class="" style="height: 80px;width: 80px;border-radius: 50px;margin-bottom: 15px;margin-left: 15px">
                            <img :src="form_data.thumbnail_image? form_data.thumbnail_image : require('../../assets/thumbnail-default.png')" alt="" style="height: 80px;width: 80px;border-radius: 50px;">
                        </div>
                    </v-img>
                </v-card>
            </v-col>
        </v-row>
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
                        <v-toolbar-title class="">Fill the form</v-toolbar-title>
                    </v-toolbar>
                    <v-form v-model="valid">
                        <v-container>
                            <v-row>
                                <v-col cols="12" md="12">
                                    <v-row>
                                        <v-col
                                            cols="12"
                                            md="6"
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
                                                v-model="form_data.status"
                                                :items="status"
                                                :rules="rules.status"
                                                label="Status"
                                                outlined
                                                clearable
                                            ></v-select>
                                        </v-col>

<!--                                        <v-col-->
<!--                                            cols="12"-->
<!--                                            md="12"-->
<!--                                        >-->
<!--                                            <v-select-->
<!--                                                v-model="form_data.show_in"-->
<!--                                                :items="options"-->
<!--                                                chips-->
<!--                                                label="Where to show"-->
<!--                                                multiple-->
<!--                                                outlined-->
<!--                                            ></v-select>-->
<!--                                        </v-col>-->
                                        <v-col cols="12" md="6">
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

                                        </v-col>

                                        <v-col cols="12" md="6">
                                            <banner-upload field="img"
                                                           langType="en"
                                                           @crop-success="bannerCropSuccess"
                                                           v-model="banner_image_upload"
                                                           :width="1000"
                                                           :height="500"
                                                           img-format="png"></banner-upload>

                                            <v-btn block class="mt-3" @click="toggleBannerImageUpload" color="purple" dark>
                                                <v-icon dark>mdi-cloud-upload</v-icon>
                                                Upload banner
                                            </v-btn>
                                            <p class="red--text" v-if="banner_error">Banner is required</p>
                                        </v-col>
                                    </v-row>
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
    name: "Create",
    components: {
        'thumbnail-upload': upload,
        'banner-upload': upload,
    },
    data: () => ({
        valid: false,
        success:false,
        error:false,
        banner_error:false,
        thumbnail_error:false,
        loading:false,
        message:'',
        status: ['active', 'in-active'],
        thumbnail_image_upload: false,
        banner_image_upload: false,
        //options:["nav-menu","scroller","footer"],
        form_data:{
            name:'',
            status:'',
            //show_in:[],
            thumbnail_image:'',
            banner_image:'',
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
            banner_image: [
                v => !!v || 'Banner is required',
            ],
        },
    }),
    created() {
        //console.log(JSON.parse(window.localStorage.getItem('token')))
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
        toggleBannerImageUpload() {
            this.banner_image_upload = !this.banner_image_upload;
        },
        bannerCropSuccess(imgDataUrl, field) {
            this.form_data.banner_image = imgDataUrl;
            if (this.banner_error = true && this.form_data.banner_image != ''){
                this.banner_error = false;
            }
            //console.log(this.form_data.image)
        },

        async submit(){
            if (this.form_data.thumbnail_image == '' && this.form_data.banner_image == ''){
                this.thumbnail_error = true;
                this.banner_error = true;
                return
            }
            if (this.form_data.thumbnail_image == ''){
                this.thumbnail_error = true;
                return
            }
            if (this.form_data.banner_image == ''){
                this.banner_error = true;
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
                await axios.post('/api/category',this.form_data, {headers: { 'Authorization': 'Bearer ' + token }})
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
        }
    },

}
</script>

<style scoped>

</style>
