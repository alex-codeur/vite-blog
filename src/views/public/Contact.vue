<template>
    <div class="xl:w-6/12 lg:w-8/12 w-full mx-6 bg-white shadow-sm rounded-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quibusdam neque consectetur suscipit facere eligendi fuga tenetur eius explicabo esse veritatis, expedita voluptas molestias error officia facilis. Nam, iusto eum.
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