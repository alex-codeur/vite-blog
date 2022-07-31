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
            { path: '/account', name: 'account', component: Public.Account },
            { path: '/contact', name: 'contact', component: Public.Contact },
            { path: '/post/:id', name: 'post', component: Public.PostView }
        ]
    },
    {
        path: '/admin',
        name: 'admin',
        component: Admin.AdminLayout,
        meta: { requiresAuth: true },
        children: [
            { path: 'dashboard', name: 'dashboard', component: Admin.Dashboard },

            { path: 'posts', name: 'Posts', component: Admin.Posts },
            { path: 'posts/create', name: 'PostCreate', component: Admin.AddPost },
            { path: 'posts/edit/:id', name: 'PostEdit', component: Admin.EditPost },

            { path: 'categories', name: 'Categories', component: Admin.Categories },
            { path: 'categories/create', name: 'CategoryCreate', component: Admin.AddCategory },
            { path: 'categories/edit/:id', name: 'CategoryEdit', component: Admin.EditCategory },

            { path: 'surveys', name: 'Surveys', component: Admin.Surveys },
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