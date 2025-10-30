<template>
  <div class="min-h-screen bg-slate-50">
    <div class="container mx-auto px-6 py-12">
      <div class="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow">
        <h1 class="text-2xl font-bold">Meditációs videók</h1>
        <p class="mt-2 text-gray-600">Vezetett videók, ahol konkrét meditációkat találsz.</p>

        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="v in videos" :key="v.id" class="bg-gray-50 rounded overflow-hidden shadow">
            <div class="h-44 bg-black/5 flex items-center justify-center">
              <img :src="v.poster" alt="poster" class="w-full h-full object-cover" />
            </div>
            <div class="p-4">
              <h3 class="font-semibold">{{ v.title }}</h3>
              <p class="text-sm text-gray-500 mt-1">{{ v.desc }}</p>
              <div class="mt-3">
                <button class="bg-indigo-600 text-white px-3 py-1 rounded">Nézd meg</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { placeholderFor } from '../../utils/placeholders'

const videos = [
  { id: 'v1', title: 'Kezdő meditáció', desc: 'Lépésről-lépésre vezetett gyakorlat', poster: placeholderFor(0) as string },
  { id: 'v2', title: 'Légzés fókusz', desc: 'Koncentrált légzés gyakorlat', poster: placeholderFor(1) as string },
]
</script>
