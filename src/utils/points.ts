// Points and leveling configuration
export const POINTS_CONFIG = {
  // Points awarded for completing games and exercises
  WHACK_A_MOLE_BASE: 10,
  WHACK_A_MOLE_PER_SCORE: 2,
  BREATHING_BASE: 20,
  BREATHING_PER_CYCLE: 5,

  // Fixed-duration meditation exercises
  MORNING_MINDFULNESS: 50,
  MORNING_AFFIRMATIONS: 30,
  STUDY_FOCUS: 40,
  MEMORY_BOOST: 25,
  STUDY_BREAK: 30,
  BODY_SCAN: 60,
  EVENING_RELAXATION: 50,
  DAILY_REFLECTION: 35,
  QUICK_STRESS_RELIEF: 20,
  PANIC_RELIEF: 30,
  GROUNDING: 25,
  TIMED_MEDITATION_PER_MINUTE: 5,

  // First-time bonuses
  FIRST_TRY_BONUS: 20,

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

// Badge definitions
export interface Badge {
  id: string
  name: string
  description: string
  emoji: string
  requirement: {
    type: 'feature_try' | 'points_single' | 'exercise_count' | 'total_points'
    feature?: string
    count?: number
    points?: number
  }
}

export const BADGES: Badge[] = [
  // Feature explorer badges
  { id: 'morning_explorer', name: 'Reggeli Felfedező', description: 'Kipróbáltad az első reggeli gyakorlatot', emoji: '🌅', requirement: { type: 'feature_try', feature: 'morning' } },
  { id: 'study_master', name: 'Tanulás Mestere', description: 'Kipróbáltad az első tanulási gyakorlatot', emoji: '📚', requirement: { type: 'feature_try', feature: 'study' } },
  { id: 'evening_seeker', name: 'Esti Nyugalom Keresője', description: 'Kipróbáltad az első esti gyakorlatot', emoji: '🌙', requirement: { type: 'feature_try', feature: 'evening' } },
  { id: 'stress_warrior', name: 'Stressz Harcos', description: 'Kipróbáltad az első stresszoldó gyakorlatot', emoji: '🛡️', requirement: { type: 'feature_try', feature: 'stress' } },
  { id: 'breathing_beginner', name: 'Légzés Kezdő', description: 'Kipróbáltad a légzésgyakorlatot', emoji: '💨', requirement: { type: 'feature_try', feature: 'breathing' } },

  // Single exercise achievement badges
  { id: 'perfect_focus', name: 'Tökéletes Fókusz', description: 'Szerezz 100 pontot egy gyakorlatból', emoji: '🎯', requirement: { type: 'points_single', points: 100 } },
  { id: 'zen_master', name: 'Zen Mester', description: 'Szerezz 200 pontot egy gyakorlatból', emoji: '🧘', requirement: { type: 'points_single', points: 200 } },

  // Exercise repetition badges
  { id: 'consistent_5', name: 'Következetes', description: 'Végezz el egy gyakorlatot 5 alkalommal', emoji: '⭐', requirement: { type: 'exercise_count', count: 5 } },
  { id: 'dedicated_10', name: 'Elkötelezett', description: 'Végezz el egy gyakorlatot 10 alkalommal', emoji: '🌟', requirement: { type: 'exercise_count', count: 10 } },
  { id: 'persistent_25', name: 'Kitartó', description: 'Végezz el egy gyakorlatot 25 alkalommal', emoji: '💫', requirement: { type: 'exercise_count', count: 25 } },

  // Total points badges
  { id: 'rookie', name: 'Újonc', description: 'Gyűjts össze 100 pontot', emoji: '🥉', requirement: { type: 'total_points', points: 100 } },
  { id: 'practitioner', name: 'Gyakorló', description: 'Gyűjts össze 500 pontot', emoji: '🥈', requirement: { type: 'total_points', points: 500 } },
  { id: 'expert', name: 'Szakértő', description: 'Gyűjts össze 1500 pontot', emoji: '🥇', requirement: { type: 'total_points', points: 1500 } },
  { id: 'enlightened', name: 'Megvilágosodott', description: 'Gyűjts össze 3000 pontot', emoji: '✨', requirement: { type: 'total_points', points: 3000 } },
]

// Totem animals for each level range
export const TOTEM_ANIMALS: Record<number, { emoji: string; name: string; color: string }> = {
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

// Level descriptions, quotes and thresholds (used in profile and roadmap)
export const LEVEL_DESCRIPTIONS: Record<number, { title: string; quote: string; description: string; threshold?: number }> = {
  1: {
    title: 'Nyüzsgő Hangya',
    quote: 'A hangya a fókusz és fegyelem szimbóluma.',
    description: 'A tudatos jelenlét első lépése: megtanulod figyelni a részleteket. Apró lépésekben épül a koncentráció.',
    threshold: POINTS_CONFIG.LEVEL_THRESHOLDS[0]
  },
  2: {
    title: 'Lassú Teknős',
    quote: 'A teknős a lassulás és nyugalom megtestesítője.',
    description: 'A mély, lassú légzés ritmusában tanulod meg, hogy nem kell sietni — a béke a lassúságból születik.',
    threshold: POINTS_CONFIG.LEVEL_THRESHOLDS[1]
  },
  3: {
    title: 'Nyugodt Alligátor',
    quote: 'Az aligátor a tudatos erő és kontrollált energia jelképe.',
    description: 'A felszín alatt csend van, mégis hatalmas erő lakozik benned. Ez a szint a tudatos jelenlét stabilitását építi.',
    threshold: POINTS_CONFIG.LEVEL_THRESHOLDS[2]
  },
  4: {
    title: 'Türelmes Gyík',
    quote: 'A gyík a regeneráció és alkalmazkodás szimbóluma.',
    description: 'A tudat képes újrateremteni magát. Minden figyelmi visszatérés a jelenbe olyan, mint egy újrakezdés.',
    threshold: POINTS_CONFIG.LEVEL_THRESHOLDS[3]
  },
  5: {
    title: 'Békés Béka',
    quote: 'A béka a víz és föld harmóniáját testesíti meg.',
    description: 'Megtanulsz lebegni a gondolatok áradata fölött, megtartva a belső stabilitást – ez a mindfulness első mély szintje.',
    threshold: POINTS_CONFIG.LEVEL_THRESHOLDS[4]
  },
  6: {
    title: 'Bölcs Bagoly',
    quote: 'A bagoly a belátás és tisztánlátás szimbóluma.',
    description: 'A csendben felismered a lényeget. A tudatosságod már nemcsak figyel, hanem megért és átlát.',
    threshold: POINTS_CONFIG.LEVEL_THRESHOLDS[5]
  },
  7: {
    title: 'Lebegő Pillangó',
    quote: 'A pillangó az átalakulás és könnyedség szimbóluma.',
    description: 'A gyakorlás során megtanulod elengedni az erőlködést — a nyugalom természetes állapotként jelenik meg.',
    threshold: POINTS_CONFIG.LEVEL_THRESHOLDS[6]
  },
  8: {
    title: 'Szabad Galamb',
    quote: 'A galamb a belső béke és nyitottság megtestesítője.',
    description: 'A légzésed szabad, az elméd nyugodt. A béke nem csak benned van, hanem belőled árad.',
    threshold: POINTS_CONFIG.LEVEL_THRESHOLDS[7]
  },
  9: {
    title: 'Harmonikus Kék Madár',
    quote: 'A kék madár a harmónia, önkifejezés és együttérzés szimbóluma.',
    description: 'A figyelem most már szeretetteljes és együtt érző. Megtanulod meghallani a csendben a szív bölcsességét.',
    threshold: POINTS_CONFIG.LEVEL_THRESHOLDS[8]
  },
  10: {
    title: 'Szárnyaló Sas',
    quote: 'A sas a magasabb tudatállapot és tiszta rálátás jelképe.',
    description: 'Innen fentről minden összefügg. A tudatos jelenlét nem gyakorlat többé – hanem természetes létállapot.',
    threshold: POINTS_CONFIG.LEVEL_THRESHOLDS[9]
  }
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

  const totemAnimal = TOTEM_ANIMALS[level as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10] ?? TOTEM_ANIMALS[1]!

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
  return POINTS_CONFIG.BREATHING_BASE + (cyclesCompleted * POINTS_CONFIG.BREATHING_PER_CYCLE)
}

export function calculateTimedMeditationPoints(minutes: number): number {
  return minutes * POINTS_CONFIG.TIMED_MEDITATION_PER_MINUTE
}

export function getExercisePoints(exerciseType: string): number {
  const key = exerciseType.toUpperCase().replace(/-/g, '_') as keyof typeof POINTS_CONFIG
  return (typeof POINTS_CONFIG[key] === 'number' ? POINTS_CONFIG[key] : 30) as number
}

export function checkNewBadges(
  currentBadges: string[],
  points: number,
  exerciseCounts: Record<string, number>,
  featuresTried: string[],
  lastExercisePoints: number
): Badge[] {
  const newBadges: Badge[] = []

  for (const badge of BADGES) {
    if (currentBadges.includes(badge.id)) continue

    let earned = false

    switch (badge.requirement.type) {
      case 'feature_try':
        earned = featuresTried.includes(badge.requirement.feature || '')
        break
      case 'points_single':
        earned = lastExercisePoints >= (badge.requirement.points || 0)
        break
      case 'exercise_count':
        earned = Object.values(exerciseCounts).some(count => count >= (badge.requirement.count || 0))
        break
      case 'total_points':
        earned = points >= (badge.requirement.points || 0)
        break
    }

    if (earned) {
      newBadges.push(badge)
    }
  }

  return newBadges
}
