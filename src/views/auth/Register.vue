<template>
    <div>
      <div>
        <img class="mx-auto h-12 w-auto" src="../../assets/images/Logo.jpg" alt="Workflow">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Register for free</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Or
          {{ ' ' }}
          <router-link :to="{name: 'login'}" class="font-medium text-indigo-600 hover:text-indigo-500"> login to your account </router-link>
        </p>
      </div>
      <!-- <pre>{{ errors }}</pre> -->
      <form class="mt-8 space-y-6"  @submit="register">
        <Alert v-if="Object.keys(errors).length" class="flex-col items-stretch text-sm">
          <div v-for="(field, i) of Object.keys(errors)" :key="i">
            <div v-for="(error, ind) of errors[field] || []" :key="ind">
              * {{ error }}
            </div>
          </div>
        </Alert>

        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="fullname" class="sr-only">Full Name</label>
            <input id="fullname" name="name" type="text" autocomplete="name" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="full Name" v-model="user.pseudo"/>
          </div>
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" v-model="user.email"/>
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" v-model="user.password"/>
          </div>
          <div>
            <label for="password_confirmation" class="sr-only">Password Confirmation</label>
            <input id="password_confirmation" name="password_confirmation" type="password" autocomplete="current-password-confirm" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password Confirm" v-model="user.password_confirmation"/>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
          </div>
        </div>

        <div>
          <button :disabled="loading" :class="{ 'cursor-not-allowed' : loading, 'hover:bg-indigo-500': loading }" type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>

            <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
            Sign in
          </button>
        </div>
      </form>
    </div>
</template>

<script setup>
import { LockClosedIcon } from '@heroicons/vue/solid'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import store from '../../store';
import Alert from '../../components/Alert.vue';

const router = useRouter();

const user = {
  pseudo: '',
  email: '',
  password: '',
  password_confirmation: ''
};

const loading = ref(false);
const errors = ref({});

function register(ev) {
  ev.preventDefault();

  loading.value = true;

  // laravel
  store
    .dispatch('register', user)
    .then((res) => {
      loading.value = false;
      router.push({ name: 'home' });
    })
    .catch(err => {
      loading.value = false;
      if (err.response.status === 422) {
        errors.value = err.response.data.errors
      }
    });

  // node js
  store
    .dispatch('registerUser', user)
    .then((res) => {
      router.push({ name: 'home' });
    });
}
</script>