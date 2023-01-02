<script setup>
import { ref } from "vue";

import UploadFile from "../components/UploadFile.vue";

const emit = defineEmits(["data"]);
const questions = ref(null);
function getData(data) {
  data.forEach(function (item) {
    item.showResults = false;
    item.numCorrect = 0;
    item.numIncorrect = 0;
    item.maxScore = 0;
    item.score = 0;
    item.answers.forEach(function (answer) {
      answer.isSelected = false;
      if (answer.correct) {
        item.maxScore++;
      }
    });
    item.answers = item.answers.sort((a, b) => (Math.random() > 0.5 ? -1 : 1));
  });
  data = data.sort((a, b) => a.number - b.number);
  questions.value = data;
}
function getStats(stats) {
  if (stats.length != questions.value.length) {
    console.error("Error loading stats: Number of questions doesn't match");
  }
  stats.forEach(function (item) {
    if (questions.value[item.number - 1].number === item.number) {
      questions.value[item.number - 1].numCorrect = item.numCorrect;
      questions.value[item.number - 1].numIncorrect = item.numIncorrect;
    } else {
      console.log(item.number, questions.value[item.number - 1].number);
      console.error("Error loading stats");
    }
  });
  startTesting();
}
function startTesting() {
  questions.value = questions.value.sort((a, b) =>
    Math.random() > 0.5 ? -1 : 1
  );
  emit("data", questions.value);
}
</script>

<template>
  <div>
    <h1>Uploading your test data</h1>
    <div v-if="questions == null" class="stat-upload">
      <p>First you need to upload your questions:</p>
      <UploadFile @data="getData" uploadThing="Questions" />
    </div>
    <div v-else class="stat-upload">
      <div class="but-with-text">
        <p>(Optional) You can also upload statistics from a prior session:</p>
        <UploadFile @data="getStats" uploadThing="Statistics" />
      </div>
      <div class="but-with-text">
        <p>Or you can start testing right away:</p>
        <button class="but-file-upload" @click="startTesting()">
          <span class="but-text">Start testing</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.but-file-upload {
  display: flex;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 2px;
  width: 100%;
  text-align: center;
  border: 0px;
  background-color: #2a9d8f;
  color: white;
}
.but-with-text {
  margin: 20px;
}
</style>