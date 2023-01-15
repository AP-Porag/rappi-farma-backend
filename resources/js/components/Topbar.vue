<template>
  <v-app-bar app elevate-on-scroll elevation="3" color="white">
    <v-app-bar-nav-icon @click="$emit('drawerEvent')"></v-app-bar-nav-icon>
    <v-spacer />
<!--    <v-menu offset-y>-->
<!--      <template v-slot:activator="{ attrs, on }">-->
<!--        <span-->
<!--          class="mx-5 mr-10"-->
<!--          style="cursor: pointer"-->
<!--          v-bind="attrs"-->
<!--          v-on="on"-->
<!--        >-->
<!--          <v-badge :content="histories.length" color="red" offset-y="10" offset-x="10">-->
<!--            <v-icon>mdi-bell</v-icon>-->
<!--          </v-badge>-->
<!--        </span>-->
<!--      </template>-->
<!--      <v-list three-line width="250">-->
<!--        <template v-for="(item, index) in histories">-->
<!--          <v-subheader-->
<!--            v-if="item.header"-->
<!--            :key="item.header"-->
<!--            v-text="item.header"-->
<!--          ></v-subheader>-->

<!--          <v-divider-->
<!--            v-else-if="item.divider"-->
<!--            :key="index"-->
<!--            :inset="item.inset"-->
<!--          ></v-divider>-->

<!--          <v-list-item v-else :key="item.title">-->
<!--            <v-list-item-avatar>-->
<!--              <v-img :src="item.avatar"></v-img>-->
<!--            </v-list-item-avatar>-->

<!--            <v-list-item-content>-->
<!--              <v-list-item-title v-html="item.title"></v-list-item-title>-->
<!--              <v-list-item-subtitle-->
<!--                v-html="item.subtitle"-->
<!--              ></v-list-item-subtitle>-->
<!--            </v-list-item-content>-->
<!--          </v-list-item>-->
<!--        </template>-->
<!--      </v-list>-->
<!--    </v-menu>-->
    <v-menu offset-y>
      <template v-slot:activator="{ attrs, on }">
        <span style="cursor: pointer" v-bind="attrs" v-on="on">
          <v-chip link>
            <v-badge dot bottom color="green" offset-y="10" offset-x="10">
              <v-avatar size="40">
                <v-img :src="user.avatar_url" />
              </v-avatar>
            </v-badge>
            <span class="ml-3">{{user.fullName}}</span>
          </v-chip>
        </span>
      </template>
      <v-list width="250" class="py-0">
        <v-list-item two-line>
          <v-list-item-avatar>
            <img :src="user.avatar_url" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{user.fullName}}</v-list-item-title>
            <v-list-item-subtitle>{{user.user_type}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item link @click="$router.push({ name: 'profile' })">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
              Profile
          </v-list-item-title>
        </v-list-item>
          <v-list-item link @click="$router.push({ name: 'change-password' })">
              <v-list-item-icon>
                  <v-icon>mdi-key</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                  Change Password
              </v-list-item-title>
          </v-list-item>
          <v-list-item
          @click="logout"
          >
              <v-list-item-icon>
                  <v-icon>mdi-logout</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                  Logout
              </v-list-item-title>
          </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import {mapActions,mapGetters} from "vuex";

export default {
  name: "Topbar",
  data() {
    return {
      menus: [
      ],
        histories: [],
    };
  },
    computed: {
        ...mapGetters({
            user:'user'
        })
    },
    created() {
      this.getLastFiveHistory()
    },
    methods:{
        ...mapActions({
            loggedOut:"logout"
        }),
      async logout(){
          await this.loggedOut();
      },
        async getLastFiveHistory(){
            let token = JSON.parse(window.localStorage.getItem('token'))
            await axios.get(`/api/history/get/last-five`, {headers: { 'Authorization': 'Bearer ' + token }})
                .then((response)=>{
                    if (response.data.status != 200){
                        console.log(response.data.status)
                    }else {
                        if (response.data.data != null){
                            this.histories = response.data.data.items
                        }

                    }
                })
                .catch((error)=>{
                    this.message = 'Something went wrong !';
                    this.error = true;
                })
        }
    }
};
</script>

<style scoped></style>
