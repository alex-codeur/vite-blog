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

const courses = [
    {
        id: 100,
        title: "TteCodeholic Youtube Channel Content",
        slug: 'theCodeholic-youtube-channel-content',
        image: "https://pbs.twimg.com/profile_images/1118059535003017221/9ZwEYqj2_400x400.png",
        body: "AUSTIN, Texas - Wiping tears from his eyes at a recent press conference, SpaceX CEO Elon Musk revealed that the reason he's so keen on traveling to Mars is not for the potential benefits to science, but because it's the one place he can think of where no one hates him yet.",
        created_at: "2022-07-16 19:12:00",
        updated_at: "2022-07-16 19:12:00",
    },
    {
        id: 200,
        title: "Elon Musk Admits He Wants to travel to Mars Because No One Hates Him There Yet",
        slug: 'Elon-Musk-Admits-He-Wants-to-travel',
        image: "https://pbs.twimg.com/profile_images/1118059535003017221/9ZwEYqj2_400x400.png",
        body: "AUSTIN, Texas - Wiping tears from his eyes at a recent press conference, SpaceX CEO Elon Musk revealed that the reason he's so keen on traveling to Mars is not for the potential benefits to science, but because it's the one place he can think of where no one hates him yet.",
        created_at: "2022-07-16 19:12:00",
        updated_at: "2022-07-16 19:12:00",
    },
    {
        id: 300,
        title: "Elon Musk Admits He Wants to travel to Mars Because No One Hates Him There Yet",
        slug: 'theCodeholic-youtube-channel-content',
        image: "https://pbs.twimg.com/profile_images/1118059535003017221/9ZwEYqj2_400x400.png",
        body: "AUSTIN, Texas - Wiping tears from his eyes at a recent press conference, SpaceX CEO Elon Musk revealed that the reason he's so keen on traveling to Mars is not for the potential benefits to science, but because it's the one place he can think of where no one hates him yet.",
        created_at: "2022-07-16 19:12:00",
        updated_at: "2022-07-16 19:12:00",
    }
];

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem('TOKEN'),
        },
        // currentCategory: {
        //     loading: false,
        //     data: {},
        // },
        // categories: {
        //     loading: false,
        //     data: []
        // },
        currentCourse: {
            loading: false,
            data: {}
        },
        courses: [...courses],
    },
    getters: {},
    actions: {
        getCourse({ commit }, id) {
            commit("setCurrentCourseLoading", true);
            return axiosClient.get(`api/courses/${id}`)
                .then((res) => {
                    commit("setCurrentCourse", res.data);
                    commit("setCurrentCourseLoading", false);
                    return res;
                })
                .catch((err) => {
                    commit("setCurrentCourseLoading", false);
                    throw err;
                });
        },
        saveCourse({ commit }, course) {
            delete course.imageUrl;
            let response;

            if (course.id) {
                response = axiosClient.put(`api/courses/${course.id}`, course)
                    .then((res) => {
                        commit("updateCourse", res.data);
                        return res;
                    });
            } else {
                response = axiosClient.post("api/courses", course)
                    .then((res) => {
                        commit("saveCourse", res.data);
                        return res;
                    });
            }

            return response;
        },
        // getCategories({ commit }) {
        //     commit("setCategoriesLoading", true);
        //     return axiosClient.get("api/categories").then((res) => {
        //         commit("setCategoriesLoading", false);
        //         commit("setCategories", res.data);
        //         return res;
        //     });
        // },
        // getCategory({ commit }, id) {
        //     commit("setCurrentCategoryLoading", true);
        //     return axiosClient
        //         .get(`api/categories/${id}`)
        //         .then((res) => {
        //             commit("setCurrentCategory", res.data);
        //             commit("setCurrentCategoryLoading", false);
        //             return res;
        //         })
        //         .catch((err) => {
        //             commit("setCurrentCategoryLoading", false);
        //             throw err;
        //         });
        // },
        // saveCategory({ commit }, category) {
        //     let response;

        //     response = axiosClient
        //         .post(`api/categories`, category)
        //         .then((res) => {
        //             commit("saveCategory", res.data);
        //             return res;
        //         });

        //     return response;
        // },
        // editCategory({ commit }, category) {
        //     let response;

        //     if (category.id) {
        //         response = axiosClient
        //             .put(`api/categories/${category.id}`, category)
        //             .then((res) => {
        //                 commit("updateCategory", res.data);
        //                 return res;
        //             });
        //     }

        //     return response;
        // },
        // deleteCategory({}, id) {
        //     return axiosClient.delete(`api/categories/${id}`);
        // },
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
        setCurrentCourseLoading: (state, loading) => {
            state.currentCourse.loading = loading;
        },
        setCurrentCourse: (state, course) => {
            state.currentCourse.data = course.data;
        },
        saveCourse: (state, course) => {
            state.courses = [...state.courses, course.data];
        },
        updateCourse: (state, course) => {
            state.courses = state.courses.map((s) => {
                if (s.id == course.data.id) {
                    return course.data;
                }

                return s;
            });
        },
        // setCurrentCategoryLoading: (state, loading) => {
        //     state.currentCategory.loading = loading;
        // },
        // setCategoriesLoading: (state, loading) => {
        //     state.categories.loading = loading;
        // },
        // setCurrentCategory: (state, category) => {
        //     state.currentCategory.data = category.data;
        // },
        // setCategories: (state, categories) => {
        //     state.categories.data = categories.data;
        // },
        // saveCategory: (state, category) => {
        //     state.categories = [...state.categories, category.data];
        // },
        // updateCategory: (state, category) => {
        //     state.categories = state.categories.map((s) => {
        //         if (s.id == category.data.id) {
        //             return category.data;
        //         }
        //         return s;
        //     });
        // },
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