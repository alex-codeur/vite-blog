<template>
    <PageComponent>
        <div class="flex items-center justify-between">
            <h1 class="text-3xl font-bold text-gray-900">
                Create a category
            </h1>
        </div>
        
        <form @submit.prevent="saveCategory" enctype="multipart/form-data">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
                <!-- Course Fields -->
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <!-- Title -->
                    <div>
                        <label for="title" class="block text-sm font-medium text-gray-700">
                            Title
                        </label>
                        <input type="text" id="title" v-model="category.name" autocomplete="course_title" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
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

<script>
import store from '../../../store';

export default {
    name: 'AddCategory',

    data() {
        return {
            category: {
                name: "",
            },
        }
    },
    methods: {
        saveCategory() {
            store.dispatch("saveCategory", this.category).then((res) => {
                // console.log(res.data);
            });

            this.$router.push({
                name: "Categories"
            });
        }
    }
}
</script>