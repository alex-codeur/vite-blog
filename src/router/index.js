import { createRouter, createWebHistory } from "vue-router";

import Home from '../views/public/Home.vue'
import About from '../views/public/About.vue'
import Contact from '../views/public/Contact.vue'
import PostView from '../views/public/PostView.vue'

import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'

import NotFound from '../views/public/NotFound.vue'

import PublicLayout from '../views/public/Layout.vue'
import AuthLayout from '../views/auth/AuthLayout.vue'
import DashboardLayout from '../views/admin/DashboardLayout.vue'
import store from "../store";

const routes = [
    {
        path: '/',
        name: 'public',
        component: PublicLayout,
        children: [
            { path: '/', name: 'home', component: Home },
            { path: '/about', name: 'about', component: About },
            { path: '/contact', name: 'contact', component: Contact },
            { path: '/post', name: 'post', component: PostView }
        ]
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: DashboardLayout,
        meta: { requiresAuth: true },
        children: [
            { path: '/dashboard', name: 'dashboard', component: DashboardLayout },
        ]
    },
    {
        path: '/auth',
        redirect: '/login',
        name: 'auth',
        component: AuthLayout,
        meta: { isGuest: true },
        children: [
            { path: '/login', name: 'login', component: Login },
            { path: '/register', name: 'register', component: Register }
        ]
    },
    {
        path: '/:pathMatch(.*)*', component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({ name: 'login' });
    } else if (store.state.user.token && (to.meta.isGuest)) {
        next({ name: 'home' });
    } else {
        next();
    }
});

export default router;