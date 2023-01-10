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

                    <v-toolbar flat>
                        <v-toolbar-title class="">Fill the form</v-toolbar-title>
                    </v-toolbar>
                    <v-form v-model="valid">
                        <v-container>
                            <v-row>
                                <v-col cols="12" md="8">
                                    <v-row>
                                        <v-col
                                            cols="12"
                                            md="6"
                                        >
                                            <v-text-field
                                                v-model="form_data.first_name"
                                                :rules="rules.first_name"
                                                label="First name"
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
                                                v-model="form_data.last_name"
                                                :rules="rules.last_name"
                                                label="Last name"
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
                                                v-model="form_data.username"
                                                label="User Name"
                                                outlined
                                                clearable
                                            ></v-text-field>
                                        </v-col>

                                        <v-col
                                            cols="12"
                                            md="6"
                                        >
                                            <v-text-field
                                                v-model="form_data.email"
                                                :rules="rules.email"
                                                label="E-mail"
                                                required
                                                type="email"
                                                outlined
                                                clearable
                                            ></v-text-field>
                                        </v-col>

                                        <v-col
                                            cols="12"
                                            md="6"
                                        >
                                            <v-text-field
                                                v-model="form_data.phone"
                                                label="Phone"
                                                outlined
                                                clearable
                                            ></v-text-field>
                                        </v-col>

                                        <v-col
                                            cols="12"
                                            md="6"
                                        >
                                            <v-select
                                                v-model="form_data.gender"
                                                :items="gender"
                                                label="Gender"
                                                outlined
                                                clearable
                                            ></v-select>
                                        </v-col>

                                        <v-col
                                            cols="12"
                                            md="6"
                                        >
                                            <v-menu
                                                ref="menu"
                                                v-model="menu"
                                                :close-on-content-click="false"
                                                :return-value.sync="form_data.date_of_birth"
                                                transition="scale-transition"
                                                offset-y
                                                min-width="auto"
                                            >
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-text-field
                                                        v-model="form_data.date_of_birth"
                                                        label="Date of birth"
                                                        append-icon="mdi-calendar"
                                                        readonly
                                                        v-bind="attrs"
                                                        hint="YYYY/MM/DD format"
                                                        v-on="on"
                                                        outlined
                                                    ></v-text-field>
                                                </template>
                                                <v-date-picker
                                                    v-model="form_data.date_of_birth"
                                                    no-title
                                                    scrollable
                                                >
                                                    <v-spacer></v-spacer>
                                                    <v-btn
                                                        text
                                                        color="primary"
                                                        @click="menu = false"
                                                    >
                                                        Cancel
                                                    </v-btn>
                                                    <v-btn
                                                        text
                                                        color="primary"
                                                        @click="$refs.menu.save(form_data.date_of_birth)"
                                                    >
                                                        OK
                                                    </v-btn>
                                                </v-date-picker>
                                            </v-menu>
                                        </v-col>

                                        <v-col
                                            cols="12"
                                            md="6"
                                        >
                                            <v-select
                                                v-model="form_data.user_type"
                                                :items="user_type"
                                                :rules="rules.user_type"
                                                label="User Type"
                                                required
                                                outlined
                                                clearable
                                            ></v-select>
                                        </v-col>

                                        <v-col
                                            cols="12"
                                            md="6"
                                        >
                                            <v-text-field
                                                v-model="form_data.password"
                                                :rules="rules.password"
                                                label="Password"
                                                required
                                                outlined
                                                clearable
                                                type="password"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col
                                            cols="12"
                                            md="6"
                                        >
                                            <v-text-field
                                                v-model="confirmPassword"
                                                :rules="rules.confirmPassword.concat(passwordConfirmationRule)"
                                                label="Confirm password"
                                                required
                                                outlined
                                                clearable
                                                type="password"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-col>
                                <v-col cols="12" md="4">
                                    <v-card
                                        class="mx-auto"
                                        max-width="344"
                                    >
                                        <v-img
                                            :src="form_data.image? form_data.image : '/images/user_default.png'"
                                            height="300px"
                                        ></v-img>
                                        <my-upload field="img"
                                                   langType="en"
                                                   @crop-success="cropSuccess"
                                                   v-model="image_upload"
                                                   :width="200"
                                                   :height="200"
                                                   img-format="png"></my-upload>
                                    </v-card>

                                    <v-btn block class="mt-3" @click="toggleImageUpload" color="cyan" dark>
                                        <v-icon dark>mdi-cloud-upload</v-icon>
                                        Upload
                                    </v-btn>
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
import myUpload from "vue-image-crop-upload/upload-2";
export default {
    name: "Edit",
    components: {
        'my-upload': myUpload
    },
    data: () => ({
        valid: false,
        success:false,
        error:false,
        loading:false,
        message:'',
        menu:false,
        confirmPassword: '',
        gender: ['male', 'female','others'],
        user_type: ['admin', 'driver'],
        image_upload: false,
        form_data:{
            first_name:'',
            last_name:'',
            username:'',
            email:'',
            phone:'',
            gender:'',
            date_of_birth:'',
            user_type:'',
            password:'',
            image:'',
        },
        rules:{
            first_name: [
                v => !!v || 'First name is required',
            ],
            last_name: [
                v => !!v || 'First name is required',
            ],
            email: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
            password: [
                v => !!v || 'Password is required',
                v => v && v.length >= 6 || 'Minimum 6 characters',
            ],
            confirmPassword: [
                v => !!v || 'Confirm password is required',
            ],
            user_type: [
                v => !!v || 'User type is required',
            ],
        },
    }),
    methods:{
        toggleImageUpload() {
            this.image_upload = !this.image_upload;
        },
        cropSuccess(imgDataUrl, field) {
            this.form_data.image = imgDataUrl;
            //console.log(this.form_data.image)
        },
        async getUserData(){
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
            await axios.get(`/api/user/${this.$route.params.id}`, {headers: { 'Authorization': 'Bearer ' + token }})
                .then((response)=>{
                    if (response.data.status != 200){
                        this.message = response.data.message;
                        this.error = true;
                    }else {
                        if (response.data.user != null){
                            this.form_data.first_name = response.data.user.first_name;
                            this.form_data.last_name = response.data.user.last_name;
                            this.form_data.username = response.data.user.username;
                            this.form_data.email = response.data.user.email;
                            this.form_data.phone = response.data.user.phone;
                            this.form_data.gender = response.data.user.gender;
                            this.form_data.date_of_birth = response.data.user.date_of_birth;
                            this.form_data.user_type = response.data.user.user_type;
                            this.form_data.image = response.data.user.avatar;
                        }

                    }
                })
                .catch((error)=>{
                    this.message = 'Something went wrong !';
                    this.error = true;
                })
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
                await axios.put(`/api/user/${this.$route.params.id}`,this.form_data, {headers: { 'Authorization': 'Bearer ' + token }})
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
    computed: {
        passwordConfirmationRule() {
            return () =>
                this.form_data.password === this.confirmPassword || "Password must match";
        }
    },
    created() {
        this.getUserData();
    },


}
</script>

<style scoped>

</style>
