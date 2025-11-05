// Points and leveling configuration
export const POINTS_CONFIG = {
  // Points awarded for completing games
  WHACK_A_MOLE_BASE: 10,
  WHACK_A_MOLE_PER_SCORE: 2,
  BREATHING_COMPLETION: 20,
  BREATHING_PER_CYCLE: 5,

  // Points needed for each level
  LEVEL_THRESHOLDS: [
    0, // Level 1
    100, // Level 2
    250, // Level 3
    450, // Level 4
    700, // Level 5
    1000, // Level 6
    1400, // Level 7
    1850, // Level 8
    2400, // Level 9
    3000, // Level 10
  ],
}

// Totem animals for each level range
export const TOTEM_ANIMALS = {
  1: { emoji: '🐜', name: 'Nyüzsgő Hangya', color: '#8B4513' },
  2: { emoji: '🐢', name: 'Lassú Teknős', color: '#6B8E23' },
  3: { emoji: '🐊', name: 'Nyugodt Alligátor', color: '#2F4F4F' },
  4: { emoji: '🦎', name: 'Türelmes Gyík', color: '#32CD32' },
  5: { emoji: '🐸', name: 'Békés Béka', color: '#228B22' },
  6: { emoji: '🦉', name: 'Bölcs Bagoly', color: '#8B7355' },
  7: { emoji: '🦋', name: 'Lebegő Pillangó', color: '#9370DB' },
  8: { emoji: '🕊️', name: 'Szabad Galamb', color: '#B0C4DE' },
  9: { emoji: '🐦', name: 'Harmonikus Kék Madár', color: '#4169E1' },
  10: { emoji: '🦅', name: 'Szárnyaló Sas', color: '#FFD700' },
}

export interface LevelInfo {
  level: number
  currentPoints: number
  pointsForCurrentLevel: number
  pointsForNextLevel: number
  progress: number // 0-100
  totemAnimal: {
    emoji: string
    name: string
    color: string
  }
}

export function calculateLevel(points: number): LevelInfo {
  let level = 1

  for (let i = POINTS_CONFIG.LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    const threshold = POINTS_CONFIG.LEVEL_THRESHOLDS[i]
    if (threshold !== undefined && points >= threshold) {
      level = i + 1
      break
    }
  }

  const pointsForCurrentLevel = POINTS_CONFIG.LEVEL_THRESHOLDS[level - 1] || 0
  const pointsForNextLevel = POINTS_CONFIG.LEVEL_THRESHOLDS[level] || pointsForCurrentLevel + 1000
  const pointsInCurrentLevel = points - pointsForCurrentLevel
  const pointsNeededForLevel = pointsForNextLevel - pointsForCurrentLevel
  const progress = Math.min(100, (pointsInCurrentLevel / pointsNeededForLevel) * 100)

  const totemAnimal = TOTEM_ANIMALS[level as keyof typeof TOTEM_ANIMALS] || TOTEM_ANIMALS[1]

  return {
    level,
    currentPoints: points,
    pointsForCurrentLevel,
    pointsForNextLevel,
    progress,
    totemAnimal,
  }
}

export function calculateWhackAMolePoints(score: number): number {
  return POINTS_CONFIG.WHACK_A_MOLE_BASE + (score * POINTS_CONFIG.WHACK_A_MOLE_PER_SCORE)
}

export function calculateBreathingPoints(cyclesCompleted: number): number {
  return POINTS_CONFIG.BREATHING_COMPLETION + (cyclesCompleted * POINTS_CONFIG.BREATHING_PER_CYCLE)
}
