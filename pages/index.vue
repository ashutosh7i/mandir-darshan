<script setup>
import { ref, onMounted, watch } from 'vue';
import { useDataStore } from '@/store/data';
import TempleCarousel from '@/components/TempleCarousel.vue';
import LoaderComponent from '@/components/LoaderComponent.vue';
import WelcomeCard from '~/components/WelcomeCard.vue';
import { useI18n } from 'vue-i18n';

const dataStore = useDataStore();
const currentIndex = ref(0);
const currentTemple = ref(null);
const { locale } = useI18n();
const showWelcomeCard = ref(true);

onMounted(async () => {
  await dataStore.fetchData();
});

watch(() => dataStore.data, (newData) => {
  if (newData.length > 0 && !currentTemple.value) {
    currentTemple.value = newData[0];
  }
}, { immediate: true });

const handleTempleChange = (temple) => {
  currentTemple.value = temple;
};
</script>

<template>
  <div class="min-h-screen bg-background">
    <LoaderComponent v-if="dataStore.loading || !currentTemple" />
    <main v-else-if="currentTemple" class="container mx-auto p-4">
      <div v-if="showWelcomeCard" class="backdrop">
        <WelcomeCard class="floating-card" @close="showWelcomeCard = false" />
      </div>
      <div class="text-center mb-4">
        <h2 class="text-2xl font-medium">{{ $t(currentTemple.name) }} {{ currentTemple.live ? '(LIVE)' : '' }}</h2>
      </div>

      <div class="flex flex-col lg:grid lg:grid-cols-12 gap-6">

        <!-- Temple Info -->
        <div class="order-3 mt-4 lg:mt-0 lg:col-span-3 lg:order-1">
          <div class="space-y-4">
            <div>
              <h3 class="font-semibold mb-2">{{ $t('templeInfo') }}</h3>
              <p class="text-sm">
                {{ locale === 'hi' ? currentTemple.templeInfo.hi.slice(0, 800) : currentTemple.templeInfo.description.slice(0, 800) }}
                {{ (locale === 'hi' ? currentTemple.templeInfo.hi.length : currentTemple.templeInfo.description.length) > 800 ? '...' : '' }}
              </p>
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
              <iframe
                :src="`${currentTemple.liveUrl}?autoplay=1&mute=1&loop=1`"
                class="w-full h-full"
                title="Youtube Video"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </template>
          </div>
        </div>

        <!-- Aarti Times and Website -->
        <div class="order-4 mt-4 lg:mt-0 lg:col-span-3 lg:order-3">
          <AartiTimes :temple="currentTemple" />
  
            
          
        </div>

        <!-- Temple Carousel -->
        <div class="order-2 mt-4 lg:mt-8 lg:col-span-12 lg:order-4">
          <TempleCarousel @templeChange="handleTempleChange" />
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.floating-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>