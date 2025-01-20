<template>
  <QuickDarshan />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import QuickDarshan from '~/public/images/QuickDarshanloigc.vue'

const currentTemple = ref({
    name: 'Shri Kashi Vishwanath Temple',
    liveUrl: 'https://example.com/live-feed',
    aartiTimings: ['04:00', '11:30', '18:30'],
    templeInfo: {
        description: 'Shri Kashi Vishwanath Temple is one of the most famous Hindu temples dedicated to Lord Shiva. It is located in Varanasi, Uttar Pradesh.',
        additionalInfo: 'The temple is one of the twelve Jyotirlingas, the holiest of Shiva temples.',
        officialWebsite: 'https://www.shrikashivishwanath.org'
    }
})

const progress = ref(0)
const isPaused = ref(false)
const intervalId = ref(null)




const startProgress = () => {
    intervalId.value = setInterval(() => {
        if (!isPaused.value && progress.value < 100) {
            progress.value += 1
        }
        if (progress.value >= 100) {
            clearInterval(intervalId.value)
            // Here you would implement the logic to switch to the next temple
            progress.value = 0
            startProgress()
        }
    }, 100)
}

const togglePause = () => {
    isPaused.value = !isPaused.value
}

// Start the progress when component mounts
onMounted(() => {
    startProgress()
})
</script>