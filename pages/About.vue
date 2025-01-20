<template>
    <div class="container mx-auto px-4 py-8">
      <Card class="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle class="text-3xl font-bold text-center">About Mandir Darshan</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="space-y-6">
            <p>
              Welcome to Mandir Darshan, a personal project born from a deep appreciation for India's spiritual heritage. As a solo developer, I created this platform to bring the divine experience of temple visits directly to your screen, allowing devotees and curious minds alike to connect with India's rich spiritual tradition from anywhere in the world.
            </p>
            
            <h2 class="text-2xl font-semibold">The Idea</h2>
            <p>
              The concept for Mandir Darshan came to me during a time when I couldn't physically visit temples as often as I wished. I realized that in our fast-paced world, many people face similar challenges. This led me to envision a digital space where anyone could experience the peace and spiritual connection of temple visits, regardless of their location or time constraints.
            </p>
            
            <h2 class="text-2xl font-semibold">Key Features</h2>
            <ul class="list-disc pl-6 space-y-2">
              <li><strong>Live Darshan:</strong> Experience real-time video feeds from multiple temples across India.</li>
              <li><strong>Temple Information:</strong> Access detailed information about each temple's history, significance, and aarti timings.</li>
              <li><strong>Quick Darshan:</strong> A unique feature that allows you to have a curated experience of multiple temples in succession.</li>
              <li><strong>Community Contributions:</strong> Users can suggest new temples to be added to our platform, fostering a growing community of virtual pilgrims.</li>
            </ul>
            
            <h2 class="text-2xl font-semibold">A Non-Profit Initiative</h2>
            <p>
              Mandir Darshan is a non-profit initiative. While I initially created it for personal use, I realized its potential to benefit a wider audience. By making it freely accessible, I hope to share this spiritual journey with everyone who seeks it.
            </p>
            
            <h2 class="text-2xl font-semibold">Vision for the Future</h2>
            <p>
              My vision for Mandir Darshan goes beyond being just a website – I see it as a digital pilgrimage that transcends geographical boundaries. As a solo developer, I'm committed to continually improving and expanding this platform. I hope to preserve and promote India's spiritual heritage, making it accessible to future generations and global audiences.
            </p>
            
            <h2 class="text-2xl font-semibold">Join This Sacred Journey</h2>
            <p>
              Whether you're a devout follower, a curious explorer of world cultures, or someone seeking a moment of peace in your busy day, I invite you to embark on this unique spiritual journey with Mandir Darshan. Together, let's celebrate the timeless beauty and profound wisdom of India's temples.
            </p>
            
            <p class="italic mt-8">
              Thank you for being a part of this personal project. Your support and engagement mean the world to me as I continue to develop and improve Mandir Darshan.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  </template>
  
  <script setup lang="ts">
  import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
  </script>