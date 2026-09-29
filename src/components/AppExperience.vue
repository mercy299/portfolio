<template>
  <div class="experience-container">
    <div class="content">
      <div class="header-texts">
        <p class="welcome">My <span class="white-text">Experience</span></p>
      </div>
      <div class="experience-list">
        <div class="experience-item">
          <div class="experience-item-header">
            <h3>Chief engineer at google</h3>
            <i>2019 - 2023</i>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et velit ab corporis eaque
            nostrum perspiciatis ad autem laudantium nulla praesentium in molestiae excepturi
            similique sequi soluta aliquid deleniti, suscipit sunt.50
          </p>
        </div>
        <div class="experience-item">
          <div class="experience-item-header">
            <h3>Software Engineer at Amazon</h3>
            <i>2016 - 2019</i>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, recusandae veritatis
            facere accusantium laboriosam non sequi, nostrum accusamus excepturi quam voluptate
            tenetur praesentium in beatae nesciunt ab ipsam cumque! Laboriosam cupiditate nulla
            pariatur alias. Error.
          </p>
        </div>
        <div class="experience-item">
          <div class="experience-item-header">
            <h3>Intern at Microsoft</h3>
            <i>2015 - 2016</i>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, recusandae veritatis
            facere accusantium laboriosam non sequi, nostrum accusamus excepturi quam voluptate
            tenetur praesentium in beatae nesciunt ab ipsam cumque! Laboriosam cupiditate nulla
            pariatur alias. Error.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>


<script setup lang="ts"></script>

<style scoped>
.experience-container {
  display: flex;
  /* justify-content: center; */
  min-height: 100vh;
  background-color: black;
  /* align-items: center; */
}
.content {
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
  /* text-align: center; */
  color: white;
  /* background-color: blue; */
  width: 80%;
  height: 100%;
  margin: 40px auto;
}
.header-texts {
  display: flex;
  /* flex-direction: column; */
  text-align: center;
  justify-content: center;
  /* align-content: center; */
  /* align-self: center; */
  color: white;
}
.welcome {
  font-size: 48px;
}
.white-text {
  font-weight: 800;
  color: white;
}
.experience-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}
.experience-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #1a1a1a;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #71717A;
}
.experience-item:hover {
  background-color: #27272A;
  border: none;
}
.experience-item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>
