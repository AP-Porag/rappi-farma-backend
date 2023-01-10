<template>
    <div class="dashboard">
        <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
            <h3 class="text-capitalize">{{this.$route.meta.title}}</h3>
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

                    <!--tabs-->
                    <v-tabs vertical>
                        <v-tab>
                            <v-icon left>
                                mdi-security
                            </v-icon>
                            Admin
                        </v-tab>
                        <v-tab>
                            <v-icon left>
                                mdi-web
                            </v-icon>
                            Website
                        </v-tab>
                        <v-tab>
                            <v-icon left>
                                mdi-spider-web
                            </v-icon>
                            Global
                        </v-tab>

                        <v-tab-item>
                            <v-card flat>
                                <v-form>
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
                                                                    label="Title"
                                                                    required
                                                                    outlined
                                                                    clearable
                                                                ></v-text-field>
                                                            </v-col>
                                                        </v-row>
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
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-text>

                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-text>

                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs>

                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "index",
    data(){
        return{
            success:false,
            error:false,
            message:'',
            loading:false,

            form_data:{
                category_id:'',
                name:'',
                status:'',
                thumbnail_image:'',
            },
        }
    },
    created() {
        this.loadSettings();
    },
    methods:{
        // toggleThumbnailImageUpload() {
        //     this.thumbnail_image_upload = !this.thumbnail_image_upload;
        // },
        // thumbnailCropSuccess(imgDataUrl, field) {
        //     this.form_data.thumbnail_image = imgDataUrl;
        //     if (this.thumbnail_error = true && this.form_data.thumbnail_image != ''){
        //         this.thumbnail_error = false;
        //     }
        //     //console.log(this.form_data.image)
        // },

        async submit(){
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
            await axios.post('/api/setting/save',this.form_data, {headers: { 'Authorization': 'Bearer ' + token }})
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
        },

        async loadSettings(){
            let token = JSON.parse(window.localStorage.getItem('token'))
            await axios.get('/api/setting/get', {headers: { 'Authorization': 'Bearer ' + token }})
                .then((response)=>{
                    if (response.data.status != 200){
                        this.message = response.data.message;
                        this.error = true;
                    }else {
                        this.form_data.name = response.data.data.settings.name;
                        this.form_data.status = response.data.data.settings.status;
                        this.form_data.thumbnail_image = response.data.data.settings.thumbnail_image;

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

<style>
.v-slide-group__wrapper{
    border-right: 20px solid #f3f9fd !important;
}

</style>
