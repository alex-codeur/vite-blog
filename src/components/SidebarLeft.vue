<template>
    <div class="w-3/12 hidden xl:block">
        <div class="bg-white shadow-sm rounded-sm p-4">
            <h3 class="text-xl font-semibold text-gray-700 font-roboto mb-3">Categories</h3>
            <div class="text-gray-700 space-y-2 font-semibold uppercase text-sm">
                <router-link 
                v-for="category in categories.data"
                :key="category._id" 
                to="/" 
                class="flex items-center leading-4 hover:text-orange-800 transition">
                    <span class="mr-2">
                        <i class="far fa-folder-open"></i>
                    </span>
                    <span>{{ category.name }}</span>
                    <span class="font-normal ml-auto">(12)</span>
                </router-link>
            </div>
        </div>

        <div class="bg-white shadow-sm rounded-sm p-4 mt-8">
            <h3 class="text-xl font-semibold text-gray-700 font-roboto mb-2">Random Posts</h3>
            <div class="space-y-2">
                <router-link to="/" class="flex group">
                    <div class="flex-shrink-0">
                        <img src="../assets/images/igrafikart-4.jpg" class="w-20 h-14 rounded object-cover" alt="photo">
                    </div>
                    <div class="flex-grow pl-3">
                        <h5 class="text-md leading-5 font-roboto font-semibold group-hover:text-orange-800 transition">
                            Team Bitbose geared up to attend Blockchain
                        </h5>
                        <div class="flex text-gray-400 text-sm items-center">
                            <span class="mr-1 text-xs">
                                <i class="far fa-clock"></i>
                            </span>
                            June 11, 2022
                        </div>
                    </div>
                </router-link>
                <router-link to="/" class="flex group">
                    <div class="flex-shrink-0">
                        <img src="../assets/images/grafikart-1.jpg" class="w-20 h-14 rounded object-cover" alt="photo">
                    </div>
                    <div class="flex-grow pl-3">
                        <h5 class="text-md leading-5 font-roboto font-semibold group-hover:text-orange-800 transition">
                            Team Bitbose geared up to attend Blockchain
                        </h5>
                        <div class="flex text-gray-400 text-sm items-center">
                            <span class="mr-1 text-xs">
                                <i class="far fa-clock"></i>
                            </span>
                            June 11, 2022
                        </div>
                    </div>
                </router-link>
                <router-link to="/" class="flex group">
                    <div class="flex-shrink-0">
                        <img src="../assets/images/grafikart-3.jpg" class="w-20 h-14 rounded object-cover" alt="photo">
                    </div>
                    <div class="flex-grow pl-3">
                        <h5 class="text-md leading-5 font-roboto font-semibold group-hover:text-orange-800 transition">
                            Team Bitbose geared up to attend Blockchain
                        </h5>
                        <div class="flex text-gray-400 text-sm items-center">
                            <span class="mr-1 text-xs">
                                <i class="far fa-clock"></i>
                            </span>
                            June 11, 2022
                        </div>
                    </div>
                </router-link>
            </div>
        </div> 

        <div class="bg-white shadow-sm rounded-sm p-4 mt-8">
            <form action="#">
                <div class="space-y-4">
                    <div>
                        <label for="email" class="text-gray-600 mb-2 block">Rejoindre La Newsletter</label>
                        <input type="email" id="email" class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400" placeholder="Enter your email address">
                    </div>
                </div>
                <div class="mt-4">
                    <button type="submit" class="block w-full py-2 text-white bg-orange-800 border border-orange-800 rounded hover:bg-transparent hover:text-orange-800 transition uppercase font-roboto font-medium">
                        Envoyer
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
    import { computed } from "vue";
    import store from "../store";

    const categories = computed(() => store.state.categories.data);


    store.dispatch('getCategories').then((res) => {
        // console.log(res.data)
    });
</script>