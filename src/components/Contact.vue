<template>
  <div class="skills-container">
    <div class="content">
      <div class="texts">
        <p class="welcome">Contact</p>
        <h2>
          Let's Discuss your
          <span style="color: #0db760">Project </span>
        </h2>
        <p>
          Let’s make something new, different and more meaningful or make thing<br />
          more visual or conceptual
        </p>
      </div>
      <div class="form-text-container">
        <div class="text">
          <div class="group">
            <img src="../assets/phone.svg" />
            <p>
              Call me <br />
              <span>+2349064140027</span>
            </p>
          </div>
          <div class="group">
            <img src="../assets/mail.svg" />
            <p>
              Email me <br />
              <span>mercysam299@gmail.com</span>
            </p>
          </div>
          <div class="group">
            <img src="../assets/location.svg" />
            <p>
              Address <br />
              <span>Lagos, Nigeria </span>
            </p>
          </div>
        </div>
        <div class="form">
          <div>
            <input v-model="name" placeholder="Name" />
            <input v-model="email" placeholder="Email" />
          </div>
          <div>
            <input v-model="name" placeholder="Name" />
            <input v-model="name" placeholder="Name" />
          </div>
          <textarea v-model="message" placeholder="Message"></textarea>
        </div>
      </div>
      <div class="button">
        <button><RouterLink to="/cv"> Submit Message</RouterLink></button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const email = ref('')
const name = ref('')
const message = ref('')
</script>

<style scoped>
.skills-container {
  padding: 0 20px;
  margin-bottom: 50px;
}
.welcome {
  color: #0db760;
  border: #0db760 1px solid;
  width: fit-content;
  padding: 7px 5px;
  border-radius: 100%;
}

.texts {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
}
button {
  border: 1px solid #0db760;
  text-align: center;
  padding: 15px 26px;
  border-radius: 10px;
  background-color: #0db760;
}
.button {
  display: flex;
  justify-content: flex-end;
}
a {
  text-decoration: none;
  color: white;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: var(--font-family);
  max-width: var(--max-content-width);
  margin: auto;
}
.form-text-container {
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  /* gap: 180px; */
  margin: 30px auto;
  width: 100%;
}

.group {
  display: flex;
  gap: 20px;
}
.text {
  display: flex;
  flex-direction: column;
  gap: 45px;
}
.form div input {
  width: 350px;
  height: 56px;
  border-radius: 8px;
  border: 1px solid #bec0bf;
}
.form div input::placeholder,
.form textarea::placeholder {
  color: #bec0bf;
  font-weight: 300;
  padding-left: 10px;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.form div {
  display: flex;
  gap: 12px;
}

.form textarea {
  width: 716px;
  height: 170px;
  /* box-sizing: border-box; */
  border-radius: 8px;
  border: 1px solid #bec0bf;
}
</style>
