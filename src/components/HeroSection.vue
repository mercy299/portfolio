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
          <button><RouterLink to="/cv"> Contact Me</RouterLink></button>
        </div>
      </div>
      <div class="image">
        <div class="green-overlay"></div>
        <img src="../assets/Personal Portfolio Design.svg" alt="hero-img" />
        <div class="black-border"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero-container {
  padding: 0 20px;
}
.image {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.black-border {
  position: absolute;
  width: 390px;
  height: 390px;
  top: 119px;
  right: 55px; /* Ensure it starts at the left */
  border: 5px solid #000000;
  border-radius: 2px;
  pointer-events: none; /* Ensure the border doesn't interfere with clicks */
  z-index: 1;
}
.image img {
  width: 380px;
  z-index: 2;
}
.green-overlay {
  position: absolute;
  background-color: #0db760;
  width: 380px;
  height: 370px;
  z-index: 1;
  top: 100px;
  border-radius: 2px;
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
.image img {
  /* background-color: #0db760; */
  width: 380px;
}
.welcome {
  color: #0db760;
  border: #0db760 1px solid;
  width: fit-content;
  padding: 7px 5px;
  border-radius: 100%;
}

@media (width: 1173px) {
  .black-border {
    position: absolute;
    width: 401px;
    height: 401px;
    left: 914px;
    top: 200px;

    border: 5px solid #000000;
    border-radius: 2px;
  }
}
@media (max-width: 960px) {
  .content {
    display: flex;
    justify-content: space-between;
    font-family: var(--font-family);
    max-width: var(--max-content-width);
    margin: auto;
    flex-direction: column;
  }
  .black-border {
    position: absolute;
    width: 390px;
    height: 390px;
    top: 119px;
    right: 220px;
    border: 5px solid #000000;
    border-radius: 2px;
    pointer-events: none;
    z-index: 1;
  }
  .texts {
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>
