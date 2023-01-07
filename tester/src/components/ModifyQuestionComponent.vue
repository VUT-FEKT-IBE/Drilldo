<script setup>
import { ref } from "vue";
import { useRepo } from "pinia-orm";
import { useViewerStore } from "@/stores/viewer";
import { storeToRefs } from "pinia";
import Compressor from "compressorjs";

import ModifyAnswerComponent from "./ModifyAnswerComponent.vue";
import QuestionModel from "../models/question";
import AnswerModel from "../models/answer";

const questionRepo = useRepo(QuestionModel);
const answerRepo = useRepo(AnswerModel);
const props = defineProps(["questionId"]);
const store = useViewerStore();

store.editQuestion = store.questions[store.index];

const { editQuestion } = storeToRefs(store);

function chooseFiles() {
  document.getElementById("fileUpload").click();
}
function validateQuestionNumber() {
  let originalNumber = -1;
  if (questionRepo.find(editQuestion.value.id) == null) {
    originalNumber = Math.max(...questionRepo.all().map((o) => o.number)) + 1;
  } else {
    originalNumber = questionRepo.find(editQuestion.value.id).number;
  }
  const existingQuestion = questionRepo
    .where("number", Number(editQuestion.value.number))
    .first();

  if (editQuestion.value.number < 1) {
    if (questionRepo.where("number", 1).first() === null) {
      editQuestion.value.number = 1;
    }
  } else if (existingQuestion !== null) {
    editQuestion.value.number = originalNumber;
  }
}
function addAnswer() {
  editQuestion.value.answers = editQuestion.value.answers.concat(
    answerRepo.make({ questionId: props.questionId })
  );
}
function saveQuestion() {
  validateQuestionNumber();
  answerRepo.where("questionId", props.questionId).delete();
  questionRepo.save(editQuestion.value);
}
function handleImageUpload(event) {
  if (event.target.files[0] !== undefined) {
    const file = event.target.files[0];
    new Compressor(file, {
      maxWidth: 600,
      convertSize: 100000,
      convertTypes: ["image/png", "image/webp"],
      success(result) {
        var reader = new FileReader();
        reader.readAsDataURL(result);
        reader.onloadend = function () {
          var base64data = reader.result;
          editQuestion.value.image = base64data;
        };
      },
      error(err) {
        console.log(err.message);
      },
    });
  }
}
console.log(editQuestion);
</script>

<template>
  <div class="question">
    <div class="question-data">
      <div class="question-title">
        <input type="number" name="number" v-model="editQuestion.number" />
        <input type="text" name="title" v-model="editQuestion.question" />
      </div>
      <div class="question-image">
        <input
          id="fileUpload"
          type="file"
          accept="image/*"
          @change="handleImageUpload($event)"
          hidden
        />
        <button class="image-upload button" @click="chooseFiles()">
          <span class="but-text">Upload image</span>
        </button>
        <button
          class="image-upload button red"
          @click="editQuestion.image = ''"
          v-if="editQuestion.image !== ''"
        >
          <span class="but-text">Delete image</span>
        </button>
      </div>
    </div>
    <div class="image" v-if="editQuestion.image !== ' '">
      <img v-bind:src="editQuestion.image" />
    </div>
    <div class="answers">
      <ModifyAnswerComponent
        v-for="answer in editQuestion.answers"
        :answerId="answer.id"
        :key="answer.id"
      />
    </div>
    <div class="buttons">
      <button class="button" @click="saveQuestion()">
        <span class="but-text">Save question</span>
      </button>
      <button class="button green" @click="addAnswer()">
        <span class="but-text">Add answer</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.question {
  display: flex;
  flex-direction: column;
  place-items: center;
  width: 100%;
  gap: 15px;
}

.title {
  display: flex;
  padding-bottom: 15px;
  width: 100%;
}

.answers {
  gap: 5px;
  display: flex;
  flex-direction: column;
  place-items: center;
  width: 100%;
}
.buttons {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
}
.button {
  width: 100%;
}
.question-data {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.question-title {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.question-image {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
}
.question-title input[type="number"] {
  display: flex;
  flex-direction: row;
  margin: 10px;
  width: 55px;
  text-align: right;
  background-color: var(--color-background);
  color: var(--color-text);
  border-radius: 5px;
  padding: 5px 5px;
  border: 1px solid var(--color-text);
}
.question-title input[type="text"] {
  display: flex;
  flex-direction: row;
  margin: 10px;
  width: 100%;
  text-align: right;
  background-color: var(--color-background);
  color: var(--color-text);
  border-radius: 5px;
  padding: 5px 5px;
  border: 1px solid var(--color-text);
}
.question-data input[type="checkbox"] {
  display: flex;
  flex-direction: row;
  margin: 10px;
  width: 30px;
}
</style>
