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
                                <v-col
                                    cols="12"
                                    md="8"
                                >
                                    <v-text-field
                                        v-model="form_data.old_password"
                                        :rules="rules.oldPassword"
                                        label="Old Password"
                                        required
                                        outlined
                                        clearable
                                        type="password"
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    cols="12"
                                    md="8"
                                >
                                    <v-text-field
                                        v-model="form_data.new_password"
                                        :rules="rules.password"
                                        label="New Password"
                                        required
                                        outlined
                                        clearable
                                        type="password"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="8"
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
import {mapGetters, mapMutations} from "vuex";

export default {
    name: "ChangePassword",
    data: () => ({
        valid: false,
        success:false,
        error:false,
        loading:false,
        message:'',
        menu:false,
        confirmPassword: '',
        form_data:{
            old_password:'',
            new_password:'',
        },
        rules:{
            old_password: [
                v => !!v || 'Old password is required',
                v => v && v.length >= 6 || 'Minimum 6 characters',
            ],
            new_password: [
                v => !!v || 'New password is required',
                v => v && v.length >= 6 || 'Minimum 6 characters',
            ],
            confirmPassword: [
                v => !!v || 'Confirm password is required',
            ],
        },
    }),
    methods:{
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
                await axios.post(`/api/user/change-password`,this.form_data, {headers: { 'Authorization': 'Bearer ' + token }})
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
                this.form_data.new_password === this.confirmPassword || "Password must match";
        },
    },
}
</script>

<style scoped>
</style>

