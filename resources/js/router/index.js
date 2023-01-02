import Vue from 'vue';
import vueRouter from 'vue-router';

//import all pages,components and views
import Login from "../pages/Login";
import Invoice from "../pages/Invoice";
import Home from "../pages/Home";
import About from "../views/About";

// const Login = () => import('../views/Dashboard.vue')
// const Home = () => import('../views/Dashboard.vue')
const Dashboard = () => import('../views/Dashboard.vue')

//user components
const UserProfile = () => import('../views/user/Profile.vue')
const UserIndex = () => import('../views/user/Index.vue')
const UserCreate = () => import('../views/user/Create.vue')
const UserEdit = () => import('../views/user/Edit.vue')

//category components
const CategoryIndex = () => import('../views/category/Index.vue')
const CategoryCreate = () => import('../views/category/Create.vue')
const CategoryEdit = () => import('../views/category/Edit.vue')

//brand components
const BrandIndex = () => import('../views/brand/Index.vue')
const BrandCreate = () => import('../views/brand/Create.vue')
const BrandEdit = () => import('../views/brand/Edit.vue')

//product components
const ProductIndex = () => import('../views/product/Index.vue')
const ProductCreate = () => import('../views/product/Create.vue')
const ProductEdit = () => import('../views/product/Edit.vue')
const ProductShow = () => import('../views/product/Show.vue')
const ProductAddStock = () => import('../views/product/AddStock.vue')

//order components
const OrderIndex = () => import('../views/order/Index.vue')
const OrderShow = () => import('../views/order/Show.vue')
const OrderPending = () => import('../views/order/Pending.vue')
const OrderShipped = () => import('../views/order/Shipped.vue')
const OrderDelivered = () => import('../views/order/Delivered.vue')
const OrderCanceled = () => import('../views/order/Canceled.vue')
const OrderRejected = () => import('../views/order/Rejected.vue')

Vue.use(vueRouter);

const router = new vueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'web',
            redirect:'/login'
        },
        {
            path: '/invoice/:id',
            name: 'invoice',
            component: Invoice,
            beforeEnter: (to, from,next) => {
                // reject the navigation
                if (localStorage.getItem('token')){
                    next();
                }else {
                    next('/login')
                }

            },
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            beforeEnter: (to, from,next) => {
                // reject the navigation
                if (localStorage.getItem('token')){
                    next('/home')
                }
                next();

            },
        },
        {
            path: '/home',
            component:Home,
            beforeEnter: (to, from,next) => {
                if (localStorage.getItem('token')){
                    next();
                }else {
                    next('/login')
                }

            },
            children:[
                {
                    path:'',
                    name:'dashboard',
                    meta:{title:'dashboard'},
                    component: Dashboard
                },
                {
                    path:'user',
                    name:'user',
                    meta:{title:'user'},
                    component: UserIndex
                },
                {
                    path:'create-user',
                    name:'create-user',
                    meta:{title:'Create user'},
                    component: UserCreate
                },
                {
                    path:'edit-user/:id',
                    name:'edit-user',
                    meta:{title:'Edit user'},
                    component: UserEdit
                },
                {
                    path:'profile',
                    name:'profile',
                    meta:{title:'profile'},
                    component: UserProfile
                },
                {
                    path:'category',
                    name:'category',
                    meta:{title:'category'},
                    component: CategoryIndex
                },
                {
                    path:'create-category',
                    name:'create-category',
                    meta:{title:'Create category'},
                    component: CategoryCreate
                },
                {
                    path:'edit-category/:id',
                    name:'edit-category',
                    meta:{title:'Edit category'},
                    component: CategoryEdit
                },
                {
                    path:'brand',
                    name:'brand',
                    meta:{title:'brand'},
                    component: BrandIndex
                },
                {
                    path:'create-brand',
                    name:'create-brand',
                    meta:{title:'Create brand'},
                    component: BrandCreate
                },
                {
                    path:'edit-brand/:id',
                    name:'edit-brand',
                    meta:{title:'Edit brand'},
                    component: BrandEdit
                },
                {
                    path:'product',
                    name:'product',
                    meta:{title:'product'},
                    component: ProductIndex
                },
                {
                    path:'create-product',
                    name:'create-product',
                    meta:{title:'Create product'},
                    component: ProductCreate
                },
                {
                    path:'edit-product/:id',
                    name:'edit-product',
                    meta:{title:'Edit product'},
                    component: ProductEdit
                },
                {
                    path:'show-product/:id',
                    name:'show-product',
                    meta:{title:'Show product'},
                    component: ProductShow
                },
                {
                    path:'add-stock',
                    name:'add-stock',
                    meta:{title:'Add stock'},
                    component: ProductAddStock
                },
                {
                    path:'order',
                    name:'order',
                    meta:{title:'order'},
                    component: OrderIndex
                },
                {
                    path:'show-order/:id',
                    name:'show-order',
                    meta:{title:'Show order'},
                    component: OrderShow
                },
                {
                    path:'pending-order',
                    name:'pending-order',
                    meta:{title:'pending order'},
                    component: OrderPending
                },
                {
                    path:'shipped-order',
                    name:'shipped-order',
                    meta:{title:'shipped order'},
                    component: OrderShipped
                },
                {
                    path:'delivered-order',
                    name:'delivered-order',
                    meta:{title:'delivered order'},
                    component: OrderDelivered
                },
                {
                    path:'canceled-order',
                    name:'canceled-order',
                    meta:{title:'canceled-order'},
                    component: OrderCanceled
                },
                {
                    path:'rejected-order',
                    name:'rejected-order',
                    meta:{title:'rejected order'},
                    component: OrderRejected
                },

            ],

        },
    ]
});

router.beforeResolve((to, from, next) => {
    // If this isn't an initial page load.
    if (to.name) {
        // Start the route progress bar.
        NProgress.start()
    }
    next()
})

router.afterEach((to, from) => {
    // Complete the animation of the route progress bar.
    NProgress.done()
})

export default router;
