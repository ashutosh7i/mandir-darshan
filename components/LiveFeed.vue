<template>
    <div v-if="temple" class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">{{ temple.name }}</h2>
      <div class="aspect-video bg-gray-200 mb-4">
        <!-- Replace with actual live feed implementation -->
        <iframe :src="temple.liveUrl" class="w-full h-full" frameborder="0" allowfullscreen
        
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
        
        ></iframe>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 class="text-xl font-semibold mb-2">Aarti Times</h3>
          <ul>
            <li v-for="(time, index) in temple.aartiTimings" :key="index">{{ time }}</li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">Temple Info</h3>
          <p>{{ temple.templeInfo.history }}</p>
          <a :href="temple.templeInfo.officialWebsite" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Official Website</a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    temple: {
      type: Object,
      required: true
    }
  })
  </script>