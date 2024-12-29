<template>
  <div class="carousel-container">
    <div class="carousel" ref="carousel">
      <!-- Image Slides -->
      <div
        v-for="(image, index) in images"
        :key="index"
        class="carousel-slide"
        :class="{ active: index === currentIndex }"
        :style="getSlideStyle(index)"
      >
        <img :src="image" alt="Slide Image" class="carousel-image" />
      </div>
    </div>

    <!-- Navigation Buttons -->
    <button @click="prevSlide" class="nav-button left-arrow">&larr;</button>
    <button @click="nextSlide" class="nav-button right-arrow">&rarr;</button>
  </div>
</template>

<script setup>
// Import local images
import img1 from '../assets/Personal Portfolio Design.svg'
import img2 from '../assets/Personal Portfolio Design.svg'
import img3 from '../assets/Personal Portfolio Design.svg'
import img4 from '../assets/Personal Portfolio Design.svg'
import img5 from '../assets/Personal Portfolio Design.svg'

import { ref, onMounted, nextTick } from 'vue'

// Array of images
const images = [img1, img2, img3, img4, img5]

// Reactive state for current index
const currentIndex = ref(0)

// Function to calculate the style for each slide based on its position
const getSlideStyle = (index) => {
  return index === currentIndex.value
    ? { flex: '0 0 40%', opacity: 1, transform: 'scale(1)' } // Active slide
    : { flex: '0 0 30%', opacity: 0.5, transform: 'scale(0.9)' } // Inactive slides
}

// Navigate to the previous slide
const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
  scrollToItem(currentIndex.value)
}

// Navigate to the next slide
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
  scrollToItem(currentIndex.value)
}

// Function to scroll to the active item and center it
const scrollToItem = (index) => {
  nextTick(() => {
    const carousel = $refs.carousel
    const slides = carousel.querySelectorAll('.carousel-slide')
    const activeSlide = slides[index]
    const offset = activeSlide.offsetLeft - (carousel.offsetWidth - activeSlide.offsetWidth) / 2
    carousel.scrollLeft = offset
  })
}

// Scroll to the active item when the component is mounted
onMounted(() => {
  scrollToItem(currentIndex.value)
})
</script>

<style scoped>
/* Carousel Container */
.carousel-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1000px; /* Wider container */
  height: 400px;
  overflow: hidden;
}

/* Slide Container */
.carousel {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  scroll-behavior: smooth;
  overflow-x: auto;
}

/* Individual Slides */
.carousel-slide {
  transition: all 0.5s ease;
}

/* Slide Image Styling */
.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

/* Navigation Buttons */
.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
}

.left-arrow {
  left: 10px;
}

.right-arrow {
  right: 10px;
}

.nav-button:hover {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
