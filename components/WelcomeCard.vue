<template>
  <div v-if="isVisible" class="w-full max-w-3xl mx-auto mt-10 p-4 sm:p-6">
    <Card class="border-4 border-orange-500 relative">
      <Button 
        variant="ghost" 
        size="icon"
        class="absolute top-2 right-2"
        @click="toggleLanguage"
      >
        <Languages :size="20" />
        <span class="ml-1 text-xs">{{ content[language].switchLanguage }}</span>
      </Button>
      <CardContent class="pt-6">
        <h1 class="text-3xl sm:text-4xl font-bold mb-4 text-center" style="font-family: 'Noto Sans Devanagari', sans-serif">
          {{ content[language].title }}
        </h1>
        <p class="text-base sm:text-lg mb-6 text-center">
          {{ content[language].description }}
        </p>
        <ul class="space-y-2 text-sm text-gray-600 mb-6">
          <li v-for="(instruction, index) in content[language].instructions" :key="index" class="flex items-center space-x-2">
            <ArrowRight :size="16" />
            <span>{{ instruction }}</span>
          </li>
        </ul>
      </CardContent>
      <CardFooter class="flex justify-center">
        <Button @click="closeCard" class="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white">
          <span>✨{{ content[language].continue }}🙏</span>
          
        </Button>
      </CardFooter>
    </Card>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import { ArrowRight, Languages, X } from 'lucide-vue-next'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const emit = defineEmits(['close'])

const language = ref('hi')
const isVisible = ref(true)

const content = {
  hi: {
    title: "मंदिर दर्शन (LIVE)",
    description: "प्रणाम🙏 मंदिर दर्शन का विचार मुझे तब आया जब मैं शारीरिक रूप से मंदिरों में उतनी बार नहीं जा पा रहा था जितना मैं चाहता था। मैंने महसूस किया कि हमारी तेज़ गति वाली दुनिया में, कई लोग ऐसी ही चुनौतियों का सामना करते हैं। इससे मैंने एक डिजिटल स्थान की कल्पना की जहां कोई भी अपनी स्थिति या समय की परवाह किए बिना मंदिर के LIVE दर्शन कर सके। 🛕✨✨",
    instructions: [
      "नेविगेट करने के लिए ⬅️➡️ का उपयोग करें।",
      "भाषा बदलने के लिए 'hi' या 'en' दबाएं।"
    ],
    switchLanguage: "EN",
    continue: "जारी रखें"
  },
  en: {
    title: "Mandir Darshan (LIVE)",
    description: "Pranam🙏 The idea of Mandir Darshan came when physically visiting temples became challenging. It's a digital space where you can experience the peace of LIVE temple darshan from anywhere. 🛕✨✨",
    instructions: [
      "Use arrows to navigate.",
      "Press 'hi' or 'en' to switch languages."
    ],
    switchLanguage: "हिं",
    continue: "Continue"
  }
}

const toggleLanguage = () => {
  language.value = language.value === 'hi' ? 'en' : 'hi'
}

const closeCard = () => {
  isVisible.value = false
  // Emit close event to parent component
  emit('close')
}
</script>