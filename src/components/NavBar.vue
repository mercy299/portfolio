<template>
  <header class="navbar-container">
    <nav class="navbar">
      <RouterLink to="/" class="welcome">
        <p>
          <PersonalDark />
        </p>
      </RouterLink>
      <div class="navbar-list-container">
        <ul class="navbar-list">
          <li><RouterLink to="#review"> About Me </RouterLink></li>
          <li><RouterLink to="#services"> Services</RouterLink></li>
          <li><RouterLink to="#blog"> Blog</RouterLink></li>
          <li><RouterLink to="#skills"> Skills</RouterLink></li>
        </ul>
      </div>
      <button @click="handleDownload">Resume <i class="fas fa-download"></i></button>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import PersonalDark from '@/assets/images/personal-dark.svg'

const handleDownload = () => {
  const filePath = '/cv.pdf'
  const link = document.createElement('a')
  link.href = filePath
  link.download = filePath.split('/').pop() || 'default-filename.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<style>
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
  font-size: 20px;
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
  border: 1px solid black;
  text-align: center;
  padding: 15px 26px;
  border-radius: 5px;
  background-color: black;
  color: white;
  cursor: pointer;
  font-size: 20px;
}

button:hover {
  background-color: transparent;
  color: black;
  transition: 0.3s;
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
