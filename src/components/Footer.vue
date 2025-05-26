<template>
  <div class="footer-container">
    <div class="content">
      <hr width="100%" />
      <div class="flex-content">
        <p>@2024.All Rights Reserved</p>
        <p>Aniekeme Samuel</p>
        <div class="socials">
          <a href="https://github.com/mercy299" target="_blank">
            <img :src="githubIcon" width="27px" alt="Github" />
          </a>

          <!-- <a href="https://github.com/mercy299" target="_blank">
            <img src="../assets/github-icon.svg"  width="27px" alt="Github" />
          </a> -->
          <a href="https://twitter.com/your-profile" target="_blank">
            <img src="../assets/Twitter logo.svg" alt="Twitter" />
          </a>
          <a href="https://www.linkedin.com/in/mercy299/" target="_blank">
            <img src="../assets/LinkedIn logo.svg" alt="LinkedIn" />
          </a>
          <a href="https://10xannie.hashnode.dev/" target="_blank" >
            <img src="../assets/hashnode.svg" alt="Hashnode" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import githubIcon from '@/assets/github-icon.svg'

</script>

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

</style>

