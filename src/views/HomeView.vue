<template>
<div class="min-h-screen bg-gradient-to-br from-primary to-secondary md:-mt-28">
<!-- Hero -->
<section class="relative overflow-hidden">
<div class="relative h-96 md:h-[520px] w-full">
<LazyImage :src="heroImg" alt="hero" class-name="object-cover w-full h-full" />
<!-- gradient fade to left -->
<div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

<!-- Hero Text Overlay -->
<div class="absolute inset-0 flex items-center">
<div class="container mx-auto px-6 md:px-12">
<div class="max-w-2xl">
<h1 class="text-4xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight drop-shadow-2xl">
Egy pillanat
a nyugalomra –<br>
<span class="text-secondary">egy nap</span>
<span class="text-success"> a hatékonyságra.</span>
</h1>
<div class="mt-8 flex flex-wrap gap-4">
<router-link to="/sessions" class="rainbow-text inline-block bg-accent text-white px-6 py-3 rounded-lg shadow-lg hover:bg-accent/80 transition-all hover:scale-105 font-semibold">
Meditációs módszerek
</router-link>
<router-link to="/about" class="inline-block border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all backdrop-blur-sm font-semibold">
Rólunk
</router-link>
</div>
</div>
</div>
</div>
</div>
</section>

<main class="container mx-auto px-6 py-12">

<!-- Attention Block -->
<section class="mb-16 -mt-6">
<div class="bg-gradient-to-r from-accent/30 to-success/30 backdrop-blur-lg rounded-3xl p-10 md:p-14 shadow-2xl border border-white/40 transform hover:scale-[1.02] transition-transform duration-300">
<div class="max-w-4xl mx-auto text-center">
<h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-relaxed">
Az orvosi hivatás kihívásaihoz nemcsak tudás, hanem lelki állóképesség is kell.
</h2>
<p class="text-lg md:text-xl text-gray-700 leading-relaxed">
Az <span class="font-semibold text-accent">InnerBloom</span> segít megtalálni a belső nyugalmat,
hogy fókuszált, tudatos és kiegyensúlyozott maradj – akár reggel, tanulás közben, vagy egy stresszes nap végén.
</p>
</div>
</div>
</section>

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
<p class="mt-4 text-gray-700">A rendszeres gyakorlás kis lépésekben építkezik. Tudatos légzés, rövid fókusz gyakorlatok és következetes időbeosztás.</p>
</div>

<div class="bg-white rounded-2xl p-4 shadow flex items-center justify-center h-40">
<LazyImage :src="illustrationImg" alt="illustration" class-name="object-cover w-full h-full rounded-lg" />
</div>
</section>
</main>
</div>

</template>

<script setup lang="ts">
import { placeholderFor } from '../utils/placeholders'
import FeatureCard from '../components/FeatureCard.vue'
import LazyImage from '../components/LazyImage.vue'

// Use a fixed placeholder image for the hero to avoid swapping on refresh
const heroImg = '/placeholder.jpg'
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

<style scoped>
.rainbow-text {
  animation: rainbow 3s linear infinite;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  transition: filter 0.3s ease;
}

.rainbow-text:hover {
  filter: saturate(1.5) brightness(1.1);
  animation-duration: 1.5s;
}

@keyframes rainbow {
  0% { color: #FAF0D7; text-shadow: 0 0 15px rgba(250, 240, 215, 0.8); }
  25% { color: #FFD9C0; text-shadow: 0 0 15px rgba(255, 217, 192, 0.8); }
  50% { color: #CCEEBC; text-shadow: 0 0 15px rgba(204, 238, 188, 0.8); }
  75% { color: #8CC0DE; text-shadow: 0 0 15px rgba(140, 192, 222, 0.8); }
  100% { color: #FAF0D7; text-shadow: 0 0 15px rgba(250, 240, 215, 0.8); }
}
</style>
