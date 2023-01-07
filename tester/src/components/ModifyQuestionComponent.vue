<script setup>
import { useRepo } from "pinia-orm";
import { useViewerStore } from "@/stores/viewer";
import { storeToRefs } from "pinia";

import ModifyAnswerComponent from "./ModifyAnswerComponent.vue";
import QuestionModel from "../models/question";
import AnswerModel from "../models/answer";

const questionRepo = useRepo(QuestionModel);
const answerRepo = useRepo(AnswerModel);
const props = defineProps(["questionId"]);
const store = useViewerStore();

store.editQuestion = store.questions[store.index];

const { editQuestion } = storeToRefs(store);

function validateQuestionNumber() {
  const originalNumber = questionRepo.find(editQuestion.value.id).number;
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
</script>

<template>
  <div class="question">
    <div class="question-data">
      <input type="number" name="number" v-model="editQuestion.number" />
      <input type="text" name="title" v-model="editQuestion.question" />
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
  padding-top: 20px;
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
  flex-direction: row;
  width: 100%;
}
.question-data input[type="number"] {
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
.question-data input[type="text"] {
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
