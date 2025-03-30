<template>
  <header class="navbar-container">
    <nav class="navbar">
      <RouterLink to="/" class="logo-link">
        <img src="../assets/Personal Portfolio Logo.svg" alt="Positivus Logo" class="logo" />
      </RouterLink>
      <div class="navbar-list-container">
        <ul class="navbar-list">
          <li><RouterLink to="#review"> Review </RouterLink></li>
          <li><RouterLink to="#skills"> Services</RouterLink></li>
          <li><RouterLink to="#portfolio"> Portfolio</RouterLink></li>
          <li><RouterLink to="#customerreview"> Testimonial</RouterLink></li>
        </ul>
      </div>
      <button @click="handleDownload">
        <RouterLink to="/"> Download CV</RouterLink>
      </button>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

const handleDownload = () => {
  const filePath = "/cv.pdf"; 
  const link = document.createElement("a");
  link.href = filePath;
  link.download = filePath.split("/").pop() || "default-filename.pdf"; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>

<style scoped>
.navbar-container {
  padding: 0 20px;
}
.navbar {
  max-width: var(--max-content-width);
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  font-family: var(--font-family);
  font-weight: 200;
}

.logo-link {
  text-decoration: none;
}

.logo {
  width: 150px;
  display: block;
}
ul {
  display: flex;
  gap: 25px;
}
ul li {
  margin: 0;
  list-style: none;
  padding: 0px;
}
a {
  text-decoration: none;
  color: black;
}

button {
  border: 1px solid #0db760;
  text-align: center;
  padding: 15px 26px;
  border-radius: 10px;
  background-color: transparent;
}
button:hover {
  background-color: #0db760;
  transition: 0.3s;
  /* padding: 15px 26px; */
}
button:hover a {
  color: white;
}
@media (min-width: 100px) and (max-width: 826px) {
  .navbar-container {
    max-width: 767px;
  }
  .navbar-list {
    display: none;
  }
  button {
    height: 50px;
  }
}
</style>
