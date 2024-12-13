<template>
  <div class="skills-container">
    <div class="content">
      <div class="portfolio-intro">
        <p class="welcome">Portfolio</p>
        <h2>
          My creative Works <br />
          <span style="color: #0db760">Latest Projects </span>
        </h2>
        <p>
          I’m specialist in UI/UX Design. My passion is designing & solving <br />problems through
          user experience and research.
        </p>
        <div>
          <button><RouterLink to="/cv"> Show More</RouterLink></button>
        </div>
      </div>

      <div class="works-carousel">
        <!-- <PortfolioCarousel /> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.skills-container {
  padding: 0 20px;
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
</style>
