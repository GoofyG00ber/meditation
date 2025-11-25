import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { User, UserProfile, LoginCredentials, RegisterData, QuestionnaireResult } from '../types/user'
import { calculateLevel, checkNewBadges } from '../utils/points'
import { QUESTIONNAIRE_REWARD_POINTS } from '../utils/questionnaire'

// Use environment variable or fall back to localhost for development
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

export const useAuthStore = defineStore('auth', () => {
  const currentUser = ref<UserProfile | null>(null)
  const isGuest = ref(true)
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const shouldShowQuestionnaire = ref(false)
  const lastLevelAchieved = ref<number | null>(null)

  const isAuthenticated = computed(() => currentUser.value !== null)
  const levelInfo = computed(() => {
    if (!currentUser.value) return null
    return calculateLevel(currentUser.value.points)
  })

  async function login(credentials: LoginCredentials) {
    isLoading.value = true
    error.value = null

    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      })

      if (!response.ok) {
        const errorData = await response.json()
        error.value = errorData.error || 'Invalid email or password'
        return false
      }

      const user: UserProfile = await response.json()
      currentUser.value = user
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
      // Ensure badges is always an array
      createdUser.badges = createdUser.badges || []
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
      // Ensure badges is always an array
      profile.badges = profile.badges || []
      currentUser.value = profile
      isGuest.value = false
    } catch {
      localStorage.removeItem('userId')
    }
  }

  async function addPoints(points: number, exerciseType?: string) {
    if (!currentUser.value) {
      // Guest user - show notification
      return { success: false, newBadges: [], leveledUp: false }
    }

    try {
      const oldLevel = currentUser.value.level
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

      const response = await fetch(`${API_URL}/users/${currentUser.value.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
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
        
        // Check if user leveled up
        const leveledUp = newLevelInfo.level > oldLevel
        if (leveledUp) {
          lastLevelAchieved.value = newLevelInfo.level
          shouldShowQuestionnaire.value = true
        }
        
        return { success: true, newBadges, leveledUp }
      }

      return { success: false, newBadges: [], leveledUp: false }
    } catch {
      error.value = 'Failed to update points'
      return { success: false, newBadges: [], leveledUp: false }
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

  async function saveQuestionnaireResult(result: QuestionnaireResult) {
    if (!currentUser.value) {
      return { success: false }
    }

    try {
      const questionnaireResults = [...(currentUser.value.questionnaireResults || []), result]
      const hasCompletedQuestionnaire = true

      // Award points for completing questionnaire
      const newPoints = currentUser.value.points + QUESTIONNAIRE_REWARD_POINTS
      const newLevelInfo = calculateLevel(newPoints)

      const response = await fetch(`${API_URL}/users/${currentUser.value.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionnaireResults,
          hasCompletedQuestionnaire,
          points: newPoints,
          level: newLevelInfo.level
        })
      })

      if (response.ok) {
        currentUser.value = {
          ...currentUser.value,
          questionnaireResults,
          hasCompletedQuestionnaire,
          points: newPoints,
          level: newLevelInfo.level
        }
        return { success: true }
      }

      return { success: false }
    } catch {
      error.value = 'Failed to save questionnaire'
      return { success: false }
    }
  }

  function dismissQuestionnaire() {
    shouldShowQuestionnaire.value = false
    lastLevelAchieved.value = null
  }

  return {
    currentUser,
    isGuest,
    isAuthenticated,
    isLoading,
    error,
    levelInfo,
    shouldShowQuestionnaire,
    lastLevelAchieved,
    login,
    register,
    logout,
    loadUserFromStorage,
    addPoints,
    addAchievement,
    saveQuestionnaireResult,
    dismissQuestionnaire
  }
})
