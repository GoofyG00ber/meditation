import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SessionsView from '../views/SessionsView.vue'
import FeaturesView from '../views/FeaturesView.vue'
import ReminderView from '../views/feature/ReminderView.vue'
import BackgroundSoundsView from '../views/feature/BackgroundSoundsView.vue'
import SleepSoundsView from '../views/feature/SleepSoundsView.vue'
import VideosView from '../views/feature/VideosView.vue'
import TimedMeditationView from '../views/feature/TimedMeditationView.vue'
import BreathingView from '../views/feature/BreathingView.vue'
import WhackAMoleView from '../views/feature/WhackAMoleView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ProfileView from '../views/ProfileView.vue'

// Morning practices
import MorningMindfulnessView from '../views/feature/MorningMindfulnessView.vue'
import MorningAffirmationsView from '../views/feature/MorningAffirmationsView.vue'

// Study/Learning practices
import StudyFocusView from '../views/feature/StudyFocusView.vue'
import MemoryBoostView from '../views/feature/MemoryBoostView.vue'
import StudyBreakView from '../views/feature/StudyBreakView.vue'

// Evening practices
import BodyScanView from '../views/feature/BodyScanView.vue'
import EveningRelaxationView from '../views/feature/EveningRelaxationView.vue'
import DailyReflectionView from '../views/feature/DailyReflectionView.vue'

// Stress relief practices
import QuickStressReliefView from '../views/feature/QuickStressReliefView.vue'
import PanicReliefView from '../views/feature/PanicReliefView.vue'
import GroundingView from '../views/feature/GroundingView.vue'




const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/sessions', name: 'Sessions', component: SessionsView },
  { path: '/features', name: 'Features', component: FeaturesView },
  { path: '/features/reminder', name: 'Reminder', component: ReminderView },
  { path: '/features/background-sounds', name: 'BackgroundSounds', component: BackgroundSoundsView },
  { path: '/features/sleep-sounds', name: 'SleepSounds', component: SleepSoundsView },
  { path: '/features/videos', name: 'Videos', component: VideosView },
  { path: '/features/timed-meditation', name: 'TimedMeditation', component: TimedMeditationView },
  { path: '/features/breathing', name: 'Breathing', component: BreathingView },
  { path: '/features/whack-a-mole', name: 'WhackAMole', component: WhackAMoleView },

  // Morning practices
  { path: '/features/morning-mindfulness', name: 'MorningMindfulness', component: MorningMindfulnessView },
  { path: '/features/morning-affirmations', name: 'MorningAffirmations', component: MorningAffirmationsView },

  // Study/Learning practices
  { path: '/features/study-focus', name: 'StudyFocus', component: StudyFocusView },
  { path: '/features/memory-boost', name: 'MemoryBoost', component: MemoryBoostView },
  { path: '/features/study-break', name: 'StudyBreak', component: StudyBreakView },

  // Evening practices
  { path: '/features/body-scan', name: 'BodyScan', component: BodyScanView },
  { path: '/features/evening-relaxation', name: 'EveningRelaxation', component: EveningRelaxationView },
  { path: '/features/daily-reflection', name: 'DailyReflection', component: DailyReflectionView },

  // Stress relief practices
  { path: '/features/quick-stress-relief', name: 'QuickStressRelief', component: QuickStressReliefView },
  { path: '/features/panic-relief', name: 'PanicRelief', component: PanicReliefView },
  { path: '/features/grounding', name: 'Grounding', component: GroundingView },

  // Auth
  { path: '/login', name: 'Login', component: LoginView },
  { path: '/register', name: 'Register', component: RegisterView },
  { path: '/profile', name: 'Profile', component: ProfileView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating to a new route
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
})

export default router









