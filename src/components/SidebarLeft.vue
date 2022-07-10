<template>
    <div class="w-3/12">
        <div class="bg-white shadow-sm rounded-sm p-4">
            <h3 class="text-xl font-semibold text-gray-700 font-roboto mb-3">Categories</h3>
            <div class="text-gray-700 space-y-2 font-semibold uppercase text-sm">
                <router-link to="/" class="flex items-center leading-4 hover:text-blue-500 transition">
                    <span class="mr-2">
                        <i class="far fa-folder-open"></i>
                    </span>
                    <span>Beauti</span>
                    <span class="font-normal ml-auto">(12)</span>
                </router-link>
                <router-link to="/" class="flex items-center leading-4 hover:text-blue-500 transition">
                    <span class="mr-2">
                        <i class="far fa-folder-open"></i>
                    </span>
                    <span>Business</span>
                    <span class="font-normal ml-auto">(15)</span>
                </router-link>
                <router-link to="/" class="flex items-center leading-4 hover:text-blue-500 transition">
                    <span class="mr-2">
                        <i class="far fa-folder-open"></i>
                    </span>
                    <span>Fashion</span>
                    <span class="font-normal ml-auto">(5)</span>
                </router-link>
                <router-link to="/" class="flex items-center leading-4 hover:text-blue-500 transition">
                    <span class="mr-2">
                        <i class="far fa-folder-open"></i>
                    </span>
                    <span>Food</span>
                    <span class="font-normal ml-auto">(10)</span>
                </router-link>
                <router-link to="/" class="flex items-center leading-4 hover:text-blue-500 transition">
                    <span class="mr-2">
                        <i class="far fa-folder-open"></i>
                    </span>
                    <span>Learn</span>
                    <span class="font-normal ml-auto">(3)</span>
                </router-link>
                <router-link to="/" class="flex items-center leading-4 hover:text-blue-500 transition">
                    <span class="mr-2">
                        <i class="far fa-folder-open"></i>
                    </span>
                    <span>Music</span>
                    <span class="font-normal ml-auto">(7)</span>
                </router-link>
                <router-link to="/" class="flex items-center leading-4 hover:text-blue-500 transition">
                    <span class="mr-2">
                        <i class="far fa-folder-open"></i>
                    </span>
                    <span>Nature</span>
                    <span class="font-normal ml-auto">(0)</span>
                </router-link>
                <router-link to="/" class="flex items-center leading-4 hover:text-blue-500 transition">
                    <span class="mr-2">
                        <i class="far fa-folder-open"></i>
                    </span>
                    <span>People</span>
                    <span class="font-normal ml-auto">(13)</span>
                </router-link>
                <router-link to="/" class="flex items-center leading-4 hover:text-blue-500 transition">
                    <span class="mr-2">
                        <i class="far fa-folder-open"></i>
                    </span>
                    <span>Sport</span>
                    <span class="font-normal ml-auto">(7)</span>
                </router-link>
                <router-link to="/" class="flex items-center leading-4 hover:text-blue-500 transition">
                    <span class="mr-2">
                        <i class="far fa-folder-open"></i>
                    </span>
                    <span>Technology</span>
                    <span class="font-normal ml-auto">(17)</span>
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
                        <h5 class="text-md leading-5 font-roboto font-semibold group-hover:text-blue-500 transition">
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
                        <h5 class="text-md leading-5 font-roboto font-semibold group-hover:text-blue-500 transition">
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
                        <h5 class="text-md leading-5 font-roboto font-semibold group-hover:text-blue-500 transition">
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
    </div>
</template>

<script>
    export default {
        name: 'SidebarLeft'
    }
</script>