<template>
  <div class="min-h-full">
    <AdminNav/>
    <AdminHeader/>
    <AdminSidebar/>

    <router-view/>
  </div>
</template>

<script>
import AdminHeader from '../../components/AdminHeader.vue'
import AdminNav from '../../components/AdminNav.vue'
import AdminSidebar from '../../components/AdminSidebar.vue'

export default {
    name: 'AdminLayout',
    components: {
      AdminHeader,
      AdminNav,
      AdminSidebar
    },
}
</script>