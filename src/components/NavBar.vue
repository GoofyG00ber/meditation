<template>
  <nav
    :class="['fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 border-b border-transparent transition-all duration-300', scrolled ? 'nav-scrolled' : '']"
  >
    <div class="text-xl font-bold">
      <img src="/logo.png" alt="Meditation App" class="h-20" />
    </div>
    <ul class="flex space-x-4 items-center">
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
      
      <!-- Auth Section -->
      <li v-if="authStore.isAuthenticated" class="ml-2">
        <router-link
          to="/profile"
          :class="['nav-link px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2', isHomePage && !scrolled ? 'text-white' : 'text-black']"
        >
          <span>{{ authStore.currentUser?.username }}</span>
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
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const route = useRoute()
const scrolled = ref(false)
const authStore = useAuthStore()

const isHomePage = computed(() => route.path === '/')

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  authStore.loadUserFromStorage()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
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
</style>
