<template>
  <div class="portfolio-container">
    <div class="content">
      <div class="portfolio-intro">
        <p class="welcome">Portfolio</p>
        <h2>
          My creative Works <br />
          <span style="color: #0db760">Latest Projects </span>
        </h2>
        <p>I have selected and mentioned here some of my latest projects to share with you.</p>
        <div>
          <button><RouterLink to="/cv"> Show More</RouterLink></button>
        </div>
      </div>

      <!-- Works Carousel Section -->
      <div class="works-carousel">
        <ImageCarousel />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageCarousel from '@/components/ImageCarousel.vue'
</script>

<style scoped>
.portfolio-container {
  padding: 0 20px;
  margin: 50px 0;
}

.welcome {
  color: #0db760;
  border: #0db760 1px solid;
  width: fit-content;
  padding: 7px 5px;
  border-radius: 100%;
}

button {
  border: 1px solid #0db760;
  text-align: center;
  padding: 15px 26px;
  border-radius: 10px;
  background-color: #0db760;
}

a {
  text-decoration: none;
  color: white;
}

.content {
  display: flex;
  justify-content: space-between;
  font-family: var(--font-family);
  max-width: var(--max-content-width);
  margin: auto;
  align-content: center;
}

.portfolio-intro {
  flex: 1;
}

.works-carousel {
  flex: 1; /* Carousel takes equal space */
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 960px) {
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: var(--font-family);
    max-width: var(--max-content-width);
    margin: auto;
    align-content: center;
  }

  p {
    font-size: 22px;
  }
  .portfolio-intro {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
}
</style>
