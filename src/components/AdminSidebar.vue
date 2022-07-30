<template>
    <div>
        <ul>
            <router-link :to="{ name: 'Posts' }">
                <li class="bg-gray-300 border-b-black border-b-2 hover:bg-white w-62 h-10 text-start pl-3 py-2 font-semibold">
                    Posts
                </li>
            </router-link>
            <router-link :to="{ name: 'Categories' }">
                <li class="bg-gray-300 border-b-black border-b-2 hover:bg-white w-62 h-10 text-start pl-3 py-2 font-semibold">
                    Categories
                </li>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'AdminSidebar',
    }
</script>