<template>
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Suggest a Temple</h2>
      <div class="flex space-x-4">
        <Button @click="openEmailClient">Email Us</Button>
        <Button @click="openGitHubIssue">Create GitHub Issue</Button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { Button } from '@/components/ui/button'
  
  const openEmailClient = () => {
    window.location.href = 'mailto:your-email@example.com?subject=Suggest%20a%20Temple%20for%20Mandir%20Darshan'
  }
  
  const openGitHubIssue = () => {
    window.open('https://github.com/your-username/mandir-darshan/issues/new', '_blank')
  }
  </script>