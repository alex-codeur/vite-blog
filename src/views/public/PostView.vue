<template>
    <div class="xl:w-6/12 lg:w-8/12 w-full mx-6">

        <div class="bg-white shadow-sm rounded-sm">
            <router-link to="" class="overflow-hidden block">
                <img :src="`http://localhost:5000/api/images/${post.photo}`" class="w-full h-96 object-cover rounded transform hover:scale-110 transition" alt="photo">
            </router-link>
            <div class="p-4">
                <router-link to="/">
                    <h2 class="text-2xl font-semibold text-gray-700 font-roboto hover:text-blue-500 transition">
                        {{ post.title }}
                    </h2>
                </router-link>
                <p class="text-gray-500 text-sm mt-2">
                    {{ post.description }}
                </p>
            </div>
        </div>

        <div class="flex justify-between bg-white px-2 py-2 items-center rounded-sm mb-5 mt-8">
            <h5 class="text-base uppercase font-semibold font-roboto">Related Posts</h5>
            <router-link to="/" class="text-white bg-blue-500 px-1 py-1 rounded-sm uppercase text-sm hover:bg-transparent hover:text-blue-500 transition border border-blue-500">
                see more
            </router-link>  
        </div>

        <div class="grid md:grid-cols-3 grid-cols-1 gap-4 mt-4">
            <div class="bg-white p-3 shadow-sm rounded-sm">
                <router-link to="/" class="overflow-hidden block">
                    <img src="../../assets/images/js-9.jpg" class="w-full h-30 object-cover rounded transform hover:scale-110 transition duration-500" alt="photo">
                </router-link>
                <div class="mt-3">
                    <router-link to="/">
                        <h2 class="text-base font-semibold text-gray-700 font-roboto hover:text-blue-500 transition">
                            Lorem ipsum dolor sit amet consectetur.
                        </h2>
                    </router-link>
                    <div class="flex mt-2 space-x-1">
                        <div class="flex items-center text-gray-600 text-xs">
                            <span class="mr-1 text-xs">
                                <i class="far fa-user"></i>
                            </span>
                            Blogging Tips
                        </div>
                        <div class="flex items-center text-gray-600 text-xs">
                            <span class="mr-1 text-xs">
                                <i class="far fa-clock"></i>
                            </span>
                            June 11, 2022
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white p-3 shadow-sm rounded-sm">
                <router-link to="/" class="overflow-hidden block">
                    <img src="../../assets/images/igrafikart-4.jpg" class="w-full h-30 object-cover rounded transform hover:scale-110 transition duration-500" alt="photo">
                </router-link>
                <div class="mt-3">
                    <router-link to="/">
                        <h2 class="text-base font-semibold text-gray-700 font-roboto hover:text-blue-500 transition">
                            Lorem ipsum dolor sit amet consectetur.
                        </h2>
                    </router-link>
                    <div class="flex mt-2 space-x-1">
                        <div class="flex items-center text-gray-600 text-xs">
                            <span class="mr-1 text-xs">
                                <i class="far fa-user"></i>
                            </span>
                            Blogging Tips
                        </div>
                        <div class="flex items-center text-gray-600 text-xs">
                            <span class="mr-1 text-xs">
                                <i class="far fa-clock"></i>
                            </span>
                            June 11, 2022
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white p-3 shadow-sm rounded-sm">
                <router-link to="/" class="overflow-hidden block">
                    <img src="../../assets/images/grafikart-3.jpg" class="w-full h-30 object-cover rounded transform hover:scale-110 transition duration-500" alt="photo">
                </router-link>
                <div class="mt-3">
                    <router-link to="/">
                        <h2 class="text-base font-semibold text-gray-700 font-roboto hover:text-blue-500 transition">
                            Lorem ipsum dolor sit amet consectetur.
                        </h2>
                    </router-link>
                    <div class="flex mt-2 space-x-1">
                        <div class="flex items-center text-gray-600 text-xs">
                            <span class="mr-1 text-xs">
                                <i class="far fa-user"></i>
                            </span>
                            Blogging Tips
                        </div>
                        <div class="flex items-center text-gray-600 text-xs">
                            <span class="mr-1 text-xs">
                                <i class="far fa-clock"></i>
                            </span>
                            June 11, 2022
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-white p-4 rounded-sm shadow-sm mt-8">
            <h5 class="text-base uppercase font-semibold font-roboto">Post a Comment</h5>
            <p class="text-sm text-gray-500 mb-4">12 comments</p>
            <!-- <pre>{{ user }}</pre> -->

            <form @submit.prevent="saveComment" class="my-5">
                <h5 class="text-base mb-1">Comment</h5>
                <input type="hidden" v-model="comment.commenterId" class="w-full border border-gray-200 py-3 px-5 text-sm rounded-sm focus:border-gray-400">
                <input type="hidden" v-model="comment.commenterPseudo" class="w-full border border-gray-200 py-3 px-5 text-sm rounded-sm focus:border-gray-400">
                <textarea v-model="comment.text" name="comment" placeholder="type your comment" class="w-full border border-gray-200 py-3 px-5 text-sm rounded-sm focus:border-gray-400"></textarea>
                <button class="inline-block mt-2 text-white px-3 py-2 text-sm border border-gray-200 rounded-sm shadow-sm bg-blue-500 hover:bg-transparent hover:text-blue-500 uppercase transition">Submit</button>
            </form>

            <div class="space-y-4">
                <div 
                v-for="comment in post.comments"
                :key="comment._id"
                class="flex items-start border-b pb-5 border-gray-200">
                    <div class="flex-shrink-0">
                        <img src="../../assets/images/alex3.png" class="w-12 h-12 rounded-full" alt="avatar">
                    </div>
                    <div class="flex-grow pl-4">
                        <h4 class="text-base text-roboto font-semibold">{{ comment.commenterPseudo }}</h4>
                        <p class="text-xs text-gray-400">10 July 2022 at 14:08 pm</p>
                        <p class="text-sm mt-2">{{ comment.text }}</p>
                        <div class="flex mt-2 space-x-3">
                            <button class="text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition">Reply</button>
                            <button class="text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from '../../store';
import axiosClient from '../../axios';

export default {
    name: 'PostView',

    data() {
        return {
            post: {
                title: "",
                description: "",
                username: "",
                photo: "",
            },
            file: "",
            postLoading: '',
            comment: {
                commenterId: '',
                commenterPseudo: '',
                text: '',
            },
            user: {
                email: '',
                password: '',
            }
        }
    },
    created() {
        store.dispatch('getPost', this.$route.params.id).then((res) => {
            this.post = res.data
        });

        this.user = store.state.user.data;

        this.comment.commenterId = this.user._id;
        this.comment.commenterPseudo = this.user.pseudo;
    },
    methods: {
        async saveComment() {
            const response = await axiosClient.patch(`api/post/comment-post/${this.$route.params.id}`, this.comment)
        
            this.$router.push({
                name: "post",
                params: {
                    message: response.message
                }
            });
        }
    }
}
</script>