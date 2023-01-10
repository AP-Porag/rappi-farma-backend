<template>
  <v-navigation-drawer v-model="drawer" app>
    <div
      height="140"
      class="pa-4 bg"
    >
      <div class="text-center">
        <v-avatar class="mb-4" color="light" size="64">
          <v-img
            aspect-ratio="30"
            :src="require('../assets/logo.svg')"
          />
        </v-avatar>
        <h2 class="indigo--text">Rappi Farma</h2>
      </div>
    </div>
    <v-divider></v-divider>
    <v-list class="ap-list">
        <div v-for="(link,i) in links" :key="link.id">
            <v-list-item
                @click="$router.push({ name: link.path })"
                link
                v-if="!link.subLinks"
                :class="$route.name == link.path ? 'nav-active':''"
            >
                <v-list-item-icon>
                    <v-icon v-text="link.icon" :class="$route.name == link.path ? 'nav-active':''"></v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title v-text="link.title"></v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-group
                :value="false"
                :prepend-icon="link.icon"
                v-else
            >
                <template v-slot:activator>
                    <v-list-item-title v-text="link.title"></v-list-item-title>
                </template>

                <v-list-item
                    v-for="item in link.subLinks"
                    :key="item.id"
                    @click="$router.push({ name: item.path })"
                    link
                    :class="$route.name == item.path ? 'nav-active':''"
                >
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title" class="ap-submenu"></v-list-item-title>
                    </v-list-item-content>

                </v-list-item>

            </v-list-group>
        </div>

    </v-list>


  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",
  props: ["drawer"],
  data() {
    return {
      links: [
          {id:1,icon:'mdi-microsoft-windows',title:'Dashboard',path:'dashboard'},
          {
              id:2,
              icon:'mdi-shield-crown',
              title:'Administration',
              subLinks: [
                  {
                      id:"2-1",
                      path:'user',
                      title: 'User',
                  },
                  {
                      id:"2-2",
                      path: 'review-registration',
                      title: 'Customer',
                  },
              ],
          },
          {
              id:3,
              icon:'mdi-alert-circle',
              title:'Prerequisites',
              subLinks: [
                  {
                      id:"3-1",
                      path:'category',
                      title: 'Category',
                  },
                  {
                      id:"3-2",
                      path:'brand',
                      title: 'Brand',
                  },
              ],
          },
          {id:4,icon:'mdi-gift-open',title:'Products',path:'product'},
          // {id:5,icon:'mdi-clipboard-list-outline',title:'Orders',path:'order'},
          {
              id:5,
              icon:'mdi-clipboard-list-outline',
              title:'Orders',
              subLinks: [
                  {
                      id:"5-1",
                      path:'order',
                      title: 'All Orders',
                  },
                  {
                      id:"5-2",
                      path:'pending-order',
                      title: 'Pending Orders',
                  },
                  {
                      id:"5-3",
                      path:'shipped-order',
                      title: 'Shipped Orders',
                  },
                  {
                      id:"5-4",
                      path:'delivered-order',
                      title: 'Delivered Orders',
                  },
                  {
                      id:"5-5",
                      path:'canceled-order',
                      title: 'Canceled Orders',
                  },
                  {
                      id:"5-6",
                      path:'rejected-order',
                      title: 'Rejected Orders',
                  },
              ],
          },
          // {id:6,icon:'mdi-truck-delivery',title:'Delivery',path:''},
          // {id:7,icon:'mdi-store-search',title:'Inventory',path:''},
          // {id:8,icon:'mdi-card-account-details-outline',title:'Advertisement',path:''},
          // {
          //     id:9,
          //     icon:'mdi-cog',
          //     title:'Content Management',
          //     subLinks: [
          //         {
          //             id:"9-1",
          //             path:'about',
          //             title: 'Home page settings',
          //         },
          //         {
          //             id:"9-2",
          //             path: '',
          //             title: 'Category settings',
          //         },
          //     ],
          // },
          {id:6,icon:'mdi-cog',title:'Settings',path:'settings'},
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.ap-list{
    padding-bottom: 60px;

    .ap-submenu{
        margin-left: 70px;
    }
}
.bg{
    background: rgb(255,197,185);
    background: linear-gradient(0deg, rgba(255,197,185,0.711922268907563) 0%, rgba(220,246,223,0.6671043417366946) 35%, rgba(255,255,255,0.7539390756302521) 74%), url(http://unblast.com/wp-content/uploads/2021/09/Real-Estate-Agent-Illustration.jpg);
}

.nav-active{
    background: #0030b2;
    color: white!important;
}

</style>
