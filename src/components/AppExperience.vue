<template>
  <div class="experience-container">
    <div class="content">
      <div class="header-texts">
        <p class="welcome">My <span class="white-text">Experience</span></p>
      </div>
      <div class="experience-list">
        <div class="experience-item">
          <div class="experience-item-header">
            <h3>DevOps Engineer at Interswitch</h3>
            <i>Feb - Present</i>
          </div>
          <p>
            Working on cloud infrastructure, automation, CI/CD pipelines, and scalable application
            deployments. Supporting the implementation and management of reliable DevOps practices
            across development and production environments.
          </p>
        </div>
        <div class="experience-item">
          <div class="experience-item-header">
            <h3>DevOps Engineer at Varscon</h3>
            <i>Dec 2023 - Aug 2025</i>
          </div>
          <p>
            Architected and automated AWS cloud infrastructure using Terraform while managing
            containerized deployments with Docker, ECS, and Kubernetes. Built CI/CD pipelines with
            GitHub Actions and implemented secure secrets management and cloud security practices.
          </p>
        </div>
        <div class="experience-item">
          <div class="experience-item-header">
            <h3>DevOps Engineer at Mbag Microfinance Bank</h3>
            <i>Aug 2024 - Dec 2024</i>
          </div>
          <p>
            Automated API deployment workflows using GitHub Actions and implemented infrastructure
            and application monitoring with Prometheus and Grafana. Improved deployment reliability
            while strengthening security with GitHub Secrets, Nginx, SSL/TLS, and Let's Encrypt.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.experience-container {
  display: flex;
  /* justify-content: center; */
  min-height: 100vh;
  background-color: black;
  /* align-items: center; */
}
.content {
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
  /* text-align: center; */
  color: white;
  /* background-color: blue; */
  width: 80%;
  height: 100%;
  margin: 40px auto;
}
.header-texts {
  display: flex;
  /* flex-direction: column; */
  text-align: center;
  justify-content: center;
  /* align-content: center; */
  /* align-self: center; */
  color: white;
}
.welcome {
  font-size: 48px;
}
.white-text {
  font-weight: 800;
  color: white;
}
.experience-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}
.experience-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #1a1a1a;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #71717a;
}
.experience-item:hover {
  background-color: #27272a;
  border: none;
}
.experience-item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
