<script setup>
import { ref } from "vue";
import { useViewerStore } from "@/stores/viewer";
import { storeToRefs } from "pinia";
import { useRepo } from "pinia-orm";

import QuestionModel from "../models/question";
import AnswerModel from "../models/answer";

const answerRepo = useRepo(AnswerModel);
const questionRepo = useRepo(QuestionModel);

const props = defineProps(["questionId", "answerId"]);
const store = useViewerStore();
const { viewMode } = storeToRefs(store);
const answer = ref(answerRepo.where("id", props.answerId).first());

function toggleSelection() {
  answerRepo.save({
    id: props.answerId,
    isSelected: !answerRepo.find(props.answerId).isSelected,
  });

  // counting the score
  if (
    (answerRepo.find(props.answerId).isSelected &&
      answerRepo.find(props.answerId).correct) ||
    (!answerRepo.find(props.answerId).isSelected &&
      !answerRepo.find(props.answerId).correct)
  ) {
    questionRepo.save({
      id: props.questionId,
      score: Number(questionRepo.find(props.questionId).score) + 1,
    });
  } else {
    questionRepo.save({
      id: props.questionId,
      score: Number(questionRepo.find(props.questionId).score) - 1,
    });
  }
}
</script>

<template>
  <button
    class="button"
    v-bind:class="{
      selected: answerRepo.find(props.answerId).isSelected,
      light: !answerRepo.find(props.answerId).isSelected,
    }"
    v-if="!questionRepo.find(props.questionId).showResults"
    @click="toggleSelection()"
  >
    <span class="but-text">{{ answer.text }}</span>
  </button>
  <button
    class="button"
    v-bind:class="{
      light: !answerRepo.find(props.answerId).isSelected,
      green:
        answerRepo.find(props.answerId).correct &&
        answerRepo.find(props.answerId).isSelected,
      red:
        (answerRepo.find(props.answerId).correct &&
          !answerRepo.find(props.answerId).isSelected) ||
        (!answerRepo.find(props.answerId).correct &&
          answerRepo.find(props.answerId).isSelected),
    }"
    v-else-if="!viewMode"
    @click="toggleSelection()"
    disabled
  >
    <span class="but-text">{{ answer.text }}</span></button
  ><button
    class="button"
    v-bind:class="{
      correct: answerRepo.find(props.answerId).correct,
      light: !answerRepo.find(props.answerId).correct,
    }"
    v-else
    @click="toggleSelection()"
    disabled
  >
    <span class="but-text">{{ answer.text }}</span>
  </button>
</template>

<style scoped>
.button {
  width: 100%;
  text-align: center;
}
</style>
