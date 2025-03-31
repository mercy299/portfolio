<template>
  <div class="hero-container">
    <div class="content">
      <div class="texts">
        <p class="welcome">Welcome</p>
        <h2>
          Bridging
          <span style="color: #0db760">
            Code<br />
            And
          </span>
          Cloud
        </h2>
        <p class="textss">
          Results-driven Linux System Administrator, Cloud, and DevOps Engineer  dedicated to
          harnessing cutting-edge technologies to drive innovation, enhance efficiency, and optimize
          infrastructure performance.
        </p>
        <div>
          <button><RouterLink to="#contact"> Contact Me</RouterLink></button>
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
  flex: 1;
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
  right: 55px;
  border: 5px solid #000000;
  border-radius: 2px;
  pointer-events: none;
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
    right: 30px;
  }

  p {
    font-size: 22px;
  }
}

@media (min-width: 800px) and (max-width: 960px) {
  .content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .black-border {
    right: 220px;
  }

  .texts {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    font-size: 22px;
  }
}

@media (min-width: 760px) and (max-width: 800px) {
  .content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .black-border {
    width: 350px;
    height: 350px;
    top: 100px;
    right: 100px;
  }

  .image img {
    width: 350px;
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
  .black-border {
    width: 250px;
    height: 250px;
    top: 70px;
    right: 30px;
  }

  .image img {
    width: 250px;
  }

  .green-overlay {
    width: 250px;
    height: 240px;
    top: 60px;
  }

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
}
</style>
