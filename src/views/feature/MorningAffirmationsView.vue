<template>
  <div class="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50">
    <div class="container mx-auto px-6 py-12">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-800 mb-4">💬 Positive Self-Talk – Pozitív önbeszéd</h1>
          <p class="text-lg text-gray-600">Erősítsd meg magad pozitív gondolatokkal</p>
          <p class="text-sm text-gray-500 mt-2">Időtartam: 1–2 perc</p>
        </div>

        <!-- Points Info -->
        <PointsInfo exercise-type="morning" :fixed-points="30" />

        <!-- Hero Image -->
        <div class="mb-12 rounded-2xl overflow-hidden shadow-lg">
          <img :src="heroImage" alt="Pozitív affirmációk" class="w-full h-64 object-cover" />
        </div>

        <!-- Introduction -->
        <div class="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Mi ez?</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            A reggel első gondolatai határozzák meg, hogyan működik napközben az idegrendszered. 
            A pozitív önbeszéd segít átállítani az agyad fenyegetés-üzemmódról teljesítmény-üzemmódra és a nyugalom állapotába. 
            Ezzel tudatosan megalapozod a napod érzelmi tónusát.
          </p>
        </div>

        <!-- Practice Steps -->
        <div class="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Hogyan csináld?</h2>
          
          <div class="space-y-6">
            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div class="flex-1">
                <p class="text-gray-700 leading-relaxed">Ülj le kényelmesen.</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div class="flex-1">
                <p class="text-gray-700 leading-relaxed">Vegyél 3 mély lélegzetet.</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div class="flex-1">
                <p class="text-gray-700 leading-relaxed mb-3">
                  Figyelj néhány másodpercig a légzésedre, majd mondd ki hangosan vagy magadban:
                </p>
                <div class="space-y-3">
                  <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4">
                    <p class="text-gray-800 font-medium">„Képes vagyok kezelni a mai napot."</p>
                  </div>
                  <div class="bg-purple-50 border-l-4 border-purple-500 p-4">
                    <p class="text-gray-800 font-medium">„Ma türelmes, fókuszált és erős vagyok."</p>
                  </div>
                  <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <p class="text-gray-800 font-medium">„Ma elég vagyok, úgy ahogy vagyok."</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
              <div class="flex-1">
                <p class="text-gray-700 leading-relaxed">
                  Ismételd ezeket lassan, őszintén, amíg érzed, hogy belül megnyugszol.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
              <div class="flex-1">
                <p class="text-gray-700 leading-relaxed">
                  <span class="font-semibold">Ajánlott hozzá:</span> halk háttérzene
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Benefits -->
        <div class="bg-linear-to-r from-indigo-500 to-purple-500 rounded-2xl p-8 shadow-lg text-white mb-8">
          <h2 class="text-2xl font-bold mb-4">Mire jó?</h2>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Csökkenti a reggeli stresszt és a szorongást</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Emeli a dopamin- és szerotoninszintet</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Aktiválja az önbizalomért és fókuszért felelős agyi területeket</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Segít kiegyensúlyozott, nyugodt hangulatban indítani a napot</p>
            </div>
          </div>
        </div>

        <!-- Videos -->
        <div class="bg-white rounded-2xl p-8 shadow-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Ajánlott videók</h2>
          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">The Power of Vulnerability - Brené Brown (20 perc)</h3>
              <div class="aspect-video rounded-lg overflow-hidden">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/iCvmsMzlF7o" 
                  title="The Power of Vulnerability" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen
                  class="w-full h-full"
                ></iframe>
              </div>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">The Power of Words (8 perc)</h3>
              <div class="aspect-video rounded-lg overflow-hidden">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/tgS7bFWlqsw" 
                  title="The Power of Words" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen
                  class="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <!-- Back Button -->
        <div class="mt-8 flex justify-center gap-4">
          <router-link 
            to="/sessions" 
            class="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            ← Vissza a gyakorlatokhoz
          </router-link>
          
          <button
            v-if="authStore.isAuthenticated && !completed"
            @click="() => completeExercise()"
            :disabled="completing"
            class="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            {{ completing ? 'Mentés...' : 'Gyakorlat befejezve ✓' }}
          </button>
        </div>
        
        <!-- Completion Message -->
        <div v-if="completed" class="mt-6 bg-green-50 border-l-4 border-green-500 rounded-lg p-6 text-center">
          <p class="text-lg font-semibold text-green-800">🎉 Gratulálunk! Befejezted a gyakorlatot!</p>
          <p class="text-green-700 mt-2">+{{ earnedPoints }} pont</p>
        </div>
      </div>
    </div>
    
    <!-- Badge Modal -->
    <BadgeModal 
      v-if="newBadge"
      :show="showBadgeModal" 
      :badge="newBadge"
      @close="closeBadgeModal"
    />
  </div>
</template>

<script setup lang="ts">
import { placeholderFor } from '../../utils/placeholders'
import { useAuthStore } from '../../stores/auth'
import { useMeditationPoints } from '../../composables/useMeditationPoints'
import PointsInfo from '../../components/PointsInfo.vue'
import BadgeModal from '../../components/BadgeModal.vue'

const heroImage = placeholderFor(8) // Pozitív affirmációk
const authStore = useAuthStore()

const {
  completed,
  completing,
  earnedPoints,
  showBadgeModal,
  newBadge,
  completeExercise,
  closeBadgeModal
} = useMeditationPoints('morning')
</script>
