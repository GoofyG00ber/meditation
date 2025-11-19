<template>
  <div class="min-h-screen bg-linear-to-br from-red-50 via-orange-50 to-yellow-50">
    <div class="container mx-auto px-6 py-12">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-800 mb-4">🚨 Gyors stresszoldás</h1>
          <p class="text-lg text-gray-600">Azonnali megkönnyebbülés stresszhelyzetben</p>
          <p class="text-sm text-gray-500 mt-2">Időtartam: 1–2 perc</p>
        </div>

        <!-- Points Info -->
        <PointsInfo exercise-type="stress" :fixed-points="20" />

        <!-- Hero Image -->
        <div class="mb-12 rounded-2xl overflow-hidden shadow-lg">
          <img :src="heroImage" alt="Gyors stresszoldás" class="w-full h-64 object-cover" />
        </div>

        <!-- When to Use -->
        <div class="bg-red-100 border-l-4 border-red-500 rounded-lg p-6 mb-8">
          <h2 class="text-xl font-bold text-gray-800 mb-2">⚡ Mikor használd?</h2>
          <p class="text-gray-700 leading-relaxed">
            Ha hirtelen elönt a stressz, szorítás a mellkasban, gyors szívverés, vagy negatív spirálba kerülsz.
          </p>
        </div>

        <!-- Practice Steps -->
        <div class="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Hogyan csináld?</h2>
          
          <div class="space-y-6">
            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div class="flex-1">
                <p class="text-gray-700 leading-relaxed">
                  Vegyél három mély, lassú levegőt: orron be, szájon ki.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div class="flex-1">
                <p class="text-gray-700 leading-relaxed">
                  Kilégzésnél képzeld el, hogy minden feszültség elpárolog.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div class="flex-1">
                <p class="text-gray-700 leading-relaxed mb-3">
                  Mondd magadban:
                </p>
                <div class="bg-red-50 border-l-4 border-red-500 p-4">
                  <p class="text-gray-800 font-medium italic">
                    „A testem reagál, de biztonságban vagyok."
                  </p>
                </div>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
              <div class="flex-1">
                <p class="text-gray-700 leading-relaxed">
                  Engedd, hogy a légzés ritmusa visszahozzon a jelenbe.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Why It Works -->
        <div class="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🔬 Miért működik?</h2>
          <p class="text-gray-700 leading-relaxed">
            Ez a gyakorlat megszakítja a stresszreakció láncolatát, és segít, hogy az agy visszaváltson a racionális, nyugodt üzemmódba. 
            A mély légzés aktiválja a paraszimpatikus idegrendszert, amely csökkenti a kortizol és adrenalin szintet, 
            így a tested fizikailag is nyugodtabb állapotba kerül.
          </p>
        </div>

        <!-- Benefits -->
        <div class="bg-linear-to-r from-red-500 to-orange-500 rounded-2xl p-8 shadow-lg text-white mb-8">
          <h2 class="text-2xl font-bold mb-4">Előnyei</h2>
          <div class="space-y-3">
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Azonnali stresszcsökkentés</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Megszakítja a pánik spirált</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Csökkenti a szívverést és vérnyomást</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Visszahozza a mentális kontrollt</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Bárhol, bármikor alkalmazható</p>
            </div>
          </div>
        </div>

        <!-- Back Button -->
        <div class="mt-8 flex justify-center gap-4">
          <router-link 
            to="/sessions" 
            class="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
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

const heroImage = placeholderFor(15) // Gyors stresszoldás
const authStore = useAuthStore()

const {
  completed,
  completing,
  earnedPoints,
  showBadgeModal,
  newBadge,
  completeExercise,
  closeBadgeModal
} = useMeditationPoints('stress')
</script>
