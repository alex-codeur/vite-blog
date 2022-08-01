import { createStore } from "vuex";
import axiosClient from '../axios';
import axiosSurvey from '../laraxios'

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem('TOKENLARA'),
        },
        userLara: {
            data: {},
            token: sessionStorage.getItem('TOKEN'),
        },
        currentSurvey: {
            loading: false,
            data: {}
        },
        surveys: {
            loading: false,
            data: []
        },
        questionTypes: ["text", "select", "radio", "checkbox", "textarea"],
        currentPost: {
            loading: false,
            data: {},
        },
        posts: {
            loading: false,
            data: []
        },
        currentCategory: {
            loading: false,
            data: {},
        },
        categories: {
            loading: false,
            data: []
        },
    },
    getters: {},
    actions: {
        getSurveys({ commit }) {
            commit('setSurveysLoading', true);
            return axiosSurvey.get("/survey").then((res) => {
                commit('setSurveysLoading', false);
                commit('setSurveys', res.data);
                return res;
            });
        },
        getSurvey({ commit }, id) {
            commit("setCurrentSurveyLoading", true);
            return axiosSurvey.get(`/survey/${id}`)
                .then((res) => {
                    commit("setCurrentSurvey", res.data);
                    commit("setCurrentSurveyLoading", false);
                    return res;
                })
                .catch((err) => {
                    commit("setCurrentSurveyLoading", false);
                    throw err;
                });
        },
        saveSurvey({ commit }, survey) {
            delete survey.image_url;
            let response;
            if (survey.id) {
                response = axiosSurvey.put(`/survey/${survey.id}`, survey)
                    .then((res) => {
                        commit("setCurrentSurvey", res.data);
                        return res;
                    });
            } else {
                response = axiosSurvey.post("/survey", survey).then((res) => {
                    commit("setCurrentSurvey", res.data);
                    return res;
                });
            }

            return response;
        },
        deleteSurvey({}, id) {
            return axiosSurvey.delete(`/survey/${id}`);
        },
        getPosts({ commit }) {
            commit("setPostsLoading", true);
            return axiosClient.get(`api/post`)
                .then((res) => {
                    commit("setPostsLoading", false);
                    commit("setPosts", res.data);
                    return res;
                });
        },
        getTopPosts({ commit }) {
            commit("setPostsLoading", true);
            return axiosClient.get(`api/post/top`)
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

            response = axiosClient.post(`api/post`, post)
                .then((res) => {
                    commit("savePost", res.data);
                    return res
                });

            return response;
        },
        deletePost({}, id) {
            return axiosClient.delete(`api/post/${id}`);
        },
        getCategories({ commit }) {
            commit("setCategoriesLoading", true);
            return axiosClient.get(`api/category`)
                .then((res) => {
                    commit("setCategoriesLoading", false);
                    commit("setCategories", res.data);
                    return res;
                });
        },
        getCategory({ commit }, id) {
            commit("setCurrentCategoryLoading", true);
            return axiosClient.get(`api/category/${id}`)
                .then((res) => {
                    commit("setCurrentCategory", res.data);
                    commit("setCurrentCategoryLoading", false);
                    return res;
                })
                .catch((err) => {
                    commit("setCurrentCategoryLoading", false);
                    throw err;
                });
        },
        saveCategory({ commit }, category) {
            let response;

            response = axiosClient.post(`api/category`, category)
                .then((res) => {
                    commit("saveCategory", res.data);
                    return res
                });

            return response;
        },
        deleteCategory({}, id) {
            return axiosClient.delete(`api/category/${id}`);
        },
        // Laravel
        register({ commit }, user) {
            return axiosSurvey.post('/register', user)
                .then(({ data }) => {
                    commit('setUserLara', data);
                    return data;
                });
        },
        login({ commit }, user) {
            return axiosSurvey.post('/login', user)
                .then(({ data }) => {
                    commit('setUserLara', data);
                    return data;
                });
        },
        logout({ commit }) {
            return axiosSurvey.post('/logout')
                .then(response => {
                    commit('logoutLara');
                    return response;
                });
        },
        // Node js
        registerUser({ commit }, user) {
            return axiosClient.post('api/user/register', user)
                .then(({ data }) => {
                    commit('setUser', data);
                    return data;
                });
        },
        loginUser({ commit }, user) {
            return axiosClient.post('api/user/login', user)
                .then(({ data }) => {
                    commit('setUser', data);
                    return data;
                });
        },
        logoutUser({ commit }) {
            return axiosClient.get('api/user/logout')
                .then(response => {
                    commit('logout');
                    return response;
                });
        },
    },
    mutations: {
        setCurrentSurveyLoading: (state, loading) => {
            state.currentSurvey.loading = loading;
        },
        setCurrentSurvey: (state, survey) => {
            state.currentSurvey.data = survey.data;
        },
        setSurveysLoading: (state, loading) => {
            state.surveys.loading = loading;
        },
        setSurveys: (state, surveys) => {
            state.surveys.data = surveys.data;
        },
        setCurrentPostLoading: (state, loading) => {
            state.currentPost.loading = loading;
        },
        setPostsLoading: (state, loading) => {
            state.posts.loading = loading;
        },
        setCurrentPost: (state, post) => {
            state.currentPost.data = post;
        },
        setPosts: (state, posts) => {
            state.posts.data = posts;
        },
        savePost: (state, post) => {
            state.posts = [...state.posts, post.data];
        },
        setCurrentCategoryLoading: (state, loading) => {
            state.currentCategory.loading = loading;
        },
        setCategoriesLoading: (state, loading) => {
            state.categories.loading = loading;
        },
        setCurrentCategory: (state, category) => {
            state.currentCategory.data = category;
        },
        setCategories: (state, categories) => {
            state.categories.data = categories;
        },
        saveCategory: (state, category) => {
            state.categories = [...state.categories, category.data];
        },
        logout: (state) => {
            state.user.data = {};
            state.user.token = null;
        },
        setUser: (state, userData) => {
            state.user.token = userData.token;
            state.user.data = userData.user;
            sessionStorage.setItem('TOKEN', userData.token);
        },
        logoutLara: (state) => {
            state.userLara.data = {};
            state.userLara.token = null;
        },
        setUserLara: (state, userLaraData) => {
            state.userLara.token = userLaraData.token;
            state.userLara.data = userLaraData.user;
            sessionStorage.setItem('TOKENLARA', userLaraData.token);
        }
    },
    modules: {}
});

export default store;