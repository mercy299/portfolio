<template>
  <div class="skills-container">
    <div class="content">
      <div class="header-texts">
        <p class="welcome">My Skills</p>
        <h2>Our customers say <span style="color: #0db760">Something </span></h2>
      </div>
      <div class="box-group">
      <div class="box">
        <h3>Cloud Infrastructure <br/> Engineer</h3>
        <p>
          Experience in designing and implementing scalable cloud infrastructure using AWS, Azure,
          and Google Cloud Platform. Proficient in containerization technologies such as Docker and
          Kubernetes.
        </p>
      </div>
      <div class="box">
        <h3>Cloud Infrastructure</h3>
        <p>
          Experience in designing and implementing scalable cloud infrastructure using AWS, Azure,
          and Google Cloud Platform. Proficient in containerization technologies such as Docker and
          Kubernetes.
        </p>
      </div>
      <div class="box">
        <h3>Cloud Infrastructure Engineer</h3>
        <p>
          Experience in designing and implementing scalable cloud infrastructure using AWS, Azure,
          and Google Cloud Platform. Proficient in containerization technologies such as Docker and
          Kubernetes.
        </p>
      </div>
      <div class="box">
        <h3>Cloud Infrastructure Engineer</h3>
        <p>
          Experience in designing and implementing scalable cloud infrastructure using AWS, Azure,
          and Google Cloud Platform. Proficient in containerization technologies such as Docker and
          Kubernetes.
        </p>
      </div>
      <div class="box">
        <h3>Cloud Infrastructure Engineer</h3>
        <p>
          Experience in designing and implementing scalable cloud infrastructure using AWS, Azure,
          and Google Cloud Platform. Proficient in containerization technologies such as Docker and
          Kubernetes.
        </p>
      </div>
      <div class="box">
        <h3>Cloud Infrastructure Engineer</h3>
        <p>
          Experience in designing and implementing scalable cloud infrastructure using AWS, Azure,
          and Google Cloud Platform. Proficient in containerization technologies such as Docker and
          Kubernetes.
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
  gap: 1rem;
  margin: 30px auto;
}
.box {
  border: 2px solid #0db760;
  border-radius: 15px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 3px 0px #0db760;
  background-color: rgba(13, 183, 96, 0.05);
  
}
.box:hover {
  background-color: rgba(13, 183, 96, 0.1); 
  transform: translateY(-3px);
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
  padding-bottom: 5px; /* Space between the text and the border */
  text-align: center; /* Center text within its container */
  margin: 0 auto; /* Center the element within its parent container */
  width: fit-content; /* Wrap the width to the content */
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
