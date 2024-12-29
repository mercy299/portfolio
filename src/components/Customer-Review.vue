<template>
  <div class="skills-container">
    <div class="content">
      <div class="header-texts">
        <p class="welcome">Reviews</p>
        <h2>Our customers say <span style="color: #0db760">Something </span></h2>
        <!-- <p>
          I’m specialist in UI/UX Designe. My passion is designing & solving <br />problems through
          user experience and research.
        </p> -->
        <!-- <div>
          <button><RouterLink to="/cv"> Hire Me</RouterLink></button>
        </div> -->
      </div>
      <div class="review-text">
        <div class="group">
          <p>
            We will also facilitate the business <br />
            marketing of these products with our SEO <br />
            experts so that they become a ready <br />
            to use website & help sell product from company
          </p>
          <div class="flex-profile">
            <img src="../assets/face1.svg" />
            <p>
              <span style="font-weight: bold">Design Prototype </span><br />
              Designer
            </p>
          </div>
        </div>
        <div class="group">
          <p>
            We will also facilitate the business <br />
            marketing of these products with our SEO <br />
            experts so that they become a ready <br />
            to use website & help sell product from company
          </p>
          <div class="flex-profile">
            <img src="../assets/face2.svg" />
            <p>
              <span style="font-weight: bold">Design Prototype </span><br />
              Designer
            </p>
          </div>
        </div>
        <div class="group">
          <p>
            We will also facilitate the business <br />
            marketing of these products with our SEO <br />
            experts so that they become a ready <br />
            to use website & help sell product from company
          </p>
          <div class="flex-profile">
            <img src="../assets/face3.svg" />
            <p>
              <span style="font-weight: bold">Design Prototype </span><br />
              Designer
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.skills-container {
  padding: 0 20px;
  margin: 30px 0;
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
.flex-profile {
  display: flex;
  gap: 10px;
}
.header-texts {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-content: center;
  align-self: center;
}
.review-text {
  display: flex;
  margin: 20px 0;
}
@media (max-width: 960px) {
  .review-text {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    align-items: center;
  }
  .group {
    font-size: 20px;
  }
}
</style>
