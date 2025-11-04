<template>
  <div class="min-h-screen bg-accent -mt-28 pt-28">
    <div class="container mx-auto px-6 py-12">
      <div class="text-center mb-10">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-800">Meditációs technikák</h1>
        <p class="mt-2 text-gray-700 max-w-2xl mx-auto">Válassz vezetett meditációk közül: rövid gyakorlatok, fókuszált sorozatok és tematikus ülések.</p>
      </div>

      <!-- Reggeli Section -->
      <section class="mb-16">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">🌅 Reggeli gyakorlatok</h2>
        <hr class="border-secondary mb-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            :title="'Reggeli mindfulness'"
            :description="'Kezdd a napot tudatosan és energikusan.'"
            :to="'/features/morning-mindfulness'"
          />
          <FeatureCard
            :title="'Légzésgyakorlat'"
            :description="'Friss levegővel indítsd a napot.'"
            :to="'/features/morning-breathing'"
          />
          <FeatureCard
            :title="'Pozitív affirmációk'"
            :description="'Erősítsd meg pozitív gondolataidat.'"
            :to="'/features/morning-affirmations'"
          />
          <FeatureCard
            :title="'Controlled Breathing'"
            :description="'Légzésszabályozó gyakorlatok vizuális vezérléssel.'"
            :to="'/features/breathing'"
          />
        </div>
      </section>

      <!-- Tanulási Section -->
      <section class="mb-16">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">📚 Tanulási gyakorlatok</h2>
        <hr class="border-secondary mb-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            :title="'Fókuszáló meditáció'"
            :description="'Javítsd a koncentrációdat tanulás közben.'"
            :to="'/features/study-focus'"
          />
          <FeatureCard
            :title="'Memória erősítő'"
            :description="'Segít jobban megjegyezni az anyagot.'"
            :to="'/features/memory-boost'"
          />
          <FeatureCard
            :title="'Stresszoldó szünet'"
            :description="'Rövid pihenő tanulás közben.'"
            :to="'/features/study-break'"
          />
          <FeatureCard
            :title="'Controlled Breathing'"
            :description="'Légzésszabályozó gyakorlatok vizuális vezérléssel.'"
            :to="'/features/breathing'"
          />
        </div>
      </section>

      <!-- Esti Section -->
      <section class="mb-16">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">🌙 Esti gyakorlatok</h2>
        <hr class="border-secondary mb-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            :title="'Alvás előtti relaxáció'"
            :description="'Készülj fel a nyugodt alvásra.'"
            :to="'/features/evening-relaxation'"
          />
          <FeatureCard
            :title="'Napi visszatekintés'"
            :description="'Gondold át a napodat békében.'"
            :to="'/features/daily-reflection'"
          />
          <FeatureCard
            :title="'Test tudatosítás'"
            :description="'Engedd el a napi feszültséget.'"
            :to="'/features/body-scan'"
          />
          <FeatureCard
            :title="'Controlled Breathing'"
            :description="'Légzésszabályozó gyakorlatok vizuális vezérléssel.'"
            :to="'/features/breathing'"
          />
        </div>
      </section>

      <!-- Stresszes vagyok Section -->
      <section class="mb-16">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">😰 Stresszes vagyok</h2>
        <hr class="border-secondary mb-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            :title="'Gyors stresszoldás'"
            :description="'Azonnali megkönnyebbülés stresszhelyzetben.'"
            :to="'/features/quick-stress-relief'"
          />
          <FeatureCard
            :title="'Pánik elleni gyakorlat'"
            :description="'Segít megnyugodni pánikroham idején.'"
            :to="'/features/panic-relief'"
          />
          <FeatureCard
            :title="'Földelés gyakorlat'"
            :description="'Kapcsolódj vissza a jelen pillanathoz.'"
            :to="'/features/grounding'"
          />
          <FeatureCard
            :title="'Controlled Breathing'"
            :description="'Légzésszabályozó gyakorlatok vizuális vezérléssel.'"
            :to="'/features/breathing'"
          />
        </div>
      </section>

      <div class="mt-12 text-center">
        <p class="text-gray-700">Nem találtad, amit keresel? Nézd meg a többi programunkat vagy írj nekünk.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FeatureCard from '../components/FeatureCard.vue'
</script>
