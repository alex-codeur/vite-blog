<template>
    <div class="xl:w-6/12 lg:w-8/12 w-full mx-6">

        <div class="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
            <div
                v-for="post in posts.data"
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

    const posts = computed(() => store.state.posts.data);


    store.dispatch('getTopPosts').then((res) => {
        // console.log(res.data)
    });
</script>