<template>
  <div class="min-h-screen bg-linear-to-br from-primary to-secondary md:-mt-28 pt-28">
    <div class="container mx-auto px-6 py-12">
      <div class="max-w-4xl mx-auto">
        <!-- Profile Header -->
        <div class="bg-white rounded-2xl p-8 shadow-lg mb-6">
          <!-- Totem Animal -->
          <div class="text-center mb-6">
            <div class="text-8xl mb-2">{{ levelInfo?.totemAnimal.emoji || '🐜' }}</div>
            <h3 class="text-xl font-bold" :style="{ color: levelInfo?.totemAnimal.color || '#8B4513' }">
              {{ levelInfo?.totemAnimal.name || 'Nem-betöltött-DB Hangya' }}
            </h3>
          </div>

          <div class="flex items-center justify-between mb-6">
            <div>
              <h1 class="text-3xl font-bold text-gray-800">{{ authStore.currentUser?.username || 'Betöltés...' }}</h1>
              <p class="text-gray-600">{{ authStore.currentUser?.email || 'Betöltés...' }}</p>
            </div>
            <button
              @click="handleLogout"
              class="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-all font-semibold"
            >
              Kijelentkezés
            </button>
          </div>

          <!-- Level Progress -->
          <div
            class="rounded-xl p-6"
            :style="{
              background: `linear-gradient(to right, ${levelInfo?.totemAnimal.color}20, ${levelInfo?.totemAnimal.color}10)`
            }"
          >
            <div class="flex items-center justify-between mb-3">
              <h2 class="text-2xl font-bold text-gray-800">Szint {{ levelInfo?.level || 1 }}</h2>
              <div class="text-right">
                <p class="text-sm text-gray-600">Pontok</p>
                <p
                  class="text-lg font-bold"
                  :style="{ color: levelInfo?.totemAnimal.color || '#8B4513' }"
                >
                  {{ authStore.currentUser?.points || 0 }} / {{ levelInfo?.pointsForNextLevel || 100 }}
                </p>
              </div>
            </div>

            <!-- Progress Bar -->
            <div class="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
              <div
                class="h-full flex items-center justify-center text-xs font-bold text-white transition-all duration-500"
                :style="{
                  width: `${levelInfo?.progress || 0}%`,
                  background: `linear-gradient(to right, ${levelInfo?.totemAnimal.color}, ${levelInfo?.totemAnimal.color}CC)`
                }"
              >
                {{ Math.round(levelInfo?.progress || 0) }}%
              </div>
            </div>

            <p class="text-sm text-gray-600 mt-2 text-center">
              {{ levelInfo ? levelInfo.pointsForNextLevel - levelInfo.currentPoints : 100 }} pont a következő szintig
            </p>
          </div>
        </div>

        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div class="bg-white rounded-xl p-6 shadow-lg text-center">
            <div class="text-4xl mb-2">🎯</div>
            <p class="text-sm text-gray-600">Összpontszám</p>
            <p class="text-3xl font-bold text-accent">{{ authStore.currentUser?.points || 0 }}</p>
          </div>

          <div class="bg-white rounded-xl p-6 shadow-lg text-center">
            <div class="text-4xl mb-2">⭐</div>
            <p class="text-sm text-gray-600">Szint</p>
            <p class="text-3xl font-bold text-success">{{ levelInfo?.level || 1 }}</p>
          </div>

          <div class="bg-white rounded-xl p-6 shadow-lg text-center">
            <div class="text-4xl mb-2">🏆</div>
            <p class="text-sm text-gray-600">Eredmények</p>
            <p class="text-3xl font-bold text-secondary">{{ authStore.currentUser?.achievements.length || 0 }}</p>
          </div>
        </div>

        <!-- Achievements -->
        <div class="bg-white rounded-2xl p-8 shadow-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🏆 Eredmények</h2>

          <div v-if="authStore.currentUser && authStore.currentUser.achievements.length > 0" class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
              v-for="achievement in authStore.currentUser.achievements"
              :key="achievement"
              class="bg-linear-to-br from-accent/20 to-success/20 rounded-lg p-4 text-center"
            >
              <div class="text-3xl mb-2">🏅</div>
              <p class="text-sm font-semibold text-gray-700">{{ formatAchievement(achievement) }}</p>
            </div>
          </div>

          <div v-else class="text-center text-gray-500 py-8">
            <p>Még nincsenek eredményeid</p>
            <p class="text-sm mt-2">Kezdj el játszani a meditációs játékokkal!</p>
          </div>
        </div>

        <!-- Back Button -->
        <div class="mt-6 text-center">
          <router-link
            to="/sessions"
            class="inline-block border-2 border-accent text-accent px-6 py-3 rounded-lg hover:bg-accent/10 transition-all font-semibold"
          >
            ← Vissza a gyakorlatokhoz
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const levelInfo = computed(() => authStore.levelInfo)

onMounted(() => {
  // Redirect to login if not authenticated
  if (!authStore.isAuthenticated) {
    router.push('/login')
  }
})

async function handleLogout() {
  await authStore.logout()
  router.push('/')
}

function formatAchievement(achievement: string): string {
  const achievements: Record<string, string> = {
    'first_game': 'Első játék',
    'stress_buster': 'Stresszoldó',
    'breathing_master': 'Légzés mester',
    'whack_champion': 'Whack bajnok',
    'level_5': '5. szint',
    'level_10': '10. szint',
    'points_100': '100 pont',
    'points_500': '500 pont',
    'points_1000': '1000 pont'
  }

  return achievements[achievement] || achievement
}
</script>
