import { Navbar } from '../.nuxt/components';
<template>
  <div>
    <!-- Navbar -->
    <Navbar />

    <!-- Page Content -->
    <slot />

    <!-- Footer -->
    <Footer />
  </div>
</template>
