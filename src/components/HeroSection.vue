<template>
  <div class="hero-container">
    <div class="content">
      <div class="texts">
        <!-- <p class="welcome">Welcome</p> -->
        <h2>
          Hello, I'm <span class="black-text">Aniekeme</span>.
          <span class="black-text">
            DevOps
            <span class="outline-text">Engineer</span>
          </span>
          <br />
          Based in <span class="black-text">Nigeria</span>.
        </h2>
        <p class="bio-text">
          Results-driven Linux System Administrator and DevOps Engineer with a strong focus on
          automation, cloud infrastructure, and performance optimization. I thrive on building
          scalable systems and leveraging modern tools to drive innovation and efficiency.
        </p>
        <div class="social-links">
          <a href="https://github.com" target="_blank">
            <ProductIcon icon="Github" width="27px" />
          </a>

          <a href="https://linkedin.com" target="_blank">
            <ProductIcon icon="Linkedin" width="27px" />
          </a>

          <a href="https://twitter.com" target="_blank">
            <ProductIcon icon="Twitter" width="27px" />
          </a>

          <a href="mailto:hello@example.com" >
            <ProductIcon icon="Hashnode" width="27px" />
          </a>
        </div>
      </div>
      <div class="image">
        <GirlImage width="580px" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductIcon from './ProductIcon.vue'
import GirlImage from '../assets/images/girl.svg'
</script>

<style scoped>
.hero-container {
  padding: 0 20px;
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}
.texts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  gap: 10px;
}
.bio-text {
  font-size: 16px;
  line-height: 24px;
  color: #717171;
  font-weight: 300;
}

.image img {
  width: 100%;
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
  font-size: 48px;
  margin: 0px;
  font-weight: 400;
}

.image img {
  width: 380px;
}

.social-links {
  display: flex;
  gap: 16px;
}

.social-links a {
  width: 56px;
  height: 56px;
  border: 2px solid black;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: 0.3s;
  color: black;
}

.social-links a:hover {
  background: black;
  color: #ffffff;
  /* border-color: white; */
}

.black-text {
  font-weight: 800;
  color: #000;
}

.outline-text {
  font-weight: 800;
  color: #fff;
  -webkit-text-stroke: 2px #000;
}

/* Responsive Styles */
@media (min-width: 960px) and (max-width: 1173px) {

  p {
    font-size: 22px;
  }
}

@media (min-width: 801px) and (max-width: 960px) {
  .content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .texts {
    align-items: center;
    max-width: 90%;
    margin: 0 auto;
  }

  .image img {
    width: 320px;
    top: 90px;
  }

  h2 {
    font-size: 42px;
  }

  .bio-text {
    font-size: 20px;
  }

  button {
    padding: 14px 24px;
    font-size: 16px;
  }
  .image {
    display: none;
  }
}

@media (min-width: 760px) and (max-width: 800px) {
  .content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .image {
    display: none;
  }

  .image img {
    width: 350px;
    top: 90px;
  }

  .green-overlay {
    width: 350px;
    height: 340px;
    top: 90px;
  }

  h2 {
    font-size: 40px;
  }

  p {
    font-size: 20px;
  }

  button {
    padding: 14px 24px;
    font-size: 16px;
  }
}

@media (max-width: 760px) {
  .content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .black-border {
    width: 300px;
    height: 300px;
    top: 90px;
    right: 50px;
  }
  .image {
    display: none;
  }

  .image img {
    width: 300px;
  }

  .green-overlay {
    width: 300px;
    height: 290px;
    top: 80px;
  }

  h2 {
    font-size: 36px;
  }

  p {
    font-size: 18px;
  }

  button {
    padding: 12px 20px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  /* .black-border {
    width: 250px;
    height: 250px;
    top: 90px;
    left: -170px;
  }

  .image img {
    width: 250px;
    top: 60px;
  }

  .green-overlay {
    width: 250px;
    height: 240px;
    top: 60px;
  } */

  h2 {
    font-size: 28px;
  }

  p {
    font-size: 16px;
  }

  button {
    padding: 10px 18px;
    font-size: 12px;
  }
  .image {
    display: none;
  }
}
</style>


<!-- test
- wrong font in my experience.
- max width on my experience part.
-->
