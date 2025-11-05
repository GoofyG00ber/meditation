import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// Load user data from localStorage on app start
const authStore = (await import('./stores/auth')).useAuthStore()
authStore.loadUserFromStorage()

app.mount('#app')
