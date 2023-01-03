<script setup>
import { ref } from "vue";
const props = defineProps(["question", "answer"]);

function toggleSelection() {
  props.answer.isSelected = !props.answer.isSelected;
  if (props.answer.isSelected && props.answer.correct) {
    props.question.score++;
  } else {
    props.question.score--;
  }
}
</script>

<template>
  <button
    class="answer"
    v-bind:class="{ selected: props.answer.isSelected }"
    v-if="!props.question.showResults"
    @click="toggleSelection()"
  >
    <span class="but-text">{{ props.answer.text }}</span>
  </button>
  <button
    class="answer"
    v-bind:class="{
      correct: props.answer.correct && props.answer.isSelected,
      incorrect:
        (props.answer.correct && !props.answer.isSelected) ||
        (!props.answer.correct && props.answer.isSelected),
    }"
    v-else
    @click="toggleSelection()"
    disabled
  >
    <span class="but-text">{{ props.answer.text }}</span>
  </button>
</template>

<style scoped>
.answer {
  display: flex;
  border: 2px solid #0077b6;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 2px;
  width: 100%;
  text-align: center;
}
.answer.selected {
  background-color: #0077b6;
  color: white;
}
.answer.correct {
  background-color: #2a9d8f;
  color: white;
}
.answer.incorrect {
  background-color: #e76f51;
  color: white;
}
</style>
