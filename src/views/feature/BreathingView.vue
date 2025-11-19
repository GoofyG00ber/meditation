<template>
  <div class="min-h-screen bg-slate-50">
    <div class="container mx-auto px-6 py-12">
      <div class="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow text-center">
        <h1 class="text-2xl font-bold">Légzésszabályozás</h1>
        <p class="mt-2 text-gray-600">Vezérelt légzés vizuális visszajelzéssel. Állítsd be a tempót és kövesd a kört.</p>

        <!-- Points Info / Login Reminder -->
        <div class="mt-6">
          <PointsInfo 
            exercise-type="breathing"
            points-type="time"
          />
        </div>

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
            <label class="text-sm text-gray-600">Tempó (mp)</label>
            <input type="range" min="2" max="10" v-model.number="tempo" class="w-48" />
          </div>

          <div class="mt-4">
            <button @click="toggle" :class="['px-4 py-2 rounded-md', running ? 'bg-red-500 text-white' : 'bg-indigo-600 text-white']">{{ running ? 'Leállít' : 'Indít' }}</button>
          </div>

          <!-- Points Notification -->
          <transition name="notification">
            <div v-if="showPointsNotification" class="mt-4 bg-linear-to-r from-success/90 to-accent/90 text-white rounded-xl p-4 shadow-lg text-center">
              <p class="text-lg font-bold">🎉 Gratulálunk!</p>
              <p class="text-sm">Szereztél {{ pointsEarned }} pontot {{ cyclesCompleted }} ciklus meditálásért!</p>
            </div>
          </transition>

          <!-- Guest Notification -->
          <transition name="notification">
            <div v-if="showGuestNotification" class="mt-4 bg-linear-to-r from-secondary/90 to-accent/90 text-white rounded-xl p-4 shadow-lg text-center">
              <p class="text-lg font-bold">👋 Vendég mód</p>
              <p class="text-sm mb-2">Pontok gyűjtéséhez és szintlépéshez jelentkezz be!</p>
              <router-link
                to="/login"
                class="inline-block bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all text-sm"
              >
                Bejelentkezés →
              </router-link>
            </div>
          </transition>
        </div>
      </div>
    </div>
    
    <!-- Badge Modal -->
    <BadgeModal 
      v-if="newBadge"
      :show="showBadgeModal" 
      :badge="newBadge"
      @close="showBadgeModal = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue'
import { useAuthStore } from '../../stores/auth'
import { calculateBreathingPoints } from '../../utils/points'
import PointsInfo from '../../components/PointsInfo.vue'
import BadgeModal from '../../components/BadgeModal.vue'
import type { Badge } from '../../utils/points'

const authStore = useAuthStore()
const tempo = ref(6)
const running = ref(false)
const phase = ref(2) // Start at end of kilégzés (exhale) so Start will go into Belégzés immediately
const cyclesCompleted = ref(0)
const showGuestNotification = ref(false)
const pointsEarned = ref(0)
const showPointsNotification = ref(false)
const showBadgeModal = ref(false)
const newBadge = ref<Badge | null>(null)
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

    // Count completed cycles (when returning to Belégzés)
    if (phase.value === 0) {
      cyclesCompleted.value++
    }
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

  // Award points if user completed at least one cycle
  if (cyclesCompleted.value > 0) {
    if (authStore.isAuthenticated) {
      const basePoints = calculateBreathingPoints(cyclesCompleted.value)
      const isFirstTry = !authStore.currentUser?.featuresTried?.includes('breathing')
      const totalPoints = basePoints + (isFirstTry ? 20 : 0)
      
      pointsEarned.value = totalPoints
      
      authStore.addPoints(totalPoints, 'breathing').then(result => {
        if (result.success) {
          showPointsNotification.value = true
          setTimeout(() => {
            showPointsNotification.value = false
          }, 5000)
          
          // Show badge modal if new badges earned
          if (result.newBadges && result.newBadges.length > 0) {
            const badge = result.newBadges[0]
            if (badge) {
              newBadge.value = badge
              showBadgeModal.value = true
            }
          }
        }
      })
    } else {
      showGuestNotification.value = true
      setTimeout(() => {
        showGuestNotification.value = false
      }, 5000)
    }
  }

  cyclesCompleted.value = 0
}

onUnmounted(() => {
  if (cycleTimer) window.clearInterval(cycleTimer)
})

function toggle() {
  running.value = !running.value
  if (running.value) startCycle()
  else stopCycle()
}
</script>

<style scoped>
.notification-enter-active, .notification-leave-active {
  transition: all 0.3s ease;
}

.notification-enter-from {
  transform: translateY(-20px);
  opacity: 0;
}

.notification-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.notification-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
