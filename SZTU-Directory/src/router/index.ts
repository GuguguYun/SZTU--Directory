import {createRouter,createWebHistory,type RouteRecordRaw} from "vue-router";

import Home from '@/pages/Home.vue';
import Login from '@/pages/Login.vue';
import Root from '@/pages/Root.vue';
import Add from '@/pages/Add.vue';
import Update from '@/pages/Update.vue';
import useRoot from "@/hooks/useRoot";

const {who} = useRoot();

// 定义路由
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: { name: "home" },
    },
    {
        name: 'home',
        path: '/home',
        component: Home,
        beforeEnter: (to,from,next) => {
            const isAdmin = who.value ;
            if(isAdmin){
                next('/root');
            }else{
                next();
            }
        }
    },
    {
        name: "login",
        path: '/login',
        component: Login,
        beforeEnter: (to,from,next) => {
            const isAdmin = who.value ;
            if(isAdmin){
                next('/root');
            }else{
                next();
            }
        }
    },
    {
        name: "add",
        path: "/add",
        component: Add,
        beforeEnter: (to,from,next) => {
            const isAdmin = who.value ;
            if(isAdmin){
                next();
            }else{
                next('/login');
            }
        }
    },
    {
        name: "update",
        path: "/update",
        component: Update,
        beforeEnter: (to,from,next) => {
            const isAdmin = who.value ;
            if(isAdmin){
                next();
            }else{
                next('/home');
            }
        }
    },
    {
        name: "root",
        path: '/root',
        component: Root,
        beforeEnter: (to,from,next) => {
            const isAdmin = who.value ;
            if(isAdmin){
                next();
            }else{
                next('/login');
            }
        }
    }
]

// 创建路由实例
const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;