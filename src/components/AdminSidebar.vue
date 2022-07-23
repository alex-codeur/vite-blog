<template>
    <div>
        <ul>
            <li>
                <router-link :to="{ name: 'Posts' }">Posts</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Categories' }">Categories</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'AdminSidebar',
    }
</script>