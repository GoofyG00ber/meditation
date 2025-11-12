<template>
  <div class="min-h-screen bg-slate-50">
    <div class="container mx-auto px-6 py-12">
      <div class="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow">
        <h1 class="text-2xl font-bold">Időzített csendes meditáció</h1>
        <p class="mt-2 text-gray-600">Állítsd be, mikor kezdődjön és mennyi ideig tartson az ülés.</p>

        <!-- Points Info -->
        <PointsInfo exercise-type="timed_meditation" points-type="time" class="mt-4" />

        <div class="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
          <label class="flex flex-col">
            <span class="text-sm text-gray-600">Kezdési idő</span>
            <input v-model="start" type="time" class="mt-1 p-2 border rounded-md" />
          </label>

          <label class="flex flex-col">
            <span class="text-sm text-gray-600">Időtartam (perc)</span>
            <input v-model.number="duration" type="number" min="1" class="mt-1 p-2 border rounded-md" />
          </label>

          <div>
            <button @click="schedule" class="bg-indigo-600 text-white px-4 py-2 rounded-md">Ütemezés</button>
          </div>
        </div>

        <div v-if="running" class="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded">
          <p class="font-medium">Futó meditáció — hátralévő idő: {{ minutes }}:{{ seconds }}</p>
          <div class="mt-3">
            <button @click="stop" class="px-3 py-1 rounded border">Megállít</button>
          </div>
        </div>

        <!-- Completion Message -->
        <div v-if="completed && authStore.isAuthenticated" class="mt-6 bg-green-50 border-l-4 border-green-500 rounded-lg p-6 text-center">
          <p class="text-lg font-semibold text-green-800">🎉 Gratulálunk! Befejezted a meditációt!</p>
          <p class="text-green-700 mt-2">+{{ earnedPoints }} pont ({{ meditationMinutes }} perc)</p>
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
import { ref, onBeforeUnmount } from 'vue'
import { useAuthStore } from '../../stores/auth'
import { calculateTimedMeditationPoints } from '../../utils/points'
import PointsInfo from '../../components/PointsInfo.vue'
import BadgeModal from '../../components/BadgeModal.vue'
import type { Badge } from '../../utils/points'

const authStore = useAuthStore()
const start = ref('')
const duration = ref(10)
const running = ref(false)
const minutes = ref('00')
const seconds = ref('00')
const completed = ref(false)
const earnedPoints = ref(0)
const meditationMinutes = ref(0)
const showBadgeModal = ref(false)
const newBadge = ref<Badge | null>(null)
let intervalId: number | undefined

function schedule() {
  // If start equals now (or is blank), start immediately
  running.value = true
  completed.value = false
  meditationMinutes.value = duration.value
  let total = duration.value * 60
  updateDisplay(total)
  intervalId = window.setInterval(() => {
    total -= 1
    if (total <= 0) {
      stop()
      return
    }
    updateDisplay(total)
  }, 1000)
}

function updateDisplay(total: number) {
  const m = Math.floor(total / 60)
  const s = total % 60
  minutes.value = String(m).padStart(2, '0')
  seconds.value = String(s).padStart(2, '0')
}

async function stop() {
  running.value = false
  if (intervalId) window.clearInterval(intervalId)
  
  // Award points if authenticated
  if (authStore.isAuthenticated && meditationMinutes.value > 0) {
    const points = calculateTimedMeditationPoints(meditationMinutes.value)
    earnedPoints.value = points
    
    const result = await authStore.addPoints(points, 'timed_meditation')
    if (result.success && result.newBadges.length > 0) {
      const badge = result.newBadges[0]
      if (badge) {
        newBadge.value = badge
        showBadgeModal.value = true
      }
    }
    
    completed.value = true
  }
}

function closeBadgeModal() {
  showBadgeModal.value = false
}

onBeforeUnmount(() => {
  if (intervalId) window.clearInterval(intervalId)
})
</script>
