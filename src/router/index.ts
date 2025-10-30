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
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router









