<template>
<div class="min-h-screen bg-slate-50">
<!-- Hero -->
<section class="relative overflow-hidden">
<div class="relative">
<div class="h-96 md:h-[520px] w-full">
<img :src="heroImg" alt="hero" class="object-cover w-full h-full" />
<!-- gradient fade to right to create a sided fade -->
<div class="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent"></div>
</div>

<div class="container mx-auto px-6">
<div class="relative -mt-28 md:-mt-36">
<div class="max-w-3xl ml-auto bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg transform translate-x-6 md:translate-x-12">
<h1 class="text-3xl md:text-4xl font-extrabold text-gray-900">Lépj be a tudatos jelenlét világába</h1>
<p class="mt-3 text-gray-700">Rövid meditációk és tematikus sorozatok — egyszerű, modern és hatékony módszerek minden napra.</p>
<div class="mt-6 flex gap-4">
<router-link to="/sessions" class="inline-block bg-indigo-600 text-white px-5 py-2 rounded-lg shadow hover:bg-indigo-700">Indíts egy ülést</router-link>
<router-link to="/about" class="inline-block border border-gray-300 text-gray-800 px-5 py-2 rounded-lg">Rólunk</router-link>
</div>
</div>
</div>
</div>
</div>
</section>

<main class="container mx-auto px-6 py-12">
<!-- Feature cards -->
<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
<FeatureCard
v-for="feature in features"
:key="feature.to"
:title="feature.title"
:description="feature.description"
:to="feature.to"
/>
</section>

<!-- Image + text block -->
<section class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
<div class="md:col-span-2 bg-white rounded-2xl p-8 shadow">
<h2 class="text-2xl font-bold">Miért működik?</h2>
<p class="mt-4 text-gray-600">A rendszeres gyakorlás kis lépésekben építkezik. Tudatos légzés, rövid fókusz gyakorlatok és következetes időbeosztás.</p>
</div>

<div class="bg-white rounded-2xl p-4 shadow flex items-center justify-center h-40">
<img :src="illustrationImg" alt="illustration" class="object-cover w-full h-full rounded-lg" />
</div>
</section>
</main>
</div>

</template>

<script setup lang="ts">
import { placeholderFor } from '../utils/placeholders'
import FeatureCard from '../components/FeatureCard.vue'

const heroImg = placeholderFor(0) as string
const illustrationImg = placeholderFor(1) as string

const features = [
  { title: 'Napi emlékeztető', description: 'Állíts be emlékeztetőt, hogy ne felejts el meditálni.', to: '/features/reminder' },
  { title: 'Relaxáló háttérhangok', description: 'Válassz vízesés, madárcsicsergés és egyéb természetes hangok közül.', to: '/features/background-sounds' },
  { title: 'Alvást segítő hangok', description: 'Különleges hangkompozíciók az elalváshoz.', to: '/features/sleep-sounds' },
  { title: 'Meditációs videók', description: 'Nézd meg a vezetett videós meditációkat.', to: '/features/videos' },
  { title: 'Időzített csendes meditáció', description: 'Állíts be kezdési időt és időtartamot.', to: '/features/timed-meditation' },
  { title: 'Controlled Breathing', description: 'Légzésszabályozó gyakorlatok vizuális vezérléssel.', to: '/features/breathing' },
]
</script>
