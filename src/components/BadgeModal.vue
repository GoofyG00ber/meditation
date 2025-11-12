<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center p-4" @click="close">
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <div
          class="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform"
          @click.stop
        >
          <!-- Close button -->
          <button
            @click="close"
            class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Badge display -->
          <div class="text-center">
            <div class="mb-4">
              <div class="text-8xl animate-bounce">{{ badge.emoji }}</div>
            </div>

            <h2 class="text-3xl font-bold text-gray-800 mb-2">Új Jelvény!</h2>
            <h3 class="text-2xl font-semibold text-indigo-600 mb-3">{{ badge.name }}</h3>
            <p class="text-gray-600 text-lg mb-6">{{ badge.description }}</p>

            <div class="flex justify-center gap-3">
              <button
                @click="close"
                class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Rendben
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import type { Badge } from '../utils/points'

defineProps<{
  show: boolean
  badge: Badge
}>()

const emit = defineEmits<{
  close: []
}>()

function close() {
  emit('close')
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active > div:last-child,
.modal-leave-active > div:last-child {
  transition: transform 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from > div:last-child,
.modal-leave-to > div:last-child {
  transform: scale(0.9);
}
</style>
