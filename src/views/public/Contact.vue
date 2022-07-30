<template>
    <div class="xl:w-6/12 lg:w-8/12 w-full mx-6 bg-white shadow-sm rounded-sm">
        <!-- Login -->
        <div class="container py-16">
            <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
                <h2 class="text-2xl uppercase font-medium mb-1">Formulaire de contact</h2>
                <form action="#">
                    <div class="space-y-4">
                        <div>
                            <label for="fullname" class="text-gray-600 mb-2 block">Full Name</label>
                            <input type="text" id="fullname" class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400" placeholder="John Doe">
                        </div>
                        <div>
                            <label for="email" class="text-gray-600 mb-2 block">Email address</label>
                            <input type="email" id="email" class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400" placeholder="Enter your email address">
                        </div>
                        <div>
                            <label for="email" class="text-gray-600 mb-2 block">Your Message</label>
                            <textarea name="msg" id="msg" cols="10" rows="10" class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400" placeholder="Enter your message"></textarea>
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
        <!-- Login end -->
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