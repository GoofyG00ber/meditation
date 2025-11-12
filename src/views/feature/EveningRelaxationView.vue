<template>
  <div class="min-h-screen bg-linear-to-br from-indigo-900 via-blue-900 to-purple-900 text-white">
    <div class="container mx-auto px-6 py-12">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold mb-4">🌙 Controlled Breathing – 4–7–8 légzéstechnika</h1>
          <p class="text-lg text-gray-300">Az idegrendszer „lekapcsolása", alvás előtti mély nyugalom elérése</p>
          <p class="text-sm text-gray-400 mt-2">Időtartam: 2–4 perc</p>
        </div>

        <!-- Points Info -->
        <PointsInfo exercise-type="evening" :fixed-points="50" />

        <!-- Hero Image -->
        <div class="mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <img :src="heroImage" alt="Esti relaxáció" class="w-full h-64 object-cover" loading="lazy" />
        </div>

        <!-- Introduction -->
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8">
          <h2 class="text-2xl font-bold mb-4">Cél</h2>
          <p class="text-gray-200 leading-relaxed">
            Az idegrendszer „lekapcsolása", alvás előtti mély nyugalom elérése.
            Ez a technika lelassítja a szívverést, növeli a szívritmus-variabilitást,
            és az oxigén-szén-dioxid arány optimalizálásával az agyat „pihenés" üzemmódba kapcsolja.
            Klinikailag is bizonyított, hogy csökkenti a kortizolszintet és elősegíti a gyorsabb elalvást.
          </p>
        </div>

        <!-- Practice Steps -->
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8">
          <h2 class="text-2xl font-bold mb-6">Hogyan csináld?</h2>

          <div class="space-y-6">
            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-2">Belégzés – 4 másodperc</h3>
                <p class="text-gray-200 leading-relaxed">
                  Lélegezz be 4 másodpercig az orrodon keresztül. Érezd, ahogy a levegő lassan megtölti a tüdődet.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-2">Tartás – 7 másodperc</h3>
                <p class="text-gray-200 leading-relaxed">
                  Tartsd bent 7 másodpercig – érezd, ahogy a tested megnyugszik, és az oxigén eloszlik.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-2">Kilégzés – 8 másodperc</h3>
                <p class="text-gray-200 leading-relaxed">
                  Fújd ki lassan 8 másodperc alatt a szádon keresztül, mintha egy gyertyát fújnál el.
                  Engedd, hogy minden feszültség távozzon.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-2">Ismétlés</h3>
                <p class="text-gray-200 leading-relaxed">
                  Ismételd meg 4–5 alkalommal, miközben a figyelmedet a levegő áramlásán tartod.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Interactive Timer -->
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8 text-center">
          <h2 class="text-2xl font-bold mb-6">Interaktív légzésvezetés</h2>

          <div class="mb-8">
            <div class="text-7xl font-bold mb-4" :class="phaseColor">{{ displayTime }}</div>
            <div class="text-2xl font-semibold text-gray-300 mb-2">{{ phaseText }}</div>
            <div class="text-gray-400">{{ cycleCount }} / 5 ciklus</div>
          </div>

          <div class="flex justify-center gap-4">
            <button
              @click="startExercise"
              v-if="!isRunning"
              class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              {{ cycleCount === 0 ? 'Indítás' : 'Folytatás' }}
            </button>
            <button
              @click="pauseExercise"
              v-if="isRunning"
              class="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Szünet
            </button>
            <button
              @click="resetExercise"
              class="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Újraindítás
            </button>
          </div>

          <div v-if="completed" class="mt-6 bg-green-500/20 border border-green-500/50 rounded-lg p-4">
            <p class="text-lg font-semibold text-green-300">✨ Gratulálunk! Befejezted a 5 ciklust.</p>
            <p class="text-gray-300 mt-1">Készülj fel a nyugodt alvásra. 🌙</p>
          </div>
        </div>

        <!-- Benefits -->
        <div class="bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 shadow-lg text-white mb-8">
          <h2 class="text-2xl font-bold mb-4">Miért hatásos?</h2>
          <div class="space-y-3">
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Lelassítja a szívverést és növeli a szívritmus-variabilitást</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Optimalizálja az oxigén-szén-dioxid arányt</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Az agyat „pihenés" üzemmódba kapcsolja</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Csökkenti a kortizolszintet</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Elősegíti a gyorsabb elalvást</p>
            </div>
          </div>
        </div>

        <!-- Back Button -->
        <div class="mt-8 flex justify-center gap-4">
          <router-link
            to="/sessions"
            class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            ← Vissza a gyakorlatokhoz
          </router-link>

          <button
            v-if="authStore.isAuthenticated && !exerciseCompleted"
            @click="() => completeExercise()"
            :disabled="completing"
            class="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            {{ completing ? 'Mentés...' : 'Gyakorlat befejezve ✓' }}
          </button>
        </div>

        <!-- Completion Message -->
        <div v-if="exerciseCompleted" class="mt-6 bg-green-50 border-l-4 border-green-500 rounded-lg p-6 text-center">
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
import { nextPlaceholder } from '../../utils/placeholders'
import { useAuthStore } from '../../stores/auth'
import { useMeditationPoints } from '../../composables/useMeditationPoints'
import PointsInfo from '../../components/PointsInfo.vue'
import BadgeModal from '../../components/BadgeModal.vue'

const heroImage = nextPlaceholder()
const authStore = useAuthStore()

const {
  completed: exerciseCompleted,
  completing,
  earnedPoints,
  showBadgeModal,
  newBadge,
  completeExercise,
  closeBadgeModal
} = useMeditationPoints('evening')

// 0 = inhale, 1 = hold, 2 = exhale
const phase = ref(0)
const timer = ref(0)
const isRunning = ref(false)
const cycleCount = ref(0)
const completed = ref(false)
let intervalId: number | undefined

const phaseDurations = [4, 7, 8] // seconds for each phase

const displayTime = computed(() => {
  return timer.value
})

const phaseText = computed(() => {
  if (phase.value === 0) return 'Belégzés...'
  if (phase.value === 1) return 'Tartás...'
  return 'Kilégzés...'
})

const phaseColor = computed(() => {
  if (phase.value === 0) return 'text-blue-400'
  if (phase.value === 1) return 'text-purple-400'
  return 'text-indigo-400'
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

        if (cycleCount.value >= 5) {
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
