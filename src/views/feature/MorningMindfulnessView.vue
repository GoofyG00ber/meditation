<template>
  <div class="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50">
    <div class="container mx-auto px-6 py-12">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-800 mb-4">🌅 Stresszoldó reggeli mindfulness</h1>
          <p class="text-lg text-gray-600">Kezdd a napod tudatosan és nyugodtan</p>
        </div>

        <!-- Points Info / Login Reminder -->
        <PointsInfo
          exercise-type="morning"
          :fixed-points="50"
          points-type="fixed"
        />

        <!-- Hero Image -->
        <div class="mb-12 rounded-2xl overflow-hidden shadow-lg">
          <img :src="heroImage" alt="Reggeli meditáció" class="w-full h-64 object-cover" />
        </div>

        <!-- Introduction -->
        <div class="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Miért fontos a reggeli mindfulness?</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            A reggelek minősége meghatározza az egész napunkat. A pszichológiai kutatások szerint ébredés után az agy még „sebezhető",
            mert a kortizolszint természetesen magas, a prefrontális kéreg lassan ébred, és emiatt hajlamosak vagyunk:
          </p>
          <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
            <li>túlgondolni a problémákat</li>
            <li>feszültséget vagy kedvtelenséget érezni</li>
            <li>automatikusan pörgő üzemmódba kapcsolni</li>
          </ul>
          <p class="text-gray-700 leading-relaxed">
            Ezért különösen fontos, hogy a reggeli néhány percben átvegye az irányítást a tudatosság,
            és ne a megszokott szorongás vagy rohanás diktáljon.
          </p>
        </div>

        <!-- Practice Steps -->
        <div class="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Hogyan csináld?</h2>

          <div class="space-y-6">
            <!-- Step 1 -->
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Engedd be a fényt</h3>
                <p class="text-gray-700 leading-relaxed">
                  Amint kinyitod a szemed, húzd el a függönyt vagy kapcsold fel a lámpát.
                  A reggeli fény aktiválja az agy „nappali üzemmódját", csökkenti a melatonin- és kortizolszintet,
                  és segíti a természetes ébredést. Ne nyúlj rögtön a telefonodhoz – adj időt a testednek és elmédnek a felébredésre.
                </p>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Helyezkedj el kényelmesen</h3>
                <p class="text-gray-700 leading-relaxed">
                  Maradhatsz fekve vagy ülhetsz is. Tedd a kezed a hasadra, és csak figyeld, ahogy a légzésed megemeli és lesüllyeszti a hasfalat.
                  Nem kell irányítanod – csak kövesd a légzés természetes ritmusát.
                </p>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Kapcsolódj a testedhez</h3>
                <p class="text-gray-700 leading-relaxed">
                  Érezd, hol mozdul a levegő leginkább: a mellkasban, a hasban, vagy a toroknál?
                  Ha feszültséget érzel, vegyél egy lassú, mély levegőt, és a kilégzéssel tudatosan lazítsd el a vállad, a mellkasod vagy a homlokod.
                </p>
              </div>
            </div>

            <!-- Step 4 -->
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Figyeld meg a gondolatokat</h3>
                <p class="text-gray-700 leading-relaxed">
                  Ha megjelennek, csak nevezd meg őket („tervezés", „aggódás", „emlék"),
                  majd engedd el anélkül, hogy belemennél.
                </p>
              </div>
            </div>

            <!-- Step 5 -->
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Töltsd meg hálaérzettel a pillanatot</h3>
                <p class="text-gray-700 leading-relaxed">
                  Gondolj egyetlen apró dologra, amiért hálás lehetsz: a fényre, a melegre, a csendre, egy új nap ígéretére.
                  Ez segíti az idegrendszert áthangolni stresszből nyugalomra, és beindítja a szerotonintermelést.
                </p>
              </div>
            </div>

            <!-- Step 6 -->
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-lg">6</div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Adj időt a lassú indulásnak</h3>
                <p class="text-gray-700 leading-relaxed">
                  Ne ugorj fel azonnal – ha jól esik, mozgasd át magad: nyújtózz, körözz a válladdal, vegyél pár mély levegőt.
                  A finom mozgás fokozza az endorfintermelést és stabilizálja az energiaszintet.
                </p>
              </div>
            </div>

            <!-- Step 7 -->
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-lg">7</div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">A gyakorlat végén mondj magadnak egy barátságos mondatot</h3>
                <div class="bg-amber-50 border-l-4 border-amber-500 p-4 mt-2">
                  <p class="text-gray-800 font-medium italic">
                    „Nyugodtan indulok. Ma is figyelni fogok magamra."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Benefits -->
        <div class="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 shadow-lg text-white mb-8">
          <h2 class="text-2xl font-bold mb-4">Mit eredményez?</h2>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Csökkenti a reggeli szorongást és testi feszültséget</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Letisztítja a gondolatokat, stabilabb hangsúlyt ad a napnak</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Megszakítja a „reggeli pörgés" automatikus spirálját</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✓</span>
              <p>Fókuszáltabb, nyugodtabb ébredést támogat</p>
            </div>
          </div>
        </div>

        <!-- Videos -->
        <div class="bg-white rounded-2xl p-8 shadow-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Vezetett meditációk</h2>
          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">5 perces meditációs gyakorlat</h3>
              <div class="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/inpok4MKVLM"
                  title="5 perces meditáció"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  class="w-full h-full"
                ></iframe>
              </div>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Hosszabb meditáció (20 perc)</h3>
              <div class="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/MIr3RsUWrdo"
                  title="20 perces meditáció"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  class="w-full h-full"
                ></iframe>
              </div>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Meditáció szorongás ellen (24 perc, magyar)</h3>
              <div class="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/ERcw00wu6QU"
                  title="Meditáció szorongás ellen"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  class="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <!-- Back Button -->
        <div class="mt-8 flex justify-center gap-4">
          <router-link
            to="/sessions"
            class="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
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
import { placeholderFor } from '../../utils/placeholders'
import { useAuthStore } from '../../stores/auth'
import { useMeditationPoints } from '../../composables/useMeditationPoints'
import PointsInfo from '../../components/PointsInfo.vue'
import BadgeModal from '../../components/BadgeModal.vue'

const heroImage = placeholderFor(6) // Reggeli mindfulness
const authStore = useAuthStore()

const {
  completed,
  completing,
  earnedPoints,
  showBadgeModal,
  newBadge,
  completeExercise,
  closeBadgeModal
} = useMeditationPoints('morning')
</script>
