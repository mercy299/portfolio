<template>
  <div class="skills-container">
    <div class="content">
      <div class="header-texts">
        <p class="welcome">Skills</p>
        <h2>Areas of Technical <span style="color: #0db760">Proficiency </span></h2>
      </div>
      <div class="box-group">
        <div class="box">
          <h3>
            Cloud Infrastructure <br />
            Engineer
          </h3>
          <p>
            Experience in designing and implementing scalable cloud infrastructure using AWS, Azure,
            and Google Cloud Platform.
          </p>
        </div>
        <div class="box">
          <h3>
            Linux System <br />
            Administrator
          </h3>
          <p>
            Manage and maintain Linux systems using distributions such as Ubuntu, CentOS, and Red Hat Enterprise Linux.
          </p>
        </div>
        <div class="box">
          <h3>
            Technical Writing Intern (Cloud & DevOps Focus)
          </h3>
          <p>
            Document technical processes, write knowledge base articles, and assist in blog content creation.
          </p>
        </div>
        <div class="box">
          <h3>
            Kubernetes Associate
          </h3>
          <p>
            Deploying, managing, and troubleshooting containerized applications in Kubernetes.
          </p>
        </div>
        <div class="box">
          <h3>Cloud Migration <br/>Enthusiast</h3>
          <p>
            Facilitate seamless migration to cloud platforms using services like AWS Migration Hub, Azure Migrate, or Google Cloud Migrate.
          </p>
        </div>
        <div class="box">
          <h3>Shell Scripting Enthusiast</h3>
          <p>
            Automate tasks through advanced shell scripting in Bash or PowerShell.
          </p>
        </div>
        <div class="box">
          <h3>Docker Associate</h3>
          <p>
            Deploy and manage applications effectively using Docker containers.
          </p>
        </div>
        <div class="box">
          <h3>CI/CD Pipeline Architect</h3>
          <p>
            Set up and maintain automated CI/CD pipelines using GitHub Actions, Jenkins, or GitLab CI.          
          </p>
        </div>
        <div class="box">
          <h3>Infrastructure as Code (IaC) Engineer</h3>
          <p>
            Automating cloud infrastructure deployments using Terraform, AWS CloudFormation, and Pulumi..
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped>
.skills-container {
  padding: 0 20px;
  margin: 50px 0;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: var(--font-family);
  max-width: var(--max-content-width);
  margin: auto;
}
.box-group {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 30px auto;
}
.box {
  border: 2px solid #0db760;
  border-radius: 15px;
  width: 100%;
  padding: 10px;
  text-align: center;
  box-sizing: border-box;
  box-shadow: 0px 0px 3px 0px #0db760;
  background-color: rgba(13, 183, 96, 0.05);
  transition: all 0.3s ease-in-out;
}
.box:hover {
  transform: scale(1.03);
  background-color: #0db760;
  box-shadow: 0px 8px 20px rgba(13, 183, 96, 0.4);
}
.box:hover, .box:hover h3 {
  color: white;
}
.box h3 {
  color: #0db760;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: center;
}
.welcome {
  color: #0db760;
  border: 1px solid #0db760;
  border-radius: 50%;
  padding: 7px 5px;
  padding-bottom: 5px; 
  text-align: center; 
  margin: 0 auto; 
  width: fit-content; 
}
.header-texts {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-content: center;
  align-self: center;
}
</style>
