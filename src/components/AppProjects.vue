<template>
  <section class="projects">
    <div class="projects-container">
      <div class="header-texts">
        <p class="welcome">My <span class="white-text">Projects</span></p>
      </div>
      <!-- Project 01 -->
      <div class="project-row">
        <div class="project-image">
          <img src="../assets/images/projects-img.png" alt="Project 1" />
        </div>

        <div class="project-content">
          <span class="project-number">01</span>
          <h3>Production Kubernetes Platform</h3>
          <p>
            Designed and deployed a containerized machine learning microservice on AWS EKS using
            Docker and Kubernetes. Built an automated container delivery workflow with AWS CodeBuild
            and ECR, integrated PostgreSQL for persistent data, and implemented CloudWatch
            monitoring for application visibility and operational reliability.
          </p>
        </div>
      </div>

      <!-- Project 02 -->
      <div class="project-row reverse">
        <div class="project-image">
          <img src="../assets/images/projects-img-2.png" alt="Project 2" />
        </div>

        <div class="project-content">
          <span class="project-number">02</span>
          <h3>Infrastructure Automation with Terraform</h3>
          <p>
            Designed and automated cloud infrastructure provisioning using Terraform, enabling
            repeatable and version-controlled deployments. Implemented networking, security
            controls, and scalable infrastructure configurations while reducing manual provisioning
            and configuration inconsistencies.
          </p>
        </div>
      </div>

      <!-- Project 03 -->
      <div class="project-row">
        <div class="project-image">
          <img src="../assets/images/projects-img-3.png" alt="Project 3" />
        </div>

        <div class="project-content">
          <span class="project-number">03</span>
          <h3>Cloud-Native Monitoring and Observability Stack</h3>
          <p>
            Implemented an observability solution using Prometheus and Grafana to monitor
            infrastructure and application performance. Configured metrics collection and dashboards
            to improve visibility into system health, resource utilization, and service
            availability.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.projects {
  width: 100%;
  min-height: 100vh;
  background-color: #000000;
  color: #ffffff;
  padding: 50px 20px;
}

.projects-container {
  max-width: var(--max-content-width);
  margin: 0 auto;
}
.header-texts {
  display: flex;
  text-align: center;
  justify-content: center;
  color: white;
}

.welcome {
  font-size: 48px;
}

.white-text {
  font-weight: 800;
  color: white;
}
/* PROJECT ROW */

.project-row {
  display: flex;
  align-items: center;
  gap: 30px;
  /* min-height: 500px; */
  margin-bottom: 10px;
}

/* Reverse the second project */
.project-row.reverse {
  flex-direction: row-reverse;
}

/* IMAGE */

.project-image {
  flex: 1;
  width: 50%;
}

.project-image img {
  width: 100%;
  height: 450px;
  object-fit: cover;
  display: block;
}

/* TEXT */

.project-content {
  flex: 1;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.project-number {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 25px;
}

.project-content h3 {
  font-size: 42px;
  font-weight: 600;
  margin: 0 0 25px;
  line-height: 1.1;
}

.project-content p {
  max-width: 550px;
  font-size: 17px;
  line-height: 1.8;
  margin: 0;
  color: #d0d0d0;
}

/* TABLET */

@media (max-width: 900px) {
  .project-row {
    gap: 40px;
    min-height: 400px;
    margin-bottom: 70px;
  }

  .project-image img {
    height: 350px;
  }

  .project-content h3 {
    font-size: 34px;
  }

  .project-content p {
    font-size: 16px;
  }
}

/* MOBILE */

@media (max-width: 768px) {
  .projects {
    padding: 70px 20px;
  }

  .project-row,
  .project-row.reverse {
    flex-direction: column;
    gap: 35px;
    margin-bottom: 80px;
  }

  .project-image,
  .project-content {
    width: 100%;
  }

  .project-image img {
    height: 350px;
  }

  .project-content h3 {
    font-size: 32px;
  }

  .project-content p {
    font-size: 16px;
    line-height: 1.7;
  }
}

/* SMALL MOBILE */

@media (max-width: 480px) {
  .projects {
    padding: 50px 16px;
  }

  .project-image img {
    height: 280px;
  }

  .project-content h3 {
    font-size: 28px;
  }

  .project-number {
    font-size: 18px;
    margin-bottom: 18px;
  }
}
</style>
