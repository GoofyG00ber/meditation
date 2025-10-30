<template>
  <div class="min-h-screen bg-slate-50">
    <div class="container mx-auto px-6 py-12">
      <div class="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow">
        <h1 class="text-2xl font-bold">Alvást segítő hangok</h1>
        <p class="mt-2 text-gray-600">Finom hangok és kompozíciók az elalváshoz.</p>

        <div class="mt-6 grid grid-cols-1 gap-4">
          <div v-for="s in presets" :key="s.id" class="p-4 rounded-lg border flex items-center gap-4">
            <img :src="s.img" alt="thumb" class="w-20 h-12 object-cover rounded" />
            <div class="flex-1">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="font-semibold">{{ s.title }}</h3>
                  <p class="text-sm text-gray-500">{{ s.desc }}</p>
                </div>
                <div>
                  <button class="px-3 py-1 rounded bg-indigo-600 text-white text-sm">Play</button>
                </div>
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

const presets = [
  { id: 'deep-1', title: 'Mély altatás', desc: 'Lassú, mély rezonanciák', img: placeholderFor(0) as string },
  { id: 'soft-2', title: 'Lágy hullámok', desc: 'Finom, ringató hangok', img: placeholderFor(1) as string },
]
</script>
