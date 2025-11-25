<template>
<div class="min-h-screen bg-gradient-to-br from-primary to-secondary md:-mt-28">
<!-- Hero -->
<section class="relative overflow-hidden">
<div class="relative h-96 md:h-[520px] w-full">
<img :src="heroImg" alt="hero" class="object-cover w-full h-full" />
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

<!-- Questionnaire Call-to-Action -->
<section class="mb-16 -mt-6">
  <div class="bg-white backdrop-blur-lg rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-200">
    <div class="flex flex-col md:flex-row items-center gap-6">
      <div class="text-6xl md:text-7xl">🦋</div>
      <div class="flex-1 text-center md:text-left">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Fedezd fel a totemállatodat!
        </h2>
        <p class="text-gray-700 mb-4">
          Töltsd ki a stresszkezelési kérdőívet és ismerd meg, melyik totemállat tükrözi a jelenlegi lelkiállapotodat.
          <span class="font-semibold text-success">+50 pont jár érte!</span>
        </p>
        <router-link
          to="/questionnaire"
          class="inline-block bg-white text-black font-bold px-8 py-3 rounded-xl shadow-lg border border-gray-200 hover:bg-gray-100 transition-all hover:scale-105 focus:outline-none focus:ring-0"
        >
          Kérdőív kitöltése →
        </router-link>
      </div>
    </div>
  </div>
</section>

<!-- Attention Block -->
<section class="mb-16 -mt-6">
<div class="bg-white backdrop-blur-lg rounded-3xl p-10 md:p-14 shadow-2xl border border-white/40 transform hover:scale-[1.02] transition-transform duration-300">
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
<section class="mb-12">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Népszerű gyakorlatok</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <FeatureCard
      v-for="feature in featuredExercises"
      :key="feature.to"
      :title="feature.title"
      :description="feature.description"
      :to="feature.to"
    />
  </div>
    <div class="text-center mt-8">
    <router-link
      to="/sessions"
      class="inline-block bg-white text-black font-bold px-8 py-4 rounded-xl shadow-lg border border-gray-200 hover:bg-gray-100 transition-all hover:scale-105"
    >
      Összes meditációs módszer →
    </router-link>
  </div>
</section>

<!-- Image + text block -->
<section class="mb-16">
  <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
      <!-- Text Content -->
      <div class="p-8 md:p-12 lg:p-16 order-2 lg:order-1">
        <div class="inline-block mb-4 px-4 py-2 bg-accent/20 rounded-full">
          <span class="text-accent font-semibold text-sm">✨ Tudományosan bizonyított</span>
        </div>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
          Miért működik?
        </h2>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          A rendszeres gyakorlás kis lépésekben építkezik. Tudatos légzés, rövid fókusz gyakorlatok és következetes időbeosztás.
        </p>
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <div class="shrink-0 w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
              <span class="text-accent text-xl">🧘</span>
            </div>
            <div>
              <h3 class="font-semibold text-gray-800 mb-1">Tudatos légzés</h3>
              <p class="text-gray-600 text-sm">Nyugtatja az idegrendszert és csökkenti a stresszt</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="shrink-0 w-10 h-10 bg-success/20 rounded-full flex items-center justify-center">
              <span class="text-success text-xl">🎯</span>
            </div>
            <div>
              <h3 class="font-semibold text-gray-800 mb-1">Fókusz gyakorlatok</h3>
              <p class="text-gray-600 text-sm">Javítja a koncentrációt és a mentális tisztaságot</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="shrink-0 w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
              <span class="text-secondary text-xl">⏰</span>
            </div>
            <div>
              <h3 class="font-semibold text-gray-800 mb-1">Következetes rutin</h3>
              <p class="text-gray-600 text-sm">Tartós változást és jobb eredményeket hoz</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Image -->
      <div class="order-1 lg:order-2 h-64 md:h-80 lg:h-full min-h-[400px] relative overflow-hidden">
        <img
          :src="illustrationImg"
          alt="Meditáció illusztráció"
          class="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
        <div class="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-accent/10 to-transparent"></div>
      </div>
    </div>
  </div>
</section>
</main>
</div>

<!-- Questionnaire Modal -->
<QuestionnaireModal
  :is-open="showQuestionnaireModal || authStore.shouldShowQuestionnaire"
  :is-level-up="authStore.shouldShowQuestionnaire"
  @close="handleQuestionnaireClose"
  @submit="handleQuestionnaireSubmit"
/>

</template>

<script setup lang="ts">
import FeatureCard from '../components/FeatureCard.vue'
import QuestionnaireModal from '../components/QuestionnaireModal.vue'
import { useAuthStore } from '../stores/auth'
import { ref } from 'vue'
import type { QuestionnaireResult } from '../types/user'

const authStore = useAuthStore()
const showQuestionnaireModal = ref(false)

// Use placeholder.jpg for hero image (consistent, no randomization)
const heroImg = '/placeholder.jpg'
// Use a different placeholder for the illustration section
const illustrationImg = '/placeholder2.jpg'

// Featured exercises to display on home page
const featuredExercises = [
  { title: 'Whack-a-Mole játék', description: 'Ütögesd ki a stresszt interaktív játékkal!', to: '/features/whack-a-mole' },
  { title: 'Légzésszabályozás', description: 'Légzésszabályozó gyakorlatok vizuális vezérléssel.', to: '/features/breathing' },
  { title: 'Napi visszatekintés', description: 'Gondold át a napodat békében.', to: '/features/daily-reflection' },
]

async function handleQuestionnaireSubmit(result: QuestionnaireResult) {
  await authStore.saveQuestionnaireResult(result)
  // Modal will auto-close after showing result
}

function handleQuestionnaireClose() {
  showQuestionnaireModal.value = false
  authStore.dismissQuestionnaire()
}
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
