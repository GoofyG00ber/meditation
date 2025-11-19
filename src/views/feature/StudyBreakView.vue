<template>
  <div class="min-h-screen bg-linear-to-br from-teal-50 via-emerald-50 to-green-50">
    <div class="container mx-auto px-6 py-12">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-800 mb-4">🎹 „Két perc csak légzés" – légzés és zongora</h1>
          <p class="text-lg text-gray-600">Idegrendszeri megnyugvás zenével</p>
          <p class="text-sm text-gray-500 mt-2">Időtartam: 2 perc</p>
        </div>

        <!-- Points Info -->
        <PointsInfo exercise-type="study" :fixed-points="30" />

        <!-- Hero Image -->
        <div class="mb-12 rounded-2xl overflow-hidden shadow-lg">
          <img :src="heroImage" alt="Légzés és zongora" class="w-full h-64 object-cover" />
        </div>

        <!-- Introduction -->
        <div class="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Cél: Idegrendszeri megnyugvás</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            Ez a gyakorlat kiegyenlíti az idegrendszeri aktivitást, csökkenti a felesleges belső zajt, 
            és segít visszatérni a tanulási zónába. Már 2 perc is elég ahhoz, hogy a szívritmus és a légzés szinkronba kerüljön, 
            ami fokozza az agyi oxigénellátást és a fókuszt.
          </p>
        </div>

        <!-- Practice Steps -->
        <div class="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Hogyan csináld?</h2>
          
          <div class="space-y-6">
            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div class="flex-1">
                <p class="text-gray-700 leading-relaxed">
                  Ülj kényelmesen, engedd el a vállakat, és hunyd le a szemed.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div class="flex-1">
                <p class="text-gray-700 leading-relaxed">
                  Figyeld a légzésed természetes ritmusát – ne irányítsd, csak kövesd.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div class="flex-1">
                <p class="text-gray-700 leading-relaxed">
                  Ha szeretnéd, indíts egy halk, lassú zongoradarabot, ami a légzés ritmusát támogatja.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
              <div class="flex-1">
                <p class="text-gray-700 leading-relaxed">
                  Minden belégzéssel engedd be a friss energiát, minden kilégzéssel engedd el a feszültséget.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
              <div class="flex-1">
                <p class="text-gray-700 leading-relaxed">
                  Ha elkalandozol, egyszerűen térj vissza a légzéshez.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Timer -->
        <div class="bg-white rounded-2xl p-8 shadow-lg mb-8 text-center">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Gyakorlat időzítő</h2>
          
          <div class="mb-6">
            <div class="text-6xl font-bold text-teal-600 mb-4">{{ displayTime }}</div>
            <div class="text-gray-600">{{ statusText }}</div>
          </div>

          <div class="flex justify-center gap-4">
            <button 
              @click="startTimer" 
              v-if="!isRunning"
              class="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Indítás
            </button>
            <button 
              @click="pauseTimer" 
              v-if="isRunning"
              class="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Szünet
            </button>
            <button 
              @click="resetTimer"
              class="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Újraindítás
            </button>
          </div>
        </div>

        <!-- Benefits -->
        <div class="bg-linear-to-r from-teal-500 to-emerald-500 rounded-2xl p-8 shadow-lg text-white mb-8">
          <h2 class="text-2xl font-bold mb-4">Miért hatásos?</h2>
          <div class="space-y-3">
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Kiegyenlíti az idegrendszeri aktivitást</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Csökkenti a felesleges belső zajt</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Segít visszatérni a tanulási zónába</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>A szívritmus és a légzés szinkronba kerül</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Fokozza az agyi oxigénellátást és a fókuszt</p>
            </div>
          </div>
        </div>

        <!-- Back Button -->
        <div class="mt-8 flex justify-center gap-4">
          <router-link 
            to="/sessions" 
            class="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
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
import { ref, computed, onUnmounted } from 'vue'
import { placeholderFor } from '../../utils/placeholders'
import { useAuthStore } from '../../stores/auth'
import { useMeditationPoints } from '../../composables/useMeditationPoints'
import PointsInfo from '../../components/PointsInfo.vue'
import BadgeModal from '../../components/BadgeModal.vue'

const heroImage = placeholderFor(11) // Stresszoldó szünet
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

const totalSeconds = ref(120) // 2 minutes
const remainingSeconds = ref(120)
const isRunning = ref(false)
let intervalId: number | undefined

const displayTime = computed(() => {
  const mins = Math.floor(remainingSeconds.value / 60)
  const secs = remainingSeconds.value % 60
  return `${mins}:${secs.toString().padStart(2, '0')}`
})

const statusText = computed(() => {
  if (remainingSeconds.value === 0) return 'Gyakorlat befejezve! ✨'
  if (isRunning.value) return 'Lélegezz természetesen...'
  return 'Kattints az Indítás gombra a kezdéshez'
})

function startTimer() {
  if (remainingSeconds.value === 0) {
    remainingSeconds.value = totalSeconds.value
  }
  
  isRunning.value = true
  intervalId = window.setInterval(() => {
    if (remainingSeconds.value > 0) {
      remainingSeconds.value--
    } else {
      pauseTimer()
    }
  }, 1000)
}

function pauseTimer() {
  isRunning.value = false
  if (intervalId) {
    window.clearInterval(intervalId)
    intervalId = undefined
  }
}

function resetTimer() {
  pauseTimer()
  remainingSeconds.value = totalSeconds.value
}

onUnmounted(() => {
  if (intervalId) window.clearInterval(intervalId)
})
</script>
