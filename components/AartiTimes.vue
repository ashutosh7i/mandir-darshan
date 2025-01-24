<template>
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">{{ $t('aartiTimes') }}</h2>
      <div class="border p-4 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">{{ $t(temple.name) }}</h3>
        <ul>
          <li v-for="(time, index) in temple.aartiTimings" :key="index" class="flex items-center">
            <span>{{ formatTime(time) }}</span>
            <span v-if="isAartiLive(time)" class="ml-2 text-green-500 font-semibold">[LIVE]</span>
            <span v-if="isAartiLive(time)" class="ml-2 w-2 h-2 bg-green-500 rounded-full"></span>
            <span v-else-if="isAartiUpcoming(time)" class="ml-2 text-red-500 font-semibold">[UPCOMING]</span>
          </li>
        </ul>
      
      <h3 class="font-semibold pt-4">Official website</h3>
              <a :href="temple.templeInfo.officialWebsite" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                {{ temple.templeInfo.officialWebsite }}
        </a>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  defineProps({
    temple: {
      type: Object,
      required: true
    }
  })
  
  const currentTime = ref(new Date())
  
  onMounted(() => {
    setInterval(() => {
      currentTime.value = new Date()
    }, 60000) // Update every minute
  })
  
  const isAartiLive = (aartiTime) => {
    const [hours, minutes] = aartiTime.split(':').map(Number)
    const aartiStartTime = new Date()
    aartiStartTime.setHours(hours, minutes, 0, 0)
    const aartiEndTime = new Date(aartiStartTime.getTime() + 30 * 60000) // 30 minutes later
    return currentTime.value >= aartiStartTime && currentTime.value <= aartiEndTime
  }

  const isAartiUpcoming = (aartiTime) => {
    const [hours, minutes] = aartiTime.split(':').map(Number)
    const aartiStartTime = new Date()
    aartiStartTime.setHours(hours, minutes, 0, 0)
    return currentTime.value < aartiStartTime && (aartiStartTime - currentTime.value) <= 30 * 60000 // Within next 30 minutes
  }

  const formatTime = (time) => {
    const [hours, minutes] = time.split(':').map(Number)
    const date = new Date()
    date.setHours(hours, minutes)
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
  }
  </script>