<script setup>
import { useRepo } from "pinia-orm";
import { useViewerStore } from "@/stores/viewer";
import { storeToRefs } from "pinia";

import QuestionModel from "../models/question";
import ModifyQuestionComponent from "../components/ModifyQuestionComponent.vue";
import QuestionControlComponent from "../components/QuestionControlComponent.vue";

const questionRepo = useRepo(QuestionModel);
const store = useViewerStore();

questionRepo.where("showResults", false).update({ showResults: false });

store.index = 0;
store.showMobileMenu = false;
store.viewMode = false;
store.editMode = true;
store.questions = questionRepo.with("answers").get();
if (questionRepo.all().length === 0) {
  store.questions = [questionRepo.make()];
}

const { index } = storeToRefs(store);
const { questions } = storeToRefs(store);
function addQuestion() {
  const number = Math.max(...questions.value.map((o) => o.number)) + 1;
  questions.value.push(questionRepo.make({ number: number }));
}
function deleteQuestion() {
  questionRepo.destroy(questions.value[index.value].id);
  questions.value.splice(index.value, 1);
  store.previous();
  if (questionRepo.all().length === 0) {
    store.questions = [questionRepo.make()];
  }
}
function downloadQuestions() {
  let questions = JSON.parse(
    JSON.stringify(questionRepo.with("answers").get())
  );

  // keep only the attributes required
  questions.forEach(function (item, index) {
    item.answers.forEach(function (answer, index) {
      item.answers[index] = {
        text: answer.text,
        correct: answer.correct,
      };
    });
    questions[index] = {
      number: item.number,
      question: item.question,
      answers: item.answers,
    };
  });
  questions = questions.sort((a, b) => a.number - b.number);
  downloadString(
    JSON.stringify(questions, null, 2),
    "text/json",
    "questions.json"
  );
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
  <div class="edit">
    <h1>Edit question sets</h1>
    <div class="edit-container">
      <ModifyQuestionComponent
        v-if="store.questions.length >= 1"
        :questionId="questions[index].id"
        :key="questions[index].id"
      />
      <div class="edit-controls">
        <div class="question-buttons">
          <button class="button red" @click="deleteQuestion()">
            <span class="but-text">Delete question</span>
          </button>
          <button class="button" @click="downloadQuestions()">
            <span class="but-text">Download questions</span>
          </button>
          <button class="button green" @click="addQuestion()">
            <span class="but-text">Add question</span>
          </button>
        </div>
        <QuestionControlComponent />
      </div>
    </div>
  </div>
</template>

<style scoped>
.edit {
  width: 100%;
  max-width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.edit-container {
  max-width: 600px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
}
.edit-controls {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
}
.question-buttons {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
}
.button {
  width: 100%;
}
</style>
