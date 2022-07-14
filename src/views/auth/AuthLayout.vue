<template>
  <NavbarAuth/>

  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <router-view></router-view>
    </div>
  </div>

    <Footer/>
    <Copyright/>
</template>

<script>
import { LockClosedIcon } from '@heroicons/vue/solid'
import NavbarAuth from '../../components/NavbarAuth.vue'
import Footer from '../../components/Footer.vue'
import Copyright from '../../components/Copyright.vue'

export default {
    components: {
        LockClosedIcon,
        NavbarAuth,
        Footer,
        Copyright
    }
}
</script>