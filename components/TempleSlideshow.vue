<template>
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Explore Temples</h2>
      <div class="flex space-x-4 overflow-x-auto pb-4">
        <Button
          v-for="temple in temples"
          :key="temple.id"
          variant="outline"
          @click="$emit('change-temple', temple)"
        >
          {{ temple.name }}
        </Button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { Button } from '@/components/ui/button'
  import templeData from '../lib/data.json'
  
  const temples = templeData
  </script>