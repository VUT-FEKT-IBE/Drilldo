<script setup>
import Answer from "./Answer.vue";
const props = defineProps(["question"]);

function getResult() {
  console.log("getResult");
}
defineExpose({ getResult });
</script>

<template>
  <div class="question">
    <div class="title">
      {{ props.question.number }}. {{ props.question.text }}
    </div>
    <div class="answers">
      <Answer
        v-for="answer in props.question.answers"
        :question="props.question"
        :answer="answer"
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
  max-width: fit-content;
  margin: 20px 0px;
}
.title {
  display: flex;
}
.answers {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  place-items: center;
  max-width: fit-content;
}
</style>