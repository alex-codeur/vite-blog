<template>
    <div class="xl:w-6/12 lg:w-8/12 w-full mx-6 bg-white shadow-sm rounded-sm">
        <!-- Account wrapper -->
    <div class="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <!-- sidebar -->
        <div class="col-span-12">
            <!-- account profile -->
            <div class="py-4 px-3 shadow flex items-center">
                <div class="flex-shrink-0">
                    <img src="../../assets/images/Logo.jpg" alt="avatar" class="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover">
                </div>
                <div class="flex-grow">
                    <p class="text-gray-600">Hello,</p>
                    <h4 class="text-gray-800 font-medium">
                        Alex Esaki
                    </h4>
                </div>
            </div>
            <!-- account profile end -->
        </div>
        <!-- sidebar end -->

        <!-- Profile info -->
        <div class="col-span-12 shadow rounded px-6 pt-5 pb-7">
            <h4 class="text-lg font-medium capitalize mb-4">
                Profile Information
            </h4>
            <div class="space-y-4">
                <!-- form row -->
                <div class="grid grid-cols-2 gap-4">
                    <!-- single input -->
                    <div>
                        <label for="firstname" class="text-gray-600 mb-2 block">First name</label>
                        <input type="text" id="firstname" placeholder="Enter Your First Name" class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0">
                    </div>
                    <!-- single input end -->
                    <!-- single input -->
                    <div>
                        <label for="lastname" class="text-gray-600 mb-2 block">Last name</label>
                        <input type="text" id="lastname" placeholder="Enter Your Last Name" class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0">
                    </div>
                    <!-- single input end --> 
                </div>
                <!-- form row end -->
                <!-- form row -->
                <div class="grid grid-cols-2 gap-4">
                    <!-- single input -->
                    <div>
                        <label for="date" class="text-gray-600 mb-2 block">Date</label>
                        <input type="date" id="date" class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0">
                    </div>
                    <!-- single input end -->
                    <!-- single input -->
                    <div>
                        <label for="Option" class="text-gray-600 mb-2 block">Gender</label>
                        <select class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0">
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    <!-- single input end --> 
                </div>
                <!-- form row end -->
                <!-- form row -->
                <div class="grid grid-cols-2 gap-4">
                    <!-- single input -->
                    <div>
                        <label for="email" class="text-gray-600 mb-2 block">Email Address</label>
                        <input type="email" id="email" placeholder="Enter Your Email Address" class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0">
                    </div>
                    <!-- single input end -->
                    <!-- single input -->
                    <div>
                        <label for="phone" class="text-gray-600 mb-2 block">Phone Number</label>
                        <input type="text" id="phone" placeholder="Enter Your Phone Number" class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0">
                    </div>
                    <!-- single input end --> 
                </div>
                <!-- form row end -->

                <div class="mt-4">
                    <button type="submit" class="block w-full py-2 text-white bg-orange-800 border border-orange-800 rounded hover:bg-transparent hover:text-orange-800 transition uppercase font-roboto font-medium">
                        Save changes
                    </button>
                </div>
            </div>
        </div>
        <!-- Profile info end -->
    </div>
    <!-- Account wrapper end -->
    </div>
</template>

<script setup>
    import { computed } from "vue";
    import store from "../../store";

    const posts = computed(() => store.state.posts);


    store.dispatch('getPosts').then((res) => {
        // console.log(res.data)
    });
</script>