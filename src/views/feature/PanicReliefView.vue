<template>
  <div class="min-h-screen bg-linear-to-br from-rose-50 via-red-50 to-pink-50">
    <div class="container mx-auto px-6 py-12">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-800 mb-4">😰 Pánik elleni légzőgyakorlat</h1>
          <p class="text-lg text-gray-600">5-4-3-2-1 technika</p>
          <p class="text-sm text-gray-500 mt-2">Pánikroham és fokozott szorongás kezelésére</p>
        </div>

        <!-- Points Info -->
        <PointsInfo exercise-type="stress" :fixed-points="30" />

        <!-- Hero Image -->
        <div class="mb-12 rounded-2xl overflow-hidden shadow-lg">
          <img :src="heroImage" alt="Pánik elleni gyakorlat" class="w-full h-64 object-cover" />
        </div>

        <!-- When to Use -->
        <div class="bg-rose-100 border-l-4 border-rose-500 rounded-lg p-6 mb-8">
          <h2 class="text-xl font-bold text-gray-800 mb-2">⚡ Mikor használd?</h2>
          <p class="text-gray-700 leading-relaxed">
            Pánikroham, fokozott szorongás, heves szívverés esetén. 
            Ez a technika gyorsan lehozza az agyat a vészreakció állapotából, és visszahozza a jelenbe.
          </p>
        </div>

        <!-- Practice Steps -->
        <div class="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Hogyan csináld?</h2>
          
          <div class="space-y-6">
            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">5 dolog, amit látsz</h3>
                <p class="text-gray-700 leading-relaxed">
                  Nézz körül, és nevezd meg 5 dolgot, amit látsz. 
                  Lehet ez egy toll, egy lámpa, egy folt a falon – bármi, ami megragadja a figyelmedet.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">4 dolog, amit érzel</h3>
                <p class="text-gray-700 leading-relaxed">
                  Érints meg 4 dolgot, amit érzel (pl. szék, ruha, asztal, a föld a lábad alatt). 
                  Figyelj arra, milyen az anyag textúrája, hőmérséklete.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">3 hang, amit hallasz</h3>
                <p class="text-gray-700 leading-relaxed">
                  Figyelj 3 hangra, amit hallasz. Lehet ez a légzésed, egy távoli autó, madarak csicsergése, 
                  vagy a hűtő berregése.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">2 illat, amit érzel</h3>
                <p class="text-gray-700 leading-relaxed">
                  Érezz 2 illatot (vagy idézd fel képzeletben). 
                  Lehet ez a ruhád illata, kávé, vagy csak a levegő frissessége.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">1 dolog, amiért hálás lehetsz</h3>
                <p class="text-gray-700 leading-relaxed mb-3">
                  Végül gondolj 1 dologra, amiért most hálás lehetsz. 
                  Lehet ez valami egyszerű, mint a biztonság érzése, egy kényelmes hely, vagy az, hogy túl vagy a legnehezebben.
                </p>
                <div class="bg-rose-50 border-l-4 border-rose-500 p-4">
                  <p class="text-gray-800 font-medium">
                    Ez a lépés segít áthangolni az agyat a fenyegetettségből a biztonság érzésére.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Why It Works -->
        <div class="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🔬 Miért működik?</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            Ez a technika aktiválja az agy érzékelő hálózatait, és lekapcsolja a vészreakciós rendszert (amygdala). 
            A figyelem jelenre való összpontosítása csökkenti a kognitív disszonanciát és az érzelmi túlterhelést.
          </p>
          <p class="text-gray-700 leading-relaxed">
            Amikor pánikban vagy, az agyad „veszélyt" érzékel, még akkor is, ha valójában biztonságban vagy. 
            Az 5-4-3-2-1 technika konkrét, érzékszervi információkkal bizonyítja az agyadnak, 
            hogy itt és most biztonságban vagy, és nincs valós veszély.
          </p>
        </div>

        <!-- Benefits -->
        <div class="bg-linear-to-r from-rose-500 to-pink-500 rounded-2xl p-8 shadow-lg text-white mb-8">
          <h2 class="text-2xl font-bold mb-4">Előnyei</h2>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Lekapcsolja a vészreakciós rendszert</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Visszahozza a jelenbe</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Csökkenti a pánikroham intenzitását</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Aktiválja az érzékelő hálózatokat</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Csökkenti a kognitív disszonanciát</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Nincs szükség eszközre vagy különleges helyszínre</p>
            </div>
          </div>
        </div>

        <!-- Back Button -->
        <div class="mt-8 flex justify-center gap-4">
          <router-link 
            to="/sessions" 
            class="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
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
} = useMeditationPoints('stress')
</script>
