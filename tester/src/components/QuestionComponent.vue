<script setup>
import { onMounted } from "vue";
import AnswerComponent from "./AnswerComponent.vue";
const MathJax = window.MathJax;

const props = defineProps(["question"]);
onMounted(() => {
  MathJax.typeset();
});
</script>

<template>
  <div class="question">
    <div class="question-title">
      {{ props.question.number }}. {{ props.question.question }}
    </div>
    <div class="image" v-if="props.question.image !== ''">
      <img v-bind:src="props.question.image" />
    </div>
    <div class="answers">
      <AnswerComponent
        v-for="answer in props.question.answers"
        :questionId="props.question.id"
        :answerId="answer.id"
        :key="props.number + '-' + answer.text"
      />
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

.question-title {
  width: 100%;
}

.answers {
  gap: 5px;
  display: flex;
  flex-direction: column;
  place-items: center;
  width: 100%;
}
</style>
