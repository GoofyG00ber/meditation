<template>
  <div class="min-h-screen bg-linear-to-br from-primary to-secondary md:-mt-28 pt-28">
    <div class="container mx-auto px-6 py-12">
      <div class="max-w-4xl mx-auto">
        <div class="bg-white rounded-2xl p-8 shadow-lg">
          <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Adatvédelmi szabályzat</h1>

          <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed">

            <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Bevezető rendelkezések</h2>
            <p class="mb-4">
              Az InnerBloom Kft. (székhely: 1093 Budapest, Fővám tér 8., cégjegyzékszám: 01-09-123456, adószám: 12345678-1-42,
              képviseli: Dr. Kovács Anna ügyvezető) elkötelezett a felhasználók személyes adatainak védelme és a GDPR (2016/679 EU rendelet)
              betartása iránt. Ez az adatvédelmi szabályzat tájékoztatást nyújt arról, hogyan kezeljük és védjük az Ön személyes adatait.
            </p>

            <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">2. Fogalom-meghatározások</h2>
            <ul class="list-disc pl-6 mb-4">
              <li><strong>Személyes adat:</strong> Azonosított vagy azonosítható természetes személyre vonatkozó bármely információ</li>
              <li><strong>Adatkezelő:</strong> InnerBloom Kft.</li>
              <li><strong>Adatkezelés:</strong> A személyes adatokon végzett bármely művelet</li>
              <li><strong>Érintett:</strong> Az a természetes személy, akinek személyes adatait kezeljük</li>
            </ul>

            <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Kezelt személyes adatok</h2>
            <p class="mb-4">
              Az alkalmazás használata során az alábbi személyes adatokat kezeljük:
            </p>
            <ul class="list-disc pl-6 mb-4">
              <li><strong>Regisztrációs adatok:</strong> felhasználónév, e-mail cím, jelszó (titkosított formában)</li>
              <li><strong>Használati adatok:</strong> pontszámok, elért szintek, jelvények, gyakorlati előrehaladás</li>
              <li><strong>Technikai adatok:</strong> IP cím, böngésző típusa, eszköz információk</li>
              <li><strong>Felhasználó által feltöltött tartalmak:</strong> képek (stresszoldó játék esetében)</li>
            </ul>

            <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">4. Az adatkezelés célja</h2>
            <ul class="list-disc pl-6 mb-4">
              <li>Felhasználói fiók létrehozása és kezelése</li>
              <li>Szolgáltatás nyújtása és személyre szabása</li>
              <li>Haladási statisztikák vezetése</li>
              <li>Jelvények és eredmények kiosztása</li>
              <li>Technikai problémák megoldása</li>
              <li>Jogszabályi kötelezettségek teljesítése</li>
            </ul>

            <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">5. Az adatkezelés jogalapja</h2>
            <ul class="list-disc pl-6 mb-4">
              <li><strong>Szerződés teljesítése:</strong> GDPR 6. cikk (1) bekezdés b) pont</li>
              <li><strong>Jogos érdek:</strong> GDPR 6. cikk (1) bekezdés f) pont (technikai adatok esetében)</li>
              <li><strong>Hozzájárulás:</strong> GDPR 6. cikk (1) bekezdés a) pont (opcionális adatok esetében)</li>
            </ul>

            <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">6. Adattárolás időtartama</h2>
            <ul class="list-disc pl-6 mb-4">
              <li><strong>Regisztrációs adatok:</strong> fiók aktív + 3 év (törlési kérelemig)</li>
              <li><strong>Használati adatok:</strong> fiók aktív + 2 év</li>
              <li><strong>Technikai naplók:</strong> 1 év</li>
              <li><strong>Felhasználói tartalmak:</strong> fiók aktív vagy hozzájárulás visszavonásáig</li>
            </ul>

            <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">7. Adatbiztonság</h2>
            <p class="mb-4">
              Az InnerBloom Kft. megfelelő technikai és szervezési intézkedésekkel biztosítja az adatok védelmét:
            </p>
            <ul class="list-disc pl-6 mb-4">
              <li>Titkosított adatátvitel (HTTPS)</li>
              <li>Jelszavak hash-elése (bcrypt)</li>
              <li>Firewall és behatolásvédelmi rendszerek</li>
              <li>Reguláris biztonsági mentések</li>
              <li>Korlátozott hozzáférési jogosultságok</li>
            </ul>

            <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">8. Adattovábbítás és címzettek</h2>
            <p class="mb-4">
              Az InnerBloom Kft. nem adja tovább a személyes adatokat harmadik félnek, kivéve:
            </p>
            <ul class="list-disc pl-6 mb-4">
              <li>Jogszabályi kötelezettség esetén</li>
              <li>Bírósági vagy hatósági megkeresésre</li>
              <li>Az érintett hozzájárulásával</li>
            </ul>

            <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">9. Az érintettek jogai</h2>
            <p class="mb-4">
              Az érintettek az alábbi jogokkal rendelkeznek:
            </p>
            <ul class="list-disc pl-6 mb-4">
              <li><strong>Tájékoztatáshoz való jog:</strong> GDPR 13-14. cikk</li>
              <li><strong>Hozzáférés joga:</strong> GDPR 15. cikk</li>
              <li><strong>Helyesbítés joga:</strong> GDPR 16. cikk</li>
              <li><strong>Törlés joga:</strong> GDPR 17. cikk</li>
              <li><strong>Adatkezelés korlátozásának joga:</strong> GDPR 18. cikk</li>
              <li><strong>Hordozhatóság joga:</strong> GDPR 20. cikk</li>
              <li><strong>Tiltakozás joga:</strong> GDPR 21. cikk</li>
            </ul>

            <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">10. Jogorvoslat</h2>
            <p class="mb-4">
              Az érintettek panasszal fordulhatnak:
            </p>
            <ul class="list-disc pl-6 mb-4">
              <li><strong>Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH):</strong> 1055 Budapest, Falk Miksa u. 9-11.</li>
              <li><strong>Bíróság:</strong> A lakóhely szerint illetékes törvényszék</li>
            </ul>

            <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">11. Cookie-k kezelése</h2>
            <p class="mb-4">
              Az alkalmazás munkamenet-sütiket használ a felhasználói élmény javítása érdekében.
              Ezek az adatok nem kerülnek tárolásra a szerveren, csak a böngészőben.
            </p>

            <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">12. Kapcsolattartás</h2>
            <p class="mb-4">
              Adatvédelmi kérdéseivel kapcsolatban az alábbi elérhetőségeken fordulhat hozzánk:
            </p>
            <ul class="list-disc pl-6 mb-4">
              <li><strong>E-mail:</strong> adatvedelem@innerbloom.hu</li>
              <li><strong>Postacím:</strong> 1093 Budapest, Fővám tér 8.</li>
              <li><strong>Telefon:</strong> +36 70 123 1234</li>
            </ul>

            <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">13. Záró rendelkezések</h2>
            <p class="mb-4">
              Ez az adatvédelmi szabályzat 2025. november 19-től érvényes. A szabályzat módosításáról előzetesen tájékoztatjuk felhasználóinkat.
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