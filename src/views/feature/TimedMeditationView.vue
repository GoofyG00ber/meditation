<template>
  <div class="min-h-screen bg-slate-50">
    <div class="container mx-auto px-6 py-12">
      <div class="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow">
        <h1 class="text-2xl font-bold">Időzített csendes meditáció</h1>
        <p class="mt-2 text-gray-600">Állítsd be, mikor kezdődjön és mennyi ideig tartson az ülés.</p>

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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'

const start = ref('')
const duration = ref(10)
const running = ref(false)
const minutes = ref('00')
const seconds = ref('00')
let intervalId: number | undefined

function schedule() {
  // If start equals now (or is blank), start immediately
  running.value = true
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

function stop() {
  running.value = false
  if (intervalId) window.clearInterval(intervalId)
}

onBeforeUnmount(() => {
  if (intervalId) window.clearInterval(intervalId)
})
</script>
