<template>
  <img
    :src="currentSrc"
    :alt="alt"
    :class="[className, { 'blur-sm': isLoading, 'blur-0': !isLoading }]"
    @load="onLoad"
    class="transition-all duration-300"
  />
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const props = defineProps<{
  src: string
  alt: string
  className?: string
}>()

const isLoading = ref(true)
const currentSrc = ref('')

// Generate low-res placeholder URL
// This assumes images are in /public folder
// You can adjust the quality/size parameters based on your needs
const getLowResSrc = (src: string) => {
  // For now, just use the same image but we'll load it with lower priority
  // In production, you'd want actual low-res versions of images
  return src
}

onMounted(() => {
  // Start with low-res (or same image with loading="lazy")
  currentSrc.value = getLowResSrc(props.src)
  
  // Preload the high-res version
  const highResImage = new Image()
  highResImage.src = props.src
  
  highResImage.onload = () => {
    currentSrc.value = props.src
    isLoading.value = false
  }
  
  highResImage.onerror = () => {
    // If high-res fails, just show the low-res
    isLoading.value = false
  }
})

// Watch for src changes
watch(() => props.src, (newSrc) => {
  isLoading.value = true
  currentSrc.value = getLowResSrc(newSrc)
  
  const highResImage = new Image()
  highResImage.src = newSrc
  
  highResImage.onload = () => {
    currentSrc.value = newSrc
    isLoading.value = false
  }
  
  highResImage.onerror = () => {
    isLoading.value = false
  }
})

const onLoad = () => {
  // Additional load handler if needed
}
</script>
