<template>
    <v-app id="inspire">
        <div class="backgruond" v-bind:style="{ 'background-image': 'url(' + settings.admin_login_bg + ')' }"></div>
        <v-main class="d-flex justify-center align-center">
            <v-col cols="10" lg="4" class="mx-auto">
                <v-card class="pa-4">
                    <div class="text-center">
                        <v-avatar size="100" color="indigo lighten-4">
                            <v-img
                                aspect-ratio="30"
                                :src="settings.site_logo"
                            />
                        </v-avatar>
                        <h2 class="indigo--text">{{settings.name}}</h2>
                    </div>
                    <v-form @submit.prevent="submitHandler"
                            ref="form"
                            v-model="valid"
                            lazy-validation
                    >
                        <v-card-text>
                            <v-text-field
                                v-model="data.email"
                                :rules="emailRules"
                                type="email"
                                label="Email"
                                placeholder="Email"
                                prepend-inner-icon="mdi-account"
                                required
                            />
                            <v-text-field
                                v-model="data.password"
                                :rules="passwordRules"
                                :type="passwordShow?'text':'password'"
                                label="Password"
                                placeholder="Password"
                                prepend-inner-icon="mdi-key"
                                :append-icon="passwordShow ? 'mdi-eye':'mdi-eye-off'"
                                @click:append="passwordShow = !passwordShow"
                                required
                            />
                        </v-card-text>
                        <v-card-actions class="justify-center">
                            <v-btn :loading="loading" type="submit" color="indigo" :disabled="!valid">
                                <span class="white--text px-8">Login</span>
                            </v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card>
            </v-col>
        </v-main>
        <v-snackbar top color="green" v-model="success">
            {{message}}
        </v-snackbar>
        <v-snackbar top color="red" v-model="error">
            {{message}}
        </v-snackbar>
    </v-app>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    name: "Login",
    data: () => ({
        valid: true,
        loading:false,
        success:false,
        message:'',
        error:false,
        passwordShow:false,
        data:{
            email: null,
            password: null,
        },
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        passwordRules: [
            v => !!v || 'Password is required',
        ],
    }),
    computed: {
        ...mapGetters({
            settings:'settings'
        })
    },
    methods:{
        ...mapActions({
            signIn:"login"
        }),
        submitHandler(){
            if (this.data.email != null && this.data.password != null){

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
                this.signIn(this.data);
                // await axios.post('api/auth/login',{email:this.email,'password':this.password})
                //     .then((response)=>{
                //         if (response.data.token){
                //             localStorage.setItem('token',response.data.token);
                //             localStorage.setItem('loggedIn','loggedIn');
                //             this.$router.push('/home')
                //         }
                //         if (response.data.message){
                //             this.message = response.data.message;
                //             this.error = true;
                //         }
                //     })
                //     .catch((error)=>{
                //         this.message = 'Something went wrong !';
                //         this.error = true;
                //     })



            }else {
                this.loading = true
                setTimeout(()=> {
                    this.loading = false
                    this.message = 'Please give credentials !';
                    this.error = true
                },3000)
            }
        }
    },
    // created(){
    //     this.data.email = 'admin@app.com';
    //     this.data.password = '12345678';
    // }
}
</script>

<style scoped>
.backgruond{
    /*background-image: url(../assets/Order-Banner.jpg) !important;*/
    height: 50vh;
    width: 100%;
    display: block;
    position: absolute;
    top: 0;
    background-size: cover;
}
</style>
