<template>
  <div class="bg-white rounded-2xl p-6 shadow-lg">
    <h3 class="text-lg font-bold mb-4">Útmutató a szintekhez</h3>

    <div class="flex gap-3 overflow-auto py-2">
      <button
        v-for="lvl in maxLevel"
        :key="lvl"
        @click="selectLevel(lvl)"
        :class="[
          'flex-shrink-0 w-40 text-left p-3 rounded-lg border transition-all',
          lvl <= currentLevel ? 'bg-accent/10 border-accent text-gray-900' : 'bg-gray-50 border-gray-200 text-gray-500',
          selectedLevel === lvl ? 'ring-2 ring-accent/50' : ''
        ]"
      >
        <div class="text-2xl">{{ totemEmoji(lvl) }}</div>
        <div class="font-semibold">{{ totemName(lvl) }}</div>
        <div v-if="lvl > currentLevel" class="text-xs text-gray-400 mt-1">Következő</div>
      </button>
    </div>

    <div class="mt-4">
      <div v-if="selectedLevel <= currentLevel">
        <h4 class="font-bold text-accent mb-1">{{ selectedInfo?.title }}</h4>
        <p class="italic text-sm text-gray-600 mb-2">{{ selectedInfo?.quote }}</p>
        <p class="text-gray-700 text-sm">{{ selectedInfo?.description }}</p>
      </div>
      <div v-else>
        <h4 class="font-bold">{{ selectedInfo?.title }}</h4>
        <p class="text-gray-600 text-sm">Eléréshez: {{ selectedInfo?.threshold ?? '—' }} pont</p>
        <p class="text-gray-500 text-sm mt-2">A leírás csak a szint elérése után olvasható.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { LEVEL_DESCRIPTIONS, TOTEM_ANIMALS } from '../utils/points'

const props = defineProps<{ currentLevel: number }>()

const currentLevel = props.currentLevel || 1
const maxLevel = 10
const selectedLevel = ref(currentLevel)

function selectLevel(n: number) {
  selectedLevel.value = n
}

const selectedInfo = computed(() => LEVEL_DESCRIPTIONS[selectedLevel.value])

function totemName(n: number) {
  return (TOTEM_ANIMALS[n] && TOTEM_ANIMALS[n].name) || LEVEL_DESCRIPTIONS[n]?.title || `Szint ${n}`
}

function totemEmoji(n: number) {
  return (TOTEM_ANIMALS[n] && TOTEM_ANIMALS[n].emoji) || '✨'
}
</script>

<style scoped>
.flex::-webkit-scrollbar { height: 8px }
.flex::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.08); border-radius: 999px }
</style>
