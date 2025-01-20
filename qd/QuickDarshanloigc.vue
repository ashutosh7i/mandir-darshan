<template>
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Quick Darshan</h2>
      <Button @click="startQuickDarshan" :disabled="isRunning">Start Quick Darshan</Button>
      <div v-if="currentTemple" class="mt-4">
        <h3 class="text-lg font-semibold mb-2">{{ currentTemple.name }}</h3>
        <div class="aspect-video bg-gray-200 mb-4">
          <iframe :src="currentTemple.liveUrl" class="w-full h-full" frameborder="0" allowfullscreen></iframe>
        </div>
        <Progress :value="progress" class="w-full mb-4" />
        <Button @click="togglePause">{{ isPaused ? 'Continue' : 'Wait' }}</Button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { Button } from '@/components/ui/button'
  import { Progress } from '@/components/ui/progress'
  
  const props = defineProps({
    temples: {
      type: Array,
      required: true
    }
  })
  
  const isRunning = ref(false)
  const isPaused = ref(false)
  const currentTemple = ref(null)
  const progress = ref(0)
  const intervalId = ref(null)
  
  const startQuickDarshan = () => {
    isRunning.value = true
    currentTemple.value = getRandomTemple()
    progress.value = 0
    runProgress()
  }
  
  const togglePause = () => {
    isPaused.value = !isPaused.value
    if (isPaused.value) {
      clearInterval(intervalId.value)
    } else {
      runProgress()
    }
  }
  
  const runProgress = () => {
    intervalId.value = setInterval(() => {
      if (progress.value < 100) {
        progress.value += 1
      } else {
        clearInterval(intervalId.value)
        currentTemple.value = getRandomTemple()
        progress.value = 0
        runProgress()
      }
    }, 100)
  }
  
  const getRandomTemple = () => {
    return props.temples[Math.floor(Math.random() * props.temples.length)]
  }
  </script>