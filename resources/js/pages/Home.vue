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

/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
    scrollbar-width: auto;
    scrollbar-color: #c3c1e6 #ffffff;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
    width: 6px;
}

*::-webkit-scrollbar-track {
    background: #ffffff;
}

*::-webkit-scrollbar-thumb {
    background-color: #c3c1e6;
    border-radius: 10px;
    border: 1px solid #ffffff;
}
</style>
