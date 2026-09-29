<template>
  <section class="about-me">
    <div class="about-container">

      <div class="about-image">
        <img src="../assets/images/about-me-img.svg" alt="About me" />
      </div>

      <!-- Right: Text -->
      <div class="about-content">
        <h3>
          About <span>Me</span>
        </h3>

        <p>
          I am a passionate and dedicated professional with a strong interest
          in technology, cloud infrastructure, and building solutions that
          solve real-world problems. I enjoy working with modern technologies
          and continuously improving my skills through hands-on projects and
          practical experience.
        </p>

        <p>
          My experience spans cloud computing, DevOps, automation,
          infrastructure as code, containerization, and continuous
          integration and deployment. I enjoy creating reliable, scalable,
          and maintainable systems while keeping development and operations
          closely connected.
        </p>

        <p>
          Beyond writing code and managing infrastructure, I am passionate
          about learning, problem-solving, collaboration, and contributing
          to the technology community. I believe that good technology should
          be simple, useful, accessible, and built with purpose.
        </p>

        <p>
          I am always looking for opportunities to learn something new,
          take on challenging problems, collaborate with great people, and
          create meaningful solutions that make an impact.
        </p>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.about-me {
  width: 100%;
  background-color: #ffffff;
  color: #000000;
  padding: 100px 20px;
}

.about-container {
  max-width: var(--max-content-width);
  margin: 0 auto;
  display: flex;
  align-items: stretch;
  gap: 80px;
}

/* LEFT SIDE */
.about-image {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-image img {
  width: 90%;
  height: auto;
  object-fit: contain;
  display: block;
}

/* RIGHT SIDE */
.about-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about-content h3 {
  font-size: 48px;
  font-weight: 400;
  margin: 0 0 30px;
  line-height: 1.1;
}

.about-content h3 span {
  font-weight: 900;
}

.about-content p {
  font-size: 17px;
  line-height: 1.8;
  margin: 0 0 18px;
  max-width: 650px;
}

/* TABLET */
@media (max-width: 900px) {
  .about-container {
    gap: 40px;
  }

  .about-content h3 {
    font-size: 40px;
  }

  .about-content p {
    font-size: 16px;
    line-height: 1.7;
  }

  .about-image img {
    min-height: 500px;
  }
}

/* MOBILE */
@media (max-width: 768px) {
  .about-me {
    padding: 70px 20px;
  }

  .about-container {
    flex-direction: column;
    gap: 40px;
  }

  .about-image {
    width: 100%;
  }

  .about-image img {
    width: 100%;
    height: 450px;
    min-height: 0;
  }

  .about-content {
    width: 100%;
  }

  .about-content h3 {
    font-size: 36px;
    margin-bottom: 25px;
  }

  .about-content p {
    font-size: 16px;
    line-height: 1.7;
  }
}

/* SMALL MOBILE */
@media (max-width: 480px) {
  .about-me {
    padding: 50px 16px;
  }

  .about-image img {
    height: 350px;
  }

  .about-content h3 {
    font-size: 32px;
  }

  .about-content p {
    font-size: 15px;
  }
}
</style>
