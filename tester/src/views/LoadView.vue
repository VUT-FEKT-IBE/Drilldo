<script setup>
import UploadJsonComponent from "../components/UploadJsonComponent.vue";
import QuestionModel from "../models/question";
import AnswerModel from "../models/answer";
import { useRepo } from "pinia-orm";
import { useViewerStore } from "@/stores/viewer";

const questionRepo = useRepo(QuestionModel);
const answerRepo = useRepo(AnswerModel);
const store = useViewerStore();

store.showMobileMenu = false;

function getData(data) {
  data.forEach(function (item) {
    let maxScore = 0;
    item.answers.forEach(function (answer) {
      if (answer.correct) {
        maxScore++;
      }
    });
    questionRepo.save({
      number: item.number,
      question: item.question,
      maxScore: maxScore,
      answers: item.answers,
    });
  });
}
function getStats(stats) {
  if (stats.length != questionRepo.all().length) {
    console.error("Error loading stats: Number of questions doesn't match");
  }
  stats.forEach(function (item) {
    questionRepo
      .where("number", item.number)
      .update({ numCorrect: item.numCorrect, numIncorrect: item.numIncorrect });
  });
  store.statsLoaded = true;
}
</script>

<template>
  <div class="loader-container">
    <h1>Uploading your test data</h1>
    <div class="but-par">
      <p v-if="questionRepo.all().length === 0">
        First you need to upload your questions:
      </p>
      <UploadJsonComponent
        @data="getData"
        uploadThing="Questions"
        v-if="questionRepo.all().length === 0"
      />
    </div>
    <div class="but-container" v-if="questionRepo.all().length >= 1">
      <div class="but-par" v-if="!store.statsLoaded">
        <p class="stats text">
          (Optional) You can also upload statistics from a prior session to
          allow question shuffle to prefer questions where you make mistakes.
        </p>
        <UploadJsonComponent @data="getStats" uploadThing="Statistics" />
      </div>
      <div class="but-par" :class="{ offset: !store.statsLoaded }">
        <p class="explore text">Explore questions to revise your knowledge:</p>
        <button class="explore button" @click="$router.push('/explore')">
          <span class="but-text">Explore questions</span>
        </button>
      </div>
      <div class="but-par">
        <p class="test text">Or you can start testing right away:</p>
        <button class="test button" @click="$router.push('/test')">
          <span class="but-text">Start testing</span>
        </button>
      </div>
      <div class="but-par offset">
        <p class="reset text">
          If you want to clear all questions, click this button:
        </p>
        <button
          class="reset button"
          @click="
            questionRepo.flush();
            answerRepo.flush();
          "
        >
          <span class="but-text">Reset questions</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loader-container {
  display: flex;
  flex-direction: column;
}
h1 {
  margin-bottom: 20px;
}

.but-par div {
  margin-top: 5px;
}
.button {
  display: flex;
  width: 100%;
}

.but-container {
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  max-width: 500px;
  gap: 10px;
}
.offset {
  margin-top: 20px;
}
</style>
