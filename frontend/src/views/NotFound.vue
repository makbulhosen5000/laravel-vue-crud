<script setup>

 const  notFoundImg ="https://i.ibb.co.com/Mf6mbzZ/not-found.jpg"
</script>
<template>

  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-screen">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-56 w-auto" :src="notFoundImg"   alt="Not Found"  />
      <router-link to="/" class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900"> <button  class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Home</button></router-link>

    </div>

  </div>

</template>
<style>
</style>