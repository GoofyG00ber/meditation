<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app">
    <NavBar />
    <main class="pt-28">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style>
</style>
