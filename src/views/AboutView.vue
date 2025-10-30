<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-white/60 backdrop-blur-sm py-6">
      <div class="container mx-auto px-6">
        <h1 class="text-3xl md:text-4xl font-semibold text-gray-900">Rólunk</h1>
        <p class="mt-2 text-gray-600 max-w-2xl">Ismerj meg minket — modern, egyszerű, és fókuszált megközelítés a meditációban.</p>
      </div>
    </header>

    <main class="flex-1 container mx-auto px-6 py-12">
      <!-- Hero -->
      <section class="mb-12">
        <div class="rounded-2xl bg-gradient-to-r from-indigo-50 to-slate-50 p-8 shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div class="flex-1">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900">Tudatos jelenlét, egyszerűen</h2>
            <p class="mt-4 text-gray-600">Rövid programok és vezetett ülések, amik segítenek elmélyíteni a koncentrációt és csökkenteni a stresszt. Az út egyszerű — kis lépések, következetesség.</p>
            <div class="mt-6 flex gap-4">
              <router-link to="/sessions" class="inline-block bg-indigo-600 text-white px-5 py-2 rounded-lg shadow hover:bg-indigo-700">Fedezd fel az üléseket</router-link>
              <router-link to="/" class="inline-block border border-gray-300 text-gray-800 px-5 py-2 rounded-lg">Főoldal</router-link>
            </div>
          </div>

          <div class="w-full md:w-1/3 bg-white rounded-xl shadow-inner h-48 md:h-56 flex items-center justify-center overflow-hidden">
            <img :src="heroImg" alt="illustration" class="object-cover w-full h-full rounded-lg" />
          </div>
        </div>
      </section>

      <!-- Feature cards -->
      <section class="mb-12">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <article class="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            <h3 class="font-semibold text-lg">Kiemelt meditációs módszer</h3>
            <p class="mt-3 text-gray-600">Rövid leírás arról, miért működik ez a módszer, és hogyan segíthet neked.</p>
          </article>

          <article class="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            <h3 class="font-semibold text-lg">Kiemelt meditációs módszer</h3>
            <p class="mt-3 text-gray-600">Rövid leírás arról, miért működik ez a módszer, és hogyan segíthet neked.</p>
          </article>

          <article class="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            <h3 class="font-semibold text-lg">Kiemelt meditációs módszer</h3>
            <p class="mt-3 text-gray-600">Rövid leírás arról, miért működik ez a módszer, és hogyan segíthet neked.</p>
          </article>
        </div>
      </section>

      <!-- Image + text block -->
      <section>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div class="md:col-span-2 bg-white rounded-2xl p-8 shadow">
            <h3 class="text-xl font-semibold">Kép + szöveg blokk</h3>
            <p class="mt-3 text-gray-600">Hosszabb tartalom, amely bemutatja a csapatot, küldetést vagy technikákat. Használj itt rövid történeteket vagy felhasználói visszajelzéseket.</p>
          </div>

          <div class="bg-white rounded-2xl p-4 shadow flex items-center justify-center h-44">
            <img :src="sideImg" alt="side" class="object-cover w-full h-full rounded-lg" />
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-white/40 py-8">
      <div class="container mx-auto px-6 text-center text-gray-600">© 2025 Meditation — All rights reserved</div>
    </footer>
  </div>

</template>

<script setup lang="ts">
import { placeholderFor } from '../utils/placeholders'

const heroImg = placeholderFor(0) as string
const sideImg = placeholderFor(2) as string
</script>
