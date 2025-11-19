<template>
  <router-link 
    v-if="to" 
    :to="to" 
    :class="[
      'block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-[1.02] cursor-pointer group',
      isWhackAMole ? 'rainbow-glow' : ''
    ]"
  >
    <div class="h-44 bg-secondary flex items-center justify-center overflow-hidden">
      <img :src="imgSrc" :alt="title" class="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300" />
    </div>
    <div class="p-5">
      <h3 class="text-lg font-semibold text-gray-800 group-hover:text-accent transition-colors">{{ title }}</h3>
      <p class="mt-2 text-gray-700 text-sm">{{ description }}</p>
      <div class="mt-4 flex items-center justify-between">
        <div class="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
          <span>Megnyitás</span>
          <span class="transform group-hover:translate-x-1 transition-transform">→</span>
        </div>
        <button 
          @click.prevent="$emit('action')" 
          class="bg-accent text-white px-4 py-2 rounded-lg text-sm hover:bg-accent/80 transition-all shadow-md hover:shadow-lg"
        >
          Használ
        </button>
      </div>
    </div>
  </router-link>
  
  <div 
    v-else
    class="block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-default group"
  >
    <div class="h-44 bg-secondary flex items-center justify-center overflow-hidden">
      <img :src="imgSrc" :alt="title" class="object-cover w-full h-full" />
    </div>
    <div class="p-5">
      <h3 class="text-lg font-semibold text-gray-800">{{ title }}</h3>
      <p class="mt-2 text-gray-700 text-sm">{{ description }}</p>
      <div class="mt-4 flex items-center justify-between">
        <div>
          <span class="text-gray-400 text-sm">(Nincs részletek)</span>
        </div>
        <button @click="$emit('action')" class="bg-accent text-white px-4 py-2 rounded-lg text-sm hover:bg-accent/80 transition-all shadow-md">Használ</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { placeholderFor } from '../utils/placeholders'

const props = defineProps<{ title: string; description?: string; img?: string; to?: string }>()

// Check if this is the Whack-a-Mole card
const isWhackAMole = computed(() => props.title === 'Whack-a-Mole játék')

// Map feature titles to specific image indices for consistency
const getImageIndex = (title: string): number => {
  const imageMap: Record<string, number> = {
    'Napi emlékeztető': 0,
    'Relaxáló háttérhangok': 1,
    'Alvást segítő hangok': 2,
    'Meditációs videók': 3,
    'Időzített csendes meditáció': 4,
    'Légzésszabályozás': 5,
    'Reggeli mindfulness': 6,
    'Légzésgyakorlat': 7,
    'Pozitív affirmációk': 8,
    'Fókuszáló meditáció': 9,
    'Memória erősítő': 10,
    'Stresszoldó szünet': 11,
    'Alvás előtti relaxáció': 12,
    'Napi visszatekintés': 13,
    'Test tudatosítás': 14,
    'Gyors stresszoldás': 15,
    'Pánik elleni gyakorlat': 0,
    'Földelés gyakorlat': 1,
    'Whack-a-Mole játék': 2
  }
  
  return imageMap[title] ?? 0
}

const imgSrc = computed(() => {
  if (props.img) return props.img
  return placeholderFor(getImageIndex(props.title))
})
</script>

<style scoped>
.rainbow-glow {
  position: relative;
  animation: rainbow-glow-animation 3s ease-in-out infinite;
}

.rainbow-glow::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 1rem;
  padding: 2px;
  background: linear-gradient(
    45deg,
    #FAF0D7,
    #FFD9C0,
    #CCEEBC,
    #8CC0DE,
    #FAF0D7
  );
  background-size: 300% 300%;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  animation: rainbow-border 4s linear infinite;
  opacity: 0.6;
  z-index: -1;
}

.rainbow-glow:hover::before {
  opacity: 1;
  inset: -4px;
  animation-duration: 2s;
}

@keyframes rainbow-border {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes rainbow-glow-animation {
  0%, 100% {
    box-shadow: 0 0 15px rgba(250, 240, 215, 0.3),
                0 0 30px rgba(250, 240, 215, 0.2);
  }
  25% {
    box-shadow: 0 0 15px rgba(255, 217, 192, 0.3),
                0 0 30px rgba(255, 217, 192, 0.2);
  }
  50% {
    box-shadow: 0 0 15px rgba(204, 238, 188, 0.3),
                0 0 30px rgba(204, 238, 188, 0.2);
  }
  75% {
    box-shadow: 0 0 15px rgba(140, 192, 222, 0.3),
                0 0 30px rgba(140, 192, 222, 0.2);
  }
}

.rainbow-glow:hover {
  animation: rainbow-glow-animation 1.5s ease-in-out infinite;
  box-shadow: 0 0 25px rgba(250, 240, 215, 0.5),
              0 0 50px rgba(255, 217, 192, 0.4),
              0 0 75px rgba(204, 238, 188, 0.3);
}
</style>
