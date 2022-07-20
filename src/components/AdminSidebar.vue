<template>
    <div>
        <ul>
            <router-link :to="{ name: 'Posts' }">Posts</router-link>
            <li>Item</li>
            <li>Item</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'AdminSidebar',
    }
</script>