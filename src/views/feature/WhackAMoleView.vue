<template>
  <div class="min-h-screen bg-gradient-to-br from-primary to-secondary md:-mt-28 pt-28">
    <div class="container mx-auto px-4 py-2">
      <div class="max-w-3xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-2">
          <h1 class="text-xl md:text-2xl font-bold text-gray-800 mb-1">Stressz-levezetés játék</h1>
          <p class="text-gray-700 text-xs">Ütögesd ki a stresszt! Töltsd fel a képet, ami a stresszedet jelképezi, és csapd le!</p>
        </div>

        <!-- Points Info -->
        <PointsInfo exercise-type="whack_a_mole" points-type="performance" class="mb-2" />

        <!-- Game Stats & Upload -->
        <div class="bg-white/95 backdrop-blur rounded-2xl p-3 mb-3 shadow-lg">
          <div class="flex flex-col md:flex-row justify-between items-center gap-2">
            <!-- Score Display -->
            <div class="text-center">
              <p class="text-gray-600 text-xs mb-1">Pontszám</p>
              <p class="text-2xl font-bold text-accent">{{ score }}</p>
            </div>

            <!-- Timer -->
            <div class="text-center">
              <p class="text-gray-600 text-xs mb-1">Hátralévő idő</p>
              <p class="text-2xl font-bold text-success">{{ timeLeft }}s</p>
            </div>

            <!-- High Score -->
            <div class="text-center">
              <p class="text-gray-600 text-xs mb-1">Legjobb eredmény</p>
              <p class="text-2xl font-bold text-secondary">{{ highScore }}</p>
            </div>
          </div>

          <!-- Image Upload -->
          <div class="mt-2 text-center">
            <label class="cursor-pointer inline-block bg-accent text-black px-3 py-1 rounded-lg shadow-lg hover:bg-accent/80 transition-all font-semibold text-xs">
              <input
                type="file"
                accept="image/*"
                @change="handleImageUpload"
                class="hidden"
              />
              {{ uploadedImage ? '✓ Kép feltöltve' : '📸 Töltsd fel a stressz képét' }}
            </label>
          </div>
        </div>

        <!-- Game Board -->
        <div class="bg-white/95 backdrop-blur rounded-2xl p-3 shadow-2xl perspective-container">
          <div class="game-board grid grid-cols-3 gap-3 max-w-lg mx-auto"
               style="transform-style: preserve-3d; transform: perspective(1000px) rotateX(15deg);"
          >
            <div
              v-for="index in 9"
              :key="index"
              class="relative aspect-square bg-gradient-to-br from-success/20 to-accent/20 rounded-xl border-4 border-secondary/30 overflow-hidden cursor-pointer transition-all hover:scale-105"
              @click="whackMole(index - 1)"
            >
              <!-- Hole Background -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-16 h-16 bg-gray-800/30 rounded-full"></div>
              </div>

              <!-- Mole -->
              <transition name="mole">
                <div
                  v-if="activeMole === index - 1"
                  class="absolute inset-0 flex items-center justify-center z-10"
                >
                  <div class="relative w-20 h-20 transform translate-y-2">
                    <img
                      v-if="uploadedImage"
                      :src="uploadedImage"
                      alt="stress"
                      class="w-full h-full object-cover rounded-full border-4 border-accent shadow-xl"
                    />
                    <div
                      v-else
                      class="w-full h-full bg-gradient-to-br from-secondary to-accent rounded-full border-4 border-white shadow-xl flex items-center justify-center text-3xl"
                    >
                      😤
                    </div>
                  </div>
                </div>
              </transition>

              <!-- Hit Effect -->
              <transition name="hit">
                <div
                  v-if="hitEffect === index - 1"
                  class="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
                >
                  <div class="text-5xl animate-ping">💥</div>
                </div>
              </transition>
            </div>
          </div>

          <!-- Game Controls -->
          <div class="mt-4 text-center space-x-2">
            <button
              v-if="!gameActive && timeLeft === 30"
              @click="startGame"
              class="bg-success text-black px-4 py-2 rounded-lg shadow-lg hover:bg-success/80 transition-all font-bold text-sm"
            >
              🎮 Játék indítása
            </button>
            <button
              v-if="!gameActive && timeLeft !== 30"
              @click="resetGame"
              class="bg-accent text-black px-4 py-2 rounded-lg shadow-lg hover:bg-accent/80 transition-all font-bold text-sm"
            >
              🔄 Új játék
            </button>
            <button
              v-if="gameActive"
              @click="pauseGame"
              class="bg-secondary text-black px-4 py-2 rounded-lg shadow-lg hover:bg-secondary/80 transition-all font-bold text-sm"
            >
              ⏸ Szünet
            </button>
          </div>

          <!-- Game Over Message -->
          <div v-if="!gameActive && timeLeft === 0" class="mt-4 text-center">
            <p class="text-lg font-bold text-gray-800 mb-1">Játék vége!</p>
            <p class="text-sm text-gray-700">Végső pontszám: <span class="font-bold text-accent">{{ score }}</span></p>
            <p v-if="score === highScore && score > 0" class="text-sm text-success mt-1 font-semibold">🎉 Új rekord!</p>
          </div>
        </div>

        <!-- Points Notification -->
        <transition name="notification">
          <div v-if="showPointsNotification" class="mt-4 bg-linear-to-r from-success/90 to-accent/90 text-white rounded-xl p-4 shadow-lg text-center">
            <p class="text-lg font-bold">🎉 Gratulálunk!</p>
            <p class="text-sm">Szereztél {{ pointsEarned }} pontot!</p>
          </div>
        </transition>

        <!-- Guest Notification -->
        <transition name="notification">
          <div v-if="showGuestNotification" class="mt-4 bg-linear-to-r from-secondary/90 to-accent/90 text-white rounded-xl p-4 shadow-lg text-center">
            <p class="text-lg font-bold">👋 Vendég mód</p>
            <p class="text-sm mb-2">Pontok gyűjtéséhez és szintlépéshez jelentkezz be!</p>
            <router-link
              to="/login"
              class="inline-block bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all text-xs"
            >
              Bejelentkezés →
            </router-link>
          </div>
        </transition>

        <!-- Instructions -->
        <div class="bg-linear-to-r from-accent/20 to-success/20 backdrop-blur rounded-2xl p-3 mt-3 shadow-lg">
          <h3 class="text-base font-bold text-gray-800 mb-1">📋 Játék szabályok</h3>
          <ul class="text-gray-700 space-y-1 text-xs">
            <li>✓ Töltsd fel azt a képet, ami a stresszedet jelképezi (vagy használd az alapértelmezett emojit)</li>
            <li>✓ Kattints a Start gombra és csapd le a felbukkanó célpontokat!</li>
            <li>✓ 30 másodperced van, hogy minél több pontot szerezz</li>
            <li>✓ Minden eltalált célpont 1 pont</li>
            <li>✓ Engedd ki a frusztrációdat és oldódj fel!</li>
          </ul>
        </div>

        <!-- Back Button -->
        <div class="mt-3 text-center">
          <router-link
            to="/sessions"
            class="inline-block border-2 border-accent text-accent px-3 py-1 rounded-lg hover:bg-accent/10 transition-all font-semibold text-xs"
          >
            ← Vissza a gyakorlatokhoz
          </router-link>
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
import { ref, onUnmounted } from 'vue'
import { useAuthStore } from '../../stores/auth'
import { calculateWhackAMolePoints } from '../../utils/points'
import PointsInfo from '../../components/PointsInfo.vue'
import BadgeModal from '../../components/BadgeModal.vue'
import type { Badge } from '../../utils/points'

const authStore = useAuthStore()
const score = ref(0)
const highScore = ref(0)
const timeLeft = ref(30)
const gameActive = ref(false)
const activeMole = ref<number | null>(null)
const hitEffect = ref<number | null>(null)
const uploadedImage = ref<string | null>(null)
const showGuestNotification = ref(false)
const pointsEarned = ref(0)
const showPointsNotification = ref(false)
const showBadgeModal = ref(false)
const newBadge = ref<Badge | null>(null)

let gameInterval: number | null = null
let moleInterval: number | null = null

const handleImageUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]

  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      uploadedImage.value = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }
}

const showRandomMole = () => {
  if (!gameActive.value) return

  activeMole.value = Math.floor(Math.random() * 9)

  setTimeout(() => {
    if (activeMole.value !== null) {
      activeMole.value = null
    }
  }, 800) // Mole visible for 800ms
}

const whackMole = (index: number) => {
  if (!gameActive.value) return

  if (activeMole.value === index) {
    score.value++
    hitEffect.value = index
    activeMole.value = null

    setTimeout(() => {
      hitEffect.value = null
    }, 300)
  }
}

const startGame = () => {
  score.value = 0
  timeLeft.value = 30
  gameActive.value = true

  // Timer countdown
  gameInterval = window.setInterval(() => {
    timeLeft.value--

    if (timeLeft.value <= 0) {
      endGame()
    }
  }, 1000)

  // Mole spawning
  moleInterval = window.setInterval(() => {
    showRandomMole()
  }, 1000)
}

const pauseGame = () => {
  gameActive.value = false
  if (gameInterval !== null) window.clearInterval(gameInterval)
  if (moleInterval !== null) window.clearInterval(moleInterval)
}

const endGame = async () => {
  gameActive.value = false
  if (gameInterval !== null) window.clearInterval(gameInterval)
  if (moleInterval !== null) window.clearInterval(moleInterval)
  activeMole.value = null

  if (score.value > highScore.value) {
    highScore.value = score.value
  }

  // Award points if user is logged in
  if (authStore.isAuthenticated && score.value > 0) {
    const points = calculateWhackAMolePoints(score.value)
    pointsEarned.value = points
    
    const result = await authStore.addPoints(points, 'whack_a_mole')
    if (result.success && result.newBadges.length > 0) {
      const badge = result.newBadges[0]
      if (badge) {
        newBadge.value = badge
        showBadgeModal.value = true
      }
    }
    
    showPointsNotification.value = true
    setTimeout(() => {
      showPointsNotification.value = false
    }, 5000)
  } else if (!authStore.isAuthenticated && score.value > 0) {
    // Show guest notification
    showGuestNotification.value = true
    setTimeout(() => {
      showGuestNotification.value = false
    }, 5000)
  }
}

const closeBadgeModal = () => {
  showBadgeModal.value = false
}

const resetGame = () => {
  score.value = 0
  timeLeft.value = 30
  activeMole.value = null
  hitEffect.value = null
}

onUnmounted(() => {
  if (gameInterval !== null) window.clearInterval(gameInterval)
  if (moleInterval !== null) window.clearInterval(moleInterval)
})
</script>

<style scoped>
.perspective-container {
  perspective: 1500px;
}

.game-board {
  transform-style: preserve-3d;
  animation: tilt 4s ease-in-out infinite alternate;
}

@keyframes tilt {
  0% {
    transform: rotateX(15deg) rotateY(-3deg);
  }
  100% {
    transform: rotateX(15deg) rotateY(3deg);
  }
}

.mole-enter-active, .mole-leave-active {
  transition: all 0.3s ease;
}

.mole-enter-from {
  transform: translateY(100%) scale(0.5);
  opacity: 0;
}

.mole-enter-to {
  transform: translateY(0) scale(1);
  opacity: 1;
}

.mole-leave-to {
  transform: translateY(100%) scale(0.5);
  opacity: 0;
}

.hit-enter-active {
  transition: all 0.3s ease;
}

.hit-enter-from {
  transform: scale(0);
  opacity: 0;
}

.hit-enter-to {
  transform: scale(1.5);
  opacity: 1;
}

.hit-leave-to {
  opacity: 0;
}

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
