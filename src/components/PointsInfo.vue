<template>
  <div>
    <!-- Login Reminder (shown when not authenticated) -->
    <div v-if="!authStore.isAuthenticated" class="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 mb-8">
      <div class="flex items-start gap-3">
        <span class="text-3xl">🔒</span>
        <div class="flex-1">
          <h3 class="text-lg font-bold text-gray-800 mb-2">Jelentkezz be pontok gyűjtéséhez!</h3>
          <p class="text-gray-700 mb-3">
            Jelentkezz be vagy regisztrálj, hogy pontokat gyűjthess, jelvényeket szerezz, és nyomon kövesd a fejlődésed!
          </p>
          <router-link 
            to="/login" 
            class="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
          >
            Bejelentkezés →
          </router-link>
        </div>
      </div>
    </div>

    <!-- Points Info (shown when authenticated) -->
    <div v-else class="bg-linear-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 rounded-lg p-6 mb-8">
      <div class="flex items-start gap-3">
        <span class="text-3xl">⭐</span>
        <div class="flex-1">
          <h3 class="text-lg font-bold text-gray-800 mb-2">Pontszerzés</h3>
          <p v-if="fixedPoints" class="text-gray-700">
            Ezzel a gyakorlattal <span class="font-bold text-indigo-600">{{ fixedPoints }} pontot</span> szerezhetsz a befejezéskor!
          </p>
          <p v-else-if="pointsType === 'performance'" class="text-gray-700">
            Ebben a gyakorlatban a teljesítményed alapján szerezhetsz pontokat. Minél jobban teljesítesz, annál több pontot kapsz!
          </p>
          <p v-else-if="pointsType === 'time'" class="text-gray-700">
            Ebben a gyakorlatban az eltöltött idő alapján szerezhetsz pontokat. Minél tovább gyakorolsz, annál több pontot gyűjtesz!
          </p>
          <p v-else class="text-gray-700">
            Szerezz pontokat a gyakorlat elvégzésével, lépj szintet, és gyűjts jelvényeket!
          </p>
          
          <div v-if="isFirstTry" class="mt-2 flex items-center gap-2 text-sm font-semibold text-green-600">
            <span>🎁</span>
            <span>+20 bónusz pont az első kipróbálásért!</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAuthStore } from '../stores/auth'

const props = defineProps<{
  exerciseType: string
  fixedPoints?: number
  pointsType?: 'performance' | 'time' | 'fixed'
}>()

const authStore = useAuthStore()

const isFirstTry = computed(() => {
  if (!authStore.currentUser) return false
  const featuresTried = authStore.currentUser.featuresTried || []
  return !featuresTried.includes(props.exerciseType)
})
</script>
