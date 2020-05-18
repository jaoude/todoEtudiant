import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index.js'
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Signin from '../components/account/Signin.vue';
import Signup from '../components/account/Signup.vue';
import Secure from '../components/account/Secure.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    component: Home,
},
{
    path: '/home',
    name: 'Home',
    component: Home,
},
{
    path: '/about',
    name: 'About',
    component: About,
},
{
    path: '/account/signin',
    name: 'SignIn',
    component: Signin,
},
{
    path: '/account/signup',
    name: 'SignUp',
    component: Signup,
},
{
    path: '/secure',
    name: 'secure',
    component: Secure,
    meta: {
        requiresAuth: true
    }
},
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        next('/login')
    } else {
        next()
    }
})

export default router;




