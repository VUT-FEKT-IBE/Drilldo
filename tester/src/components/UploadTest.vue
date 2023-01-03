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
    questions.value.forEach(function (question) {
      if (question.number === item.number) {
        question.numCorrect = item.numCorrect;
        question.numIncorrect = item.numIncorrect;
      }
    });
  });
  startTesting();
}
function startTesting(view = false) {
  if (view) {
    questions.value.forEach(function (item) {
      item.showResults = true;
      item.viewOnly = true;
      item.answers.forEach(function (answer) {
        if (answer.correct) {
          answer.isSelected = true;
        }
      });
    });
  } else {
    questions.value.sort((a, b) => {
      if (a.numIncorrect !== b.numIncorrect) {
        return a.numIncorrect > b.numIncorrect ? -1 : 1;
      } else if (a.numCorrect !== b.numCorrect) {
        return a.numCorrect < b.numCorrect ? -1 : 1;
      } else {
        return Math.random() > 0.5 ? 1 : -1;
      }
    });
    console.log(questions.value);
  }
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
        <button class="but-file-upload" @click="startTesting(true)">
          <span class="but-text">View questions</span>
        </button>
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
