// Points and leveling configuration
export const POINTS_CONFIG = {
  // Points awarded for completing games
  WHACK_A_MOLE_BASE: 10,
  WHACK_A_MOLE_PER_SCORE: 2,
  BREATHING_COMPLETION: 20,
  BREATHING_PER_CYCLE: 5,
  
  // Experience needed for each level
  LEVEL_THRESHOLDS: [
    0,    // Level 1
    100,  // Level 2
    250,  // Level 3
    450,  // Level 4
    700,  // Level 5
    1000, // Level 6
    1400, // Level 7
    1850, // Level 8
    2400, // Level 9
    3000, // Level 10
  ]
}

export interface LevelInfo {
  level: number
  currentExp: number
  expForCurrentLevel: number
  expForNextLevel: number
  progress: number // 0-100
}

export function calculateLevel(experience: number): LevelInfo {
  let level = 1
  
  for (let i = POINTS_CONFIG.LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    const threshold = POINTS_CONFIG.LEVEL_THRESHOLDS[i]
    if (threshold !== undefined && experience >= threshold) {
      level = i + 1
      break
    }
  }
  
  const expForCurrentLevel = POINTS_CONFIG.LEVEL_THRESHOLDS[level - 1] || 0
  const expForNextLevel = POINTS_CONFIG.LEVEL_THRESHOLDS[level] || expForCurrentLevel + 1000
  const expInCurrentLevel = experience - expForCurrentLevel
  const expNeededForLevel = expForNextLevel - expForCurrentLevel
  const progress = Math.min(100, (expInCurrentLevel / expNeededForLevel) * 100)
  
  return {
    level,
    currentExp: experience,
    expForCurrentLevel,
    expForNextLevel,
    progress
  }
}

export function calculateWhackAMolePoints(score: number): number {
  return POINTS_CONFIG.WHACK_A_MOLE_BASE + (score * POINTS_CONFIG.WHACK_A_MOLE_PER_SCORE)
}

export function calculateBreathingPoints(cyclesCompleted: number): number {
  return POINTS_CONFIG.BREATHING_COMPLETION + (cyclesCompleted * POINTS_CONFIG.BREATHING_PER_CYCLE)
}
