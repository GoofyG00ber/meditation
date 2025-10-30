<template>
  <div class="min-h-screen bg-slate-50">
    <div class="container mx-auto px-6 py-12">
      <div class="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow">
        <h1 class="text-2xl font-bold">Napi emlékeztető</h1>
        <p class="mt-2 text-gray-600">Állíts be egy időpontot, és mi emlékeztetünk a napi gyakorlásra.</p>

        <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
          <label class="flex flex-col">
            <span class="text-sm text-gray-600">Időpont</span>
            <input v-model="time" type="time" class="mt-1 p-2 border rounded-md" />
          </label>

          <div>
            <button @click="save" class="bg-indigo-600 text-white px-4 py-2 rounded-md">Mentés</button>
            <button @click="clear" class="ml-3 border px-4 py-2 rounded-md">Törlés</button>
          </div>
        </div>

        <p class="mt-4 text-sm text-gray-500">Mentett idő: <span class="font-medium">{{ savedTime || 'nincs' }}</span></p>

        <div v-if="showAlert" class="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded">
          <strong class="text-emerald-700">Emlékeztető:</strong>
          <p class="text-gray-700">Ideje meditálni — szánj rá néhány percet most.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const time = ref('')
const savedTime = ref<string | null>(null)
const showAlert = ref(false)
let timerId: number | undefined

function load() {
  const t = localStorage.getItem('dailyReminder')
  if (t) {
    savedTime.value = t
    time.value = t
  }
}

function save() {
  localStorage.setItem('dailyReminder', time.value)
  savedTime.value = time.value
  scheduleCheck()
}

function clear() {
  localStorage.removeItem('dailyReminder')
  savedTime.value = null
  time.value = ''
  showAlert.value = false
  if (timerId) window.clearInterval(timerId)
}

function scheduleCheck() {
  if (timerId) window.clearInterval(timerId)
  timerId = window.setInterval(() => {
    if (!savedTime.value) return
    const now = new Date()
    const [hh, mm] = savedTime.value.split(':').map(Number)
    if (now.getHours() === hh && now.getMinutes() === mm) {
      showAlert.value = true
      setTimeout(() => (showAlert.value = false), 20_000)
    }
  }, 60_000)
}

onMounted(() => {
  load()
  scheduleCheck()
})

onBeforeUnmount(() => {
  if (timerId) window.clearInterval(timerId)
})
</script>
