<template>
    <PageComponent>
        <template v-slot:header>
            <div class="flex justify-between items-center">
                <h1 class="text-3xl font-bold text-gray-900">Surveys</h1>
                <router-link :to="{ name: 'SurveyCreate' }" class="py-2 px-3 text-white bg-emerald-500 rounded-md hover:bg-emerald-600">Add new Survey</router-link>
            </div>
        </template>
        
        <div v-if="surveyLoading" class="flex justify-center">Loading...</div>
        <div v-else>
            <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                <SurveyListItem 
                    v-for="(survey, ind) in surveys.data"
                    :key="survey.id"
                    :survey="survey"
                    class="opacity-0 animate-fade-in-down"
                    :style="{ animationDelay: `${ind * 0.1}s` }"
                    @delete="deleteSurvey(survey)"/>
            </div>
        </div>
    </PageComponent>
</template>

<script setup>
    import store from '../../../store';
    import { computed } from 'vue';
    import PageComponent from '../../../components/PageComponent.vue';
import SurveyListItem from '../../../components/SurveyListItem.vue';

    const surveys = computed(() => store.state.surveys);

    store.dispatch('getSurveys');

    function deleteSurvey(survey) {
        if (confirm(`Are you sure you want to delete this survey? Operation can't be undone!!`)) {
            // delete survey
            store.dispatch('deleteSurvey', survey.id).then(() => {
                store.dispatch('getSurveys');
            });
        }
    }
</script>