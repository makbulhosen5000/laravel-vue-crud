<script setup>
import { ref } from 'vue';

const loginImgUrl = "https://i.ibb.co.com/kcmYrjv/login2.jpg";

const data = ref({
    email: '',
    password: ''
  });
// submit function for login
function submit(){

}

// show password function
const showPassword = ref(false)
const togglePassword = () => {
  showPassword.value = !showPassword.value
}


</script>
<template>

  <div class="flex min-h-full flex-1 flex-col justify-center px-4 py-6 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-56 w-auto shadow-2xl" :src="loginImgUrl" alt="Sign In"  />
      <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm shadow-2xl p-4">
        <form @submit.prevent="submit" class="space-y-6">
          <div>
            <label for="email" class="block text-sm/6 font-medium text-gray-900">Email</label>
            <div class="mt-2">
              <input v-model="data.email" type="email" name="email" id="email" autocomplete="email" required="" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder="Enter your email" />
            </div>
          </div>
          <label class="block text-gray-700 font-medium mb-2" for="password">Password</label>
          <div class="mb-4 flex justify-between  relative">
          <input
            :type="showPassword ? 'text' : 'password'"
            v-model="data.password"
            id="password"
            placeholder="Enter your password"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="button"
            @click="togglePassword"
            class="absolute inset-y-0 right-3 flex items-center text-gray-500"
          >
            <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.056 10.056 0 012.174-3.33M6.423 6.423A9.959 9.959 0 0112 5c4.477 0 8.267 2.943 9.541 7a9.972 9.972 0 01-4.293 5.147M3 3l18 18" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
          </div>
          
  
          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>
  
        <p class="mt-10 text-center text-sm/6 text-gray-500">
          Not a member?
          {{ ' ' }}
          <router-link to="/register" class="font-semibold text-indigo-600 hover:text-indigo-500">Sign Up</router-link>
        </p>
       </div>
  </div>

</template>
<style>
</style>