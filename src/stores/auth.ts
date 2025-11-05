import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { User, UserProfile, LoginCredentials, RegisterData } from '../types/user'
import { calculateLevel } from '../utils/points'

const API_URL = 'http://localhost:3001'

export const useAuthStore = defineStore('auth', () => {
  const currentUser = ref<UserProfile | null>(null)
  const isGuest = ref(true)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const isAuthenticated = computed(() => currentUser.value !== null)
  const levelInfo = computed(() => {
    if (!currentUser.value) return null
    return calculateLevel(currentUser.value.experience)
  })

  async function login(credentials: LoginCredentials) {
    isLoading.value = true
    error.value = null
    
    try {
      const response = await fetch(`${API_URL}/users?email=${credentials.email}&password=${credentials.password}`)
      const users: User[] = await response.json()
      
      if (users.length === 0) {
        error.value = 'Invalid email or password'
        return false
      }
      
      const user = users[0]
      if (!user) {
        error.value = 'Invalid email or password'
        return false
      }
      
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...profile } = user
      currentUser.value = profile
      isGuest.value = false
      
      // Store in localStorage for persistence
      localStorage.setItem('userId', user.id.toString())
      
      return true
    } catch {
      error.value = 'Failed to login. Please try again.'
      return false
    } finally {
      isLoading.value = false
    }
  }

  async function register(data: RegisterData) {
    isLoading.value = true
    error.value = null
    
    try {
      // Check if user already exists
      const checkResponse = await fetch(`${API_URL}/users?email=${data.email}`)
      const existingUsers: User[] = await checkResponse.json()
      
      if (existingUsers.length > 0) {
        error.value = 'User with this email already exists'
        return false
      }
      
      // Create new user
      const newUser: Omit<User, 'id'> = {
        username: data.username,
        email: data.email,
        password: data.password,
        points: 0,
        level: 1,
        experience: 0,
        createdAt: new Date().toISOString(),
        achievements: []
      }
      
      const response = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
      })
      
      const createdUser: User = await response.json()
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...profile } = createdUser
      currentUser.value = profile
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
    isGuest.value = true
    localStorage.removeItem('userId')
  }

  async function loadUserFromStorage() {
    const userId = localStorage.getItem('userId')
    if (!userId) return
    
    try {
      const response = await fetch(`${API_URL}/users/${userId}`)
      if (!response.ok) {
        localStorage.removeItem('userId')
        return
      }
      
      const user: User = await response.json()
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...profile } = user
      currentUser.value = profile
      isGuest.value = false
    } catch {
      localStorage.removeItem('userId')
    }
  }

  async function addPoints(points: number) {
    if (!currentUser.value) {
      // Guest user - show notification
      return false
    }
    
    try {
      const newExperience = currentUser.value.experience + points
      const newPoints = currentUser.value.points + points
      const newLevelInfo = calculateLevel(newExperience)
      
      const updatedUser = {
        ...currentUser.value,
        points: newPoints,
        experience: newExperience,
        level: newLevelInfo.level
      }
      
      const response = await fetch(`${API_URL}/users/${currentUser.value.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          points: newPoints,
          experience: newExperience,
          level: newLevelInfo.level
        })
      })
      
      if (response.ok) {
        currentUser.value = updatedUser
        return true
      }
      
      return false
    } catch {
      error.value = 'Failed to update points'
      return false
    }
  }

  async function addAchievement(achievement: string) {
    if (!currentUser.value || currentUser.value.achievements.includes(achievement)) {
      return false
    }
    
    try {
      const updatedAchievements = [...currentUser.value.achievements, achievement]
      
      const response = await fetch(`${API_URL}/users/${currentUser.value.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
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
