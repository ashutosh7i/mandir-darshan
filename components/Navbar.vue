<template>
  <header class="border-b px-4 py-3 flex items-center justify-between">
    <h1 class="text-lg font-semibold flex-shrink-0" @click="redirect('/')">🛕{{ $t('mandirDarshan') }}✨</h1>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex items-center gap-4">
      <Button variant="ghost" class="text-sm" @click="handleQuickDarshan">
        {{ $t('startQuickDarshan') }}
      </Button>
      <div class="flex items-center gap-2">
        <Button variant="ghost" class="text-sm" @click="handleAddMoreTemples">➕{{ $t('addMoreTemples') }}</Button>
        <span>|</span>
        <Button variant="ghost" class="text-sm" @click="redirect('/about')">🤔{{ $t('about') }}</Button>
        <span>|</span>
        <Button variant="ghost" class="text-sm" @click="redirect('https://github.com/ashutosh7i')">📞{{ $t('contact') }}</Button>
        <LanguageSwitcher />
      </div>
    </nav>

    <!-- Mobile Navigation -->
    <div class="flex items-center gap-4 md:hidden">
      <LanguageSwitcher />
      <button @click="toggleMenu" class="text-xl">☰</button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="menuOpen" class="absolute top-12 left-0 w-full bg-white shadow-md p-4 z-50 md:hidden">
      <ul class="space-y-2">
        <li><Button variant="ghost" class="w-full text-left" @click="handleQuickDarshan">{{ $t('startQuickDarshan') }}</Button></li>
        <li><Button variant="ghost" class="w-full text-left" @click="handleAddMoreTemples">➕{{ $t('addMoreTemples') }}</Button></li>
        <li><Button variant="ghost" class="w-full text-left" @click="redirect('/about')">🤔{{ $t('about') }}</Button></li>
        <li><Button variant="ghost" class="w-full text-left" @click="redirect('https://ashutosh7i.dev')">📞{{ $t('contact') }}</Button></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const handleQuickDarshan = () => {
  alert('Kindly wait, this feature will be added soon 🙏 इस सुविधा को जल्द ही जोड़ा जाएगा 🙏');
};

const handleAddMoreTemples = () => {
  alert('Kindly wait, this feature will be added soon 🙏 इस सुविधा को जल्द ही जोड़ा जाएगा 🙏');
};

const redirect = (path) => {
  window.location.href = path;
};
</script>
