<template>
  <div class="min-h-screen bg-linear-to-br from-primary to-secondary -mt-28 pt-28">
    <div class="container mx-auto px-6 py-12">
      <div class="max-w-md mx-auto bg-white rounded-2xl p-8 shadow-lg">
        <h1 class="text-3xl font-bold text-gray-800 mb-6 text-center">Bejelentkezés</h1>

        <form @submit.prevent="handleLogin" class="space-y-6">
          <div>
            <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              required
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition-colors"
              placeholder="email@example.com"
            />
          </div>

          <div>
            <label for="password" class="block text-sm font-semibold text-gray-700 mb-2">Jelszó</label>
            <input
              id="password"
              v-model="formData.password"
              type="password"
              required
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition-colors"
              placeholder="••••••••"
            />
          </div>

          <div v-if="authStore.error" class="bg-red-50 border-2 border-red-200 rounded-lg p-3">
            <p class="text-red-600 text-sm">{{ authStore.error }}</p>
          </div>

          <button
            type="submit"
            :disabled="authStore.isLoading"
            class="w-full bg-accent text-black font-bold py-3 rounded-lg hover:bg-accent/80 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ authStore.isLoading ? 'Bejelentkezés...' : 'Bejelentkezés' }}
          </button>
        </form>

        <div class="mt-6 text-center">
          <p class="text-gray-600 text-sm">
            Nincs még fiókod?
            <router-link to="/register" class="text-accent font-semibold hover:underline">
              Regisztráció
            </router-link>
          </p>
        </div>

        <div class="mt-4 text-center">
          <router-link to="/" class="text-gray-500 text-sm hover:text-gray-700">
            ← Vissza a főoldalra
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const formData = ref({
  email: '',
  password: ''
})

async function handleLogin() {
  const success = await authStore.login(formData.value)

  if (success) {
    router.push('/profile')
  }
}
</script>
