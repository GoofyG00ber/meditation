<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" @click.self="handleClose">
    <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <!-- Header -->
      <div class="sticky top-0 bg-gradient-to-r from-accent to-success p-6 rounded-t-2xl">
        <div class="flex items-start justify-between">
          <div>
            <h2 class="text-2xl font-bold text-gray-800">{{ isLevelUp ? '🎉 Szint elérve!' : 'Stresszkezelési Kérdőív' }}</h2>
            <p class="text-sm text-gray-700 mt-1">{{ isLevelUp ? 'Töltsd ki újra a kérdőívet és szerezz +50 pontot!' : 'Fedezd fel a totemállatodat' }}</p>
          </div>
          <button @click="handleClose" class="text-gray-600 hover:text-gray-800 text-2xl leading-none focus:outline-none focus:ring-0">×</button>
        </div>
      </div>

      <!-- Introduction (only on first view) -->
      <div v-if="!showResult && currentStep === 0" class="p-6">
        <div class="prose prose-sm max-w-none">
          <p class="text-gray-700 leading-relaxed mb-4">
            Ez a kérdőív a stresszkezelési szokásaidat és reakcióidat térképezi fel.
            Az eredmény nem diagnózis, hanem egy önreflexiós eszköz, amely segít
            megérteni, hogyan érdemes elindulnod a tudatos stresszkezelés felé.
          </p>
          <p class="text-gray-700 leading-relaxed mb-4">
            Kérjük, válaszolj őszintén és intuitívan, mintha nem másnak, hanem magadnak mesélnél.
          </p>
          <p class="text-accent font-semibold">
            A kitöltés végén megkapod a saját totemállatodat, amely szimbolikusan tükrözi a
            jelenlegi lelkiállapotodat és fejlődési lehetőségeidet.
          </p>
        </div>
        <button @click="currentStep = 1" class="mt-6 w-full bg-accent text-white font-bold py-3 rounded-lg hover:bg-accent/90 transition-all focus:outline-none focus:ring-0">
          Kezdjük! →
        </button>
      </div>

      <!-- Questions -->
      <div v-if="!showResult && currentStep > 0 && currentQuestion" class="p-6">
        <div class="mb-4">
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm font-semibold text-gray-600">Kérdés {{ currentStep }} / {{ QUESTIONS.length }}</span>
            <span class="text-sm text-gray-500">{{ Math.round((currentStep / QUESTIONS.length) * 100) }}%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div class="bg-accent h-2 rounded-full transition-all duration-300" :style="{ width: `${(currentStep / QUESTIONS.length) * 100}%` }"></div>
          </div>
        </div>

        <div class="mb-6">
          <h3 class="text-lg font-bold text-gray-800 mb-4">{{ currentQuestion.text }}</h3>

          <!-- Single choice questions -->
          <div v-if="currentQuestion.type === 'single'" class="space-y-3">
            <button
              v-for="(option, idx) in currentQuestion.options"
              :key="idx"
              @click="selectAnswer(option.points)"
              :class="[
                'w-full text-left p-4 rounded-lg border-2 transition-all focus:outline-none focus:ring-0',
                answers[currentQuestion.id] === option.points
                  ? 'border-accent bg-accent/10 font-semibold'
                  : 'border-gray-200 hover:border-accent/50 hover:bg-gray-50'
              ]"
            >
              {{ option.text }}
            </button>
          </div>

          <!-- Open text questions (10-11) -->
          <div v-if="currentQuestion.type === 'open'" class="space-y-3">
            <div v-if="currentQuestion.id === 10">
              <button
                v-for="(option, idx) in currentQuestion.options"
                :key="idx"
                @click="selectOpenAnswer(option.text)"
                :class="[
                  'w-full text-left p-4 rounded-lg border-2 transition-all mb-2 focus:outline-none focus:ring-0',
                  answers[currentQuestion.id] === option.text
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
                placeholder="Írd le, milyen állat..."
                class="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none focus:ring-0"
                rows="3"
              ></textarea>
              <button
                @click="selectOpenAnswer(openAnswer)"
                :disabled="!openAnswer.trim()"
                class="mt-2 px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-0"
              >
                Tovább →
              </button>
            </div>
          </div>
        </div>

        <!-- Navigation -->
        <div class="flex items-center justify-between mt-6">
          <button
            v-if="currentStep > 1"
            @click="previousStep"
            class="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-0"
          >
            ← Vissza
          </button>
          <div v-else></div>
        </div>
      </div>

      <!-- Result -->
      <div v-if="showResult" class="p-6">
        <div class="text-center mb-6">
          <div class="text-8xl mb-4">{{ totemResult?.emoji }}</div>
          <h3 class="text-3xl font-bold text-gray-800 mb-2">{{ totemResult?.name }}</h3>
          <p class="text-xl text-accent italic">{{ totemResult?.subtitle }}</p>
        </div>

        <div class="space-y-4 text-left">
          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="font-semibold text-gray-800 mb-2">Ismérveid</h4>
            <p class="text-gray-700">{{ totemResult?.traits }}</p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="font-semibold text-gray-800 mb-2">Stresszreakció</h4>
            <p class="text-gray-700">{{ totemResult?.stressReaction }}</p>
          </div>

          <div class="bg-accent/10 p-4 rounded-lg border border-accent/30">
            <h4 class="font-semibold text-gray-800 mb-2">Lelki jellemzés</h4>
            <p class="text-gray-700">{{ totemResult?.description }}</p>
          </div>

          <div class="bg-success/10 p-4 rounded-lg border border-success/30">
            <h4 class="font-semibold text-gray-800 mb-2">Üzeneted</h4>
            <p class="text-gray-700 italic">{{ totemResult?.message }}</p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="font-semibold text-gray-800 mb-2">Fejlődési irány</h4>
            <p class="text-gray-700">{{ totemResult?.growth }}</p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="font-semibold text-gray-800 mb-2">Fejlődésed útja</h4>
            <p class="text-gray-700 text-sm">{{ totemResult?.evolution }}</p>
          </div>
        </div>

        <div class="mt-6 text-center">
          <p class="text-success font-bold text-lg mb-4">+{{ QUESTIONNAIRE_REWARD_POINTS }} pont!</p>
          <div class="space-y-3">
            <button
              @click="goToFullQuestionnaire"
              class="w-full bg-secondary text-gray-800 font-bold py-3 rounded-lg hover:bg-secondary/90 transition-all focus:outline-none focus:ring-0 border-2 border-secondary"
            >
              Teljes kérdőív kitöltése →
            </button>
            <button
              @click="saveAndClose"
              class="w-full bg-accent text-white font-bold py-3 rounded-lg hover:bg-accent/90 transition-all focus:outline-none focus:ring-0"
            >
              Bezárás
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { QUESTIONS, TOTEM_ANIMALS, calculateTotemAnimal, QUESTIONNAIRE_REWARD_POINTS, type QuestionnaireResult } from '../utils/questionnaire'

const router = useRouter()

const props = defineProps<{
  isOpen: boolean
  isLevelUp?: boolean
}>()

const emit = defineEmits<{
  close: []
  submit: [result: QuestionnaireResult]
}>()

const currentStep = ref(0) // 0 = intro, 1-11 = questions
const answers = ref<Record<number, number | string>>({})
const openAnswer = ref('')
const showResult = ref(false)
const totemResult = ref<typeof TOTEM_ANIMALS[string] | null>(null)

const currentQuestion = computed(() => QUESTIONS[currentStep.value - 1] || null)

function selectAnswer(points: number) {
  if (!currentQuestion.value) return
  answers.value[currentQuestion.value.id] = points
  nextStep()
}

function selectOpenAnswer(text: string) {
  if (!text.trim() || !currentQuestion.value) return
  answers.value[currentQuestion.value.id] = text
  openAnswer.value = ''
  nextStep()
}

function nextStep() {
  if (currentStep.value < QUESTIONS.length) {
    currentStep.value++
  } else {
    calculateResult()
  }
}

function previousStep() {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

function calculateResult() {
  // Sum points from questions 1-9
  let totalPoints = 0
  for (let i = 1; i <= 9; i++) {
    const answer = answers.value[i]
    if (typeof answer === 'number') {
      totalPoints += answer
    }
  }

  const totemKey = calculateTotemAnimal(totalPoints)
  totemResult.value = TOTEM_ANIMALS[totemKey] || null

  const result: QuestionnaireResult = {
    answers: answers.value,
    totalPoints,
    totemAnimal: totemKey,
    timestamp: Date.now()
  }

  showResult.value = true
  emit('submit', result)
}

function saveAndClose() {
  handleClose()
}

function goToFullQuestionnaire() {
  handleClose()
  router.push('/questionnaire')
}

function handleClose() {
  emit('close')
  // Reset state
  setTimeout(() => {
    currentStep.value = 0
    answers.value = {}
    openAnswer.value = ''
    showResult.value = false
    totemResult.value = null
  }, 300)
}

// Reset when modal opens
watch(() => props.isOpen, (newVal) => {
  if (newVal && props.isLevelUp) {
    currentStep.value = 0
    answers.value = {}
    openAnswer.value = ''
    showResult.value = false
    totemResult.value = null
  }
})
</script>

<style scoped>
.prose {
  max-width: 65ch;
}
</style>
