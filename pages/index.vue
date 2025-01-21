<template>
  <div class="min-h-screen bg-background">
    <main class="container mx-auto p-4">
      <div class="text-center mb-4">
        <h2 class="text-xl font-medium">{{ $t(currentTemple.name) }}</h2>
      </div>

      <div class="flex flex-col lg:grid lg:grid-cols-12 gap-6">
        <!-- Temple Info -->
        <div class="order-3 mt-4 lg:mt-0 lg:col-span-3 lg:order-1">
          <div class="space-y-4">
            <div>
              <h3 class="font-semibold mb-2">{{ $t('templeInfo') }}</h3>
              <p class="text-sm">{{ currentTemple.templeInfo.description.slice(0, 800) }}{{
                currentTemple.templeInfo.description.length > 800 ? '...' : '' }}</p>
            </div>
            <div>
              <h3 class="font-semibold mb-2">{{ $t('templeInfo') }}</h3>
              <p class="text-sm">{{ currentTemple.templeInfo.additionalInfo }}</p>
            </div>
          </div>
        </div>

        <!-- Live Feed -->
        <div class="order-1 lg:col-span-6 lg:order-2">
          <div class="aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <template v-if="currentTemple.video">
              <video :src="currentTemple.liveUrl" class="w-full h-full" autoplay muted loop playsinline></video>
            </template>
            <template v-else>
              <iframe :src="`${currentTemple.liveUrl}?autoplay=1&mute=1&loop=1`" class="w-full h-full"
                title="Youtube Video" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            </template>
          </div>
        </div>

        <!-- Aarti Times and Website -->
        <div class="order-4 mt-4 lg:mt-0 lg:col-span-3 lg:order-3">
          <div class="space-y-4">
            <div>
              <h3 class="font-semibold mb-2">{{ $t('aartiTimes') }}</h3>
              <ul class="space-y-1">
                <li v-for="time in currentTemple.aartiTimings" :key="time">
                  {{ time }}
                </li>
              </ul>
            </div>
            <div>
              <h3 class="font-semibold">Official website</h3>
              <a :href="currentTemple.templeInfo.officialWebsite" class="text-primary hover:underline" target="_blank"
                rel="noopener noreferrer">
                {{currentTemple.templeInfo.officialWebsite}}
              </a>
            </div>
          </div>
        </div>

        <!-- Temple Carousel -->
        <div class="order-2 mt-4 lg:mt-8 lg:col-span-12 lg:order-4">
          <TempleCarousel @templeChange="handleTempleChange" />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Button } from '@/components/ui/button'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-vue-next'
import { getStreamForChannel } from '@/utils/Parser.js'
const { setLocale } = useI18n()
import templeData from '@/lib/data.json'
import TempleCarousel from '@/components/TempleCarousel.vue'

const temples = ref(templeData)
const currentIndex = ref(0)
const currentTemple = ref(temples.value[currentIndex.value])

const fetchLiveUrls = async () => {
  const liveTemples = temples.value.filter(temple => temple.live)
  const channels = liveTemples.map(temple => ({
    channelId: temple.streamInfo.channelId,
    title: temple.streamInfo.title
  }))
  const apiKey = 'AIzaSyACzmNkYHvGJQNilWXq0I9pIOaVdGFJ3D4' // Replace with your actual API key
  const streams = await getStreamForChannel(channels, apiKey)
  streams.forEach((stream, index) => {
    if (stream) {
      liveTemples[index].liveUrl = `https://www.youtube.com/embed/${stream.id.videoId}`
    }
  })
}

onMounted(async () => {
  await fetchLiveUrls()
  currentTemple.value = temples.value[currentIndex.value]
})

const nextTemple = () => {
  currentIndex.value = (currentIndex.value + 1) % temples.value.length
  currentTemple.value = temples.value[currentIndex.value]
}

const previousTemple = () => {
  currentIndex.value = currentIndex.value === 0
    ? temples.value.length - 1
    : currentIndex.value - 1
  currentTemple.value = temples.value[currentIndex.value]
}

const handleTempleChange = (temple) => {
  currentTemple.value = temple
}

const getTempleAtOffset = (offset) => {
  const targetIndex = (currentIndex.value + offset + temples.value.length) % temples.value.length
  return temples.value[targetIndex]
}
</script>