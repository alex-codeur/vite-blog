<template>
    <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <router-link :to="{name: 'dashboard'}" class="flex">
                    <img src="../assets/images/Logo.jpg" class="w-8" alt="logo">
                </router-link>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <router-link 
                    v-for="item in navigation" 
                    :key="item.name" 
                    :to="item.to" 
                    :class="[
                        this.$route.name !== item.to.name 
                        ? 'bg-gray-900 text-white' 
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium'
                    ]" 
                >{{ item.name }}</router-link>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <button type="button" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
              </button>

              <!-- Profile dropdown -->
              <Menu as="div" class="ml-3 relative">
                <div>
                  <MenuButton class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full" src="https://secure.gravatar.com/avatar/3a7e9702158dcb9a35aa8edd451913fa?s=64" alt="" />
                  </MenuButton>
                </div>
                <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                  <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <MenuItem 
                        v-slot="{ active }"
                    >
                      <a 
                        @click="logout"
                        :class="[
                            'cursor-pointer block px-4 py-2 text-sm text-gray-700'
                        ]"
                        >sign out</a>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span class="sr-only">Open main menu</span>
              <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <DisclosureButton 
          v-for="item in navigation" 
          :key="item.name" 
          as="a" 
          :href="item.href" 
          :class="[
            item.current 
            ? 'bg-gray-900 text-white' 
            : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="item.current ? 'page' : undefined"
            >{{ item.name }}</DisclosureButton>
        </div>
        <div class="pt-4 pb-3 border-t border-gray-700">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full" :src="user.pseudo" alt="" />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-white">{{ user.pseudo }}</div>
              <div class="text-sm font-medium leading-none text-gray-400">{{ user.email }}</div>
            </div>
            <button type="button" class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-3 px-2 space-y-1">
            <DisclosureButton 
            as="a" 
            @click="logout"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
            >Sign out</DisclosureButton>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline';
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const navigation = [
    { name: 'Dashboard', to: { name: 'dashboard' }, current: true },
];

export default {
    name: 'AdminNav',
    components: {
      Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems,
      BellIcon, MenuIcon, XIcon,
    },
    setup() {
        const store = useStore();
        const router = useRouter();

        function logout() {
            store.dispatch('logoutUser')
              .then(() => {
                router.push({
                  name: 'login'
                });
              });
            
        }

        return {
            user: computed(() => store.state.user.data),
            navigation,
            logout
        }
    }
}
</script>