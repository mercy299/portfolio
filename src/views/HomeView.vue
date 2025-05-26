<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import Review from '@/components/Review.vue'
import Services from '@/components/Services.vue'
import Skills from '@/components/Skills.vue'
import Blog from '@/components/Blog.vue'
// import CustomerReview from '@/components/Customer-Review.vue'
import Contact from '@/components/Contact.vue'
</script>

<template>
  <main>
    <HeroSection  />
    <Review id="review"/>
    <Services  id="services"/>
    <Skills  id="skills"/>
    <Blog  id="blog"/>
    <!-- <CustomerReview  id="custormerreview"/> -->
    <Contact id="contact"/>
  </main>
</template>

<style scoped>


</style>
