<template>
  <div class="hero-container">
    <div class="content">
      <div class="texts">
        <!-- <p class="welcome">Welcome</p> -->
        <h2>
          Bridging
          <span style="color: #0db760">
            Code<br />
            And
          </span>
          Cloud
        </h2>
        <p class="textss">
          Results-driven Linux System Administrator and DevOps Engineer with a strong focus on
          automation, cloud infrastructure, and performance optimization. I thrive on building
          scalable systems and leveraging modern tools to drive innovation and efficiency.
        </p>
        <div>
          <RouterLink to="#contact" class="contact-btn"> Contact Me</RouterLink>
        </div>
      </div>
      <div class="image">
        <div class="green-overlay"></div>
        <img src="../assets/linkedin-image.jpeg" alt="hero-img" />
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
  flex: 1;
  margin-top: -80px;
}
.texts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  gap: 20px;
}
.textss {
  font-size: 18px;
}

.black-border {
  position: absolute;
  width: 390px;
  height: 390px;
  top: 119px;
  left: 25px;
  border: 5px solid #000000;
  border-radius: 2px;
  pointer-events: none;
  z-index: 1;
}

.image img {
  width: 380px;
  position: absolute;
  z-index: 2;
  top: 100px;
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

/* button {
  border: 1px solid #0db760;
  text-align: center;
  padding: 15px 26px;
  border-radius: 10px;
  background-color: #0db760;
} */
.contact-btn {
  display: inline-block;
  border: 1px solid #0db760;
  text-align: center;
  padding: 15px 26px;
  border-radius: 10px;
  background-color: #0db760;
  color: white;
  text-decoration: none;
}
.contact-btn:hover {
  background-color: #0aa350;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(13, 183, 96, 0.3);
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
  width: 380px;
}

.welcome {
  color: #0db760;
  border: #0db760 1px solid;
  width: fit-content;
  padding: 7px 5px;
  border-radius: 100%;
}

/* Responsive Styles */
@media (min-width: 960px) and (max-width: 1173px) {
  .black-border {
    left: 10px;
  }

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

  .black-border {
    width: 330px;
    height: 330px;
    top: 90px;
    left: 0;
  }

  .green-overlay {
    width: 320px;
    height: 310px;
    top: 90px;
  }

  h2 {
    font-size: 42px;
  }

  .textss {
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

  .black-border {
    width: 350px;
    height: 350px;
    top: 120px;
    left: -250px;
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
