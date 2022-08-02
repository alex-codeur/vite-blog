<template>
    <div class="xl:w-6/12 lg:w-8/12 w-full mx-6">

        <div class="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
            <div
                v-for="survey in surveys.data"
                :key="survey.id" 
            class="bg-white p-4 shadow-sm rounded-sm">
                <img :src="survey.image_url" class="w-full h-50 object-cover rounded transform hover:scale-110 transition duration-500" alt="photo">
                <div class="mt-3">
                    <h2 class="text-xl font-semibold text-gray-700 font-roboto hover:text-blue-500 transition">
                        {{ survey.title }}
                    </h2>
                    <a :href="`/view/survey/${survey.slug}`"
                    target="_blank"
                    class="h-8 w-8 flex items-center justify-center rounded-full border border-transparent text-sm text-indigo-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
                </div>
            </div>
        </div>
        <div class="flex justify-center mt-5">
                <nav class="relative z-0 inline-flex justify-center rounded-md shadow-sm"
                    aria-label="Pagination"
                >
                    <a v-for="(link, i) of surveys.links"
                        :key="i"
                        :disabled="!link.url"
                        href="#"
                        @click="getForPage($event, link)"
                        aria-current="page"
                        class="relative inline-flex items-center px-4 py-2 border text-sm font-medium whitespace-nowrap"
                        :class="[
                            link.active
                                ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50',
                            i === 0 ? 'rounded-l-md' : '',
                            i === surveys.links.length - 1 ? 'rounded-r-md' : '',
                        ]"
                        v-html="link.label"></a>
                </nav>
            </div>
    </div>
</template>

<script setup>
    import { computed } from "vue";
    import store from "../../store";

    const surveys = computed(() => store.state.surveys);


    store.dispatch('getSurveys').then((res) => {
        // console.log(res.data)
    });

    function getForPage(ev, link) {
        ev.preventDefault();
        
        if (!link.url || link.active) {
            return;
        }

        store.dispatch("getSurveys", { url: link.url });
    }
</script>