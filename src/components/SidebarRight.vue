<template>
    <div class="xl:w-3/12 lg:w-4/12 w-full mt-8 lg:mt-0">
        <div class="bg-white shadow-sm rounded-sm p-4">
            <h3 class="text-xl font-semibold text-gray-700 font-roboto mb-3">Social Plugin</h3>
            <div class="flex gap-2">
                <router-link to="/" class="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                    <i class="fab fa-facebook-f"></i>
                </router-link>
                <router-link to="/" class="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                    <i class="fab fa-twitter"></i>
                </router-link>
                <router-link to="/" class="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                    <i class="fab fa-instagram"></i>
                </router-link>
                <router-link to="/" class="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                    <i class="fab fa-pinterest-p"></i>
                </router-link>
                <router-link to="/" class="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                    <i class="fab fa-linkedin-in"></i>
                </router-link>
            </div>
        </div>

        <div class="bg-white shadow-sm rounded-sm p-4 mt-8">
            <h3 class="text-xl font-semibold text-gray-700 font-roboto mb-2">Popular Posts</h3>
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
            <h3 class="text-xl font-semibold text-gray-700 font-roboto mb-3">Tags</h3>
            <div class="flex flex-wrap gap-2">
                <router-link to="/" class="px-3 py-1 text-sm border border-gray-200 rounded-sm hover:bg-orange-800 hover:text-white transition">
                    Beauti
                </router-link>
                <router-link to="/" class="px-3 py-1 text-sm border border-gray-200 rounded-sm hover:bg-orange-800 hover:text-white transition">
                    Sports
                </router-link>
                <router-link to="/" class="px-3 py-1 text-sm border border-gray-200 rounded-sm hover:bg-orange-800 hover:text-white transition">
                    Business
                </router-link>
                <router-link to="/" class="px-3 py-1 text-sm border border-gray-200 rounded-sm hover:bg-orange-800 hover:text-white transition">
                    Politics
                </router-link>
                <router-link to="/" class="px-3 py-1 text-sm border border-gray-200 rounded-sm hover:bg-orange-800 hover:text-white transition">
                    Computer
                </router-link>
                <router-link to="/" class="px-3 py-1 text-sm border border-gray-200 rounded-sm hover:bg-orange-800 hover:text-white transition">
                    Coding
                </router-link>
                <router-link to="/" class="px-3 py-1 text-sm border border-gray-200 rounded-sm hover:bg-orange-800 hover:text-white transition">
                    Web Design
                </router-link>
                <router-link to="/" class="px-3 py-1 text-sm border border-gray-200 rounded-sm hover:bg-orange-800 hover:text-white transition">
                    Web App
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SidebarRight'
    }
</script>