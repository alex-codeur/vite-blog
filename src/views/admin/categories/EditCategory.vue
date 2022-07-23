<template>
    <PageComponent>
        <div class="flex items-center justify-between">
            <h1 class="text-3xl font-bold text-gray-900">
                Edit a category
            </h1>
        </div>
        <form @submit.prevent="updateCategory" enctype="multipart/form-data">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
                <!-- Course Fields -->
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <!-- Title -->
                    <div>
                        <label for="title" class="block text-sm font-medium text-gray-700">
                            Title
                        </label>
                        <input type="text" name="title" id="title" v-model="category.name" autocomplete="course_title" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
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
import router from '../../../router';
import axiosClient from '../../../axios';

export default {
    name: 'EditCategory',

    data() {
        return {
            category: {
                name: ""
            },
        }
    },
    created() {
        store.dispatch('getCategory', this.$route.params.id).then((res) => {
            this.category = res.data
            // console.log(this.category.name)
        });
    },
    methods: {
        async updateCategory() {

            const response = await axiosClient.put(`api/category/${this.$route.params.id}`, this.category)
        
            this.$router.push({
                name: "Categories",
                params: {
                    message: response.message
                }
            });
        }
    }
}
</script>