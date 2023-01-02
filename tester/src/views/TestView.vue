<script setup>
import { ref } from "vue";

import UploadTest from "../components/UploadTest.vue";
import Test from "../components/Test.vue";

const questions = ref(null);
function getData(data) {
  questions.value = data;
}
</script>

<template>
  <div class="app">
    <UploadTest v-if="questions == null" @data="getData" />
    <Test v-else :questions="questions" />
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  width: 100%;
  place-items: center;
}
</style>