<template>
  <div class="skills-container">
    <div class="content">
      <div class="skills-intro">
        <p class="welcome">My Services</p>
        <h2>
          I manage
          <span style="color: #0db760">containerized <br /> </span>
          applications and infrastructure
        </h2>
        <p>
          I'm a DevOps specialist passionate about building scalable infrastructures, optimizing
          workflows, and solving challenges<br/> through automation and cloud engineering.
        </p>
        <div>
          <button><RouterLink to="#contact"> Hire Me</RouterLink></button>
        </div>
      </div>
      <div class="skills-block">
        <div class="group">
          <img src="../assets/Diamond Outline.svg" />
          <h2>
            Cloud <br />
            Infrastructure Engineer
          </h2>
          <p>Design and manage scalable cloud <br />solutions with AWS, Azure, and GCP.</p>
        </div>
        <div class="group end">
          <img src="../assets/Pulse Outline.svg" />
          <h2>Automation Engineer</h2>
          <p>
            Automate workflows and boost <br />productivity with Python, Terraform, and Ansible.
          </p>
        </div>
        <div class="group">
          <img src="../assets/School Outline.svg" />
          <h2>Devops Engineer</h2>
          <p>
            Optimize DevOps workflows with Github<br />
            Actions, Kubernetes, and Docker.
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
.welcome {
  color: #0db760;
  border: #0db760 1px solid;
  width: fit-content;
  padding: 7px 5px;
  border-radius: 100%;
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
  /* justify-content: space-between; */
  font-family: var(--font-family);
  max-width: var(--max-content-width);
  margin: auto;
  align-content: center;
}
.skills-intro,
.skills-block {
  flex: 1;
}
.skills-block {
  display: flex;
  flex-direction: column;
}
.group.end {
  align-self: flex-end;
}

@media (max-width: 960px) {
  .content {
    display: flex;
    /* justify-content: space-between; */
    flex-direction: column;
    font-family: var(--font-family);
    max-width: var(--max-content-width);
    margin: auto;
    align-content: center;
  }
  p {
    font-size: 22px;
  }
  .skills-intro {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
}
</style>
