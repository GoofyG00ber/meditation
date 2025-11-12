<template>
  <div class="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-blue-900 text-white">
    <div class="container mx-auto px-6 py-12">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold mb-4">🌙 Test-lazító Body Scan</h1>
          <p class="text-lg text-gray-300">Az izmok és idegrendszer mély ellazítása</p>
          <p class="text-sm text-gray-400 mt-2">Időtartam: 5–8 perc</p>
        </div>

        <!-- Points Info -->
        <PointsInfo exercise-type="evening" :fixed-points="60" />

        <!-- Hero Image -->
        <div class="mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <img :src="heroImage" alt="Body Scan meditáció" class="w-full h-64 object-cover" loading="lazy" />
        </div>

        <!-- Introduction -->
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8">
          <h2 class="text-2xl font-bold mb-4">Cél</h2>
          <p class="text-gray-200 leading-relaxed mb-4">
            A test és az elme lelassítása, a feszültség tudatos oldása, mély testi-lelki megpihenés előkészítése.
          </p>
          <div class="bg-purple-500/30 border-l-4 border-purple-400 p-4 rounded">
            <p class="font-medium">
              💡 A Body Scan tudatosítja a rejtett izomfeszüléseket, és aktiválja a vagus-ideget,
              ami lelassítja a pulzust és megnyugtatja a testet.
              Klinikai kutatások szerint javítja az alvásminőséget és csökkenti az álmatlanság tüneteit.
            </p>
          </div>
        </div>

        <!-- Practice Steps -->
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8">
          <h2 class="text-2xl font-bold mb-6">Hogyan csináld?</h2>

          <div class="space-y-6">
            <!-- Step 1 -->
            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-2">Helyezkedj el kényelmesen</h3>
                <p class="text-gray-200 leading-relaxed">
                  Feküdj a hátadra, és engedd, hogy a tested belesüppedjen az ágyba vagy a szőnyegbe.
                  Tegyél párnát a térded vagy a fejed alá, ha így kényelmesebb.
                  Ha nem tudsz lefeküdni, ülve is gyakorolhatod – a lényeg, hogy a tested stabil, mégis laza legyen.
                  Zárd be a szemed, és mondd magadban: <span class="italic font-medium">"Most elengedem a napot."</span>
                </p>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-2">Lélegezz mélyen és lassan</h3>
                <p class="text-gray-200 leading-relaxed">
                  Kezdj néhány tudatos, mély lélegzettel. Lélegezz be az orrodon keresztül,
                  és érezd, ahogy a levegő megtölti a hasad – nem a mellkasod.
                  Kilégzéskor engedd, hogy minden feszültség távozzon.
                  A vállak maradjanak lazák, a légzés pedig természetes, ritmusos, csendes.
                </p>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-2">Irányítsd a figyelmed a lábaidra</h3>
                <p class="text-gray-200 leading-relaxed">
                  Érezd a talpad érintkezését az ággyal, a súlyodat, a hőmérsékletet.
                  Lehet, hogy bizsergést, melegséget vagy enyhe feszültséget tapasztalsz – bármit érzel, az rendben van.
                  Ne próbálj változtatni rajta, csak figyeld.
                  Ha feszültséget érzel, lélegezz bele, és képzeld el, hogy a kilégzéssel ez a feszültség lassan elpárolog.
                </p>
              </div>
            </div>

            <!-- Step 4 -->
            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-2">Haladj felfelé – lépésről lépésre</h3>
                <p class="text-gray-200 leading-relaxed">
                  Vezesd végig a figyelmedet a lábakon, a hason, mellkason, karokon, vállakon és a nyakon át egészen a fejed búbjáig.
                  Minden testrésznél állj meg néhány másodpercre, figyeld az érzéseket – meleget, lüktetést, nyugalmat vagy épp feszültséget.
                  Ha bárhol kellemetlenséget észlelsz, lélegezz oda, és engedd el a kilégzéssel.
                </p>
              </div>
            </div>

            <!-- Step 5 -->
            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-2">Tudatosítsd az egész tested</h3>
                <p class="text-gray-200 leading-relaxed">
                  Amikor a fejedhez érsz, képzeld el, hogy az egész tested egyszerre lélegzik.
                  Érezd, ahogy minden belégzéssel friss levegő, minden kilégzéssel megkönnyebbülés jár át.
                  Maradj ebben az érzésben néhány percig – a teljes ellazulás, a biztonság és a csend állapotában.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Benefits -->
        <div class="bg-linear-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 shadow-lg mb-8">
          <h2 class="text-2xl font-bold mb-4">Miért hatásos?</h2>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Aktiválja a paraszimpatikus idegrendszert → lelassul a pulzus, csökken a vérnyomás</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Oldja az izomfeszültséget és csökkenti a stresszhormonokat (kortizol, adrenalin)</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Fokozza az alvás minőségét – könnyebb elalvást és mélyebb pihenést biztosít</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Erősíti a test-tudatot, ami segít felismerni és megelőzni a felgyülemlett feszültségeket</p>
            </div>
          </div>
        </div>

        <!-- Back Button -->
        <div class="mt-8 flex justify-center gap-4">
          <router-link
            to="/sessions"
            class="inline-block bg-purple-500 hover:bg-purple-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
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
import { nextPlaceholder } from '../../utils/placeholders'
import { useAuthStore } from '../../stores/auth'
import { useMeditationPoints } from '../../composables/useMeditationPoints'
import PointsInfo from '../../components/PointsInfo.vue'
import BadgeModal from '../../components/BadgeModal.vue'

const heroImage = nextPlaceholder()
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
</script>
