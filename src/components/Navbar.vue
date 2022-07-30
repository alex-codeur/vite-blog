<template>
    <nav class="bg-white shadow-sm">
        <div class="container mx-auto px-4 py-3 flex items-center">
            <div class="w-60">
                <router-link :to="{name: 'home'}" class="flex">
                    <img src="../assets/images/Logo.jpg" class="w-8" alt="logo"><span class="pl-2 text-gray-600 font-poppins font-bold text-2xl text-start">core</span>
                </router-link>
            </div>

            <div class="ml-12 space-x-5 hidden lg:flex">
                <router-link :to="{name: 'home'}" class="flex items-center font-semibold text-sm hover:text-blue-500 transition">
                    <span class="mr-2">
                        <i class="fas fa-home"></i>
                    </span>
                    Home
                </router-link>
                <router-link :to="{name: 'about'}" class="flex items-center font-semibold text-sm hover:text-blue-500 transition">
                    <span class="mr-2">
                        <i class="far fa-file-alt"></i>
                    </span>
                    About
                </router-link>
                <router-link :to="{name: 'contact'}" class="flex items-center font-semibold text-sm hover:text-blue-500 transition">
                    <span class="mr-2">
                        <i class="fas fa-phone"></i>
                    </span>
                    Contact
                </router-link>
            </div>

            <div class="relative ml-auto hidden lg:block">
                <span class="absolute left-3 top-2 text-sm text-gray-500">
                    <i class="fas fa-search"></i>
                </span>
                <input type="text" placeholder="search..." class="block w-full border-none rounded-3xl pl-11 pr-2 py-2 focus:outline-none bg-gray-100 text-sm text-gray-700 shadow-500">
            </div>
            <div class="lg:ml-5 ml-auto">
                <div v-if="user.pseudo">
                    <router-link :to="{name: 'login'}" class="flex items-center text-sm font-semibold hover:text-blue-500 transition">
                        <span class="mr-2">
                            <i class="far fa-user"></i>
                        </span>
                        {{ user.pseudo }}
                    </router-link>
                    <a 
                        @click="logout"
                        :class="[
                            'cursor-pointer text-gray-700'
                        ]"
                        >sign out</a>
                </div>
                <div v-else>
                    <router-link :to="{name: 'login'}" class="flex items-center text-sm font-semibold hover:text-blue-500 transition">
                        <span class="mr-2">
                            <i class="far fa-user"></i>
                        </span>
                        Login/Register
                    </router-link>
                </div>
                
            </div>
            <div class="wl-4 block xl:hidden text-xl text-gray-700 cursor-pointer hover:text-blue-500 transition ml-4" @click="sidebar">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </nav>
</template>

<script>
    import { useStore } from 'vuex';
    import { computed } from 'vue';
    import { useRouter } from 'vue-router';

    export default {
        name: 'Navbar',
        methods: {
            sidebar() {
                document.querySelector("#sidebar_wrapper").classList.remove('opacity-0');
                document.querySelector("#sidebar_wrapper").classList.remove('invisible');
            }
        },
        setup() {
            const store = useStore();
            const router = useRouter();

            function logout() {
                store.dispatch('logout')
                .then(() => {
                    router.push({
                    name: 'login'
                    });
                });
                
            }

            return {
                user: computed(() => store.state.user.data),
                navigation,
                logout
            }
        }
    }
</script>