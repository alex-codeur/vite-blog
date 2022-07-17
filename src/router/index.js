import { createRouter, createWebHistory } from "vue-router";

import * as Public from '../views/public'

import * as Auth from '../views/auth'

import * as Admin from '../views/admin'

import store from "../store";

const routes = [
    {
        path: '/',
        name: 'public',
        component: Public.PublicLayout,
        children: [
            { path: '/', name: 'home', component: Public.Home },
            { path: '/about', name: 'about', component: Public.About },
            { path: '/contact', name: 'contact', component: Public.Contact },
            { path: '/post', name: 'post', component: Public.PostView }
        ]
    },
    {
        path: '/admin',
        name: 'admin',
        component: Admin.AdminLayout,
        meta: { requiresAuth: true },
        children: [
            { path: 'dashboard', name: 'dashboard', component: Admin.Dashboard },
            
            { path: 'users/index', component: Admin.UserIndex },
            { path: 'users/edit/:id', component: Admin.UserEdit },
            { path: 'users/add', component: Admin.UserAdd },

            { path: 'categories/index', name: 'CategoryList', component: Admin.CategoryIndex },
            { path: 'categories/edit/:id', name: 'CategoryEdit', component: Admin.CategoryEdit },
            { path: 'categories/add', name: 'CategoryAdd', component: Admin.CategoryAdd },

            { path: 'courses', name: 'Courses', component: Admin.Courses },
            { path: 'courses/create', name: 'CourseCreate', component: Admin.CourseView },
            { path: 'courses/:id', name: 'CourseView', component: Admin.CourseView },
        ]
    },
    {
        path: '/auth',
        redirect: '/login',
        name: 'auth',
        component: Auth.AuthLayout,
        meta: { isGuest: true },
        children: [
            { path: '/login', name: 'login', component: Auth.Login },
            { path: '/register', name: 'register', component: Auth.Register }
        ]
    },
    {
        path: '/:pathMatch(.*)*', component: Public.NotFound
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