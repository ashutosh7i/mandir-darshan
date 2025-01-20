<template>
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Aarti Times</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="temple in temples" :key="temple.id" class="border p-4 rounded-lg">
          <h3 class="text-lg font-semibold mb-2">{{ temple.name }}</h3>
          <ul>
            <li v-for="(time, index) in temple.aartiTimings" :key="index" class="flex items-center">
              <span>{{ time }}</span>
              <span v-if="isAartiLive(time)" class="ml-2 text-green-500 font-semibold">[LIVE]</span>
              <span v-if="isAartiLive(time)" class="ml-2 w-2 h-2 bg-green-500 rounded-full"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  defineProps({
    temples: {
      type: Array,
      required: true
    }
  })
  
  const currentTime = ref(new Date())
  
  onMounted(() => {
    setInterval(() => {
      current
    }, 60000) // Update every minute
    })
  const isAartiLive = (aartiTime) => {
    const [hours, minutes] = aartiTime.split(':').map(Number)
    return currentTime.value.getHours() === hours && currentTime.value.getMinutes() === minutes
  }
  </script>