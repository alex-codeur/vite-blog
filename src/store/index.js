import { createStore } from "vuex";
import axiosClient from '../axios';

const categories = [
    {
        id: 100,
        title: "tech"
    },
    {
        id: 200,
        title: "web design"
    },
    {
        id: 300,
        title: "web app"
    },
    {
        id: 400,
        title: "mobile app"
    },
    {
        id: 500,
        title: "coaching"
    },
];

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem('TOKEN'),
        },
        categories: [...categories],
    },
    getters: {},
    actions: {
        saveCategory({ commit }, category) {
            let response;

            response = axiosClient
                .post(`api/categories`, category)
                .then((res) => {
                    commit("saveCategory", res.data);
                    return res;
                });

            return response;
        },
        editCategory({ commit }, category) {
            let response;

            if (category.id) {
                response = axiosClient
                    .put(`api/categories/${category.id}`, category)
                    .then((res) => {
                        commit("updateCategory", res.data);
                        return res;
                    });
            }

            return response;
        },
        register({ commit }, user) {
            return axiosClient.post('auth/register', user)
                .then(({ data }) => {
                    commit('setUser', data);
                    return data;
                });
        },
        login({ commit }, user) {
            return axiosClient.post('auth/login', user)
                .then(({ data }) => {
                    commit('setUser', data);
                    return data;
                });
        },
        logout({ commit }) {
            return axiosClient.get('auth/logout')
                .then((response) => {
                    commit('logout');
                    return response;
                });
        },
    },
    mutations: {
        saveCategory: (state, category) => {
            state.categories = [...state.categories, category.data];
        },
        editCategory: (state, category) => {
            state.categories = state.categories.map((s) => {
                if (s.id == category.data.id) {
                    return category.data;
                }
                return s;
            });
        },
        logout: (state) => {
            state.user.data = {};
            state.user.token = null;
        },
        setUser: (state, userData) => {
            state.user.token = userData.token;
            state.user.data = userData.user;
            sessionStorage.setItem('TOKEN', userData.token);
        }
    },
    modules: {}
});

export default store;