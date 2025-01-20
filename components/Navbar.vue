<template>
   <header class="border-b px-6 py-4 flex items-center justify-between">
      <h1 class="text-xl font-semibold" @click="redirect('/')">🛕{{ $t('mandirDarshan') }}✨</h1>
      <div class="flex items-center gap-4">
        <Button variant="ghost" class="text-sm" @click="handleQuickDarshan">
          {{ $t('startQuickDarshan') }}
        </Button>
        <div class="flex items-center gap-2">
          <Button variant="ghost" class="text-sm" >➕{{ $t('addMoreTemples') }}</Button>
          <span>|</span>
          <Button variant="ghost" class="text-sm" @click="redirect('/about')">🤔{{ $t('about') }}</Button>
          <span>|</span>
          <Button variant="ghost" class="text-sm" @click="redirect('https://github.com/ashutosh7i')">📞{{ $t('contact') }}</Button>
          <LanguageSwitcher />
        </div>
      </div>
      
    </header>
    
</template>


<script setup>
const { setLocale } = useI18n()

const handleQuickDarshan = () => {
  // Add quick darshan logic
}

const redirect = (path) => {
  window.location.href = path;
}


</script>
