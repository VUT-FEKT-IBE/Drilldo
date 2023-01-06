<script setup>
import router from "../router/index";
</script>

<template>
  <div class="test-buttons-container">
    <button class="button" @click="previous()">
      <span class="but-text">Results</span>
    </button>
    <button class="button" @click="next()">
      <span class="but-text">Download stats</span>
    </button>
  </div>
</template>

<style scoped>
.test-buttons-container {
  display: flex;
  flex-direction: row;
  max-width: 600px;
  width: 100%;
  gap: 10px;
  margin-bottom: 20px;
}
.button {
  width: 100px;
}
.slider-container {
  width: 100%;
}
.slider {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 15px;
  border-radius: 15px;
}

.slider::-webkit-slider-thumb {
  width: 15px;
  height: 15px;
}
.slider-index {
  text-align: center;
}
</style>
