<template>
  <div class="skills-container">
    <div class="content">
      <div class="header-texts">
        <p class="welcome"> My <span class="black-text">Skills</span></p>
      </div>
      <div class="social-links">
        <a href="https://git-scm.com/docs" target="_blank">
          <ProductIcon icon="Github" width="27px" />
          Git
        </a>
        <a href="https://docs.docker.com/guides/" target="_blank">
          <ProductIcon icon="Docker" width="27px" />
          Docker
        </a>
        <a href="https://kubernetes.io/docs/home/supported-doc-versions/" target="_blank">
          <ProductIcon icon="Kubernetes" width="27px" />
          Kubernetes
        </a>
        <a href="https://developer.hashicorp.com/terraform/docs" target="_blank">
          <ProductIcon icon="Terraform" width="27px" />
          Terraform
        </a>
        <a href="https://docs.aws.amazon.com/" target="_blank">
          <ProductIcon icon="Aws" width="27px" />
          Aws
        </a>
        <a href="https://docs.github.com/en/actions" target="_blank">
          <ProductIcon icon="GithubActions" width="27px" />
          Github Actions
        </a>
        <a href="https://argo-cd.readthedocs.io/en/stable/" target="_blank">
          <ProductIcon icon="ArgoCD" width="27px" />
          ArgoCD
        </a>
        <a href="https://prometheus.io/docs/introduction/overview/" target="_blank">
          <ProductIcon icon="Prometheus" width="27px" />
          Prometheus
        </a>
        <a href="https://docs.kernel.org/" target="_blank">
          <ProductIcon icon="Linux" width="27px" />
          Linux
        </a>
        <a href="https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html" target="_blank">
          <ProductIcon icon="Bash" width="27px" />
          Bash
        </a>
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
.welcome {
 font-size: 48px;
}
.black-text {
  font-weight: 800;
  color: #000;
}
.header-texts {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-content: center;
  align-self: center;
}
.social-links {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}

.social-links a {
  width: 186px;
  height: 186px;
  border: 2px solid black;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: 0.3s;
  color: black;
  flex-wrap: wrap;
  flex: 0 0 186px;
}

.social-links a:hover {
  background: black;
  color: #ffffff;
  /* border-color: white; */
}

@media (max-width: 768px) {
  .skills-container {
    width: 100%;
    padding: 40px 20px;
    box-sizing: border-box;
  }

  .content {
    width: 100%;
    max-width: 100%;
  }

  .social-links {
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }

  .social-links a {
    flex: 0 0 186px;
  }
}
</style>
