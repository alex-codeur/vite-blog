<template>
    <nav class="bg-white shadow-sm">
        <div class="container mx-auto px-4 py-3 flex items-center justify-between">
            <div class="w-60">
                <router-link :to="{name: 'home'}">
                    <img src="../assets/images/logo-md.svg" alt="logo">
                </router-link>
            </div>
            <div class="lg:ml-5 ml-auto">
                <router-link :to="{name: 'login'}" class="flex items-center text-sm font-semibold hover:text-blue-500 transition">
                    <span class="mr-2">
                        <i class="far fa-user"></i>
                    </span>
                    Login/Register
                </router-link>
            </div>
            <div class="wl-4 block xl:hidden text-xl text-gray-700 cursor-pointer hover:text-blue-500 transition ml-4" @click="sidebar">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar',
        methods: {
            sidebar() {
                document.querySelector("#sidebar_wrapper").classList.remove('opacity-0');
                document.querySelector("#sidebar_wrapper").classList.remove('invisible');
            }
        },
    }
</script>