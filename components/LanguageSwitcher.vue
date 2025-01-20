<template>
    <div class="relative" ref="dropdownRef">
      <button
        @click="toggleDropdown"
        class="flex items-center space-x-1 px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200"
      >
        <span>{{ currentLocale === 'en' ? '🌐' : '🇮🇳' }}</span>
        <span>{{ currentLocale.toUpperCase() }}</span>
      </button>
  
      <div
        v-if="isOpen"
        class="absolute top-full mt-2 w-24 bg-white rounded-md shadow-lg"
      >
        <NuxtLink
          v-for="locale in availableLocales"
          :key="locale"
          :to="switchLocalePath(locale)"
          class="block px-4 py-2 hover:bg-gray-100"
          @click="isOpen = false"
        >
          {{ locale === 'en' ? '🌐 EN' : '🇮🇳 HI' }}
        </NuxtLink>
      </div>
    </div>
  </template>
  
  <script setup>
import { onClickOutside } from '@vueuse/core'
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const currentLocale = computed(() => locale.value)
const availableLocales = computed(() => (locales.value).filter(i => i !== locale.value))

const isOpen = ref(false)
const dropdownRef = ref(null)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

onClickOutside(dropdownRef, () => {
  isOpen.value = false
})
</script>