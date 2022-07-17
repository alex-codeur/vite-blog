<template>
    <PageComponent>
        <template v-slot:header>
            <div class="flex justify-between items-center">
                <h1 class="text-3xl font-bold text-gray-900">Categories</h1>
                <router-link :to="{ name: 'CategoryAdd' }" class="py-2 px-3 text-white bg-emerald-500 rounded-md hover:bg-emerald-600">Add new Category</router-link>
            </div>
        </template>
        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            <!-- {{ categories }} -->
            <CategoryListItem 
                v-for="category in categories"
                :key="category._id" 
                :category="category"
                @delete="deleteCategory(category)"/>
        </div>
    </PageComponent>
</template>

<script setup>
    import store from "../../../store";
    import { computed } from "vue";
    import PageComponent from "../../../components/PageComponent.vue";
    import CategoryListItem from "../../../components/CategoryListItem.vue"
    
    const categories = computed(() => store.state.categories.data);

    store.dispatch('getCategories');

    function deleteCategory(category) {
        if (confirm(`Are you sure you want to delete this category? Operation can't be undone!!`)) {
            // delete survey
            store.dispatch('deleteCategory', category._id)
                .then(() => {
                    store.dispatch('getCategories');
                });
        }
    }
</script>