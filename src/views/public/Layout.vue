<template>
    <div>
        <Navbar/>

        <main class="py-12 bg-gray-100 min-h-screen">
            <div class="container mx-auto px-4 flex">
                <SidebarLeft/>
                <div class="w-6/12 bg-white shadow-sm rounded-sm py-12 mx-6">
                    <router-view/>
                </div>
                <SidebarRight/>
            </div>
        </main>

        <Footer/>
        <Copyright/>
    </div>
</template>

<script>
    import Navbar from '../../components/Navbar.vue'
    import SidebarLeft from '../../components/SidebarLeft.vue'
    import SidebarRight from '../../components/SidebarRight.vue'
    import Footer from '../../components/Footer.vue'
    import Copyright from '../../components/Copyright.vue'

    export default {
        name: 'PublicLayout',
        components: {
            Navbar,
            SidebarLeft,
            SidebarRight,
            Footer,
            Copyright
        }
    }
</script>