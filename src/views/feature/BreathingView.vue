<template>
  <div class="min-h-screen bg-slate-50">
    <div class="container mx-auto px-6 py-12">
      <div class="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow text-center">
        <h1 class="text-2xl font-bold">Controlled Breathing</h1>
        <p class="mt-2 text-gray-600">Vezérelt légzés vizuális visszajelzéssel. Állítsd be a tempót és kövesd a kört.</p>

        <div class="mt-8">
          <div class="mx-auto w-48 h-48 rounded-full flex items-center justify-center" :style="circleStyle">
            <div class="w-32 h-32 rounded-full bg-indigo-100/80 flex items-center justify-center text-indigo-700 font-semibold">{{ phaseText }}</div>
          </div>

          <div class="mt-6 flex items-center justify-center gap-4">
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
const phase = ref(0) // 0 = inhale, 1 = hold, 2 = exhale
let cycleTimer: number | undefined

const circleStyle = computed(() => ({
  transition: `all ${tempo.value}s ease-in-out`,
}))

const phaseText = computed(() => {
  return phase.value === 0 ? 'Belégzés' : phase.value === 1 ? 'Tartás' : 'Kilégzés'
})

function startCycle() {
  cycleTimer = window.setInterval(() => {
    phase.value = (phase.value + 1) % 3
  }, tempo.value * 1000)
}

function stopCycle() {
  if (cycleTimer) window.clearInterval(cycleTimer)
  cycleTimer = undefined
  phase.value = 0
}

function toggle() {
  running.value = !running.value
  if (running.value) startCycle()
  else stopCycle()
}
</script>
