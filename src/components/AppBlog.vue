<template>
  <div class="portfolio-container">
    <div class="content">

      <!-- Left: Introduction -->
      <div class="portfolio-intro">

        <p class="welcome">
          My <span>Blogs</span>
        </p>

        <h2>
          My Creative <br />
          Works
        </h2>

        <p class="description">
          I have selected and mentioned here some of my latest blog
          projects to share with you.
        </p>

        <a
          href="https://10xannie.hashnode.dev/"
          target="_blank"
          rel="noopener noreferrer"
          class="blog-btn"
        >
          Visit My Blog
        </a>

      </div>

      <!-- Right: Carousel -->
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
  padding: 80px 20px;
  margin: 0;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;

  font-family: var(--font-family);
  max-width: var(--max-content-width);
  margin: 0 auto;
}

/* LEFT SIDE */

.portfolio-intro {
  flex: 1;
  max-width: 500px;
}

.welcome {
  display: inline-block;

  font-size: 18px;
  font-weight: 400;

  margin: 0 0 25px;

  border: 1px solid black;
  border-radius: 50px;

  padding: 8px 18px;
}

.welcome span {
  font-weight: 800;
}

.portfolio-intro h2 {
  font-size: 56px;
  line-height: 1.1;
  font-weight: 600;

  margin: 0 0 25px;
}

.description {
  font-size: 18px;
  line-height: 1.7;

  max-width: 450px;

  margin: 0 0 30px;
}

/* BUTTON */

.blog-btn {
  display: inline-block;

  padding: 15px 26px;

  background-color: black;
  color: white;

  border: 1px solid black;
  border-radius: 10px;

  text-decoration: none;
  text-align: center;

  font-weight: 500;

  transition: all 0.3s ease;
}

.blog-btn:hover {
  background-color: white;
  color: black;

  transform: translateY(-2px);
}

/* RIGHT SIDE */

.works-carousel {
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 0;
}

/* TABLET */

@media (max-width: 960px) {
  .content {
    flex-direction: column;
    gap: 50px;
  }

  .portfolio-intro {
    max-width: 700px;

    display: flex;
    flex-direction: column;

    text-align: center;
    align-items: center;
  }

  .portfolio-intro h2 {
    font-size: 48px;
  }

  .description {
    font-size: 18px;
  }

  .works-carousel {
    width: 100%;
  }
}

/* MOBILE */

@media (max-width: 480px) {
  .portfolio-container {
    padding: 60px 16px;
  }

  .portfolio-intro h2 {
    font-size: 38px;
  }

  .welcome {
    font-size: 16px;
  }

  .description {
    font-size: 16px;
  }
}
</style>
