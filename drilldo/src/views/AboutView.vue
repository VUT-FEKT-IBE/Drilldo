<script setup>
import { useViewerStore } from '@/stores/viewer'

const store = useViewerStore()
store.showMobileMenu = false
</script>

<template>
  <div class="about">
    <div class="about-container">
      <div class="text">
        <h1>Drilldo</h1>
        <p>
          This is an experimental testing platform made by Brno University of Technology students
          from the Faculty of Electrical Engineering and Communications.
        </p>
        <p>
          Simply upload your questions in the format shown
          <a href="https://github.com/VUT-FEKT-IBE/FEKT-tester/blob/main/questionTemplate.json"
            >here</a
          >
          and test to your heart's content.
        </p>
      </div>
      <img class="icon" src="/icon.svg" />
    </div>
  </div>
</template>

<style>
.about {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
.about-container {
  width: 100%;
  max-width: 600px;
  gap: 20px;
}
img.icon {
  width: 290px;
  max-width: 100%;
}
.text {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
}
@media screen and (min-width: 768px) {
  .about-container {
    display: flex;
    flex-direction: row;
  }
}
@media screen and (max-width: 768px) {
  .about-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
