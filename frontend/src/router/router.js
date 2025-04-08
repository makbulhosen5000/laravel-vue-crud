
import { createRouter,createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import About from '../views/About.vue';
import Login from '../views/auth/Login.vue';
import Register from '../views/auth/Register.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
    { 
        path:'/',
        component:DefaultLayout,
        children:[
            {
                path:'/',
                name:'Home',
                component:Home
            },
            {
                path:'/about',
                name:'About',
                component:About
            },
            {
                path:'/login',
                name:'Login',
                component:Login
            },
            {
                path:'/register',
                name:'Register',
                component:Register
            }
        ],  
    },
    {
        path:'/:pathMatch(.*)*',
        name:'NotFound',
        component:NotFound
    },

]


const router = createRouter({
    history:createWebHistory(),
    routes:routes
})

export default router;

