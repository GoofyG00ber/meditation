export interface User {
  id: number
  username: string
  email: string
  password: string
  points: number
  level: number
  createdAt: string
  achievements: string[]
  badges?: string[]
  exerciseCounts?: Record<string, number>
  featuresTried?: string[]
  questionnaireResults?: QuestionnaireResult[]
  hasCompletedQuestionnaire?: boolean
}

export interface UserProfile {
  id: number
  username: string
  email: string
  points: number
  level: number
  createdAt: string
  achievements: string[]
  badges?: string[]
  exerciseCounts?: Record<string, number>
  featuresTried?: string[]
  questionnaireResults?: QuestionnaireResult[]
  hasCompletedQuestionnaire?: boolean
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData {
  username: string
  email: string
  password: string
}

export interface GameResult {
  gameName: string
  score: number
  pointsEarned: number
  timestamp: string
}

export interface QuestionnaireResult {
  answers: Record<number, number | string>
  totalPoints: number
  totemAnimal: string
  timestamp: number
}
