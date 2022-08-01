<template>
    <PageComponent>
        <template v-slot:header>
            <div class="flex justify-between items-center">
                <h1 class="text-3xl font-bold text-gray-900">Surveys</h1>
                <router-link :to="{ name: 'SurveyCreate' }" class="py-2 px-3 text-white bg-emerald-500 rounded-md hover:bg-emerald-600">Add new Survey</router-link>
            </div>
        </template>
        <!-- <pre>{{ surveyLoading }}</pre> -->
        <!-- <div v-if="surveys.loading" class="flex justify-center">Loading...</div> -->
        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            <div
                v-for="survey in surveys"
                        :key="survey.id"
                class="opacity-0 animate-fade-in-down flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50"
                :style="{animationDelay: `${ind * 0.1}s`}"
            >
                <img :src="survey.image" alt="" class="w-full h-48 object-cover">
                <h4 class="mt-4 text-lg font-bold">{{ survey.title }}</h4>
                <div v-html="survey.description"></div>
                <div
                    class="flex justify-between items-center mt-3">
                    <router-link
                        :to="{ name: 'SurveyView', params: { id: survey.id } }"
                        class="flex py-2 px-4 border border-transparent text-sm rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Edit
                    </router-link>
                    <button 
                        v-if="survey.id"
                        type="button"
                        @click="deleteSurvey(survey)"
                        class="h-8 w-8 flex items-center justify-center rounded-full border border-transparent text-sm text-red-500 focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </PageComponent>
</template>

<script setup>
    import store from '../../../store';
    import { computed } from 'vue';
    import PageComponent from '../../../components/PageComponent.vue';

    const surveys = computed(() => store.state.surveys);

    function deleteSurvey(survey) {
        if (confirm(`Are you sure you want to delete this survey? Operation can't be undone!!`)) {
            // delete survey
        }
    }
</script>