<template>
  <div class="hero-container">
    <div class="content">
      <div class="texts">
        <p class="welcome">Welcome</p>
        <h2>
          I have
          <span style="color: #0db760"
            >Creative <br />
            design
          </span>
          experience
        </h2>
        <p>
          I’m Tanvir, a creative Product Designer. I’ve been helping businesses<br />
          to solve their problems with my design for 2 years.
        </p>
        <div>
          <button><RouterLink to="/cv"> Download CV</RouterLink></button>
        </div>
      </div>
      <div class="image">
        <img src="../assets/Personal Portfolio Design.svg" alt="hero-img" width="350px" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero-container {
  padding: 0 20px;
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
}
h2 {
  font-size: 50px;
  margin: 0px;
}
.image {
  background-color: #0db760;
}
.welcome {
  color: #0db760;
  border: #0db760 1px solid;
  width: fit-content;
  padding: 7px 5px;
  border-radius: 100%;
}
</style>
