<template>
  <div class="footer-container">
    <div class="content">
      <hr width="20px" />
      <div class="flex-content">
        <p>@2022.All Rights Reserved</p>
        <p>Designed by Tanvir Ahmed</p>
        <div class="socials">
          <img src="../assets/Facebook logo.svg" />
          <img src="../assets/Twitter logo.svg" />
          <img src="../assets/LinkedIn logo.svg" />
          <img src="../assets/Instagram logo.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.footer-container {
  padding: 0 20px;
}
.content {
  display: flex;
  flex-direction: column;
  font-family: var(--font-family);
  max-width: var(--max-content-width);
  margin: auto;
}
.flex-content {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
.socials {
  display: flex;
  align-items: center;
  gap: 10px;
}
.socials img {
  width: 25px;
}
</style>
