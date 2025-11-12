<template>
  <div class="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-rose-50">
    <div class="container mx-auto px-6 py-12">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-800 mb-4">🧠 Memóriaerősítő tudatos szünet</h1>
          <p class="text-lg text-gray-600">Az információk rögzítése, hosszú távú memória támogatása</p>
          <p class="text-sm text-gray-500 mt-2">Időtartam: 1–2 perc</p>
        </div>

        <!-- Points Info -->
        <PointsInfo exercise-type="study" :fixed-points="25" />

        <!-- Hero Image -->
        <div class="mb-12 rounded-2xl overflow-hidden shadow-lg">
          <img :src="heroImage" alt="Memória erősítés" class="w-full h-64 object-cover" />
        </div>

        <!-- Introduction -->
        <div class="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Cél</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            Az információk rögzítése, hosszú távú memória támogatása. 
            Ez az egyszerű gyakorlat az emlékezés-konzoláció mechanizmusát aktiválja: 
            a rövid tudatos visszaidézés erősíti a hippokampusz-kapcsolatokat, 
            így a megtanult információ stabilabban rögzül.
          </p>
        </div>

        <!-- Practice Steps -->
        <div class="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Hogyan csináld?</h2>
          
          <div class="space-y-6">
            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div class="flex-1">
                <p class="text-gray-700 leading-relaxed">
                  Csukd be a szemed, és idézd fel, mit tanultál az elmúlt néhány percben.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div class="flex-1">
                <p class="text-gray-700 leading-relaxed">
                  Képzeld el, ahogy az információ helyet talál az elmédben – mintha rendszereződne.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div class="flex-1">
                <p class="text-gray-700 leading-relaxed mb-3">
                  Végy egy mély levegőt, és mondd magadban:
                </p>
                <div class="bg-purple-50 border-l-4 border-purple-500 p-4">
                  <p class="text-gray-800 font-medium italic">
                    „Ez a tudás elérhető marad, amikor szükségem lesz rá."
                  </p>
                </div>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
              <div class="flex-1">
                <p class="text-gray-700 leading-relaxed">
                  Engedd, hogy a kilégzés elmélyítse az emlékezést.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Science Behind -->
        <div class="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🔬 Tudományos háttér</h2>
          <p class="text-gray-700 leading-relaxed">
            Ez az egyszerű gyakorlat az <span class="font-semibold">emlékezés-konzoláció mechanizmusát</span> aktiválja: 
            a rövid tudatos visszaidézés erősíti a hippokampusz-kapcsolatokat, így a megtanult információ stabilabban rögzül. 
            A gyakorlat különösen hatékony, ha közvetlenül a tanulás után végzed el.
          </p>
        </div>

        <!-- Benefits -->
        <div class="bg-linear-to-r from-purple-500 to-pink-500 rounded-2xl p-8 shadow-lg text-white mb-8">
          <h2 class="text-2xl font-bold mb-4">Előnyei</h2>
          <div class="space-y-3">
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Erősíti a hippokampusz-kapcsolatokat</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Stabilabban rögzíti a megtanult információt</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Javítja a hosszú távú memóriát</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Segíti az információk rendszerezését</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Növeli a tanulás hatékonyságát</p>
            </div>
          </div>
        </div>

        <!-- Practice Reminder -->
        <div class="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 mb-8">
          <h3 class="text-lg font-bold text-gray-800 mb-2">💡 Tipp a hatékony alkalmazáshoz</h3>
          <p class="text-gray-700">
            A legjobb eredményért gyakorold ezt minden 25-30 perces tanulási szakasz után. 
            Így az információk jobban beépülnek a hosszú távú memóriába, és könnyebben előhívhatók lesznek vizsgák vagy prezentációk során.
          </p>
        </div>

        <!-- Back Button -->
        <div class="mt-8 flex justify-center gap-4">
          <router-link 
            to="/sessions" 
            class="inline-block bg-purple-500 hover:bg-purple-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
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
import { nextPlaceholder } from '../../utils/placeholders'
import { useAuthStore } from '../../stores/auth'
import { useMeditationPoints } from '../../composables/useMeditationPoints'
import PointsInfo from '../../components/PointsInfo.vue'
import BadgeModal from '../../components/BadgeModal.vue'

const heroImage = nextPlaceholder()
const authStore = useAuthStore()

const {
  completed,
  completing,
  earnedPoints,
  showBadgeModal,
  newBadge,
  completeExercise,
  closeBadgeModal
} = useMeditationPoints('study')
</script>
