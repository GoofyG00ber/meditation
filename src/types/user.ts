export interface User {
  id: number
  username: string
  email: string
  password: string
  points: number
  level: number
  experience: number
  createdAt: string
  achievements: string[]
}

export interface UserProfile {
  id: number
  username: string
  email: string
  points: number
  level: number
  experience: number
  createdAt: string
  achievements: string[]
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
