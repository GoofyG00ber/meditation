<template>
  <div class="min-h-screen bg-linear-to-br from-green-50 via-emerald-50 to-teal-50">
    <div class="container mx-auto px-6 py-12">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-800 mb-4">🌳 Földelés gyakorlat</h1>
          <p class="text-lg text-gray-600">Visszatérés a stabil ponthoz</p>
          <p class="text-sm text-gray-500 mt-2">Időtartam: 2–3 perc</p>
        </div>

        <!-- Points Info -->
        <PointsInfo exercise-type="stress" :fixed-points="25" />

        <!-- Hero Image -->
        <div class="mb-12 rounded-2xl overflow-hidden shadow-lg">
          <img :src="heroImage" alt="Földelés gyakorlat" class="w-full h-64 object-cover" />
        </div>

        <!-- When to Use -->
        <div class="bg-emerald-100 border-l-4 border-emerald-500 rounded-lg p-6 mb-8">
          <h2 class="text-xl font-bold text-gray-800 mb-2">⚡ Mikor használd?</h2>
          <p class="text-gray-700 leading-relaxed">
            Ha „szétcsúszottnak", bizonytalannak érzed magad, vagy elvesztetted a kapcsolatot a valósággal. 
            Ez a gyakorlat visszakapcsol a jelenhez és a biztonság érzéséhez.
          </p>
        </div>

        <!-- Practice Steps -->
        <div class="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Hogyan csináld?</h2>
          
          <div class="space-y-6">
            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div class="flex-1">
                <p class="text-gray-700 leading-relaxed">
                  Ülj vagy állj egyenesen, és érezd, ahogy a talpad a földhöz kapcsolódik.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div class="flex-1">
                <p class="text-gray-700 leading-relaxed">
                  Képzeld el, hogy gyökerek nőnek a lábfejedből, mélyen a talajba. 
                  Ezek a gyökerek erősek, stabilak, és biztosan tartanak.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div class="flex-1">
                <p class="text-gray-700 leading-relaxed">
                  Minden kilégzéssel engedd el a feszültséget a testedből a föld felé. 
                  Képzeld el, ahogy a föld elnyelni és semlegesíti ezt az energiát.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
              <div class="flex-1">
                <p class="text-gray-700 leading-relaxed mb-3">
                  Belégzéskor érezd, ahogy stabilitást, biztonságot és erőt szívsz magadba a földből.
                </p>
                <div class="bg-emerald-50 border-l-4 border-emerald-500 p-4">
                  <p class="text-gray-800 font-medium italic">
                    „Erős vagyok, stabil vagyok, biztonságban vagyok."
                  </p>
                </div>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
              <div class="flex-1">
                <p class="text-gray-700 leading-relaxed">
                  Ismételd meg ezt a vizualizációt 5-10 lélegzetvételen keresztül, 
                  amíg érzed, hogy visszanyerted a belső egyensúlyodat.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Visualization Guide -->
        <div class="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎨 Vizualizációs segítség</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            Ha nehezen megy a vizualizáció, próbálj meg konkrét részleteket elképzelni:
          </p>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-500 font-bold">•</span>
              <span>Milyen színűek a gyökerek? (Például: aranybarnahályzatos, vagy fehér-ragyogóak)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-500 font-bold">•</span>
              <span>Milyen mélyre nyúlnak? (Lehet, hogy csak néhány méter, vagy akár a Föld magjáig)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-500 font-bold">•</span>
              <span>Milyen érzés, amikor a föld visszaadja az energiát? (Melegség, bizsergés, nyugalom)</span>
            </li>
          </ul>
        </div>

        <!-- Why It Works -->
        <div class="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🔬 Miért működik?</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            Ez a gyakorlat szimbolikus és fiziológiai földelést is biztosít – 
            segít újrakapcsolni a testedet a valósághoz, és megszüntetni a belső „szétesettség" érzését.
          </p>
          <p class="text-gray-700 leading-relaxed">
            A vizualizáció és a lábfejre való tudatos figyelem aktiválja a test-tudatot, 
            ami csökkenti a disszociációt (elszakadás érzését) és növeli a biztonságérzetet. 
            A mély légzés eközben stabilizálja az idegrendszert.
          </p>
        </div>

        <!-- Benefits -->
        <div class="bg-linear-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 shadow-lg text-white mb-8">
          <h2 class="text-2xl font-bold mb-4">Előnyei</h2>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Csökkenti a disszociáció érzését</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Növeli a biztonságérzetet</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Stabilizálja az idegrendszert</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Erősíti a test-tudatot</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Visszahozza a kapcsolatot a valósággal</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Bárhol, bármikor gyakorolható</p>
            </div>
          </div>
        </div>

        <!-- Back Button -->
        <div class="mt-8 flex justify-center gap-4">
          <router-link 
            to="/sessions" 
            class="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
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

const heroImage = placeholderFor(1) // Földelés gyakorlat
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
