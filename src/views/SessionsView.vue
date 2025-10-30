<template>
  <div class="min-h-screen bg-slate-50">
    <div class="container mx-auto px-6 py-12">
      <div class="text-center mb-10">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900">Meditációs technikák</h1>
        <p class="mt-2 text-gray-600 max-w-2xl mx-auto">Válassz vezetett meditációk közül: rövid gyakorlatok, fókuszált sorozatok és tematikus ülések.</p>
      </div>

      <!-- Feature cards grid -->
      <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          v-for="feature in features"
          :key="feature.to"
          :title="feature.title"
          :description="feature.description"
          :to="feature.to"
        />
      </section>

      <div class="mt-12 text-center">
        <p class="text-gray-600">Nem találtad, amit keresel? Nézd meg a többi programunkat vagy írj nekünk.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FeatureCard from '../components/FeatureCard.vue'

const features = [
  { title: 'Napi emlékeztető', description: 'Állíts be emlékeztetőt, hogy ne felejts el meditálni.', to: '/features/reminder' },
  { title: 'Relaxáló háttérhangok', description: 'Válassz vízesés, madárcsicsergés és egyéb természetes hangok közül.', to: '/features/background-sounds' },
  { title: 'Alvást segítő hangok', description: 'Különleges hangkompozíciók az elalváshoz.', to: '/features/sleep-sounds' },
  { title: 'Meditációs videók', description: 'Nézd meg a vezetett videós meditációkat.', to: '/features/videos' },
  { title: 'Időzített csendes meditáció', description: 'Állíts be kezdési időt és időtartamot.', to: '/features/timed-meditation' },
  { title: 'Controlled Breathing', description: 'Légzésszabályozó gyakorlatok vizuális vezérléssel.', to: '/features/breathing' },
]
</script>
