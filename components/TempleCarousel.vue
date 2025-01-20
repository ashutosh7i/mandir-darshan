<template>
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
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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
    
    <div class="swiper-button-prev w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-gray-800"></div>
    <div class="swiper-button-next w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-gray-800"></div>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
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
</script>