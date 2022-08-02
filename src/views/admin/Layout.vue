<template>
  <div class="min-h-full bg-gray-100">
    <AdminNav/>
    <!-- <AdminHeader/> -->
    <div class="grid grid-cols-6">
      <div class="col-span-1 bg-gray-300 min-h-screen">
        <AdminSidebar/>
      </div>
      <div class="col-span-5">
        <router-view/>

        <Notification/>
      </div>
    </div>
  </div>
</template>

<script>
import AdminHeader from '../../components/AdminHeader.vue'
import AdminNav from '../../components/AdminNav.vue'
import AdminSidebar from '../../components/AdminSidebar.vue'
import Notification from '../../components/Notification.vue'

export default {
    name: 'AdminLayout',
    components: {
    AdminHeader,
    AdminNav,
    AdminSidebar,
    Notification
},
}
</script>

<style>
  .ad_contain {
    display: flex;
    /* justify-content: flex-start; */
  }
  #ad_side {
    width: 20%;
    border-right: 1px solid black;
    height: 100%;
  }
  #ad_display {
    width: 100%;
    padding: 10px;
    text-align: left;
  }
</style>