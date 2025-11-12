<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-primary via-secondary to-success md:-mt-28">
    <!-- Hero Header -->
    <header class="bg-gradient-to-r from-accent/40 to-success/40 backdrop-blur-sm py-6 pt-32 border-b border-secondary/30">
      <div class="container mx-auto px-6">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800">Rólunk</h1>
        <p class="mt-3 text-gray-700 max-w-3xl text-lg">Ismerd meg az InnerBloom-ot – a mentális jólléted legmegbízhatóbb társát</p>
      </div>
    </header>

    <main class="flex-1 container mx-auto px-6 py-16 space-y-20">

      <!-- About Section -->
      <section class="mb-16">
        <div class="bg-white/95 backdrop-blur rounded-3xl p-10 md:p-12 shadow-2xl">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Az InnerBloom története</h2>
              <div class="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  Az <span class="font-semibold text-accent">InnerBloom</span> egy stresszkezelő és mentális jóllétet támogató alkalmazás,
                  amelyet orvostanhallgatóknak fejlesztettünk.
                </p>
                <p>
                  Célunk, hogy segítsünk megőrizni a mentális egyensúlyt a tanulás, a vizsgák és a mindennapi terhelés közepette.
                </p>
                <p>
                  Az app rövid, könnyen beilleszthető gyakorlatokat kínál reggelre, tanuláshoz, estére vagy épp akkor,
                  amikor a stressz eláraszt.
                </p>
                <p class="italic text-accent font-medium">
                  Mert hisszük, hogy a lélek a nyugalomban virágzik – és minden apró pillanat, amit magadra szánsz,
                  közelebb visz a belső harmóniádhoz.
                </p>
              </div>
            </div>
            <div class="rounded-2xl overflow-hidden shadow-xl h-80 md:h-96">
              <LazyImage :src="aboutImg1" alt="InnerBloom" class-name="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section>
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Akik értetek vannak</h2>
          <p class="text-gray-700 text-lg max-w-2xl mx-auto">
            Lelkes csapatunk minden tagja azon dolgozik, hogy a mentális jólléted támogatása elérhető és egyszerű legyen.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center justify-center">
          <!-- Team Member 1 - Peják Panka -->
          <article class="bg-white/95 backdrop-blur rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center w-full max-w-sm h-[400px]">
            <div class="w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-accent/30 shadow-lg shrink-0">
              <LazyImage :src="teamPejak" alt="Peják Panka" class-name="object-cover w-full h-full" />
            </div>
            <h3 class="font-bold text-xl text-gray-800 text-center mb-2">Peják Panka</h3>
            <p class="text-accent font-semibold text-center mb-4">Főnyugalom-mester & Nyugalom-navigátor</p>
            <p class="text-gray-700 text-center italic flex-1 flex items-center">
              „A gyógyítás nem csak a betegekről, hanem a gyógyítókról is szól."
            </p>
          </article>

          <!-- Team Member 2 - Székelyi Eszter -->
          <article class="bg-white/95 backdrop-blur rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center w-full max-w-sm h-[400px]">
            <div class="w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-success/50 shadow-lg shrink-0">
              <LazyImage :src="teamSzekelyi" alt="Székelyi Eszter" class-name="object-cover w-full h-full" />
            </div>
            <h3 class="font-bold text-xl text-gray-800 text-center mb-2">Székelyi Eszter</h3>
            <p class="text-success font-semibold text-center mb-4">Fókuszforgató & Stressz-reset mérnök</p>
            <p class="text-gray-700 text-center italic flex-1 flex items-center">
              „A célom, hogy a nyugalom és tudatosság elérhető legyen – egyetlen koppintással."
            </p>
          </article>

          <!-- Team Member 3 - Polgár Eszter -->
          <article class="bg-white/95 backdrop-blur rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center w-full max-w-sm h-[400px]">
            <div class="w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-secondary/50 shadow-lg shrink-0">
              <LazyImage :src="teamPolgar" alt="Polgár Eszter" class-name="object-cover w-full h-full" />
            </div>
            <h3 class="font-bold text-xl text-gray-800 text-center mb-2">Polgár Eszter</h3>
            <p class="text-secondary font-semibold text-center mb-4">Tudatos gondolatmester & Relaxációs kurátor</p>
            <p class="text-gray-700 text-center italic flex-1 flex items-center">
              „Az InnerBloom mögött tudomány, törődés és emberismeret áll."
            </p>
          </article>

          <!-- Team Member 4 - Érsek Alexandra -->
          <article class="bg-white/95 backdrop-blur rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center w-full max-w-sm h-[400px]">
            <div class="w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-accent/30 shadow-lg shrink-0">
              <LazyImage :src="teamErsek" alt="Érsek Alexandra" class-name="object-cover w-full h-full" />
            </div>
            <h3 class="font-bold text-xl text-gray-800 text-center mb-2">Érsek Alexandra</h3>
            <p class="text-accent font-semibold text-center mb-4">Vizsgaidőszak túlélő coach</p>
            <p class="text-gray-700 text-center italic flex-1 flex items-center">
              „Segítek megtalálni a csendet, még a legkeményebb tanulós napokon is."
            </p>
          </article>

          <!-- Team Member 5 - Czanik Csanád -->
          <article class="bg-white/95 backdrop-blur rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center w-full max-w-sm h-[400px]">
            <div class="w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-success/50 shadow-lg shrink-0">
              <LazyImage :src="teamCzanik" alt="Czanik Csanád" class-name="object-cover w-full h-full" />
            </div>
            <h3 class="font-bold text-xl text-gray-800 text-center mb-2">Czanik Csanád</h3>
            <p class="text-success font-semibold text-center mb-4">Meditációs mérnök & Lélek-töltő specialist</p>
            <p class="text-gray-700 text-center italic flex-1 flex items-center">
              „Én csak ide feljárok :)"
            </p>
          </article>
        </div>
      </section>

      <!-- Mission Section -->
      <section>
        <div class="bg-gradient-to-br from-accent/20 to-success/20 backdrop-blur rounded-3xl p-10 md:p-14 shadow-2xl border border-white/30">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div class="order-2 md:order-1 rounded-2xl overflow-hidden shadow-xl h-80 md:h-96">
              <LazyImage :src="missionImg" alt="Mission" class-name="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="order-1 md:order-2">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Küldetésünk</h2>
              <div class="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  Hiszünk abban, hogy a lelki egészség az orvosi hivatás alapja.
                </p>
                <p>
                  Az <span class="font-semibold text-accent">InnerBloom</span> nem csupán egy app, hanem egy mindennapi társ,
                  amely segít visszanyerni a fókuszt, a nyugalmat és az önmagadba vetett hitet.
                </p>
                <p>
                  Minden apró gyakorlat egy lépés afelé, hogy kiegyensúlyozottabb, tudatosabb és boldogabb orvossá válj.
                </p>
                <p class="text-xl font-bold text-accent mt-6 pt-6 border-t border-accent/30">
                  Törődünk veled – mert te vagy az, aki másokkal is törődik.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>

    <footer class="bg-gradient-to-r from-accent/30 to-success/30 backdrop-blur-sm py-8 border-t border-secondary/30 mt-16">
      <div class="container mx-auto px-6 text-center text-gray-700">
        <p class="text-lg">© 2025 InnerBloom – Minden jog fenntartva</p>
        <p class="text-sm mt-2 text-gray-600">A lelked virágzik a nyugalomban 🌸</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { placeholderFor } from '../utils/placeholders'
import LazyImage from '../components/LazyImage.vue'

const aboutImg1 = placeholderFor(0) as string
const missionImg = placeholderFor(1) as string

// Team member photos
const teamPejak = '/ppl/Peják Panka.jpg'
const teamSzekelyi = '/ppl/Székelyi Eszter.jpg'
const teamPolgar = '/ppl/Polgár Eszter.jpg'
const teamErsek = '/ppl/Érsek Alexandra.jpg'
const teamCzanik = '/ppl/Czanik Csanád.JPG'
</script>
