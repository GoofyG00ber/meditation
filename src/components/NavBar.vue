<template>
  <nav
    :class="['fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 border-b border-transparent transition-all duration-300', scrolled ? 'nav-scrolled' : '']"
  >
    <div class="text-xl font-bold">
      <img src="/logo.png" alt="Meditation App" class="h-20" />
    </div>

    <!-- Desktop Menu -->
    <ul class="hidden md:flex space-x-4 items-center">
      <li>
        <router-link
          to="/"
          :class="['nav-link px-4 py-2 rounded-lg transition-all duration-300', isHomePage && !scrolled ? 'text-white' : 'text-black']"
        >
          Home
        </router-link>
      </li>
      <li>
        <router-link
          to="/sessions"
          :class="['nav-link px-4 py-2 rounded-lg transition-all duration-300', isHomePage && !scrolled ? 'text-white' : 'text-black']"
        >
          Sessions
        </router-link>
      </li>
      <li>
        <router-link
          to="/about"
          :class="['nav-link px-4 py-2 rounded-lg transition-all duration-300', isHomePage && !scrolled ? 'text-white' : 'text-black']"
        >
          About
        </router-link>
      </li>

      <!-- Auth Section Desktop -->
      <li v-if="authStore.isAuthenticated" class="ml-2">
        <router-link
          to="/profile"
          :class="['nav-link px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2', isHomePage && !scrolled ? 'text-white' : 'text-black']"
        >
          <span class="text-xl">{{ authStore.levelInfo?.totemAnimal.emoji || '🐜' }}</span>
          <span>{{ authStore.currentUser?.username || 'Betöltés...' }}</span>
          <span class="text-xs bg-accent text-black px-2 py-1 rounded-full font-bold">Lvl {{ authStore.levelInfo?.level || 1 }}</span>
        </router-link>
      </li>
      <li v-else class="ml-2">
        <router-link
          to="/login"
          :class="['px-4 py-2 rounded-lg transition-all duration-300 font-semibold', isHomePage && !scrolled ? 'bg-white text-black hover:bg-white/90' : 'bg-accent text-black hover:bg-accent/80']"
        >
          Bejelentkezés
        </router-link>
      </li>
    </ul>

    <!-- Mobile Hamburger Button -->
    <button
      @click="toggleMobileMenu"
      class="md:hidden z-50 w-10 h-10 relative focus:outline-none"
      :class="isHomePage && !scrolled && !mobileMenuOpen ? 'text-white' : 'text-black'"
    >
      <div class="absolute w-6 h-0.5 transition-all duration-300 transform left-2"
           :class="[
             mobileMenuOpen ? 'rotate-45 top-5 bg-black' : 'top-3',
             isHomePage && !scrolled && !mobileMenuOpen ? 'bg-white' : 'bg-black'
           ]"></div>
      <div class="absolute w-6 h-0.5 top-5 left-2 transition-all duration-300"
           :class="[
             mobileMenuOpen ? 'opacity-0' : 'opacity-100',
             isHomePage && !scrolled && !mobileMenuOpen ? 'bg-white' : 'bg-black'
           ]"></div>
      <div class="absolute w-6 h-0.5 transition-all duration-300 transform left-2"
           :class="[
             mobileMenuOpen ? '-rotate-45 top-5 bg-black' : 'top-7',
             isHomePage && !scrolled && !mobileMenuOpen ? 'bg-white' : 'bg-black'
           ]"></div>
    </button>
  </nav>

  <!-- Mobile Menu Overlay -->
  <transition name="mobile-menu">
    <div
      v-if="mobileMenuOpen"
      class="fixed inset-0 z-40 md:hidden"
    >
      <!-- Backdrop -->
      <div
        class="absolute inset-0 bg-black/50 backdrop-blur-sm"
        @click="closeMobileMenu"
      ></div>

      <!-- Menu Panel -->
      <div class="absolute top-0 right-0 w-80 h-full bg-linear-to-br from-primary to-secondary shadow-2xl overflow-y-auto">
        <div class="pt-28 px-6 pb-6">
          <!-- User Profile Section (if logged in) -->
          <div v-if="authStore.isAuthenticated" class="mb-8 p-4 bg-white/10 backdrop-blur rounded-xl">
            <div class="flex items-center gap-3 mb-3">
              <span class="text-4xl">{{ authStore.levelInfo?.totemAnimal.emoji || '🐜' }}</span>
              <div>
                <p class="font-bold text-gray-800">{{ authStore.currentUser?.username || 'Betöltés...' }}</p>
                <p class="text-sm text-gray-600">{{ authStore.currentUser?.email || 'Betöltés...' }}</p>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-gray-700">{{ authStore.levelInfo?.totemAnimal.name }}</span>
              <span class="text-xs bg-accent text-black px-3 py-1 rounded-full font-bold">
                Lvl {{ authStore.levelInfo?.level || 1 }}
              </span>
            </div>
          </div>

          <!-- Navigation Links -->
          <ul class="space-y-2">
            <li>
              <router-link
                to="/"
                @click="closeMobileMenu"
                class="mobile-nav-link block px-4 py-3 rounded-lg text-gray-800 font-semibold hover:bg-white/20 transition-all duration-300"
              >
                <span class="text-xl mr-3">🏠</span>
                Home
              </router-link>
            </li>
            <li>
              <router-link
                to="/sessions"
                @click="closeMobileMenu"
                class="mobile-nav-link block px-4 py-3 rounded-lg text-gray-800 font-semibold hover:bg-white/20 transition-all duration-300"
              >
                <span class="text-xl mr-3">🧘</span>
                Sessions
              </router-link>
            </li>
            <li>
              <router-link
                to="/about"
                @click="closeMobileMenu"
                class="mobile-nav-link block px-4 py-3 rounded-lg text-gray-800 font-semibold hover:bg-white/20 transition-all duration-300"
              >
                <span class="text-xl mr-3">ℹ️</span>
                About
              </router-link>
            </li>

            <!-- Auth Links -->
            <li v-if="authStore.isAuthenticated" class="pt-4 border-t border-white/20">
              <router-link
                to="/profile"
                @click="closeMobileMenu"
                class="mobile-nav-link block px-4 py-3 rounded-lg text-gray-800 font-semibold hover:bg-white/20 transition-all duration-300"
              >
                <span class="text-xl mr-3">👤</span>
                Profil
              </router-link>
            </li>
            <li v-if="authStore.isAuthenticated">
              <button
                @click="handleMobileLogout"
                class="w-full text-left px-4 py-3 rounded-lg text-red-600 font-semibold hover:bg-white/20 transition-all duration-300"
              >
                <span class="text-xl mr-3">🚪</span>
                Kijelentkezés
              </button>
            </li>
            <li v-else class="pt-4 border-t border-white/20">
              <router-link
                to="/login"
                @click="closeMobileMenu"
                class="block px-4 py-3 rounded-lg bg-accent text-black font-bold text-center hover:bg-accent/80 transition-all duration-300"
              >
                Bejelentkezés
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const route = useRoute()
const router = useRouter()
const scrolled = ref(false)
const authStore = useAuthStore()
const mobileMenuOpen = ref(false)

const isHomePage = computed(() => route.path === '/')

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  // Prevent body scroll when menu is open
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  document.body.style.overflow = ''
}

const handleMobileLogout = async () => {
  await authStore.logout()
  closeMobileMenu()
  router.push('/')
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  authStore.loadUserFromStorage()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.nav-scrolled {
  background-color: rgba(204, 238, 188, 0.95);
  border-bottom-color: #FFD9C0;
  animation: navSlideDown 0.3s ease-out;
}

@keyframes navSlideDown {
  from {
    background-color: transparent;
    transform: translateY(-10px);
    opacity: 0.8;
  }
  to {
    background-color: rgba(204, 238, 188, 0.95);
    transform: translateY(0);
    opacity: 1;
  }
}

.nav-link {
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #FFD9C0, #8CC0DE);
  transform: translateX(-50%);
  transition: width 0.3s ease;
}

.nav-link:hover::before {
  width: 100%;
}

.nav-link:hover {
  transform: translateY(-2px);
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.nav-link.router-link-active {
  font-weight: 600;
}

.nav-link.router-link-active::before {
  width: 100%;
  background: linear-gradient(90deg, #8CC0DE, #CCEEBC);
}

/* Mobile Menu Animations */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease;
}

.mobile-menu-enter-active .absolute.right-0,
.mobile-menu-leave-active .absolute.right-0 {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}

.mobile-menu-enter-from .absolute.right-0 {
  transform: translateX(100%);
}

.mobile-menu-leave-to .absolute.right-0 {
  transform: translateX(100%);
}

.mobile-menu-enter-to .absolute.right-0,
.mobile-menu-leave-from .absolute.right-0 {
  transform: translateX(0);
}

/* Mobile Nav Link Hover Effect */
.mobile-nav-link {
  position: relative;
  overflow: hidden;
}

.mobile-nav-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 3px;
  height: 0;
  background: linear-gradient(180deg, #FFD9C0, #8CC0DE);
  transform: translateY(-50%);
  transition: height 0.3s ease;
}

.mobile-nav-link:hover::before {
  height: 70%;
}

.mobile-nav-link.router-link-active {
  background-color: rgba(255, 255, 255, 0.3);
}

.mobile-nav-link.router-link-active::before {
  height: 70%;
}
</style>
