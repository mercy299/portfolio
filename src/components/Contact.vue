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
          Let’s make something new, different and more meaningful or make <br />thing more visual or
          conceptual
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
        <form 
          class="form" 
          action="https://formspree.io/f/manenjlk"
          method="POST"
        >
          <div>
            <input v-model="formData.name" name="name" placeholder="Full Name" required />
            <input v-model="formData.email" name="email" placeholder="Your Email" type="email" required />
          </div>
          <div>
            <input v-model="formData.phone" name="phone" placeholder="Phone Number" type="tel" required />
            <input v-model="formData.budget" name="budget" placeholder="Budget" type="text" required />
          </div>
          <textarea v-model="formData.message" name="message" placeholder="Message" required></textarea>
          <div class="button">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const formData = ref({
  name: "",
  email: "",
  phone: "",
  budget: "",
  message: "",
});

const submitForm = () => {
  // You can add additional validation or logic here if needed
  console.log("Form data submitted:", formData.value);
};
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
  color: white;
  cursor: pointer;
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
  padding: 16px;
  font-size: 16px;
  box-sizing: border-box;
}
.form div input::placeholder,
.form textarea::placeholder {
  color: #bec0bf;
  font-weight: 300;
  font-size: 16px;
}
.form {
  display: flex;
  align-self: center;
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
  border-radius: 8px;
  border: 1px solid #bec0bf;
  padding: 16px;
  font-size: 16px;
  box-sizing: border-box;
}

@media (max-width: 960px) {
  .form-text-container {
    flex-direction: column;
    margin: 30px auto;
  }
  .form div input {
    width: 100%;
  }
  .form textarea {
    width: 100%;
  }
}
</style>