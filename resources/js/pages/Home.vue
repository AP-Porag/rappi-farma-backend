<template>
    <v-app id="inspire">
        <Sidebar :drawer="drawer" />
        <Topbar @drawerEvent="drawer = !drawer" />
        <v-main class="ap_main_component">
            <v-container class="py-8 px-6" fluid>
                <router-view></router-view>
            </v-container>
        </v-main>
        <v-snackbar top color="green" v-model="loginSnackBar">
            Login Successfully
        </v-snackbar>
    </v-app>
</template>

<script>
// @ is an alias to /src
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default {
  name: 'Home',
    components: { Topbar, Sidebar },
    data () {
        return{
            cards: ["Today", "Yesterday"],
            drawer: true,
            loginSnackBar:false,
        }
    },
    methods: {},
    mounted() {
      this.loginSnackBar = localStorage.getItem('loggedIn') ? true : false;
      localStorage.removeItem('loggedIn');
    }
}
</script>
<style>
.ap_main_component{
    background: #f3f9fd !important;
    padding-bottom:60px;
}
</style>
