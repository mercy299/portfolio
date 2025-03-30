<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import Review from '@/components/Review.vue'
import Services from '@/components/Services.vue'
import Skills from '@/components/Skills.vue'
// import Portfolio from '@/components/Portfolio.vue'
import CustomerReview from '@/components/Customer-Review.vue'
import Contact from '@/components/Contact.vue'
</script>

<template>
  <main>
    <HeroSection  />
    <Review id="review"/>
    <Services  id="skills"/>
    <Skills  id="skills"/>
    <!-- <Portfolio  id="portfolio"/> -->
    <CustomerReview  id="custormerreview"/>
    <Contact id="contact"/>
  </main>
</template>

<style scoped>


</style>
