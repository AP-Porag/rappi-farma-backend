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
                        <v-tab class="text-left">
                            <v-icon left>
                                mdi-spider-web
                            </v-icon>
                            Common
                            <v-spacer/>
                        </v-tab>
                        <v-tab>
                            <v-icon left>
                                mdi-web
                            </v-icon>
                            Website
                            <v-spacer/>
                        </v-tab>
                        <v-tab class="text-left">
                                <v-icon left>
                                    mdi-security
                                </v-icon>
                                Admin
                            <v-spacer/>
                        </v-tab>

                        <v-tab-item>
                            <v-card flat>
                                <v-card-title>Common Settings</v-card-title>
                                <v-form enctype="multipart/form-data">
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" md="12">
                                                <v-text-field
                                                    v-model="form_data.site_title"
                                                    label="Site Title"
                                                    required
                                                    outlined
                                                    clearable
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12" md="12">
                                                <v-text-field
                                                    v-model="form_data.site_email"
                                                    label="Email Address"
                                                    required
                                                    outlined
                                                    clearable
                                                ></v-text-field>
                                            </v-col>
                                                    <v-col cols="12" md="12">
                                                        <v-text-field
                                                            v-model="form_data.site_contact"
                                                            label="Contact Number"
                                                            required
                                                            outlined
                                                            clearable
                                                        ></v-text-field>
                                                    </v-col>

                                                    <v-col cols="12" md="12">
                                                        <v-text-field
                                                            v-model="form_data.site_address"
                                                            label="Address"
                                                            required
                                                            outlined
                                                            clearable
                                                        ></v-text-field>
                                                    </v-col>

                                                    <v-col cols="12" md="12">
                                                        <v-text-field
                                                            v-model="form_data.site_facebook_link"
                                                            label="Facebook Page Link"
                                                            required
                                                            outlined
                                                            clearable
                                                        ></v-text-field>
                                                    </v-col>

                                                    <v-col cols="12" md="12">
                                                        <v-text-field
                                                            v-model="form_data.site_instagram_link"
                                                            label="Instagram Page Link"
                                                            required
                                                            outlined
                                                            clearable
                                                        ></v-text-field>
                                                    </v-col>

                                                    <v-col cols="12" md="12">
                                                        <v-text-field
                                                            v-model="form_data.site_twitter_link"
                                                            label="Twitter Page Link"
                                                            required
                                                            outlined
                                                            clearable
                                                        ></v-text-field>
                                                    </v-col>

                                                    <v-col cols="12" md="12">
                                                        <div class="custom-file d-flex">
                                                            <div class="">
                                                                <label class="custom-file-label text-left" for="logo-input">Site Logo</label>
                                                                <input type="file" class="custom-file-input" id="logo-input"
                                                                       ref="file" @change="handleLogoFileObject()">
                                                            </div>

                                                            <v-spacer/>
                                                            <img :src="logoImageFileName" width="80" height="80" alt="">
                                                        </div>
                                                    </v-col>
                                                    <v-col cols="12" md="12">
                                                        <div class="custom-file d-flex">
                                                            <div class="">
                                                                <label class="custom-file-label text-left" for="favicon-input">Site Favicon</label>
                                                                <input type="file" class="custom-file-input" id="favicon-input"
                                                                       ref="faviconFile" @change="handleFaviconFileObject()">
                                                            </div>
                                                            <v-spacer/>
                                                            <img :src="faviconImageFileName" width="80" height="80" alt="">
                                                        </div>
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
                                <v-card-title>Website Settings</v-card-title>
                                <v-form enctype="multipart/form-data">
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" md="12">
                                                <div class="custom-file d-flex">
                                                    <div class="">
                                                        <label class="custom-file-label text-left" for="website-login-input">Login Page background</label>
                                                        <input type="file" class="custom-file-input" id="website-login-input"
                                                               ref="WebsiteLoginFile" @change="handleWebsiteLoginFileObject()">
                                                    </div>
                                                    <v-spacer/>
                                                    <img :src="websiteLoginFileName" width="80" height="80" alt="">
                                                </div>
                                            </v-col>
                                            <v-col cols="12" md="12">
                                                <div class="custom-file d-flex">
                                                    <div class="">
                                                        <label class="custom-file-label text-left" for="website-login-input">Registration Page background</label>
                                                        <input type="file" class="custom-file-input" id="website-registration-input"
                                                               ref="WebsiteRegistrationFile" @change="handleWebsiteRegistrationFileObject()">
                                                    </div>

                                                    <v-spacer/>
                                                    <img :src="websiteRegistrationFileName" width="80" height="80" alt="">
                                                </div>
                                            </v-col>
                                            <v-col cols="12" md="12">
                                                <div class="custom-file d-flex">
                                                    <div class="">
                                                        <label class="custom-file-label text-left" for="website-login-input">Customer Profile Page background</label>
                                                        <input type="file" class="custom-file-input" id="website-customer-input"
                                                               ref="WebsiteCustomerProfileBgFile" @change="handleWebsiteCustomerProfileBgFileObject()">
                                                    </div>

                                                    <v-spacer/>

                                                    <img :src="websiteCustomerProfileBgFileName" width="80" height="80" alt="">
                                                </div>
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
                                <v-card-title>Admin Settings</v-card-title>
                                <v-form enctype="multipart/form-data">
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" md="12">
                                                <v-text-field
                                                    v-model="form_data.admin_stock_sku"
                                                    label="Stock SKU"
                                                    required
                                                    outlined
                                                    readonly
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12" md="12">
                                                <v-text-field
                                                    v-model="form_data.admin_order_sku"
                                                    label="Order SKU"
                                                    required
                                                    outlined
                                                    readonly
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12" md="12">
                                                <v-text-field
                                                    v-model="form_data.admin_estimated_delivery_time"
                                                    label="Estimated Delivery Time"
                                                    required
                                                    outlined
                                                    clearable
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12" md="12">
                                                <v-text-field
                                                    v-model="form_data.admin_shipping_charge"
                                                    label="Shipping Charge"
                                                    required
                                                    outlined
                                                    clearable
                                                ></v-text-field>
                                            </v-col>

                                            <v-col cols="12" md="12">
                                                <v-text-field
                                                    v-model="form_data.admin_twilio_order_message"
                                                    label="Twilio message for order"
                                                    required
                                                    outlined
                                                    clearable
                                                ></v-text-field>
                                            </v-col>

                                            <v-col cols="12" md="12">
                                                <v-text-field
                                                    v-model="form_data.twilio_auth_sid"
                                                    label="Twilio Auth SID"
                                                    required
                                                    outlined
                                                    clearable
                                                ></v-text-field>
                                            </v-col>

                                            <v-col cols="12" md="12">
                                                <v-text-field
                                                    v-model="form_data.twilio_auth_token"
                                                    label="Twilio Auth Token"
                                                    required
                                                    outlined
                                                    clearable
                                                ></v-text-field>
                                            </v-col>

                                            <v-col cols="12" md="12">
                                                <v-text-field
                                                    v-model="form_data.twilio_whatsapp_from"
                                                    label="Twilio whatsapp form"
                                                    required
                                                    outlined
                                                    clearable
                                                ></v-text-field>
                                            </v-col>

                                            <v-col cols="12" md="12">
                                                <v-text-field
                                                    v-model="form_data.google_map_api_key"
                                                    label="Google Map Api Key"
                                                    required
                                                    outlined
                                                    clearable
                                                ></v-text-field>
                                            </v-col>

<!--                                            <v-col cols="12" md="12">-->
<!--                                                <v-text-field-->
<!--                                                    v-model="form_data.pusher_app_id"-->
<!--                                                    label="Twilio whatsapp form"-->
<!--                                                    required-->
<!--                                                    outlined-->
<!--                                                    clearable-->
<!--                                                ></v-text-field>-->
<!--                                            </v-col>-->

<!--                                            <v-col cols="12" md="12">-->
<!--                                                <v-text-field-->
<!--                                                    v-model="form_data.pusher_app_key"-->
<!--                                                    label="Twilio whatsapp form"-->
<!--                                                    required-->
<!--                                                    outlined-->
<!--                                                    clearable-->
<!--                                                ></v-text-field>-->
<!--                                            </v-col>-->

<!--                                            <v-col cols="12" md="12">-->
<!--                                                <v-text-field-->
<!--                                                    v-model="form_data.pusher_app_secret"-->
<!--                                                    label="Twilio whatsapp form"-->
<!--                                                    required-->
<!--                                                    outlined-->
<!--                                                    clearable-->
<!--                                                ></v-text-field>-->
<!--                                            </v-col>-->

<!--                                            <v-col cols="12" md="12">-->
<!--                                                <v-text-field-->
<!--                                                    v-model="form_data.pusher_app_cluster"-->
<!--                                                    label="Twilio whatsapp form"-->
<!--                                                    required-->
<!--                                                    outlined-->
<!--                                                    clearable-->
<!--                                                ></v-text-field>-->
<!--                                            </v-col>-->

                                            <v-col cols="12" md="12">
                                                <div class="custom-file d-flex">
                                                    <div class="">
                                                        <label class="custom-file-label text-left" for="admin-login-input">Login Page background</label>
                                                        <input type="file" class="custom-file-input" id="admin-login-input"
                                                               ref="adminLoginFile" @change="handleAdminLoginFileObject()">
                                                    </div>

                                                    <v-spacer/>
                                                    <img :src="adminLoginFileName" width="80" height="80" alt="">
                                                </div>
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
                site_title:'',
                site_email:'',
                site_contact:'',
                site_address:'',
                site_facebook_link:'',
                site_instagram_link:'',
                site_twitter_link:'',
                admin_stock_sku:'',
                admin_order_sku:'',
                admin_shipping_charge:'',
                admin_estimated_delivery_time:'',
                admin_twilio_order_message:'',
                twilio_auth_sid:'',
                twilio_auth_token:'',
                twilio_whatsapp_from:'',
                google_map_api_key:'',
            },

            logoImageFile: null,
            logoImageFileName: null,
            faviconImageFile: null,
            faviconImageFileName: null,

            websiteLoginFile: null,
            websiteLoginFileName: null,
            websiteRegistrationFile: null,
            websiteRegistrationFileName: null,
            websiteCustomerProfileBgFile: null,
            websiteCustomerProfileBgFileName: null,
            adminLoginFile: null,
            adminLoginFileName: null,
        }
    },
    created() {
        this.loadSettings();
    },
    methods:{

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

            let formData = new FormData()
                // WE APPEND THE AVATAR TO THE FORMDATA WE'RE GONNA POST
            formData.append('logoImageFile', this.logoImageFile)
            formData.append('logoImageFileName', this.logoImageFileName)
            formData.append('faviconImageFile', this.faviconImageFile)
            formData.append('faviconImageFileName', this.faviconImageFileName)
            formData.append('websiteLoginFile', this.websiteLoginFile)
            formData.append('websiteLoginFileName', this.websiteLoginFileName)
            formData.append('websiteRegistrationFile', this.websiteRegistrationFile)
            formData.append('websiteRegistrationFileName', this.websiteRegistrationFileName)
            formData.append('websiteCustomerProfileBgFile', this.websiteCustomerProfileBgFile)
            formData.append('websiteCustomerProfileBgFileName', this.websiteCustomerProfileBgFileName)
            formData.append('adminLoginFile', this.adminLoginFile)
            formData.append('adminLoginFileName', this.adminLoginFileName)

            _.each(this.form_data, (value, key) => {
                formData.append(key, value)
            })

            await axios.post('/api/setting/save',formData, {headers: { 'Authorization': 'Bearer ' + token },'content-type':'multipart/form-data;charset=utf-8; boundary='+ Math.random().toString().substr(2)})
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
                        console.log(response.data.data.settings);
                        this.form_data.site_title = response.data.data.settings.site_title;
                        this.form_data.site_email = response.data.data.settings.site_email;
                        this.form_data.site_contact = response.data.data.settings.site_contact;
                        this.form_data.site_address = response.data.data.settings.site_address;
                        this.form_data.site_facebook_link = response.data.data.settings.site_facebook_link;
                        this.form_data.site_instagram_link = response.data.data.settings.site_instagram_link;
                        this.form_data.site_twitter_link = response.data.data.settings.site_twitter_link;

                        this.form_data.admin_stock_sku = response.data.data.settings.admin_stock_sku;
                        this.form_data.admin_order_sku = response.data.data.settings.admin_order_sku;
                        this.form_data.admin_shipping_charge = response.data.data.settings.admin_shipping_charge;
                        this.form_data.admin_twilio_order_message = response.data.data.settings.admin_twilio_order_message;
                        this.form_data.twilio_auth_sid = response.data.data.settings.twilio_auth_sid;
                        this.form_data.twilio_auth_token = response.data.data.settings.twilio_auth_token;
                        this.form_data.twilio_whatsapp_from = response.data.data.settings.twilio_whatsapp_from;
                        this.form_data.google_map_api_key = response.data.data.settings.google_map_api_key;
                        this.form_data.admin_estimated_delivery_time = response.data.data.settings.admin_estimated_delivery_time;


                        this.logoImageFileName = response.data.data.settings.site_logo;
                        this.faviconImageFileName = response.data.data.settings.site_favicon;
                        this.websiteLoginFileName = response.data.data.settings.website_login_bg;
                        this.websiteRegistrationFileName = response.data.data.settings.website_registration_bg;
                        this.websiteCustomerProfileBgFileName = response.data.data.settings.website_customer_profile_bg;
                        this.adminLoginFileName = response.data.data.settings.admin_login_bg;

                    }
                })
                .catch((error)=>{
                    this.message = 'Something went wrong !';
                    this.error = true;
                })
        },
        handleLogoFileObject() {
            this.logoImageFile = this.$refs.file.files[0]
            this.logoImageFileName = this.logoImageFile.name
        },
        handleFaviconFileObject() {
            this.faviconImageFile = this.$refs.faviconFile.files[0]
            this.faviconImageFileName = this.faviconImageFile.name
        },
        handleWebsiteLoginFileObject() {
            this.websiteLoginFile = this.$refs.WebsiteLoginFile.files[0]
            this.websiteLoginFileName = this.websiteLoginFile.name
        },
        handleWebsiteRegistrationFileObject() {
            this.websiteRegistrationFile = this.$refs.WebsiteRegistrationFile.files[0]
            this.websiteRegistrationFileName = this.websiteRegistrationFile.name
        },
        handleWebsiteCustomerProfileBgFileObject() {
            this.websiteCustomerProfileBgFile = this.$refs.WebsiteCustomerProfileBgFile.files[0]
            this.websiteCustomerProfileBgFileName = this.websiteCustomerProfileBgFile.name
        },
        handleAdminLoginFileObject() {
            this.adminLoginFile = this.$refs.adminLoginFile.files[0]
            this.adminLoginFileName = this.adminLoginFile.name
        }
    },
}
</script>

<style>
.v-slide-group__wrapper{
    border-right: 20px solid #f3f9fd !important;
}
.custom-file{
    border: 1px solid #999;
    padding: 10px;
    border-radius: 4px;
}
.custom-file label{
    margin-right: 30px;
}

</style>
