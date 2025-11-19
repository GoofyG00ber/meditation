<template>
  <div class="min-h-screen bg-linear-to-br from-primary to-secondary md:-mt-28 pt-28">
    <div class="container mx-auto px-6 py-12">
      <div class="max-w-4xl mx-auto">
        <div class="bg-white rounded-2xl p-8 shadow-lg">
          <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Általános Szerződési Feltételek (ÁSZF)</h1>

          <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed">

            <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Bevezető rendelkezések</h2>
            <p class="mb-4">
              Jelen Általános Szerződési Feltételek (a továbbiakban: ÁSZF) szabályozzák az InnerBloom meditációs alkalmazás (a továbbiakban: Szolgáltatás) használatának feltételeit.
              A Szolgáltatást az InnerBloom Kft. (székhely: 1093 Budapest, Fővám tér 8., cégjegyzékszám: 01-09-123456, adószám: 12345678-1-42, képviseli: Dr. Kovács Anna ügyvezető)
              nyújtja a felhasználók számára.
            </p>

            <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">2. A szolgáltatás leírása</h2>
            <p class="mb-4">
              Az InnerBloom egy interaktív meditációs alkalmazás, amely különböző vezetett meditációs gyakorlatokat, játékokat és eszközöket kínál
              a felhasználók mentális egészségének és jólétének javítása érdekében. A szolgáltatás tartalmaz:
            </p>
            <ul class="list-disc pl-6 mb-4">
              <li>Vezetett meditációs gyakorlatok</li>
              <li>Interaktív játékok (pl. Whack-a-Mole stresszoldó játék)</li>
              <li>Légzéstechnikák és vizualizációs eszközök</li>
              <li>Haladási követés és pontszerzés</li>
              <li>Jelvényrendszer és eredmények</li>
            </ul>

            <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Regisztráció és fiókkezelés</h2>
            <p class="mb-4">
              A szolgáltatás használatához regisztráció szükséges. A regisztráció során a felhasználó köteles valós adatokat megadni.
              A felhasználó felelős fiókja biztonságáért és az abban történő tevékenységekért.
            </p>

            <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">4. Használati feltételek</h2>
            <p class="mb-4">
              A szolgáltatás csak személyes, nem kereskedelmi célú használatra szolgál. Tilos:
            </p>
            <ul class="list-disc pl-6 mb-4">
              <li>A szolgáltatás kereskedelmi célú használata</li>
              <li>Más személy fiókjának használata</li>
              <li>A rendszer manipulálása vagy károsítása</li>
              <li>Jogellenes tartalom feltöltése</li>
            </ul>

            <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">5. Fizetési feltételek</h2>
            <p class="mb-4">
              Az alap szolgáltatás jelenleg ingyenes. A jövőbeni prémium funkciók esetében a fizetési feltételeket külön szerződésben szabályozzuk.
            </p>

            <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">6. Szellemi tulajdon</h2>
            <p class="mb-4">
              Az alkalmazás tartalma, design-ja és technológiája az InnerBloom Kft. szellemi tulajdona.
              A felhasználók által létrehozott tartalmak esetében a felhasználó megtartja a jogait, de használati jogot biztosít az InnerBloom számára.
            </p>

            <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">7. Felelősségkorlátozás</h2>
            <p class="mb-4">
              Az InnerBloom Kft. nem vállal felelősséget a szolgáltatás használatából eredő közvetett vagy közvetlen károkért.
              A meditációs gyakorlatok általános egészségügyi tanácsokat tartalmaznak, de nem helyettesítik az orvosi kezelést.
            </p>

            <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">8. Adatkezelés</h2>
            <p class="mb-4">
              Az adatkezelésre az Adatvédelmi szabályzat rendelkezései az irányadók.
            </p>

            <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">9. Szerződésmódosítás</h2>
            <p class="mb-4">
              Az InnerBloom Kft. jogosult az ÁSZF-et egyoldalúan módosítani. A módosításokat a felhasználók e-mailben vagy az alkalmazáson keresztül értesítjük.
            </p>

            <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">10. Záró rendelkezések</h2>
            <p class="mb-4">
              Jelen ÁSZF-re a magyar jog az irányadó. Vita esetén a budapesti bíróságok rendelkeznek joghatósággal.
            </p>

            <p class="mt-8 text-sm text-gray-500">
              Utolsó módosítás: 2025. november 19.
            </p>
          </div>
        </div>

        <!-- Back Button -->
        <div class="mt-6 text-center">
          <router-link
            to="/"
            class="inline-block border-2 border-accent text-accent px-6 py-3 rounded-lg hover:bg-accent/10 transition-all font-semibold"
          >
            ← Vissza a főoldalra
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No script needed for this static page
</script>

<style scoped>
.prose {
  color: #374151;
}

.prose h2 {
  color: #1f2937;
  font-weight: 700;
}

.prose ul {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.prose li {
  margin-bottom: 0.5rem;
}
</style>