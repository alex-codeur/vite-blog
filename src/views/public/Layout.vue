<template>
    <div>
        <Navbar/>

        <!-- banner -->
        <div class="bg-cover bg-no-repeat bg-center py-36 hero pl-5">
            <div class="container">
                <h1 class="text-4xl text-gray-300 font-medium mb-4 capitalize">
                    Une meilleure façon d'apprendre <br> Développement web
                </h1>
                <p class="w-96 text-gray-300">
                    Développez vos compétences en développement Web avec des <br> conseils, des astuces et des didacticiels basés sur des projets rapides de haute qualité autour de HTML, CSS, <br> JavaScript et Vue.js.
                </p>
                <div class="mt-12">
                    <router-link to="/" class="bg-orange-800 border border-orange-800 text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-orange-800 transition">
                        Voir les tutoriels
                    </router-link>
                </div>
            </div>
        </div>
        <!-- banner end -->

        <main class="py-12 bg-gray-100 min-h-screen">
            <div class="container mx-auto px-4 flex flex-wrap lg:flex-nowrap">
                <SidebarLeft/>
                <router-view/>
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

<style scoped>
    .hero {
        background-image: url('../../assets/images/movieHero.jpg');
    }
</style>