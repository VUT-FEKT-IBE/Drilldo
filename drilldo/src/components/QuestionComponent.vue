<script setup>
import { onMounted } from 'vue'
import AnswerComponent from './AnswerComponent.vue'
const MathJax = window.MathJax

const props = defineProps(['question'])
onMounted(() => {
  MathJax.typeset()
})
</script>

<template>
  <div class="question">
    <div class="question-title">{{ props.question.number }}. {{ props.question.question }}</div>
    <div v-if="props.question.image !== ''" class="image">
      <img :src="props.question.image" />
    </div>
    <div class="answers">
      <AnswerComponent
        v-for="answer in props.question.answers"
        :key="props.number + '-' + answer.text"
        :question-id="props.question.id"
        :answer-id="answer.id" />
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
.image {
  max-width: 100%;
}
.image img {
  max-width: 100%;
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
