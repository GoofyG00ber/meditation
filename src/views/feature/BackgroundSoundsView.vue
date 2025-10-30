<template>
  <div class="min-h-screen bg-slate-50">
    <div class="container mx-auto px-6 py-12">
      <div class="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow">
        <h1 class="text-2xl font-bold">Relaxáló háttérhangok</h1>
        <p class="mt-2 text-gray-600">Kapcsolódj ki a természet hangjaival.</p>

        <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div v-for="sound in sounds" :key="sound.id" class="p-4 rounded-lg border flex items-center gap-4">
            <img :src="sound.img" alt="thumb" class="w-20 h-12 object-cover rounded" />
            <div class="flex-1">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="font-semibold">{{ sound.title }}</h3>
                  <p class="text-sm text-gray-500">{{ sound.desc }}</p>
                </div>
                <div class="flex items-center gap-2">
                  <button @click="toggle(sound)" class="px-3 py-1 rounded bg-indigo-600 text-white text-sm">{{ sound.playing ? 'Stop' : 'Play' }}</button>
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
import { reactive } from 'vue'
import { placeholderFor } from '../../utils/placeholders'

type Sound = { id: string; title: string; desc: string; img: string; playing: boolean }

const sounds = reactive<Sound[]>([
  { id: 'waterfall', title: 'Vízesés', desc: 'Lágy, lecsengő víz hangok', img: placeholderFor(0) as string, playing: false },
  { id: 'forest', title: 'Erdő', desc: 'Madárcsicsergés és szél', img: placeholderFor(1) as string, playing: false },
  { id: 'rain', title: 'Eső', desc: 'Lágy esőkopogás', img: placeholderFor(2) as string, playing: false },
])

function toggle(sound: Sound) {
  // For now we only toggle UI state. Integrating real audio sources is next step.
  sound.playing = !sound.playing
}
</script>
