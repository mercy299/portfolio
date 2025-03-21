<template>
  <div class="review-container">
    <div class="content">
      <div class="group">
        <h2>80+</h2>
        <p>Satisfied Clients</p>
      </div>
      <div class="group bordered">
        <h2>200+</h2>
        <p>Projects Completed</p>
      </div>
      <div class="group">
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
  align-items: center;
  font-family: var(--font-family);
  max-width: var(--max-content-width);
  margin: 0 auto;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  gap: 20px; /* Add gap between groups */
}

.group {
  flex: 1;
  text-align: center;
  padding: 20px;
}

.bordered {
  border-left: 1px solid #0db760;
  border-right: 1px solid #0db760;
  padding-left: 50px;
  padding-right: 50px;
}

.group h2 {
  color: #0db760;
  font-size: 48px;
  margin: 0;
}

.group p {
  font-size: 28px;
  margin: 0;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .content {
    flex-direction: column; /* Stack groups vertically on smaller screens */
    gap: 10px;
  }

  .group {
    padding: 10px 0;
  }

  .bordered {
    border-left: none;
    border-right: none;
    padding-left: 0;
    padding-right: 0;
    border-top: 1px solid #0db760;
    border-bottom: 1px solid #0db760;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .group h2 {
    font-size: 36px; /* Smaller font size for mobile */
  }

  .group p {
    font-size: 20px; /* Smaller font size for mobile */
  }
}

@media (max-width: 480px) {
  .group h2 {
    font-size: 28px; /* Even smaller font size for very small screens */
  }

  .group p {
    font-size: 18px; /* Even smaller font size for very small screens */
  }
}
</style>