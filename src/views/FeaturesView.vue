<template>
  <div class="min-h-screen bg-slate-50">
    <div class="container mx-auto px-6 py-12">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold">Funkciók</h1>
        <p class="mt-2 text-gray-600">Válaszd ki, milyen támogatásra van szükséged a gyakorláshoz.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          title="Napi emlékeztető"
          description="Állíts be emlékeztetőt, hogy ne felejts el meditálni."
          :to="'/features/reminder'"
        />

        <FeatureCard
          title="Relaxáló háttérhangok"
          description="Válassz vízesés, madárcsicsergés és egyéb természetes hangok közül."
          :to="'/features/background-sounds'"
        />

        <FeatureCard
          title="Alvást segítő hangok"
          description="Különleges hangkompozíciók az elalváshoz."
          :to="'/features/sleep-sounds'"
        />

        <FeatureCard
          title="Meditációs videók"
          description="Nézd meg a vezetett videós meditációkat."
          :to="'/features/videos'"
        />

        <FeatureCard
          title="Időzített csendes meditáció"
          description="Állíts be kezdési időt és időtartamot — mi mérünk helyetted."
          :to="'/features/timed-meditation'"
        />

        <FeatureCard
          title="Controlled Breathing"
          description="Légzésszabályozó gyakorlatok vizuális vezérléssel."
          :to="'/features/breathing'"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FeatureCard from '../components/FeatureCard.vue'
</script>
