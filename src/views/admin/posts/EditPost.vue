<template>
    <PageComponent>
        <template v-slot:header>
            <div class="flex items-center justify-between">
                <h1 class="text-3xl font-bold text-gray-900">
                    {{ route.params.id ? model.title : "Edit a post" }}
                </h1>

                <button 
                    v-if="route.params.id"
                    type="button"
                    @click="deletePost()"
                    class="py-2 px-3 text-white bg-red-500 rounded-md hover:bg-red-600"
                >
                    Delete Post
                </button>
            </div>
        </template>
        <!-- <pre>{{ postLoading }}</pre> -->
        <!-- <div v-if="postLoading" class="flex justify-center">Loading...</div> -->
        <form @submit.prevent="updatePost" enctype="multipart/form-data">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
                <!-- Course Fields -->
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <!-- Image -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700">
                            Image
                        </label>
                        <div class="mt-1 flex items-center">
                            <!-- <img v-if="model.photo" :src="model.photo" :alt="model.title" class="w-64 h-48 object-cover"> -->
                            <span class="flex items-center justify-center h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-[80%] w-[80%] text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" clip-rule="evenodd" />
                                </svg>
                            </span>
                            <button type="button" class="relative overflow-hidden ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <input type="file" ref="file" @change="selectFile" class="absolute left-0 top-0 right-0 bottom-0 opacity-0 cursor-pointer">
                                Change
                            </button>
                        </div>
                    </div>
                    <!-- Title -->
                    <div>
                        <label for="title" class="block text-sm font-medium text-gray-700">
                            old_image
                        </label>
                        <input type="text" name="title" id="title" v-model="post.photo" autocomplete="course_title" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                    </div>
                    <!-- Title -->
                    <div>
                        <label for="title" class="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input type="text" name="title" id="title" v-model="post.username" autocomplete="course_title" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                    </div>
                    <!-- Title -->
                    <div>
                        <label for="title" class="block text-sm font-medium text-gray-700">
                            Title
                        </label>
                        <input type="text" name="title" id="title" v-model="post.title" autocomplete="course_title" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                    </div>
                    <!-- Body -->
                    <div>
                        <label for="body" class="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <div class="mt-1">
                            <textarea name="body" id="body" rows="3" v-model="post.description" autocomplete="course_description" placeholder="Describe your course" class="shadow-sm focus:ring-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"></textarea>
                        </div>
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
    name: 'EditPost',

    data() {
        return {
            post: {
                title: "",
                description: "",
                username: "",
                photo: "",
            },
            file: "",
        }
    },
    created() {
        store.dispatch('getPost', this.$route.params.id).then((res) => {
            this.post = res.data
            // console.log(res.data)
        });
    },
    methods: {
        selectFile() {
            const file = this.$refs.file.files[0];
            file.filename = file.name
            this.file = file;
        },
        async updatePost() {
            const formData = new FormData()

            formData.append('username', this.post.username)
            formData.append('old_image', this.post.photo)
            formData.append('title', this.post.title)
            formData.append('photo', this.file)
            formData.append('description', this.post.description)

            const response = await axiosClient.put(`api/post/${this.$route.params.id}`, formData)
        
            this.$router.push({
                name: "Posts",
                params: {
                    message: response.message
                }
            });
        }
    }
}
</script>