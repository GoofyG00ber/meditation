<template>
  <div class="min-h-screen bg-gradient-to-br from-primary to-secondary md:-mt-28 pt-28">
    <div class="container mx-auto px-6 py-12">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="bg-white rounded-2xl p-8 shadow-lg mb-6 text-center">
          <div class="text-6xl mb-4">🦋</div>
          <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Stresszkezelési Kérdőív</h1>
          <p class="text-gray-600">Fedezd fel a totemállatodat</p>
        </div>

        <!-- Introduction -->
        <div v-if="!showQuiz && !result" class="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
          <div class="prose prose-lg max-w-none">
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>Kedves Felhasználó!</strong>
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              Ez a kérdőív a stresszkezelési szokásaidat és reakcióidat térképezi fel.
              Az eredmény nem diagnózis, hanem egy önreflexiós eszköz, amely segít
              megérteni, hogyan érdemes elindulnod a tudatos stresszkezelés felé.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              Kérjük, válaszolj őszintén és intuitívan, mintha nem másnak, hanem magadnak
              mesélnél.
            </p>
            <p class="text-accent font-semibold text-lg mb-6">
              A kitöltés végén megkapod a saját totemállatodat, amely szimbolikusan tükrözi a
              jelenlegi lelkiállapotodat és fejlődési lehetőségeidet.
            </p>
            <div class="bg-success/10 p-4 rounded-lg border border-success/30 mb-6">
              <p class="text-success font-bold text-center">+50 pont jár a kitöltésért!</p>
            </div>
          </div>

          <div class="mt-6">
            <button
              @click="startQuiz"
              class="w-full bg-amber-200 text-black font-bold py-4 px-6 rounded-xl hover:bg-accent/90 transition-all hover:scale-105 shadow-lg focus:outline-none focus:ring-0 border-1 border-accent"
            >
              Kezdjük! →
            </button>
          </div>
        </div>

        <!-- Quiz Questions -->
        <div v-if="showQuiz && !result" class="bg-white rounded-2xl p-8 shadow-lg">
          <!-- Progress -->
          <div class="mb-6">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-semibold text-gray-600">Kérdés {{ currentQuestion + 1 }} / {{ QUESTIONS.length }}</span>
              <span class="text-sm text-gray-500">{{ Math.round(((currentQuestion + 1) / QUESTIONS.length) * 100) }}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-accent h-2 rounded-full transition-all duration-300" :style="{ width: `${((currentQuestion + 1) / QUESTIONS.length) * 100}%` }"></div>
            </div>
          </div>

          <!-- Question -->
          <div class="mb-8">
            <h2 v-if="currentQ" class="text-xl md:text-2xl font-bold text-gray-800 mb-6">{{ currentQ.text }}</h2>

            <!-- Single choice questions (1-9) -->
            <div v-if="currentQ && currentQ.type === 'single'" class="space-y-3">
              <button
                v-for="(option, idx) in currentQ.options"
                :key="idx"
                @click="selectAnswer(option.points)"
                :class="[
                  'w-full text-left p-4 rounded-xl border-2 transition-all focus:outline-none focus:ring-0',
                  answers[currentQuestion] === option.points
                    ? 'border-accent bg-accent/10 font-semibold'
                    : 'border-gray-200 hover:border-accent/50 hover:bg-gray-50'
                ]"
              >
                {{ option.text }}
              </button>
            </div>

            <!-- Open questions (10-11) -->
            <div v-if="currentQ && currentQ.type === 'open'" class="space-y-4">
              <div v-if="currentQ.id === 10">
                <button
                  v-for="(option, idx) in currentQ.options"
                  :key="idx"
                  @click="selectOpenAnswer(option.text)"
                  :class="[
                    'w-full text-left p-4 rounded-xl border-2 transition-all mb-3 focus:outline-none focus:ring-0',
                    answers[currentQuestion] === option.text
                      ? 'border-accent bg-accent/10 font-semibold'
                      : 'border-gray-200 hover:border-accent/50 hover:bg-gray-50'
                  ]"
                >
                  {{ option.text }}
                </button>
              </div>
              <div v-else>
                <textarea
                  v-model="openAnswer"
                  placeholder="Írd le, milyen állat lennél..."
                  class="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-accent focus:outline-none focus:ring-0 min-h-[120px]"
                  rows="4"
                ></textarea>
                <button
                  @click="submitQuestionnaire"
                  :disabled="!openAnswer.trim()"
                  class="mt-3 w-full md:w-auto px-8 py-3 bg-green-200 text-black font-bold rounded-xl hover:bg-success/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-0"
                >
                  Küldés →
                </button>
              </div>
            </div>
          </div>

          <!-- Navigation -->
          <div class="flex items-center justify-between pt-4 border-t">
            <button
              v-if="currentQuestion > 0"
              @click="previousQuestion"
              class="px-6 py-2 text-gray-600 hover:text-gray-800 font-semibold focus:outline-none focus:ring-0"
            >
              ← Vissza
            </button>
            <div v-else></div>
          </div>
        </div>

        <!-- Result -->
        <div v-if="result" class="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
          <div class="text-center mb-8">
            <div class="text-8xl mb-4">{{ result.emoji }}</div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{{ result.name }}</h2>
            <p class="text-xl text-accent italic mb-1">{{ result.subtitle }}</p>
            <p class="text-sm text-gray-600">Pontszám: {{ totalPoints }} / 45</p>
          </div>

          <div class="space-y-6">
            <div class="bg-accent/10 p-6 rounded-xl border border-accent/30">
              <h3 class="font-bold text-gray-800 mb-2 text-lg">Ismérveid</h3>
              <p class="text-gray-700">{{ result.traits }}</p>
            </div>

            <div class="bg-gray-50 p-6 rounded-xl border">
              <h3 class="font-bold text-gray-800 mb-2 text-lg">Stresszreakció</h3>
              <p class="text-gray-700">{{ result.stressReaction }}</p>
            </div>

            <div class="bg-success/10 p-6 rounded-xl border border-success/30">
              <h3 class="font-bold text-gray-800 mb-2 text-lg">Lelki jellemzés</h3>
              <p class="text-gray-700 leading-relaxed">{{ result.description }}</p>
            </div>

            <div class="bg-secondary/10 p-6 rounded-xl border border-secondary/30">
              <h3 class="font-bold text-gray-800 mb-2 text-lg">Üzeneted</h3>
              <p class="text-gray-700 italic text-lg">{{ result.message }}</p>
            </div>

            <div class="bg-gray-50 p-6 rounded-xl border">
              <h3 class="font-bold text-gray-800 mb-2 text-lg">Fejlődési irány</h3>
              <p class="text-gray-700 leading-relaxed">{{ result.growth }}</p>
            </div>

            <div class="bg-gray-50 p-6 rounded-xl border">
              <h3 class="font-bold text-gray-800 mb-2 text-lg">Fejlődésed útja</h3>
              <p class="text-gray-700">{{ result.evolution }}</p>
            </div>

            <div class="bg-gradient-to-r from-success/20 to-accent/20 p-6 rounded-xl border border-success/30 text-center">
              <p class="text-success font-bold text-2xl mb-2">+50 pont!</p>
              <p class="text-gray-700">A kérdőív sikeresen elmentve</p>
            </div>
          </div>

          <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              @click="retakeQuiz"
              class="px-8 py-3 border-2 border-accent text-accent font-bold rounded-xl hover:bg-accent/10 transition-all focus:outline-none focus:ring-0"
            >
              Újra kitöltöm
            </button>
            <router-link
              to="/"
              class="px-8 py-3 bg-accent text-white font-bold rounded-xl hover:bg-accent/90 transition-all text-center focus:outline-none focus:ring-0"
            >
              Vissza a főoldalra
            </router-link>
          </div>
        </div>

        <!-- Info Box -->
        <div class="mt-8 bg-white/80 backdrop-blur rounded-xl p-6 shadow-lg">
          <h3 class="font-bold text-gray-800 mb-3">A négy totem viszonya</h3>
          <p class="text-gray-700 leading-relaxed">
            A teknős a nyugalom alapját, a delfin az érzelmi áramlást, az oroszlán a tudatos erőt,
            a főnix pedig az átalakulás bátorságát képviseli. Együtt a stresszmegküzdés négy
            fázisát jelképezik: <span class="font-semibold">Megállok – Megérzek – Megerősödöm – Megújulok</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useAuthStore } from '../stores/auth'
import { QUESTIONS, TOTEM_ANIMALS, calculateTotemAnimal, type QuestionnaireResult } from '../utils/questionnaire'

const authStore = useAuthStore()

const showQuiz = ref(false)
const currentQuestion = ref(0)
const answers = ref<Record<number, number | string>>({})
const openAnswer = ref('')
const result = ref<typeof TOTEM_ANIMALS[string] | null>(null)

const currentQ = computed(() => QUESTIONS[currentQuestion.value])

const totalPoints = computed(() => {
  let sum = 0
  for (let i = 0; i < 9; i++) {
    const answer = answers.value[i]
    if (typeof answer === 'number') {
      sum += answer
    }
  }
  return sum
})

function startQuiz() {
  showQuiz.value = true
  currentQuestion.value = 0
  answers.value = {}
  openAnswer.value = ''
  result.value = null
}

function selectAnswer(points: number) {
  answers.value[currentQuestion.value] = points
  nextQuestion()
}

function selectOpenAnswer(text: string) {
  if (!text.trim()) return
  answers.value[currentQuestion.value] = text
  openAnswer.value = ''
  nextQuestion()
}

async function submitQuestionnaire() {
  if (!openAnswer.value.trim()) return

  // Save the last answer
  answers.value[currentQuestion.value] = openAnswer.value
  openAnswer.value = ''

  // Calculate and save result
  await calculateResult()
}

function nextQuestion() {
  if (currentQuestion.value < QUESTIONS.length - 1) {
    currentQuestion.value++
  } else {
    calculateResult()
  }
}

function previousQuestion() {
  if (currentQuestion.value > 0) {
    currentQuestion.value--
  }
}

async function calculateResult() {
  const totemKey = calculateTotemAnimal(totalPoints.value)
  result.value = TOTEM_ANIMALS[totemKey] || null

  const questionnaireResult: QuestionnaireResult = {
    answers: answers.value,
    totalPoints: totalPoints.value,
    totemAnimal: totemKey,
    timestamp: Date.now()
  }

  // Save to store if user is logged in
  if (authStore.isAuthenticated) {
    await authStore.saveQuestionnaireResult(questionnaireResult)
  }

  showQuiz.value = false
}

function retakeQuiz() {
  result.value = null
  startQuiz()
}
</script>
