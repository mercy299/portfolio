<template>
  <div class="skills-container">
    <div class="content">

      <div class="header-texts">
        <p class="welcome">
          My <span class="black-text">Skills</span>
        </p>
      </div>

      <div class="social-links">

        <div class="skill-card">
          <ProductIcon icon="Github" width="27px" />
          <span>Git</span>
        </div>

        <div class="skill-card">
          <ProductIcon icon="Docker" width="27px" />
          <span>Docker</span>
        </div>

        <div class="skill-card">
          <ProductIcon icon="Kubernetes" width="27px" />
          <span>Kubernetes</span>
        </div>

        <div class="skill-card">
          <ProductIcon icon="Terraform" width="27px" />
          <span>Terraform</span>
        </div>

        <div class="skill-card">
          <ProductIcon icon="Aws" width="27px" />
          <span>AWS</span>
        </div>

        <div class="skill-card">
          <ProductIcon icon="GithubActions" width="27px" />
          <span>GitHub Actions</span>
        </div>

        <div class="skill-card">
          <ProductIcon icon="ArgoCD" width="27px" />
          <span>Argo CD</span>
        </div>

        <div class="skill-card">
          <ProductIcon icon="Prometheus" width="27px" />
          <span>Prometheus</span>
        </div>

        <div class="skill-card">
          <ProductIcon icon="Linux" width="27px" />
          <span>Linux</span>
        </div>

        <div class="skill-card">
          <ProductIcon icon="Bash" width="27px" />
          <span>Bash</span>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductIcon from './ProductIcon.vue'
</script>

<style scoped>
.skills-container {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
}

.content {
  display: flex;
  flex-direction: column;

  font-family: var(--font-family);
  max-width: var(--max-content-width);

  align-items: center;
}

.header-texts {
  display: flex;
  flex-direction: column;

  text-align: center;
  justify-content: center;
  align-content: center;
  align-self: center;
}

.welcome {
  font-size: 48px;
}

.black-text {
  font-weight: 800;
  color: #000;
}

.social-links {
  display: flex;

  gap: 16px;
  flex-wrap: wrap;

  justify-content: center;
}

.skill-card {
  width: 186px;
  height: 186px;

  border: 2px solid black;
  border-radius: 4px;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  gap: 15px;

  color: black;

  transition: 0.3s;
}

.skill-card:hover {
  background: black;
  color: white;
}
</style>
