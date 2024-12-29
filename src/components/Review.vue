<template>
  <div class="review-container">
    <div class="content">
      <div class="group">
        <h2>80+</h2>
        <p>Satistied Clients</p>
      </div>
      <div class="group2">
        <h2>200+</h2>
        <p>Projects Completed</p>
      </div>
      <div class="group" style="padding-left: 50px">
        <h2>99+</h2>
        <p>Reviews Given</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.review-container {
  padding: 0 20px;
  margin: 100px 0;
}
.content {
  display: flex;
  justify-content: space-between;
  font-family: var(--font-family);
  max-width: var(--max-content-width);
  margin: auto;
  align-content: center;
}

.group {
  padding: 0 20px;
  flex: 1;
}
.group2 {
  border-left: 1px solid #0db760;
  border-right: 1px solid #0db760;
  padding: 0 50px;
  flex: 1;
}
.group h2,
.group2 h2 {
  color: #0db760;
  font-size: 48px;
  line-height: 0%;
}
.group p,
.group2 p {
  font-size: 28px;
}
</style>
