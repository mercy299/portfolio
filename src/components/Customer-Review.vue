<template>
  <div class="skills-container">
    <div class="content">
      <div class="texts">
        <p class="welcome">Reviews</p>
        <h2>Our customers say something</h2>
        <p>
          I’m specialist in UI/UX Designe. My passion is designing & solving <br />problems through
          user experience and research.
        </p>
        <div>
          <button><RouterLink to="/cv"> Hire Me</RouterLink></button>
        </div>
      </div>
      <div class="image">
        <div class="group">
          <img src="../assets/Diamond Outline.svg" />
          <h2>Visual Design</h2>
          <p>
            Create user interface design with<br />
            unique & modern ideas
          </p>
        </div>
        <div class="group">
          <img src="../assets/Pulse Outline.svg" />
          <h2>Design Prototype</h2>
          <p>
            Create advance design prototype<br />
            with Figma apps.
          </p>
        </div>
        <div class="group">
          <img src="../assets/School Outline.svg" />
          <h2>UX Research</h2>
          <p>Create digital user products with <br />updated ideas</p>
        </div>
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
}
</style>
