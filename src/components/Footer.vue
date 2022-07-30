<template>
    <!-- footer -->
    <footer class="container mx-auto px-2 bg-white pt-16 pb-12 border-t border-gray-100">
        <div class="grid md:grid-cols-3 grid-cols-1">
            <!-- footer text -->
            <div class="col-span-1 space-y-8">
                <router-link :to="{name: 'home'}" class="flex">
                    <img src="../assets/images/Logo.jpg" class="w-8" alt="logo"><span class="pl-2 text-gray-600 font-poppins font-bold text-2xl text-start">core</span>
                </router-link>
                <p class="text-gray-500 w-80">
                    Après avoir appris sur Internet quoi de plus normal que de partager à son tour ? Passionné par le web depuis un peu plus de 5 ans maintenant j'aime partager mes compétences et mes découvertes avec les personnes qui ont cette même passion pour le web
                </p>
                <div class="flex space-x-6">
                    <a href="#" class="text-gray-400 hover:text-gray-500">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-gray-500">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-gray-500">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-gray-500">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
            <!-- footer text end -->

            <!-- footer links -->
            <div class="col-span-2 grid md:grid-cols-2 grid-cols-1 gap-8">
                <div class="grid md:grid-cols-2 grid-cols-1 gap-8">
                    <div>
                        <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider">Echange</h3>
                        <div class="mt-4 space-y-4">
                            <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">
                                Forum
                            </a>
                            <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">
                                Creer un topic
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider">Ressources</h3>
                        <div class="mt-4 space-y-4">
                            <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">
                                Politique de confidentialite
                            </a>
                            <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">
                                Conditions d'utilisation
                            </a>
                            <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">
                                Mentions legales & CGU
                            </a>
                        </div>
                    </div>
                </div>
                <div class="grid md:grid-cols-2 grid-cols-1 gap-8">
                    <div>
                        <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider">Liens utiles</h3>
                        <div class="mt-4 space-y-4">
                            <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">
                                Formations
                            </a>
                            <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">
                                Podcasts
                            </a>
                            <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">
                                Livres & Ebooks
                            </a>
                            <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">
                                Support Technique
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider">Autres</h3>
                        <div class="mt-4 space-y-4">
                            <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">
                                A propos
                            </a>
                            <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">
                                Contact
                            </a>
                            <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">
                                Tchat
                            </a>
                            <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">
                                Par Email
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- footer links end -->
        </div>
    </footer>
    <!-- footer end -->
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>