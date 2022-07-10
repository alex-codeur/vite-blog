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
        path: '/auth',
        redirect: '/login',
        name: 'auth',
        component: AuthLayout,
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

export default router;