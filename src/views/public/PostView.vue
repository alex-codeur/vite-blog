<template>
    <div class="w-6/12 mx-6">
        <div class="flex justify-between bg-white px-2 py-2 items-center rounded-sm mb-5">
            <h5 class="text-base uppercase font-semibold font-roboto">Business</h5>
            <router-link to="/" class="text-white bg-blue-500 px-1 py-1 rounded-sm uppercase text-sm hover:bg-transparent hover:text-blue-500 transition border border-blue-500">
                see more
            </router-link>  
        </div>

        <div class="bg-white shadow-sm rounded-sm">
            <router-link to="/" class="overflow-hidden block">
                <img src="../../assets/images/mathieu-html.jpg" class="w-full h-96 object-cover rounded transform hover:scale-110 transition" alt="photo">
            </router-link>
            <div class="p-4">
                <router-link to="/">
                    <h2 class="text-2xl font-semibold text-gray-700 font-roboto hover:text-blue-500 transition">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur.
                    </h2>
                </router-link>
                <p class="text-gray-500 text-sm mt-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad magnam accusamus a dolore facilis tempore iure vero ab ut corporis reiciendis distinctio veniam aut dolorem, fugiat repellat quidem vitae dignissimos!
                </p>
                <p class="text-gray-500 text-sm bg-green-50 border-green-500 p-3 mt-5">
                    <span class="ml-1 text-gray-400 text-xl">
                        <i class="fas fa-quote-left"></i>
                    </span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad magnam accusamus a dolore facilis tempore iure vero ab ut corporis reiciendis distinctio veniam aut dolorem, fugiat repellat quidem vitae dignissimos!
                    <span class="ml-1 text-gray-400 text-xl">
                        <i class="fas fa-quote-right"></i>
                    </span>
                </p>  
                <p class="text-gray-500 text-sm mt-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad magnam accusamus a dolore facilis tempore iure vero ab ut corporis reiciendis distinctio veniam aut dolorem, fugiat repellat quidem vitae dignissimos!
                </p>
                
                <ul class="mt-6 pl-5">
                    <li class="text-sm">
                        <span class="mr-1">
                            <i class="fas fa-angle-right"></i>
                        </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li class="text-sm">
                        <span class="mr-1">
                            <i class="fas fa-angle-right"></i>
                        </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li class="text-sm">
                        <span class="mr-1">
                            <i class="fas fa-angle-right"></i>
                        </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                </ul>

                <p class="text-gray-500 text-sm mt-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad magnam accusamus a dolore facilis tempore iure vero ab ut corporis reiciendis distinctio veniam aut dolorem, fugiat repellat quidem vitae dignissimos! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta dolor animi iusto, deserunt minima velit. Dicta rerum culpa alias dolor expedita explicabo. Distinctio incidunt dolor ad maiores dicta itaque iste!
                </p>
                <p class="text-gray-500 text-sm mt-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad magnam accusamus a dolore facilis tempore iure vero ab ut corporis reiciendis distinctio veniam aut dolorem, fugiat repellat quidem vitae dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores possimus pariatur, placeat ad, asperiores amet illo voluptatibus veniam molestiae obcaecati, ea magnam ipsum et! Omnis eligendi vel quidem similique iusto.
                </p>

                <div class="flex flex-wrap gap-2 mt-4">
                    <router-link to="/" class="px-3 py-1 text-sm border border-gray-200 rounded-sm hover:bg-blue-500 hover:text-white transition">
                        Beauti
                    </router-link>
                    <router-link to="/" class="px-3 py-1 text-sm border border-gray-200 rounded-sm hover:bg-blue-500 hover:text-white transition">
                        Sports
                    </router-link>
                    <router-link to="/" class="px-3 py-1 text-sm border border-gray-200 rounded-sm hover:bg-blue-500 hover:text-white transition">
                        Business
                    </router-link>
                </div>

                <div class="flex gap-2 border-t pt-5 mt-5">
                    <router-link to="/" class="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                        <i class="fab fa-facebook-f"></i>
                    </router-link>
                    <router-link to="/" class="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                        <i class="fab fa-twitter"></i>
                    </router-link>
                    <router-link to="/" class="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                        <i class="fab fa-instagram"></i>
                    </router-link>
                    <router-link to="/" class="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                        <i class="fab fa-pinterest-p"></i>
                    </router-link>
                    <router-link to="/" class="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                        <i class="fab fa-linkedin-in"></i>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="flex justify-between bg-white px-2 py-2 items-center rounded-sm mb-5 mt-8">
            <h5 class="text-base uppercase font-semibold font-roboto">Related Posts</h5>
            <router-link to="/" class="text-white bg-blue-500 px-1 py-1 rounded-sm uppercase text-sm hover:bg-transparent hover:text-blue-500 transition border border-blue-500">
                see more
            </router-link>  
        </div>

        <div class="grid grid-cols-3 gap-4 mt-4">
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

            <div class="space-y-4">
                <div class="flex items-start border-b pb-5 border-gray-200">
                    <div class="flex-shrink-0">
                        <img src="../../assets/images/alex3.png" class="w-12 h-12 rounded-full" alt="avatar">
                    </div>
                    <div class="flex-grow pl-4">
                        <h4 class="text-base text-roboto font-semibold">Alex Esaki</h4>
                        <p class="text-xs text-gray-400">10 July 2022 at 14:08 pm</p>
                        <p class="text-sm mt-2">Great article, nice work.</p>
                        <div class="flex mt-2 space-x-3">
                            <button class="text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition">Reply</button>
                            <button class="text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition">Delete</button>
                        </div>
                    </div>
                </div>
                <div class="flex items-start border-b pb-5 border-gray-200">
                    <div class="flex-shrink-0">
                        <img src="../../assets/images/alex3.png" class="w-12 h-12 rounded-full" alt="avatar">
                    </div>
                    <div class="flex-grow pl-4">
                        <h4 class="text-base text-roboto font-semibold">Alex Esaki</h4>
                        <p class="text-xs text-gray-400">10 July 2022 at 14:08 pm</p>
                        <p class="text-sm mt-2">Great article, nice work.</p>
                        <div class="flex mt-2 space-x-3">
                            <button class="text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition">Reply</button>
                            <button class="text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition">Delete</button>
                        </div>
                    </div>
                </div>
                <div class="flex items-start border-gray-200">
                    <div class="flex-shrink-0">
                        <img src="../../assets/images/alex3.png" class="w-12 h-12 rounded-full" alt="avatar">
                    </div>
                    <div class="flex-grow pl-4">
                        <h4 class="text-base text-roboto font-semibold">Alex Esaki</h4>
                        <p class="text-xs text-gray-400">10 July 2022 at 14:08 pm</p>
                        <p class="text-sm mt-2">Great article, nice work.</p>
                        <div class="flex mt-2 space-x-3">
                            <button class="text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition">Reply</button>
                            <button class="text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition">Delete</button>
                        </div>
                    </div>
                </div>
            </div>

            <form action="" class="mt-8">
                <h5 class="text-base mb-1">Comment</h5>
                <textarea name="comment" placeholder="type your comment" class="w-full border border-gray-200 py-3 px-5 text-sm rounded-sm focus:border-gray-400"></textarea>
                <button class="inline-block mt-2 text-white px-3 py-2 text-sm border border-gray-200 rounded-sm shadow-sm bg-blue-500 hover:bg-transparent hover:text-blue-500 uppercase transition">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PostView'
    }
</script>