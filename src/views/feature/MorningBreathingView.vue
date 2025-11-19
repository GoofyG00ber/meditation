<template>
  <div class="min-h-screen bg-linear-to-br from-amber-50 via-orange-50 to-yellow-50">
    <div class="container mx-auto px-6 py-12">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <div class="inline-block mb-4 px-6 py-2 bg-orange-500/20 rounded-full">
            <span class="text-orange-600 font-semibold text-sm">☀️ Reggeli energia</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Napkelte légzés</h1>
          <p class="text-lg text-gray-700 max-w-2xl mx-auto">
            Ébreszd fel a tested és elméd a nap első sugaraival. Egy energizáló légzésgyakorlat a friss kezdethez.
          </p>
          <p class="text-sm text-gray-600 mt-2">Időtartam: 3–5 perc</p>
        </div>

        <!-- Points Info -->
        <PointsInfo exercise-type="morning_breathing" :fixed-points="40" />

        <!-- Hero Image -->
        <div class="mb-12 rounded-3xl overflow-hidden shadow-2xl">
          <img :src="heroImage" alt="Reggeli légzés" class="w-full h-64 object-cover" />
        </div>

        <!-- Introduction -->
        <div class="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl mb-8 border border-orange-200">
          <h2 class="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Miért éppen reggel?</h2>
          <p class="text-gray-700 leading-relaxed text-lg mb-4">
            A reggeli órák a legideálisabbak a tudatos légzésre. A tested nyugodt, az elméd friss, 
            és a gyakorlat segít beindítani az anyagcserét, növelni az oxigénszintet és pozitív energiával 
            tölteni fel a tested.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div class="bg-orange-50 rounded-xl p-4 text-center">
              <div class="text-3xl mb-2">⚡</div>
              <h3 class="font-semibold text-gray-800 mb-1">Energia</h3>
              <p class="text-sm text-gray-600">Fokozza az éberséget</p>
            </div>
            <div class="bg-yellow-50 rounded-xl p-4 text-center">
              <div class="text-3xl mb-2">🧠</div>
              <h3 class="font-semibold text-gray-800 mb-1">Tisztaság</h3>
              <p class="text-sm text-gray-600">Élezi a mentális fókuszt</p>
            </div>
            <div class="bg-amber-50 rounded-xl p-4 text-center">
              <div class="text-3xl mb-2">😊</div>
              <h3 class="font-semibold text-gray-800 mb-1">Pozitivitás</h3>
              <p class="text-sm text-gray-600">Jó hangulattal indít</p>
            </div>
          </div>
        </div>

        <!-- Breathing Technique -->
        <div class="bg-linear-to-r from-orange-500 to-yellow-500 rounded-3xl p-8 md:p-10 shadow-xl mb-8 text-white">
          <h2 class="text-2xl md:text-3xl font-bold mb-6">A Napkelte Légzés Technika</h2>
          
          <div class="space-y-6">
            <div class="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <div class="flex items-start gap-4">
                <div class="shrink-0 w-12 h-12 bg-white/30 rounded-full flex items-center justify-center font-bold text-xl">1</div>
                <div class="flex-1">
                  <h3 class="text-xl font-semibold mb-2">Kezdőpozíció</h3>
                  <p class="text-white/90 leading-relaxed">
                    Ülj kényelmesen egyenes gerinccel. Tedd a kezed a hasadra, hogy érezd a mozgást. 
                    Csukd be a szemed, vagy tekints lefelé lágy tekintettel.
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <div class="flex items-start gap-4">
                <div class="shrink-0 w-12 h-12 bg-white/30 rounded-full flex items-center justify-center font-bold text-xl">2</div>
                <div class="flex-1">
                  <h3 class="text-xl font-semibold mb-2">Energizáló belégzés – 4 másodperc</h3>
                  <p class="text-white/90 leading-relaxed">
                    Lélegezz be mélyen az orrodon keresztül 4 másodpercig. Képzeld el, hogy arany fényt szívsz be, 
                    amely megtölti a tested energiával és életörömmel.
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <div class="flex items-start gap-4">
                <div class="shrink-0 w-12 h-12 bg-white/30 rounded-full flex items-center justify-center font-bold text-xl">3</div>
                <div class="flex-1">
                  <h3 class="text-xl font-semibold mb-2">Rövid tartás – 2 másodperc</h3>
                  <p class="text-white/90 leading-relaxed">
                    Tartsd bent a levegőt 2 másodpercig. Érezd, ahogy az energia szétáramlik a testedben, 
                    minden sejted feltöltődik.
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <div class="flex items-start gap-4">
                <div class="shrink-0 w-12 h-12 bg-white/30 rounded-full flex items-center justify-center font-bold text-xl">4</div>
                <div class="flex-1">
                  <h3 class="text-xl font-semibold mb-2">Erőteljes kilégzés – 4 másodperc</h3>
                  <p class="text-white/90 leading-relaxed">
                    Fújd ki erőteljesen a szádon keresztül 4 másodperc alatt. Engedd el az álmosságot, 
                    a fáradtságot és minden nehézséget, amit magaddal hozol az éjszakából.
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <div class="flex items-start gap-4">
                <div class="shrink-0 w-12 h-12 bg-white/30 rounded-full flex items-center justify-center font-bold text-xl">5</div>
                <div class="flex-1">
                  <h3 class="text-xl font-semibold mb-2">Ismétlés</h3>
                  <p class="text-white/90 leading-relaxed">
                    Ismételd meg 5–7 alkalommal. Minden körrel érezd, ahogy egyre energikusabb és éberebb leszel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Interactive Timer -->
        <div class="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl mb-8 border border-orange-200">
          <h2 class="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center">Interaktív légzésvezetés</h2>
          
          <div class="mb-8 text-center">
            <div class="inline-block relative">
              <div 
                class="w-48 h-48 rounded-full flex items-center justify-center text-white font-bold text-2xl transition-all duration-1000 shadow-2xl"
                :style="{
                  background: phaseColor,
                  transform: `scale(${phaseScale})`
                }"
              >
                {{ displayTime }}
              </div>
            </div>
            <div class="mt-6 text-2xl font-semibold" :style="{ color: phaseTextColor }">
              {{ phaseText }}
            </div>
            <div class="text-gray-600 mt-2">{{ cycleCount }} / 7 ciklus</div>
          </div>

          <div class="flex justify-center gap-4 flex-wrap">
            <button 
              @click="startExercise" 
              v-if="!isRunning"
              class="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-xl transition-colors shadow-lg"
            >
              {{ cycleCount === 0 ? '🌅 Indítás' : '▶️ Folytatás' }}
            </button>
            <button 
              @click="pauseExercise" 
              v-if="isRunning"
              class="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-xl transition-colors shadow-lg"
            >
              ⏸️ Szünet
            </button>
            <button 
              @click="resetExercise"
              class="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-8 py-3 rounded-xl transition-colors shadow-lg"
            >
              🔄 Újraindítás
            </button>
          </div>

          <div v-if="completed" class="mt-6 bg-green-500/20 border-2 border-green-500 rounded-xl p-6 text-center">
            <p class="text-xl font-semibold text-green-800">✨ Gratulálunk! Befejezted a 7 ciklust.</p>
            <p class="text-green-700 mt-2">Kezdd magabiztosan és energikusan a napod! 🌞</p>
          </div>
        </div>

        <!-- Benefits -->
        <div class="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl mb-8 border border-orange-200">
          <h2 class="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Mit érsz el ezzel a gyakorlattal?</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex items-start gap-3 p-4 bg-orange-50 rounded-xl">
              <span class="text-2xl">💪</span>
              <div>
                <h3 class="font-semibold text-gray-800 mb-1">Növeli az energiaszintet</h3>
                <p class="text-sm text-gray-600">Több oxigén jut a sejtekbe, fokozva az éberséget</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-4 bg-yellow-50 rounded-xl">
              <span class="text-2xl">🎯</span>
              <div>
                <h3 class="font-semibold text-gray-800 mb-1">Javítja a koncentrációt</h3>
                <p class="text-sm text-gray-600">A tudatos légzés élezi a mentális fókuszt</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-4 bg-amber-50 rounded-xl">
              <span class="text-2xl">❤️</span>
              <div>
                <h3 class="font-semibold text-gray-800 mb-1">Beindítja a keringést</h3>
                <p class="text-sm text-gray-600">Az erőteljes légzés serkenti a vérkeringést</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-4 bg-orange-50 rounded-xl">
              <span class="text-2xl">😊</span>
              <div>
                <h3 class="font-semibold text-gray-800 mb-1">Pozitív hangulatot teremt</h3>
                <p class="text-sm text-gray-600">Endorfinokat szabadít fel, javítva a kedélyállapotot</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex justify-center gap-4 flex-wrap">
          <router-link 
            to="/sessions" 
            class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-xl transition-colors shadow-lg"
          >
            ← Vissza a gyakorlatokhoz
          </router-link>
          
          <button
            v-if="authStore.isAuthenticated && !exerciseCompleted"
            @click="() => completeExercise()"
            :disabled="completing"
            class="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white font-semibold px-8 py-3 rounded-xl transition-colors shadow-lg"
          >
            {{ completing ? 'Mentés...' : '✓ Gyakorlat befejezve' }}
          </button>
        </div>
        
        <!-- Completion Message -->
        <div v-if="exerciseCompleted" class="mt-6 bg-green-50 border-l-4 border-green-500 rounded-xl p-6 text-center">
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
import { ref, computed, onUnmounted } from 'vue'
import { placeholderFor } from '../../utils/placeholders'
import { useAuthStore } from '../../stores/auth'
import { useMeditationPoints } from '../../composables/useMeditationPoints'
import PointsInfo from '../../components/PointsInfo.vue'
import BadgeModal from '../../components/BadgeModal.vue'

const heroImage = placeholderFor(7) // Reggeli légzésgyakorlat
const authStore = useAuthStore()

const {
  completed: exerciseCompleted,
  completing,
  earnedPoints,
  showBadgeModal,
  newBadge,
  completeExercise,
  closeBadgeModal
} = useMeditationPoints('morning_breathing')

// 0 = inhale, 1 = hold, 2 = exhale
const phase = ref(0)
const timer = ref(0)
const isRunning = ref(false)
const cycleCount = ref(0)
const completed = ref(false)
let intervalId: number | undefined

const phaseDurations = [4, 2, 4] // seconds for each phase: inhale, hold, exhale

const displayTime = computed(() => {
  return timer.value
})

const phaseText = computed(() => {
  if (phase.value === 0) return '🌅 Belégzés...'
  if (phase.value === 1) return '⏱️ Tartás...'
  return '💨 Kilégzés...'
})

const phaseColor = computed(() => {
  if (phase.value === 0) return 'linear-gradient(135deg, #f59e0b, #fbbf24)' // inhale - orange gradient
  if (phase.value === 1) return 'linear-gradient(135deg, #fbbf24, #fde047)' // hold - yellow gradient
  return 'linear-gradient(135deg, #fb923c, #f97316)' // exhale - orange-red gradient
})

const phaseTextColor = computed(() => {
  if (phase.value === 0) return '#f59e0b'
  if (phase.value === 1) return '#eab308'
  return '#ea580c'
})

const phaseScale = computed(() => {
  if (phase.value === 0) return 1.1 // inhale - expand
  if (phase.value === 1) return 1.1 // hold - stay expanded
  return 0.9 // exhale - contract
})

function startExercise() {
  if (completed.value) {
    resetExercise()
  }
  
  isRunning.value = true
  timer.value = phaseDurations[phase.value] || 4
  
  intervalId = window.setInterval(() => {
    timer.value--
    
    if (timer.value <= 0) {
      // Move to next phase
      phase.value = (phase.value + 1) % 3
      
      // If we completed exhale, increment cycle
      if (phase.value === 0) {
        cycleCount.value++
        
        if (cycleCount.value >= 7) {
          completed.value = true
          pauseExercise()
          return
        }
      }
      
      timer.value = phaseDurations[phase.value] || 4
    }
  }, 1000)
}

function pauseExercise() {
  isRunning.value = false
  if (intervalId) {
    window.clearInterval(intervalId)
    intervalId = undefined
  }
}

function resetExercise() {
  pauseExercise()
  phase.value = 0
  timer.value = phaseDurations[0] || 4
  cycleCount.value = 0
  completed.value = false
}

onUnmounted(() => {
  if (intervalId) window.clearInterval(intervalId)
})
</script>
