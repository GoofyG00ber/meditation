<template>
  <div class="min-h-screen bg-linear-to-br from-violet-900 via-purple-900 to-fuchsia-900 text-white">
    <div class="container mx-auto px-6 py-12">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold mb-4">✨ Lefekvés előtti hála</h1>
          <p class="text-lg text-gray-300">Pozitív érzelmi lezárás, dopamin- és szerotoninrendszer aktiválása</p>
          <p class="text-sm text-gray-400 mt-2">Időtartam: 3 perc</p>
        </div>

        <!-- Points Info -->
        <PointsInfo exercise-type="evening" :fixed-points="35" />

        <!-- Hero Image -->
        <div class="mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <img :src="heroImage" alt="Napi visszatekintés" class="w-full h-64 object-cover" />
        </div>

        <!-- Introduction -->
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8">
          <h2 class="text-2xl font-bold mb-4">Cél</h2>
          <p class="text-gray-200 leading-relaxed mb-4">
            Pozitív érzelmi lezárás, dopamin- és szerotoninrendszer aktiválása.
            A hálaérzet csökkenti a kortizolszintet és növeli a szerotonintermelést,
            így a test könnyebben eléri az alváshoz szükséges nyugalmi állapotot.
          </p>
        </div>

        <!-- Practice Steps -->
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8">
          <h2 class="text-2xl font-bold mb-6">Hogyan csináld?</h2>

          <div class="space-y-6">
            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-fuchsia-500 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div class="flex-1">
                <p class="text-gray-200 leading-relaxed">
                  Hunyd le a szemed, és idézz fel három dolgot, amiért ma hálás lehetsz.
                  Lehet apróság is: egy finom étel, egy mosoly, vagy hogy sikerült egy feladatod.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-fuchsia-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div class="flex-1">
                <p class="text-gray-200 leading-relaxed">
                  Érezd, ahogy a hála melege kitölti a mellkasodat. Ne csak gondold – próbáld meg érezni ezt az érzést.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-fuchsia-500 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div class="flex-1">
                <p class="text-gray-200 leading-relaxed mb-3">
                  Mondd magadban:
                </p>
                <div class="bg-fuchsia-500/30 border-l-4 border-fuchsia-400 p-4 rounded">
                  <p class="font-medium italic text-lg">
                    „Köszönöm ezt a napot. Megengedem magamnak a pihenést."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Interactive Gratitude Journal -->
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8">
          <h2 class="text-2xl font-bold mb-6">Ma három dolog, amiért hálás vagyok:</h2>

          <div class="space-y-4">
            <div>
              <label class="block text-sm text-gray-300 mb-2">1.</label>
              <textarea
                v-model="gratitude1"
                class="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-fuchsia-400"
                rows="2"
                placeholder="pl. Egy barátom hívott, és jól esett vele beszélni..."
              ></textarea>
            </div>

            <div>
              <label class="block text-sm text-gray-300 mb-2">2.</label>
              <textarea
                v-model="gratitude2"
                class="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-fuchsia-400"
                rows="2"
                placeholder="pl. A nap végén volt időm egy kicsit olvasni..."
              ></textarea>
            </div>

            <div>
              <label class="block text-sm text-gray-300 mb-2">3.</label>
              <textarea
                v-model="gratitude3"
                class="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-fuchsia-400"
                rows="2"
                placeholder="pl. Ma sikerült befejeznem egy feladatot..."
              ></textarea>
            </div>
          </div>

          <div v-if="allFilled" class="mt-6 bg-green-500/20 border border-green-500/50 rounded-lg p-4 text-center">
            <p class="text-lg font-semibold text-green-300">✨ Gyönyörű! Megosztottad a három hálapontod.</p>
            <p class="text-gray-300 mt-1">Engedd, hogy ez a melegség elkísérjen az álomba. 🌙</p>
          </div>
        </div>

        <!-- Examples -->
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8">
          <h2 class="text-2xl font-bold mb-4">💡 Példák a hálapontokra</h2>
          <ul class="space-y-2 text-gray-200">
            <li class="flex items-start gap-2">
              <span class="text-fuchsia-400">•</span>
              <span>A reggeli kávém pontosan olyan jó volt, ahogy szeretem</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-fuchsia-400">•</span>
              <span>Volt néhány percnyi csend a nap folyamán</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-fuchsia-400">•</span>
              <span>Sikerült befejeznem egy dolgot, amit régóta halogatott</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-fuchsia-400">•</span>
              <span>Valaki mosolygott rám, és jól esett</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-fuchsia-400">•</span>
              <span>Van hol aludnom, és biztonságban vagyok</span>
            </li>
          </ul>
        </div>

        <!-- Benefits -->
        <div class="bg-linear-to-r from-fuchsia-600 to-purple-600 rounded-2xl p-8 shadow-lg text-white mb-8">
          <h2 class="text-2xl font-bold mb-4">Miért hasznos?</h2>
          <div class="space-y-3">
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Csökkenti a kortizolszintet</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Növeli a szerotonintermelést</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>A test könnyebben eléri az alváshoz szükséges nyugalmi állapotot</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Pozitív érzelmi lezárást ad a napnak</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Aktiválja a dopamin- és szerotoninrendszert</p>
            </div>
          </div>
        </div>

        <!-- Back Button -->
        <div class="mt-8 flex justify-center gap-4">
          <router-link
            to="/sessions"
            class="inline-block bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            ← Vissza a gyakorlatokhoz
          </router-link>

          <button
            v-if="authStore.isAuthenticated && !completed"
            @click="() => completeExercise()"
            :disabled="completing"
            class="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            {{ completing ? 'Mentés...' : 'Gyakorlat befejezve ✓' }}
          </button>
        </div>

        <!-- Completion Message -->
        <div v-if="completed" class="mt-6 bg-green-50 border-l-4 border-green-500 rounded-lg p-6 text-center">
          <p class="text-lg font-semibold text-green-800">🎉 Gratulálunk! Befejezted a gyakorlatot!</p>
          <p class="text-green-700 mt-2">+{{ earnedPoints }} pont</p>
        </div>
      </div>
    </div>

    <!-- Badge Modal -->
    <BadgeModal
      v-if="newBadge"
      :show="showBadgeModal"
      :badge="newBadge"
      @close="closeBadgeModal"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { placeholderFor } from '../../utils/placeholders'
import { useAuthStore } from '../../stores/auth'
import { useMeditationPoints } from '../../composables/useMeditationPoints'
import PointsInfo from '../../components/PointsInfo.vue'
import BadgeModal from '../../components/BadgeModal.vue'

const heroImage = placeholderFor(13) // Napi visszatekintés
const authStore = useAuthStore()

const {
  completed,
  completing,
  earnedPoints,
  showBadgeModal,
  newBadge,
  completeExercise,
  closeBadgeModal
} = useMeditationPoints('evening')

const gratitude1 = ref('')
const gratitude2 = ref('')
const gratitude3 = ref('')

const allFilled = computed(() => {
  return gratitude1.value.trim() !== '' &&
         gratitude2.value.trim() !== '' &&
         gratitude3.value.trim() !== ''
})
</script>
