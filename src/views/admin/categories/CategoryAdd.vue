<template>
    <PageComponent>
        <template v-slot:header>
            <div class="flex items-center justify-between">
                <h1 class="text-3xl font-bold text-gray-900">
                    {{ model.id ? model.title : "Create a Category" }}
                </h1>
            </div>
        </template>
        <form @submit.prevent="saveCategory">
            <!-- Category Fields -->
            <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <!-- Title -->
                    <div>
                        <label for="title" class="block text-sm font-medium text-gray-700">
                            Title
                        </label>
                        <input type="text" name="title" id="title" v-model="model.title" autocomplete="survey_title" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                    </div>

                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </PageComponent>
</template>

<script setup>
    import { ref } from "vue";
    import { useRoute, useRouter } from "vue-router";
    import store from "../../../store";

    import PageComponent from "../../../components/PageComponent.vue";

    const route = useRoute();
    const router = useRouter();

    // Create empty category
    let model = ref({
        title: "",
    });

    if (route.params.id) {
        model.value = store.state.categories.find(
            (s) => s.id === parseInt(route.params.id)
        );
    }

    /**
     * Create or update category
     */

    function saveCategory() {
        store.dispatch("saveCategory", model.value).then(({ data }) => {
            router.push({
                name: "CategoryList",
            });
        });
    }
</script>