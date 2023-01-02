<script setup>
import { ref } from "vue";

import Question from "./Question.vue";

const props = defineProps(["questions"]);
const index = ref(0);
function showRes() {
  props.questions[index.value].showResults =
    !props.questions[index.value].showResults;
}
function move_by(num) {
  const next_num = index.value + num;
  if (0 <= next_num && next_num <= props.questions.length - 1) {
    if (num === 1) {
      if (props.questions[index.value].showResults !== true) {
        props.questions[index.value].showResults = true;
      } else {
        props.questions[index.value].showResults = true;
        if (
          props.questions[index.value].maxScore ===
          props.questions[index.value].score
        ) {
          props.questions[index.value].numCorrect++;
        } else {
          props.questions[index.value].numIncorrect++;
        }
        index.value = next_num;
      }
    } else {
      index.value = next_num;
    }
  }
}
function downloadStats() {
  let stats = JSON.parse(JSON.stringify(props.questions));
  stats.forEach(function (v) {
    delete v.answers;
    delete v.maxScore;
    delete v.score;
    delete v.showResults;
    delete v.text;
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
  <div class="test">
    <div class="question">
      <Question
        :question="props.questions[index]"
        :key="props.questions.number"
      />
      <span>{{ index + 1 }}/{{ props.questions.length }}</span>
    </div>
    <div class="controls">
      <div class="subcontrols movement">
        <button class="but-control" @click="move_by(-1)">
          <span class="but-text">Previous</span>
        </button>
        <button class="but-control" @click="move_by(1)">
          <span class="but-text">Next</span>
        </button>
      </div>
      <div class="subcontrols misc">
        <button class="but-control" @click="showRes()">
          <span class="but-text">Results</span>
        </button>
        <button class="but-control" @click="downloadStats()">
          <span class="but-text">Download stats</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.question {
  display: flex;
  flex-direction: column;
  place-items: center;
  margin: 20px 0px;
  width: 100%;
}
.test {
  display: flex;
  flex-direction: column;
  place-items: center;
  width: 100%;
  max-width: 600px;
  margin: 20px 0px;
}
.controls {
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  margin: 0px 40px;
}
.subcontrols {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  margin: 0px 40px;
}
.but-control {
  display: flex;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 5px;
  width: 100%;
  text-align: center;
  border: 0px;
  background-color: #2a9d8f;
  color: white;
}
.movement .but-control {
  background-color: #2a9d8f;
  color: white;
}
.misc .but-control {
  background-color: #516672;
  color: white;
}
</style>

