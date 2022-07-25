<template>
    <div class="xl:w-6/12 lg:w-8/12 w-full mx-6">
        <div class="flex justify-between bg-white px-2 py-2 items-center rounded-sm mb-5">
            <h5 class="text-base uppercase font-semibold font-roboto">Business</h5>
            <router-link to="/" class="text-white bg-blue-500 px-1 py-1 rounded-sm uppercase text-sm hover:bg-transparent hover:text-blue-500 transition border border-blue-500">
                see more
            </router-link>  
        </div>

        <div
            v-for="post in posts.data.slice(0, 1)"
                :key="post._id" 
        class="bg-white shadow-sm rounded-sm">
            <router-link :to="{ name: 'post', params: { id: post._id } }" class="overflow-hidden block">
                <img :src="`http://localhost:5000/api/images/${post.photo}`" class="w-full h-96 object-cover rounded transform hover:scale-110 transition" alt="photo">
            </router-link>
            <div class="p-4">
                <router-link :to="{ name: 'post', params: { id: post._id } }">
                    <h2 class="text-2xl font-semibold text-gray-700 font-roboto hover:text-blue-500 transition">
                        {{ post.title }}
                    </h2>
                </router-link>
                <p class="text-gray-500 text-sm mt-2">
                    {{ post.description }}
                </p>
                <div class="flex mt-3 space-x-5">
                    <div class="flex items-center text-gray-600 text-sm">
                        <span class="mr-2 text-xs">
                            <i class="far fa-user"></i>
                        </span>
                        Blogging Tips
                    </div>
                    <div class="flex items-center text-gray-600 text-sm">
                        <span class="mr-2 text-xs">
                            <i class="far fa-clock"></i>
                        </span>
                        June 11, 2022
                    </div>
                </div>
            </div>
        </div>

        <div class="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
            <div
                v-for="post in posts.data.slice(0, 4)"
                :key="post._id" 
            class="bg-white p-4 shadow-sm rounded-sm">
                <router-link :to="{ name: 'post', params: { id: post._id } }" class="overflow-hidden block">
                    <img :src="`http://localhost:5000/api/images/${post.photo}`" class="w-full h-50 object-cover rounded transform hover:scale-110 transition duration-500" alt="photo">
                </router-link>
                <div class="mt-3">
                    <router-link :to="{ name: 'post', params: { id: post._id } }">
                        <h2 class="text-xl font-semibold text-gray-700 font-roboto hover:text-blue-500 transition">
                            {{ post.title }}
                        </h2>
                    </router-link>
                    <div class="flex mt-2 space-x-5">
                        <div class="flex items-center text-gray-600 text-sm">
                            <span class="mr-2 text-xs">
                                <i class="far fa-user"></i>
                            </span>
                            Blogging Tips
                        </div>
                        <div class="flex items-center text-gray-600 text-sm">
                            <span class="mr-2 text-xs">
                                <i class="far fa-clock"></i>
                            </span>
                            June 11, 2022
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { computed } from "vue";
    import store from "../../store";

    const posts = computed(() => store.state.posts);


    store.dispatch('getPosts').then((res) => {
        // console.log(res.data)
    });
</script>