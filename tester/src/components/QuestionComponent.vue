<script setup>
import AnswerComponent from "./AnswerComponent.vue";

const props = defineProps(["question"]);
</script>

<template>
  <div class="question">
    <div class="title">
      {{ props.question.number }}. {{ props.question.question }}
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
</style>
