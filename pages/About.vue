<template>
    <div class="container mx-auto px-4 py-8">
      <Card class="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle class="text-3xl font-bold text-center">{{  locale === 'hi' ? 'मंदिर दर्शन के बारे में 🙏' : 'About Mandir Darshan 🙏' }}</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="space-y-6">
            <p v-if=" locale === 'hi'">
              मंदिर दर्शन में आपका स्वागत है। यह एक व्यक्तिगत प्रोजेक्ट है, और मैं इससे कोई लाभ या धन कमाना नहीं चाहता हूं। मेरा ऐसा कोई इरादा नहीं है। मैंने इसे भगवान जी के दर्शन की अपनी इच्छा को पूरा करने के लिए बनाया है।
            </p>
            <p v-else>
              Welcome to Mandir Darshan, this is a personal project, and I do not want to make any profit or money from it, I have no such intention behind it. I made it to solve my urge to see bhagwan ji often.
            </p>
            
            <h2 class="text-2xl font-semibold">{{  locale === 'hi' ? 'विचार ✨' : 'The Idea ✨' }}</h2>
            <p v-if=" locale === 'hi'">
              मंदिर दर्शन का विचार मुझे तब आया जब मैं शारीरिक रूप से मंदिरों में उतनी बार नहीं जा पा रहा था जितना मैं चाहता था। मैंने महसूस किया कि हमारी तेज़ गति वाली दुनिया में, कई लोग ऐसी ही चुनौतियों का सामना करते हैं। इससे मैंने एक डिजिटल स्थान की कल्पना की जहां कोई भी अपनी स्थिति या समय की सीमाओं की परवाह किए बिना मंदिर के दर्शन की शांति और आध्यात्मिक जुड़ाव का अनुभव कर सके।
            </p>
            <p v-else>
              The concept for Mandir Darshan came to me during a time when I couldn't physically visit temples as often as I wished. I realized that in our fast-paced world, many people face similar challenges. This led me to envision a digital space where anyone could experience the peace and spiritual connection of temple visits, regardless of their location or time constraints.
            </p>
            
            <h2 class="text-2xl font-semibold">{{  locale === 'hi' ? 'मुख्य विशेषताएं 🌟' : 'Key Features 🌟' }}</h2>
            <ul class="list-disc pl-6 space-y-2">
              <li v-if=" locale === 'hi'"><strong>लाइव दर्शन:</strong> भारत भर के कई मंदिरों से सीधा प्रसारण का अनुभव करें।</li>
              <li v-else><strong>Live Darshan:</strong> Experience real-time video feeds from multiple temples across India.</li>
              
              <li v-if=" locale === 'hi'"><strong>मंदिर जानकारी:</strong> प्रत्येक मंदिर के इतिहास, महत्व और आरती के समय की विस्तृत जानकारी प्राप्त करें।</li>
              <li v-else><strong>Temple Information:</strong> Access detailed information about each temple's history, significance, and aarti timings.</li>
              
              <li v-if=" locale === 'hi'"><strong>त्वरित दर्शन:</strong> एक अनूठी सुविधा जो आपको क्रमिक रूप से कई मंदिरों का चयनित अनुभव प्रदान करती है। [निर्माणाधीन]</li>
              <li v-else><strong>Quick Darshan:</strong> A unique feature that allows you to have a curated experience of multiple temples in succession.[in progress]</li>
              
              <li v-if=" locale === 'hi'"><strong>सामुदायिक योगदान:</strong> उपयोगकर्ता हमारे प्लेटफॉर्म में नए मंदिरों को जोड़ने का सुझाव दे सकते हैं।</li>
              <li v-else><strong>Community Contributions:</strong> Users can suggest new temples to be added to our platform, fostering a growing community of virtual pilgrims.</li>
            </ul>
            
            <h2 class="text-2xl font-semibold">{{  locale === 'hi' ? 'एक गैर-लाभकारी पहल 🕊️' : 'A Non-Profit Initiative 🕊️' }}</h2>
            <p v-if=" locale === 'hi'">
              मंदिर दर्शन एक गैर-लाभकारी पहल है। हालांकि मैंने इसे शुरू में व्यक्तिगत उपयोग के लिए बनाया था, मुझे इसकी क्षमता एक बड़े दर्शक वर्ग को लाभान्वित करने की समझ में आई। इसे मुफ्त में उपलब्ध कराकर, मैं इस आध्यात्मिक यात्रा को हर उस व्यक्ति के साथ साझा करना चाहता हूं जो इसे चाहता है।
            </p>
            <p v-else>
              Mandir Darshan is a non-profit initiative. While I initially created it for personal use, I realized its potential to benefit a wider audience. By making it freely accessible, I hope to share this spiritual journey with everyone who seeks it.
            </p>
            
            <h2 class="text-2xl font-semibold">{{  locale === 'hi' ? 'भविष्य की दृष्टि 🌅' : 'Vision for the Future 🌅' }}</h2>
            <p v-if=" locale === 'hi'">
              मेरी एकमात्र दृष्टि इस अद्भुत चीज को समान विचारधारा वाले लोगों के साथ साझा करना था। यदि आपको यह पसंद आया, तो मानवता के लिए ऐसा कुछ करने का प्रयास करें, लोगों का जीवन आसान बनाने के लिए। इससे आप खुद को, भगवान को और मुझे, सभी को खुश करेंगे।
            </p>
            <p v-else>
              my only vision was to share this awesome thing with like minded people, if you liked it, try to do something like this for mankind, to make peoples life easier, by this you will make yourself, God and me, all happy.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  </template>
  
  <script setup lang="ts">
  import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
  import { ref, onMounted } from 'vue'
  import { useI18n } from 'vue-i18n';


  const { locale } = useI18n();
  const isHindi = ref(false)

  onMounted(() => {
    isHindi.value = navigator.language.startsWith('hi')
  })
  </script>