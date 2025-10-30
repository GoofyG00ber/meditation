<template>
    <footer v-if="!hide" class="bg-[rgb(122,218,165)] text-black border-t border-[rgb(225,170,54)] p-4 flex flex-col gap-1">



    <div class="w-full md:w-[90%] py-5 px-10 footer-bottom grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-items-start">
      <div class="footer-map w-full h-full">
        <MapView />
      </div>
      <div class="footer-info">
        <p><b>Meditation App</b></p>
        <p class="small">Budapest, Fővám tér 8, 1093</p>
        <p class="small">+36 70 123 1234</p>
        <p class="small">nemletezik@citromail.com</p>
      </div>
      <div class="footer-info md:border-l md:pl-4 w-full">
        <p class="pb-2"><b>Nyitvatartás</b></p>
        <div class="grid grid-cols-2 gap-0 w-full">
          <div>
            Hétfő
          </div>
          <div>
            Zárva
          </div>
          <div>
            Kedd
          </div>
          <div>
            Zárva
          </div>
          <div>
            Szerda
          </div>
          <div>
            Zárva
          </div>
          <div>
            Csütörtök
          </div>
          <div>
            Zárva
          </div>
          <div>
            Péntek
          </div>
          <div>
            19:00 - 04:00
          </div>
          <div>
            Szombat
          </div>
          <div>
            19:00 - 04:00
          </div>
          <div>
            Vasárnap
          </div>
          <div>
            Zárva
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div class="bg-gray-700">

<table class="w-full table-fixed font-medium text-sm">
  <tr>
    <td class="text-left text-white align-middle w-1/2 px-4">© {{ year }} Meditation App. All rights reserved.</td>
    <td class="text-right align-middle text-white w-1/2 px-4">
      <div class="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-4">
        <router-link to="/ASZF" class="text-[rgb(225,170,54)]">ÁSZF</router-link>
        <router-link to="/privacy-policy" class="text-[rgb(225,170,54)]">Adatkezelési tájékoztató</router-link>
        <router-link to="/hazirend" class="text-[rgb(225,170,54)]">Házirend</router-link>
      </div>
    </td>
  </tr>
</table>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const hide = ref(false)

const checkRoute = () => {
  hide.value = route.path.includes('admin')
}
watch(route, checkRoute, { immediate: true })

const year = new Date().getFullYear()
import MapView from '@/components/MapView.vue'
</script>

<style scoped>
.footer-top {
  text-align: center;
}

.footer-top h3 {
  margin-bottom: 10px;
}

.supporters img {
  height: 60px;
  object-fit: contain;
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

.supporters img:hover {
  opacity: 1;
  transform: scale(1.05);
}

.divider {
  border: none;
  border-top: 1px solid rgb(225, 170, 54);
  margin: 10px 0;
}

.footer-info p {
  margin: 4px 0;
}

.footer-info .small {
  font-size: 0.9rem;
}

.container {
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
}
</style>
