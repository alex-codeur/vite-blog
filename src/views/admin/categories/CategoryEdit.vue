<template>
    <PageComponent>
        <template v-slot:header>
            <div class="flex items-center justify-between">
                <h1 class="text-3xl font-bold text-gray-900">
                    {{ route.params.id ? model.title : "Create a Category" }}
                </h1>

                <button
                    v-if="route.params.id"
                    type="button"
                    @click="deleteCategory()"
                    class="py-2 px-3 text-white bg-red-500 rounded-md hover:bg-red-700"
                >
                    Delete Category
                </button>
            </div>
        </template>
        <div v-if="categoryLoading" class="flex justify-center">Loading...</div>
        <form v-else @submit.prevent="editCategory()">
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
    import { computed, ref, watch } from "vue";
    import { useRoute, useRouter } from "vue-router";
    import store from "../../../store";

    import PageComponent from "../../../components/PageComponent.vue";

    const route = useRoute();
    const router = useRouter();

    const categoryLoading = computed(() => store.state.currentCategory.loading);

    // Create empty category
    let model = ref({
        title: "",
    });

    watch(
        () => store.state.currentCategory.data,
        (newVal, oldVal) => {
            model.value = {
                ...JSON.stringify(newVal),
            }
        }
    );

    if (route.params.id) {
        store.dispatch('getCategory', route.params.id);
    }

     /**
     * Create or update category
     */

    function editCategory() {
        store.dispatch("editCategory", model.value).then(({ data }) => {
            router.push({
                name: "CategoryEdit",
                params: { id: data.data.id },
            });
        });
    }


    function deleteCategory() {
        if (
            confirm(`Are you sure you want to delete this category? Operation can't be undone!!`)
        ) {
            store.dispatch("deleteCategory", model.value.id).then(() => {
                router.push({
                    name: "CategoryList",
                });
            });
        }
    }
</script>