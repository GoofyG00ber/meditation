<template>
  <div class="min-h-screen bg-slate-50">
    <div class="container mx-auto px-6 py-12">
      <div class="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow text-center">
        <h1 class="text-2xl font-bold">Controlled Breathing</h1>
        <p class="mt-2 text-gray-600">Vezérelt légzés vizuális visszajelzéssel. Állítsd be a tempót és kövesd a kört.</p>

        <div class="mt-8 relative">
          <!-- Background circle showing max size -->
          <div class="mx-auto w-64 h-64 rounded-full border-4 border-gray-200/50 flex items-center justify-center">
            <div class="mx-auto rounded-full flex items-center justify-center" :style="circleStyle">
              <div class="w-32 h-32 rounded-full bg-white/80 flex items-center justify-center text-gray-800 font-semibold">{{ phaseText }}</div>
            </div>
          </div>

          <!-- Fixed spacing area to prevent controls from moving -->
          <div class="h-16"></div>

          <div class="flex items-center justify-center gap-4">
            <label class="text-sm text-gray-600">Tempo (sec)</label>
            <input type="range" min="2" max="10" v-model.number="tempo" class="w-48" />
          </div>

          <div class="mt-4">
            <button @click="toggle" :class="['px-4 py-2 rounded-md', running ? 'bg-red-500 text-white' : 'bg-indigo-600 text-white']">{{ running ? 'Stop' : 'Start' }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const tempo = ref(6)
const running = ref(false)
const phase = ref(2) // Start at end of kilégzés (exhale) so Start will go into Belégzés immediately
let cycleTimer: number | undefined

const circleStyle = computed(() => ({
  width: `${circleSize.value}px`,
  height: `${circleSize.value}px`,
  backgroundColor: circleColor.value,
  transition: phase.value === 1 ? 'none' : `all ${tempo.value}s ease-in-out`,
}))

const circleSize = computed(() => {
  const maxSize = 256 // expanded size (matches background w-64)
  const minSize = 96 // shrunk size (smaller for better expansion visibility)

  if (phase.value === 0) return maxSize // Belégzés - expand
  if (phase.value === 1) return maxSize // Tartás - stay expanded
  return minSize // Kilégzés - shrink
})

const circleColor = computed(() => {
  if (phase.value === 0) return '#8CC0DE' // Belégzés - blue
  if (phase.value === 1) return '#FFD9C0' // Tartás - orange
  return '#CCEEBC' // Kilégzés - green
})

const phaseText = computed(() => {
  return phase.value === 0 ? 'Belégzés' : phase.value === 1 ? 'Tartás' : 'Kilégzés'
})

function startCycle() {
  // Start the breathing cycle
  cycleTimer = window.setInterval(() => {
    phase.value = (phase.value + 1) % 3
  }, tempo.value * 1000)

  // Immediately trigger the first phase change to start Belégzés expansion
  // Use setTimeout to ensure the transition is applied
  setTimeout(() => {
    phase.value = 0
  }, 10)
}

function stopCycle() {
  if (cycleTimer) window.clearInterval(cycleTimer)
  cycleTimer = undefined
  phase.value = 2 // Reset to end of kilégzés (small circle)
}

function toggle() {
  running.value = !running.value
  if (running.value) startCycle()
  else stopCycle()
}
</script>
