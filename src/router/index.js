import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Signin from '../components/account/Signin.vue';
import Signup from '../components/account/Signup.vue';
import SignOut from '../components/account/Signout.vue';

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
    path: '/account/signout',
    name: 'SignOut',
    component: SignOut,
},
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;




