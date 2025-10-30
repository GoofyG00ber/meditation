<template>
  <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1">
    <div class="h-44 bg-gray-100 flex items-center justify-center">
      <img :src="imgSrc" :alt="title" class="object-cover w-full h-full" />
    </div>
    <div class="p-5">
      <h3 class="text-lg font-semibold text-gray-900">{{ title }}</h3>
      <p class="mt-2 text-gray-600 text-sm">{{ description }}</p>
      <div class="mt-4 flex items-center justify-between">
        <div>
          <router-link v-if="to" :to="to" class="text-indigo-600 font-medium hover:underline">Megnyitás</router-link>
          <span v-else class="text-gray-400 text-sm">(Nincs részletek)</span>
        </div>
        <button @click="$emit('action')" class="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm hover:bg-indigo-700">Használ</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { nextPlaceholder } from '../utils/placeholders'

const props = defineProps<{ title: string; description?: string; img?: string; to?: string }>()

const imgSrc = computed(() => props.img ?? nextPlaceholder())
</script>
