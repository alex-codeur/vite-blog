<template>
    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 p-4">
        <div class="text-center opacity-0 animate-fade-in-down flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50 mt-5">
            <h3>12</h3>
            <div class="font-bold">Utilisateurs</div>
        </div>
        <div class="text-center opacity-0 animate-fade-in-down flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50 mt-5">
            <h3>20</h3>
            <div class="font-bold">Posts</div>
        </div>
        <div class="text-center opacity-0 animate-fade-in-down flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50 mt-5">
            <h3>7</h3>
            <div class="font-bold">Categories</div>
        </div>
    </div>
    <PageComponent title="Dashboard">
        <!-- <pre>{{ data }}</pre> -->
        <div v-if="loading" class="flex justify-center">Loading...</div>
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-gray-700">
            <div style="animation-delay: 0.1s" class="bg-white shadow-md animate-fade-in-down p-3 text-center flex flex-col order-1 lg:order-2">
                <h3 class="text-2xl font-semibold">Total Surveys</h3>
                <div class="text-8xl font-semibold flex-1 flex items-center justify-center">{{ data.totalSurveys }}</div>
            </div>
            <div style="animation-delay: 0.2s" class="bg-white shadow-md animate-fade-in-down p-3 text-center flex flex-col order-2 lg:order-4">
                <h3 class="text-2xl font-semibold">Total Answers</h3>
                <div class="text-8xl font-semibold flex-1 flex items-center justify-center">{{ data.totalAnswers }}</div>
            </div>
            <div class="row-span-2 order-3 lg:order-1 bg-white shadow-md animate-fade-in-down p-4">
                <h3 class="text-2xl font-semibold">Latest Survey</h3>
                <img :src="data.latestSurvey.image_url" class="w-[240px] mx-auto" alt="">
                <h3 class="font-bold text-xl mb-3">{{ data.latestSurvey.title }}</h3>
                <div class="flex justify-between text-sm mb-1">
                    <div>Create Date:</div>
                    <div>{{ data.latestSurvey.created_at }}</div>
                </div>
                <div class="flex justify-between text-sm mb-1">
                    <div>Expire Date:</div>
                    <div>{{ data.latestSurvey.expire_date }}</div>
                </div>
                <div class="flex justify-between text-sm mb-1">
                    <div>Status:</div>
                    <div>{{ data.latestSurvey.status ? 'Active' : 'Draft' }}</div>
                </div>
                <div class="flex justify-between text-sm mb-1">
                    <div>Questions:</div>
                    <div>{{ data.latestSurvey.questions }}</div>
                </div>
                <div class="flex justify-between text-sm mb-3">
                    <div>Answers:</div>
                    <div>{{ data.latestSurvey.answers }}</div>
                </div>
                <div class="flex justify-between">
                    <router-link
                        :to="{ name: 'SurveyView', params: { id: data.latestSurvey.id } }"
                        class="flex py-2 px-4 border border-transparent text-sm rounded-md hover:text-white text-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                        Edit Survey
                    </router-link>

                    <button class="flex py-2 px-4 border border-transparent text-sm rounded-md hover:text-white text-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                        </svg>
                        View Answers
                    </button>
                </div>
            </div>
            <div style="animation-delay: 0.3s" class="row-span-2 order-4 lg:order-3 bg-white shadow-md animate-fade-in-down p-3">
                <div class="flex justify-between items-center mb-3 px-2">
                    <h3 class="text-2xl font-semibold">Latest Answers</h3>

                    <a
                    href="javascript:void(0)"
                    class="text-sm text-blue-500 hover:decoration-blue-500"
                    >
                        view all
                    </a>
                </div>
                <a 
                href="#"
                v-for="answer of data.latestAnswers"
                :key="answer.id"
                class="block p-2 hover:bg-gray-100/90"
                >
                    <div class="font-semibold">{{ answer.survey.title }}</div>
                    <small>
                        Answer Made at:
                        <i class="font-semibold">{{ answer.end_date }}</i>
                    </small>
                </a>
            </div>
        </div>
    </PageComponent>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import PageComponent from "../../components/PageComponent.vue";

const store = useStore();

const loading = computed(() => store.state.dashboard.loading);
const data = computed(() => store.state.dashboard.data);

store.dispatch("getDashboardData");
</script>