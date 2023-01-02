<script setup>
import Answer from "./Answer.vue";
const props = defineProps(["question"]);

function getResult() {
  console.log("getResult");
}
defineExpose({ getResult });
</script>

<template>
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
</template>

<style scoped>
.title {
  display: flex;
  width: 100%;
}
.answers {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  place-items: center;
  width: 100%;
}
</style>