import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { getExercisePoints, POINTS_CONFIG } from '../utils/points'
import type { Badge } from '../utils/points'

export function useMeditationPoints(exerciseType: string) {
  const authStore = useAuthStore()
  
  const completed = ref(false)
  const completing = ref(false)
  const earnedPoints = ref(0)
  const showBadgeModal = ref(false)
  const newBadge = ref<Badge | null>(null)

  async function completeExercise(customPoints?: number) {
    if (completing.value || completed.value) return { success: false }
    
    completing.value = true
    
    try {
      const basePoints = customPoints || getExercisePoints(exerciseType)
      const isFirstTry = !authStore.currentUser?.featuresTried?.includes(exerciseType)
      const totalPoints = basePoints + (isFirstTry ? POINTS_CONFIG.FIRST_TRY_BONUS : 0)
      
      earnedPoints.value = totalPoints
      
      const result = await authStore.addPoints(totalPoints, exerciseType)
      
      if (result.success) {
        completed.value = true
        
        // Show badge modal if new badges earned
        if (result.newBadges && result.newBadges.length > 0) {
          const badge = result.newBadges[0]
          if (badge) {
            newBadge.value = badge
            showBadgeModal.value = true
          }
        }
      }
      
      return result
    } finally {
      completing.value = false
    }
  }

  function closeBadgeModal() {
    showBadgeModal.value = false
  }

  return {
    completed,
    completing,
    earnedPoints,
    showBadgeModal,
    newBadge,
    completeExercise,
    closeBadgeModal
  }
}
