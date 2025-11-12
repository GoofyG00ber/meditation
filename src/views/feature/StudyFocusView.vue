<template>
  <div class="min-h-screen bg-linear-to-br from-cyan-50 via-blue-50 to-indigo-50">
    <div class="container mx-auto px-6 py-12">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-800 mb-4">🧘 Gyertyaláng meditáció (Trataka)</h1>
          <p class="text-lg text-gray-600">Koncentrációt erősítő fókuszgyakorlat</p>
          <p class="text-sm text-gray-500 mt-2">Időtartam: 4 perc</p>
        </div>

        <!-- Points Info / Login Reminder -->
        <PointsInfo
          exercise-type="study"
          :fixed-points="40"
          points-type="fixed"
        />

        <!-- Hero Image -->
        <div class="mb-12 rounded-2xl overflow-hidden shadow-lg">
          <img :src="heroImage" alt="Gyertyaláng meditáció" class="w-full h-64 object-cover" loading="lazy" />
        </div>

        <!-- Introduction -->
        <div class="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Mi ez a gyakorlat?</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            A Trataka egy ősi koncentrációs technika, amely során egy pontra (általában gyertyalángra) összpontosítunk.
            Ez a gyakorlat erősíti a mentális fókuszt, csillapítja a gondolati zajt, és javítja a tanulási teljesítményt.
          </p>
          <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p class="text-gray-800 font-medium">
              💡 Tipp: A gyakorlat után mindig csukd be pár másodpercre a szemed –
              így elkerülöd a szemfáradást és teljesebben megmarad a nyugalomérzet.
            </p>
          </div>
        </div>

        <!-- Preparation -->
        <div class="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Előkészületek</h2>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <span class="text-2xl">🕯️</span>
              <div>
                <h3 class="font-semibold text-gray-800">Válassz egy csendes helyet</h3>
                <p class="text-gray-700">Keress egy helyet, ahol nem zavarnak meg. A nyugodt és békés környezet segíti a fókuszt.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">🎯</span>
              <div>
                <h3 class="font-semibold text-gray-800">Válassz egy tárgyat</h3>
                <p class="text-gray-700">
                  A gyakori tárgyak közé tartozik a gyertyaláng vagy egy kis pont a falon.
                  A gyertyaláng különösen népszerű dinamikus jellege miatt.
                </p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">🧘</span>
              <div>
                <h3 class="font-semibold text-gray-800">Testtartás</h3>
                <p class="text-gray-700">
                  Ülj kényelmesen keresztbe tett lábbal vagy egy széken egyenes háttal.
                  Győződj meg róla, hogy tested ellazult, de éber.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Practice Steps -->
        <div class="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">A gyakorlat menete</h2>

          <div class="space-y-6">
            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div class="flex-1">
                <p class="text-gray-700 leading-relaxed">
                  Helyezkedjünk el meditációs ülésben egy gyertya előtt, és csukjuk be a szemünket.
                  A gyertya körülbelül karhossznyi távolságra legyen. Ideális esetben a kanóc mellmagasságban van,
                  ha túl magasra helyezzük, az feszültséget okozhat a szemöldökközpontban, vagy perzselő érzést kelthet a szemben.
                  A láng mozdulatlanul égjen, ne lobogjon esetleges léghuzat miatt sem.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div class="flex-1">
                <p class="text-gray-700 leading-relaxed">
                  Nyissuk ki a szemünket, és nézzünk pislogás nélkül a lángba. A lángnak három színtartománya van:
                  alul a kanócnál vöröses, középen világos fehér, a csúcsánál enyhén füstszínű.
                  <span class="font-semibold">Összpontosítsunk a láng legvilágosabb, fehér fényű szakaszának felső tartományára.</span>
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div class="flex-1">
                <p class="text-gray-700 leading-relaxed">
                  Ismét hunyjuk le a szemünket. Ha megjelenik előttünk a láng, összpontosítsunk rá,
                  de ne próbáljuk követni vagy rögzíteni a képet, mert akkor eltűnik.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
              <div class="flex-1">
                <p class="text-gray-700 leading-relaxed">
                  Ismételjük meg 3-szor a teljes gyakorlatot.
                </p>
              </div>
            </div>

            <div class="bg-amber-50 border-l-4 border-amber-500 p-4">
              <p class="text-gray-800 font-medium">
                ⚠️ Fontos: Lassan, fokozatosan építsük fel a gyakorlatot: kezdetben csak 10-15 másodpercig nézzünk a lángba.
                Az időtartamot apránként növelhetjük, és 1 év múlva akár 1 percig is nézhetünk a lángba,
                s utána 4 percen át összpontosíthatunk csukott szemmel a belső képére.
                Ezt az időtartamot azonban semmiképpen se lépjük túl.
              </p>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="text-gray-700 text-sm">
                <span class="font-semibold">Alternatív módszer:</span> A tratakot fekete papíron levő fehér ponttal,
                vagy fehér papíron levő fekete ponttal is gyakorolhatjuk. Amennyiben fehér pontra összpontosítunk,
                annak képét csukott szemmel feketének látjuk, és fordítva.
              </p>
            </div>
          </div>
        </div>

        <!-- Benefits -->
        <div class="bg-linear-to-r from-cyan-500 to-blue-500 rounded-2xl p-8 shadow-lg text-white mb-8">
          <h2 class="text-2xl font-bold mb-4">Előnyei</h2>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Fókusz és figyelem: edzi az elmét egy pontra irányuló koncentrációra, javítja a tanulási teljesítményt</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Mentális tisztaság: csökkenti a gondolati zajt, elősegíti a nyugodt, tiszta gondolkodást</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Stresszcsökkentés: a lassú, fókuszált tekintés és légzés aktiválja a paraszimpatikus idegrendszert</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Szemegészség: erősíti a szemizmokat, csökkenti a képernyő okozta fáradtságot</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Spirituális kapcsolat: segíti az önreflexiót és a belső béke megélését</p>
            </div>
          </div>
        </div>

        <!-- Back Button -->
        <div class="mt-8 flex justify-center gap-4">
          <router-link
            to="/sessions"
            class="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
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
} = useMeditationPoints('study')
</script>
