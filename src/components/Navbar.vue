<template>
    <div>
        <nav class="bg-white shadow-sm">
            <div class="container mx-auto px-4 py-3 flex items-center">
                <div class="w-60">
                    <router-link to="/">
                        <img src="../assets/images/logo-md.svg" alt="logo">
                    </router-link>
                </div>

                <div class="ml-12 flex space-x-5">
                    <router-link to="/" class="flex items-center font-semibold text-sm hover:text-blue-500 transition">
                        <span class="mr-2">
                            <i class="fas fa-home"></i>
                        </span>
                        Home
                    </router-link>
                    <router-link to="/about" class="flex items-center font-semibold text-sm hover:text-blue-500 transition">
                        <span class="mr-2">
                            <i class="far fa-file-alt"></i>
                        </span>
                        About
                    </router-link>
                    <router-link to="/contact" class="flex items-center font-semibold text-sm hover:text-blue-500 transition">
                        <span class="mr-2">
                            <i class="fas fa-phone"></i>
                        </span>
                        Contact
                    </router-link>
                </div>

                <div class="relative ml-auto">
                    <span class="absolute left-3 top-2 text-sm text-gray-500">
                        <i class="fas fa-search"></i>
                    </span>
                    <input type="text" placeholder="search..." class="block w-full border-none rounded-3xl pl-11 pr-2 py-2 focus:outline-none bg-gray-100 text-sm text-gray-700 shadow-500">
                </div>
                <div class="ml-5">
                    <router-link to="/auth" class="flex items-center text-sm font-semibold hover:text-blue-500 transition">
                        <span class="mr-2">
                            <i class="far fa-user"></i>
                        </span>
                        Login/Register
                    </router-link>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>