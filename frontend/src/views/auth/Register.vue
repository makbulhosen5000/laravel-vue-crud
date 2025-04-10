<script setup>
import { onMounted, ref } from 'vue';
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";

const regImgUrl="https://i.ibb.co.com/vjhV4YZ/register.jpg";

// access authenticate from auth.js
const { errors } = storeToRefs(useAuthStore());
const {authenticate} = useAuthStore();

const formData = ref({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });



  // show eye icon in password field function
const showPassword = ref(false)
const togglePassword = () => {
  showPassword.value = !showPassword.value
}

</script>

<template>
    <main>
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div class="mb-4">
                <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div class="sm:mx-auto sm:w-full sm:max-w-sm ">
                        <img class="mx-auto h-56 w-auto shadow-2xl" :src="regImgUrl" alt="Sign"  />
                        <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign Up to your account</h2>
                    </div>
                    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm shadow-2xl p-4">
                        <form
                         @submit.prevent="authenticate('register',formData);"
                          class="space-y-6">
                            <div>
                            <label for="name" class="block text-sm/6 font-medium text-gray-900">Name</label>
                            <div class="mt-2">
                                <input v-model="formData.name" type="text" name="name" id="name" autocomplete="email" required="" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder="Enter your name" />
                                
                            </div>
                            </div>
                            <div>
                            <label for="email" class="block text-sm/6 font-medium text-gray-900">Email</label>
                            <div class="mt-2">
                                <input v-model="formData.email" type="email" name="email" id="email" autocomplete="email" required="" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder="Enter your email" />
                               
                            </div>
                            </div>
                            <div>
                            <label class="block text-gray-700 font-medium mb-2" for="password">Password</label>
                            <div class="mb-4 flex justify-between  relative">
                            <input
                            :type="showPassword ? 'text' : 'password'"
                            v-model="formData.password"
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
                            </div>
                            <div>
                            <label for="password_confirmation" class="block text-sm/6 font-medium text-gray-900">Confirm Password</label>
                            <div class="mt-2">
                                <input v-model="formData.password_confirmation" type="password" name="password_confirmation" id="password_confirmation" autocomplete="password_confirmation" required="" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />

                            </div>
                            </div>
                    
                            <div>
                            <button  type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
                            </div>
                        </form>
                    
                        <p class="mt-10 text-center text-sm/6 text-gray-500">
                            Already Member?
                            {{ ' ' }}
                            <router-link to="/login" class="font-semibold text-indigo-600 hover:text-indigo-500">Sign In</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>

</style>
