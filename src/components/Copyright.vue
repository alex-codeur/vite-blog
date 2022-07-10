<template>
    <!-- copyright -->
    <div class="bg-gray-800 py-4">
        <div class="container mx-auto flex items-center justify-between px-4">
            <p class="text-white">&copy; pres2vous - All Rights Reserved</p>
            <img src="../assets/images/logo-sm.svg" alt="payment" class="h-5">
        </div>

        <div class="fixed w-full h-full bg-black left-0 top-0 z-10 xl:hidden bg-opacity-25 opacity-0 invisible transition-all duration-500" id="sidebar_wrapper" @click="desappear">
            <div class="fixed top-0 w-72 h-full bg-white shadow-md z-10 flex flex-col p-4" id="sidebar">
                <div class="relative mb-3">
                    <span class="absolute left-3 top-2 text-sm text-gray-500">
                        <i class="fas fa-search"></i>
                    </span>
                    <input type="text" placeholder="search..." class="block w-full border-none rounded-3xl pl-11 pr-2 py-2 focus:outline-none bg-gray-100 text-sm text-gray-700 shadow-500">
                </div>

                <h3 class="text-xl font-semibold text-gray-700 font-roboto mb-3">Menu</h3>
                <div class="flex flex-col space-y-3 mb-4">
                    <router-link to="/" class="flex font-semibold text-sm hover:text-blue-500 transition">
                        <span class="mr-2">
                            <i class="fas fa-home"></i>
                        </span>
                        Home
                    </router-link>
                    <router-link to="/about" class="flex font-semibold text-sm hover:text-blue-500 transition">
                        <span class="mr-2">
                            <i class="far fa-file-alt"></i>
                        </span>
                        About
                    </router-link>
                    <router-link to="/contact" class="flex font-semibold text-sm hover:text-blue-500 transition">
                        <span class="mr-2">
                            <i class="fas fa-phone"></i>
                        </span>
                        Contact
                    </router-link>
                </div>

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
        </div>
    </div>
    <!-- copyright end -->
</template>

<script>
    export default {
        name: 'Copyright',
        methods: {
            desappear() {
                document.querySelector("#sidebar_wrapper").classList.add('opacity-0');
                document.querySelector("#sidebar_wrapper").classList.add('invisible');
            }
        }
    }
</script>