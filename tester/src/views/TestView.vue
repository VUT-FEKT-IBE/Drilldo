<script setup>
import { ref } from "vue";
import { useRepo } from "pinia-orm";
import { useViewerStore } from "@/stores/viewer";
import { storeToRefs } from "pinia";

import QuestionModel from "../models/question";
import QuestionComponent from "../components/QuestionComponent.vue";
import QuestionControlComponent from "../components/QuestionControlComponent.vue";
import router from "../router/index";

const questionRepo = useRepo(QuestionModel);
const store = useViewerStore();

questionRepo.where("showResults", true).update({ showResults: false });

store.index = 0;
store.showMobileMenu = false;
store.viewMode = false;
store.editMode = false;
const { index } = storeToRefs(store);
const { questions } = storeToRefs(store);

const questionNumber = ref(questionRepo.all().length);
const maxAnswerNumber = ref(4);
const weightedSorting = ref(true);
const testReady = ref(false);

if (questionRepo.all().length === 0) {
  router.push("/");
}

function testSetup() {
  const questions = questionRepo.with("answers").get();
  if (!weightedSorting.value) {
    questions.sort((a, b) => {
      return Math.random() > 0.5 ? 1 : -1;
    });
  } else {
    questions.sort((a, b) => {
      if (
        (a.numIncorrect + a.numCorrect === 0 &&
          !(b.numIncorrect + b.numCorrect === 0)) ||
        (!(a.numIncorrect + a.numCorrect === 0) &&
          b.numIncorrect + b.numCorrect === 0)
      ) {
        // if one of the compared questions hasn't been tested yet it has a preference
        return a.numIncorrect + a.numCorrect < b.numIncorrect + b.numCorrect
          ? -1
          : 1;
      } else if (a.numIncorrect !== b.numIncorrect) {
        // more mistakes == more preference
        return a.numIncorrect > b.numIncorrect ? -1 : 1;
      } else if (a.numCorrect !== b.numCorrect) {
        // more correct tries == less preference
        return a.numCorrect < b.numCorrect ? -1 : 1;
      } else {
        // randomize the indecisive
        return Math.random() > 0.5 ? 1 : -1;
      }
    });
  }
  // keep only the desired number of questions (from the start)
  if (questionNumber.value >= 0) {
    questions.length = questionNumber.value;
    questions.sort((a, b) => {
      return Math.random() > 0.5 ? 1 : -1;
    });
  }

  questions.forEach(function (question) {
    let maxScore = 0;
    question.answers.sort((a, b) => {
      return Math.random() > 0.5 ? 1 : -1;
    });

    // keep only the desired number of answers in each question
    if (
      maxAnswerNumber.value > 0 &&
      maxAnswerNumber.value <= question.answers.length
    ) {
      question.answers.length = maxAnswerNumber.value;
    }

    question.answers.forEach(function (answer) {
      if (answer.correct) {
        maxScore++;
      }
    });
    questionRepo.save({
      id: question.id,
      maxScore: maxScore,
    });
  });

  store.questions = questions;
  testReady.value = !testReady.value;
}
function validateQuestionNumber() {
  if (questionNumber.value > questionRepo.all().length) {
    questionNumber.value = questionRepo.all().length;
  } else if (questionNumber.value < 0) {
    questionNumber.value = 1;
  }
}
function validateAnswerNumber() {
  if (questionNumber.value < 0) {
    questionNumber.value = 0;
  }
}
</script>

<template>
  <div class="view-container">
    <div class="test-selector" v-if="!testReady">
      <h1>Create your own test:</h1>
      <div class="form">
        <span>Select number of questions to test:</span>
        <input
          type="number"
          v-model="questionNumber"
          @input="validateQuestionNumber()"
        />
      </div>
      <div class="form">
        <span>
          Select maximum number of answers to be shown per question (0 to show
          all)
        </span>
        <input
          type="number"
          v-model="maxAnswerNumber"
          @input="validateAnswerNumber()"
        />
      </div>
      <div class="form">
        <span>
          Do you want to use statistics to prefer questions where you make
          mistakes more often?
        </span>
        <input type="checkbox" v-model="weightedSorting" />
      </div>
      <button class="button" @click="testSetup()">
        <span class="but-text">Start</span>
      </button>
    </div>
    <div class="test-container" v-else>
      <QuestionComponent
        v-if="questions.length >= 1"
        :question="questions[index]"
        :key="questions[index].id"
      />
      <QuestionControlComponent />
    </div>
  </div>
</template>

<style scoped>
.view-container {
  max-width: 600px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
}
.test-container {
  max-width: 600px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
}
.test-selector {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 25px;
}
.form {
  display: flex;
  flex-direction: row;
  max-width: 500px;
  justify-content: space-between;
}
.form input[type="number"] {
  display: flex;
  flex-direction: row;
  margin: 10px;
  width: 45px;
  text-align: right;
  background-color: var(--color-background);
  color: var(--color-text);
  border-radius: 5px;
  padding: 5px 5px;
  border: 1px solid var(--color-text);
}
.form input[type="checkbox"] {
  display: flex;
  flex-direction: row;
  margin: 10px;
  width: 30px;
}
</style>
