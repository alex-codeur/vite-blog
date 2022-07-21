import { createStore } from "vuex";
import axiosClient from '../axios';

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem('TOKEN'),
        },
        currentPost: {
            loading: false,
            data: {},
        },
        posts: {
            loading: false,
            data: []
        },
    },
    getters: {},
    actions: {
        getPosts({ commit }) {
            commit("setPostsLoading", true);
            return axiosClient.get(`api/post`)
                .then((res) => {
                    commit("setPostsLoading", false);
                    commit("setPosts", res.data);
                    return res;
                });
        },
        getPost({ commit }, id) {
            commit("setCurrentPostLoading", true);
            return axiosClient.get(`api/post/${id}`)
                .then((res) => {
                    commit("setCurrentPost", res.data);
                    commit("setCurrentPostLoading", false);
                    return res;
                })
                .catch((err) => {
                    commit("setCurrentPostLoading", false);
                    throw err;
                });
        },
        savePost({ commit }, post) {
            let response;

            if (post.id) {
                response = axiosClient.put(`api/post/${post.id}`, post)
                    .then((res) => {
                        commit("updatePost", res.data);
                        return res
                    });
            } else {
                response = axiosClient.post(`api/post`, post)
                    .then((res) => {
                        commit("savePost", res.data);
                        return res
                    });
            }

            return response;
        },
        deletePost({}, id) {
            return axiosClient.delete(`api/post/${id}`);
        },
        register({ commit }, user) {
            return axiosClient.post('api/user/register', user)
                .then(({ data }) => {
                    commit('setUser', data);
                    return data;
                });
        },
        login({ commit }, user) {
            return axiosClient.post('api/user/login', user)
                .then(({ data }) => {
                    commit('setUser', data);
                    return data;
                });
        },
        logout({ commit }) {
            return axiosClient.get('api/user/logout')
                .then((response) => {
                    commit('logout');
                    return response;
                });
        },
    },
    mutations: {
        setCurrentPostLoading: (state, loading) => {
            state.currentPost.loading = loading;
        },
        setPostsLoading: (state, loading) => {
            state.posts.loading = loading;
        },
        setCurrentPost: (state, post) => {
            state.currentPost.data = post.data;
        },
        setPosts: (state, posts) => {
            state.posts.data = posts;
        },
        savePost: (state, post) => {
            state.posts = [...state.posts, post.data];
        },
        updatePost: (state, post) => {
            state.posts = state.posts.map((s) => {
                if (s.id == post.data.id) {
                    return post.data;
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