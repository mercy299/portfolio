<template>
  <div class="contact-container">
    <div class="contact-content">

      <!-- LEFT SIDE — FORM -->
      <div class="form-container">
        <form
          class="form"
          action="https://formspree.io/f/manenjlk"
          method="POST"
        >
          <div class="input-row">
            <input
              v-model="formData.name"
              name="name"
              placeholder="Full Name"
              required
            />

            <input
              v-model="formData.email"
              name="email"
              placeholder="Your Email"
              type="email"
              required
            />
          </div>

          <div class="input-row">
            <input
              v-model="formData.phone"
              name="phone"
              placeholder="Phone Number"
              type="tel"
              required
            />

            <input
              v-model="formData.budget"
              name="budget"
              placeholder="Budget"
              type="text"
              required
            />
          </div>

          <textarea
            v-model="formData.message"
            name="message"
            placeholder="Message"
            required
          ></textarea>

          <div class="button">
            <button type="submit">
              Get in Touch
            </button>
          </div>
        </form>
      </div>

      <!-- RIGHT SIDE — CONTACT INFORMATION -->
      <div class="contact-info">
        <h2>
          Let’s
          <span class="outline-text">create</span>
          <br />
          <span>Something special</span>
        </h2>

        <p class="description">
          I seek to push the limits of creativity to create high-engaging,
          user-friendly, and memorable interactive experiences.
        </p>

        <div class="contact-details">
          <p>mercysam299@gmail.com</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  budget: '',
  message: '',
})
</script>

<style scoped>
.contact-container {
  width: 100%;
  padding: 50px 20px;
  background-color: #ffffff;
  color: #000000;
  box-sizing: border-box;
}

.contact-content {
  max-width: var(--max-content-width);
  margin: 0 auto;

  display: flex;
  align-items: center;

  gap: 100px;

  font-family: var(--font-family);
}

/* =========================================
   LEFT SIDE — FORM
========================================= */

.form-container {
  flex: 1;
  width: 100%;
}

.form {
  display: flex;
  flex-direction: column;

  gap: 20px;

  width: 100%;
}

.input-row {
  display: flex;
  gap: 12px;
  width: 100%;
}

.form input {
  width: 100%;
  height: 56px;

  border: 1px solid black;
  border-radius: 8px;

  padding: 16px;

  font-family: inherit;
  font-size: 16px;

  box-sizing: border-box;
  outline: none;
}

.form input:focus,
.form textarea:focus {
  border-color: black;
}

.form input::placeholder,
.form textarea::placeholder {
  color: #8a8a8a;
  font-size: 16px;
  font-weight: 300;
}

.form textarea {
  width: 100%;
  height: 180px;

  border: 1px solid black;
  border-radius: 8px;

  padding: 16px;

  font-family: inherit;
  font-size: 16px;

  box-sizing: border-box;

  resize: vertical;
  outline: none;
}

/* =========================================
   BUTTON
========================================= */

.button {
  display: flex;
  justify-content: flex-end;
}

.button button {
  padding: 15px 30px;

  border: 1px solid #000000;
  border-radius: 10px;

  background-color: #000000;
  color: #ffffff;

  font-family: inherit;
  font-size: 16px;
  font-weight: 500;

  cursor: pointer;

  transition: all 0.3s ease;
}

.button button:hover {
  background-color: #ffffff;
  color: #000000;

  transform: translateY(-2px);
}

/* =========================================
   RIGHT SIDE — CONTACT INFORMATION
========================================= */

.contact-info {
  flex: 1;

  display: flex;
  flex-direction: column;

  justify-content: center;
}

.contact-info h2 {
  font-size: 48px;
  line-height: 56px;

  font-weight: 400;

  margin: 0 0 35px;
}

.contact-info h2 span {
  font-weight: 800;
}

.description {
  max-width: 500px;

  font-size: 18px;
  line-height: 1.7;

  margin: 0 0 40px;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-details p {
  font-size: 17px;
  font-weight: 500;

  margin: 0;
}
.outline-text {
  font-weight: 800;
  color: #fff;
  -webkit-text-stroke: 2px #000;
}

/* =========================================
   TABLET
========================================= */

@media (max-width: 960px) {
  .contact-content {
    gap: 60px;
  }

  .contact-info h2 {
    font-size: 50px;
  }
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 768px) {
  .contact-container {
    padding: 70px 20px;
  }

  .contact-content {
    flex-direction: column;
    align-items: stretch;

    gap: 60px;
  }

  /*
    Form remains first on mobile,
    contact information comes underneath.
  */

  .contact-info {
    text-align: center;
    align-items: center;
  }

  .contact-info h2 {
    font-size: 48px;
  }

  .description {
    font-size: 16px;
  }

  .input-row {
    flex-direction: column;
  }

  .button {
    justify-content: center;
  }

  .button button {
    width: 100%;
  }
}

/* =========================================
   SMALL MOBILE
========================================= */

@media (max-width: 480px) {
  .contact-info h2 {
    font-size: 40px;
  }

  .contact-details p {
    font-size: 15px;
  }
}
</style>
