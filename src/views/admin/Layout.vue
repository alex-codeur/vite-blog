<template>
  <div class="min-h-full">
    <AdminNav/>
    <!-- <AdminHeader/> -->
    <div class="ad_contain">
      <div id="ad_side">
        <AdminSidebar/>
      </div>
      <div id="ad_display">
        <router-view/>
      </div>
    </div>
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