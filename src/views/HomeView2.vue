<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import AppSkills from '@/components/AppSkills.vue';
import AppExperience from '@/components/AppExperience.vue';
import AppAboutMe from '@/components/AppAboutMe.vue';
import AppProjects from '@/components/AppProjects.vue';
import AppBlog from '@/components/AppBlog.vue';
import AppContact from '@/components/AppContact.vue';
</script>

<template>
  <div class="main-container">
    <HeroSection />
    <AppSkills />
    <AppExperience />
    <AppAboutMe />
    <AppProjects />
    <AppBlog />
    <AppContact />
  </div>
</template>

<style scoped>
.main-container {
  overflow: hidden;
}
</style>
