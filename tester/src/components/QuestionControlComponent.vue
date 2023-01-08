<script setup>
import { nextTick } from "vue";
import { useRepo } from "pinia-orm";
import { useViewerStore } from "@/stores/viewer";
import { storeToRefs } from "pinia";

import QuestionModel from "../models/question";

const MathJax = window.MathJax;

const questionRepo = useRepo(QuestionModel);
const store = useViewerStore();

const { index } = storeToRefs(store);
const { viewMode } = storeToRefs(store);
const { editMode } = storeToRefs(store);
const { questions } = storeToRefs(store);

async function showRes() {
  const questionId = questions.value[index.value].id;
  questionRepo.save({
    id: questionId,
    showResults: true,
  });
  if (!viewMode.value) {
    if (
      questionRepo.find(questionId).score ===
      questionRepo.find(questionId).maxScore
    ) {
      questionRepo.save({
        id: questionId,
        numCorrect: Number(questionRepo.find(questionId).numCorrect) + 1,
      });
    } else {
      questionRepo.save({
        id: questionId,
        numIncorrect: Number(questionRepo.find(questionId).numIncorrect) + 1,
      });
    }
  }
  await nextTick();
  MathJax.typeset();
}
async function next() {
  const questionId = questions.value[index.value].id;
  if (!questionRepo.find(questionId).showResults) {
    showRes();
  } else {
    store.next();
  }
  await nextTick();
  MathJax.typeset();
}
function previous() {
  store.previous();
}
function downloadData() {
  let stats = JSON.parse(JSON.stringify(questionRepo.all()));

  // keep only the statistics related attributes of the objects
  stats.forEach(function (item, index) {
    stats[index] = {
      number: item.number,
      numCorrect: item.numCorrect,
      numIncorrect: item.numIncorrect,
    };
  });
  stats = stats.sort((a, b) => a.number - b.number);
  downloadString(JSON.stringify(stats, null, 2), "text/json", "stats.json");
}
function downloadString(text, fileType, fileName) {
  var blob = new Blob([text], { type: fileType });
  var a = document.createElement("a");
  a.download = fileName;
  a.href = URL.createObjectURL(blob);
  a.dataset.downloadurl = [fileType, a.download, a.href].join(":");
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(function () {
    URL.revokeObjectURL(a.href);
  }, 1500);
}
</script>

<template>
  <div class="question-control">
    <div class="controls-container">
      <button class="button" @click="previous()" v-if="!editMode">
        <span class="but-text">Previous</span>
      </button>
      <div class="slider-container">
        <input
          class="slider"
          type="range"
          min="0"
          :max="questions.length - 1"
          step="1"
          v-model="store.index"
          :disabled="!store.viewMode && !store.editMode"
        />
        <div class="slider-index">
          {{ 1 + Number(index) }}/{{ questions.length }}
        </div>
      </div>
      <button class="button" @click="next()" v-if="!editMode">
        <span class="but-text">Next</span>
      </button>
    </div>
    <div class="data-container" v-if="!viewMode && !editMode">
      <button
        class="button data"
        @click="showRes()"
        v-if="!questionRepo.find(questions[index].id).showResults"
      >
        <span class="but-text">Results</span>
      </button>
      <button class="button data" @click="downloadData()">
        <span class="but-text">Download stats</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.controls-container {
  display: flex;
  flex-direction: row;
  max-width: 600px;
  width: 100%;
  gap: 10px;
  margin-bottom: 20px;
}
.data-container {
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
.button.data {
  width: 100%;
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
