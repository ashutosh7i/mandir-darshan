<!-- <template>
  <div class="relative">
    <swiper
      :effect="'coverflow'"
      :centeredSlides="true"
      :slidesPerView="'5'"
      :coverflowEffect="{
        rotate: 15,
        stretch: -20,
        depth: 100,
        modifier: 1,
        scale: 0.9,
        slideShadows: true,
      }"
      :navigation="{
        nextEl: '.next-button',
        prevEl: '.prev-button',
      }"
      :slideToClickedSlide="true"
      :modules="modules"
      :loop="true"
      class="py-8 max-w-5xl mx-auto"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide 
        v-for="(temple, index) in temples" 
        :key="index"
        class="w-[200px] md:w-[250px]"
      >
        <div class="relative">
          <img 
            :src="`/images/${temple.templeInfo.image}`" 
            :alt="temple.name" 
            class="w-full h-[200px] md:h-[250px] object-cover rounded-lg"
          />
          <div class="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-center text-sm rounded-b-lg">
            {{ $t(temple.name) }}
          </div>
        </div>
      </swiper-slide>
      
      <Button class="prev-button absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full w-10 h-10 p-5 bg-white text-black border-orange-500 border-4 hover:bg-white hover:text-black">
        <ChevronLeftIcon class="h-6 w-6" />
      </Button>
      <Button class="next-button absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full w-10 h-10 p-5 bg-white text-black border-orange-500 border-4 hover:bg-white hover:text-black">
        <ChevronRightIcon class="h-6 w-6" />
      </Button>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import { Button } from '@/components/ui/button'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-vue-next'
import templeData from '@/lib/data.json'
import { ref } from 'vue'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const temples = ref(templeData)
const modules = [EffectCoverflow, Pagination, Navigation]

const emit = defineEmits(['templeChange'])

const onSwiper = (swiper) => {
  // Swiper instance initialization
}

const onSlideChange = (swiper) => {
  emit('templeChange', temples.value[swiper.realIndex])
}
</script> -->


<template>
  <div class="relative">
    <swiper
      :effect="'coverflow'"
      :centeredSlides="true"
      :slidesPerView="slidesPerView"
      :coverflowEffect="{
        rotate: 15,
        stretch: -20,
        depth: 100,
        modifier: 1,
        scale: 0.9,
        slideShadows: true,
      }"
      :navigation="{
        nextEl: '.next-button',
        prevEl: '.prev-button',
      }"
      :slideToClickedSlide="true"
      :modules="modules"
      :loop="true"
      class="py-8 max-w-5xl mx-auto"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide 
        v-for="(temple, index) in temples" 
        :key="index"
        class="w-[150px] md:w-[250px]"
      >
        <div class="relative">
          <img 
          :src="`http://localhost:5000/api/images/${temple.templeInfo.image}`" 
            :alt="temple.name" 
            class="w-full h-[200px] md:h-[250px] object-cover rounded-lg"
            
          />
          <div class="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-center text-sm rounded-b-lg">
            {{ $t(temple.name) }}
          </div>
        </div>
      </swiper-slide>

      <Button class="prev-button absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full w-10 h-10 p-5 bg-white text-black border-orange-500 border-4 hover:bg-white hover:text-black">
        <ChevronLeftIcon class="h-6 w-6" />
      </Button>
      <Button class="next-button absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full w-10 h-10 p-5 bg-white text-black border-orange-500 border-4 hover:bg-white hover:text-black">
        <ChevronRightIcon class="h-6 w-6" />
      </Button>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Button } from '@/components/ui/button';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-vue-next';
import { ref, onMounted, watch } from 'vue';
import { useDataStore } from '@/store/data';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const dataStore = useDataStore();
const temples = ref([]);

watch(() => dataStore.data, (newData) => {
  temples.value = newData;
}, { immediate: true });

const modules = [EffectCoverflow, Pagination, Navigation];

const slidesPerView = ref(5);

const updateSlidesPerView = () => {
  slidesPerView.value = window.innerWidth < 768 ? 3 : 5;
};

onMounted(() => {
  updateSlidesPerView();
  window.addEventListener('resize', updateSlidesPerView);
});

watch(() => window.innerWidth, updateSlidesPerView);

const emit = defineEmits(['templeChange']);

const onSwiper = (swiper) => {
  // Swiper instance initialization
};

const onSlideChange = (swiper) => {
  emit('templeChange', temples.value[swiper.realIndex]);
};
</script>