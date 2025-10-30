<template>
  <nav class="flex justify-between items-center p-4 bg-[rgb(35,155,167)] text-white border-b border-[rgb(225,170,54)]">
    <div class="text-xl font-bold">
      <h1>Meditation App</h1>
    </div>
    <ul class="flex space-x-4">
      <li><router-link to="/" class="text-white hover:text-[rgb(225,170,54)] px-2 py-1 rounded transition">Home</router-link></li>
      <li><router-link to="/sessions" class="text-white hover:text-[rgb(225,170,54)] px-2 py-1 rounded transition">Sessions</router-link></li>
      <li><router-link to="/about" class="text-white hover:text-[rgb(225,170,54)] px-2 py-1 rounded transition">About</router-link></li>
    </ul>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'NavBar'
}
</script>
