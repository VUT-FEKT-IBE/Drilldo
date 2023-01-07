<script setup>
import { useViewerStore } from "@/stores/viewer";
import { storeToRefs } from "pinia";

const props = defineProps(["answerId"]);
const store = useViewerStore();

const { editQuestion } = storeToRefs(store);

function deleteAnswer() {
  const answerIndex = editQuestion.value.answers.findIndex(
    (x) => x.id === props.answerId
  );
  editQuestion.value.answers.splice(answerIndex, 1);
}
</script>

<template>
  <div class="answer-editor">
    <div class="delete-answer">
      <button class="button red" @click="deleteAnswer()">
        <span class="but-text">X</span>
      </button>
    </div>
    <input
      type="textbox"
      name="title"
      v-model="editQuestion.answers.find((x) => x.id === props.answerId).text"
      placeholder="Answer text"
    />
    <div class="correct-selection">
      <span>Correct</span>
      <input
        type="checkbox"
        v-model="
          editQuestion.answers.find((x) => x.id === props.answerId).correct
        "
      />
    </div>
  </div>
</template>

<style scoped>
.delete-answer {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.answer-editor {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;
}
.correct-selection {
  display: flex;
  flex-direction: row;
  width: 100px;
  justify-content: flex-end;
  gap: 10px;
}
.correct-selection span {
  display: inline-flex;
  align-items: center;
}
.answer-editor input[type="textbox"] {
  display: flex;
  flex-direction: row;
  width: 100%;
  text-align: right;
  background-color: var(--color-background);
  color: var(--color-text);
  border-radius: 5px;
  padding: 5px 5px;
  border: 1px solid var(--color-text);
}
.answer-editor input[type="checkbox"] {
  display: flex;
  flex-direction: row;
  width: 18px;
}
.but-text {
  line-height: 12px;
}
.button {
  height: fit-content;
  padding: 5px 10px;
}
</style>
