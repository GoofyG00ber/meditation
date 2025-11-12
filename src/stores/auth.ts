import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { User, UserProfile, RegisterData } from '../types/user'
import { calculateLevel, checkNewBadges } from '../utils/points'

// Use environment variable or fall back to localhost for development
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

export const useAuthStore = defineStore('auth', () => {
  const currentUser = ref<UserProfile | null>(null)
  const isGuest = ref(true)
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const authToken = ref<string | null>(null)

  // Helper function to make authenticated requests
  async function authenticatedFetch(url: string, options: RequestInit = {}) {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    }

    // Merge existing headers if they exist
    if (options.headers) {
      Object.assign(headers, options.headers)
    }

    if (authToken.value) {
      headers['Authorization'] = `Bearer ${authToken.value}`
    }

    return fetch(url, {
      ...options,
      headers,
    })
  }

  // Generate a simple token (in production, use proper JWT)
  function generateToken(userId: string) {
    return btoa(`${userId}:${Date.now()}:${Math.random()}`).replace(/=/g, '')
  }

  const isAuthenticated = computed(() => currentUser.value !== null)
  const levelInfo = computed(() => {
    if (!currentUser.value) return null
    return calculateLevel(currentUser.value.points)
  })

  async function login(credentials: { email: string; password: string }) {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      })

      if (!response.ok) {
        throw new Error('Login failed')
      }

      const data = await response.json()
      currentUser.value = data.user
      authToken.value = generateToken(data.user.id.toString())
      localStorage.setItem('user', JSON.stringify(data.user))
      localStorage.setItem('authToken', authToken.value)
      isGuest.value = false
    } catch (error) {
      console.error('Login error:', error)
      throw error
    }
  }

  async function register(data: RegisterData) {
    isLoading.value = true
    error.value = null

    try {
      const response = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        const errorData = await response.json()
        error.value = errorData.error || 'Failed to register. Please try again.'
        return false
      }

      const createdUser: UserProfile = await response.json()
      currentUser.value = createdUser
      isGuest.value = false

      localStorage.setItem('userId', createdUser.id.toString())

      return true
    } catch {
      error.value = 'Failed to register. Please try again.'
      return false
    } finally {
      isLoading.value = false
    }
  }

  async function logout() {
    currentUser.value = null
    authToken.value = null
    isGuest.value = true
    localStorage.removeItem('userId')
    localStorage.removeItem('user')
    localStorage.removeItem('authToken')
  }

  async function loadUserFromStorage() {
    const userId = localStorage.getItem('userId')
    const storedToken = localStorage.getItem('authToken')
    if (!userId) return

    try {
      const response = await authenticatedFetch(`${API_URL}/users/${userId}`)
      if (!response.ok) {
        localStorage.removeItem('userId')
        localStorage.removeItem('authToken')
        return
      }

      const user: User = await response.json()
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...profile } = user
      currentUser.value = profile
      authToken.value = storedToken
      isGuest.value = false
    } catch {
      localStorage.removeItem('userId')
      localStorage.removeItem('authToken')
    }
  }

  async function addPoints(points: number, exerciseType?: string) {
    if (!currentUser.value) {
      // Guest user - show notification
      return { success: false, newBadges: [] }
    }

    try {
      const newPoints = currentUser.value.points + points
      const newLevelInfo = calculateLevel(newPoints)

      // Track exercise completion
      const exerciseCounts = { ...(currentUser.value.exerciseCounts || {}) }
      if (exerciseType) {
        exerciseCounts[exerciseType] = (exerciseCounts[exerciseType] || 0) + 1
      }

      // Track features tried
      const featuresTried = [...(currentUser.value.featuresTried || [])]
      if (exerciseType && !featuresTried.includes(exerciseType)) {
        featuresTried.push(exerciseType)
      }

      // Check for new badges
      const currentBadges = currentUser.value.badges || []
      const newBadges = checkNewBadges(
        currentBadges,
        newPoints,
        exerciseCounts,
        featuresTried,
        points
      )

      const updatedUser = {
        ...currentUser.value,
        points: newPoints,
        level: newLevelInfo.level,
        badges: [...currentBadges, ...newBadges.map(b => b.id)],
        exerciseCounts,
        featuresTried
      }

      const response = await authenticatedFetch(`${API_URL}/users/${currentUser.value.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          points: newPoints,
          level: newLevelInfo.level,
          badges: updatedUser.badges,
          exerciseCounts,
          featuresTried
        })
      })

      if (response.ok) {
        currentUser.value = updatedUser
        return { success: true, newBadges }
      }

      return { success: false, newBadges: [] }
    } catch {
      error.value = 'Failed to update points'
      return { success: false, newBadges: [] }
    }
  }

  async function addAchievement(achievement: string) {
    if (!currentUser.value || currentUser.value.achievements.includes(achievement)) {
      return false
    }

    try {
      const updatedAchievements = [...currentUser.value.achievements, achievement]

      const response = await authenticatedFetch(`${API_URL}/users/${currentUser.value.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          achievements: updatedAchievements
        })
      })

      if (response.ok) {
        currentUser.value.achievements = updatedAchievements
        return true
      }

      return false
    } catch {
      return false
    }
  }

  return {
    currentUser,
    isGuest,
    isAuthenticated,
    isLoading,
    error,
    levelInfo,
    login,
    register,
    logout,
    loadUserFromStorage,
    addPoints,
    addAchievement
  }
})
