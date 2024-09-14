<script setup>
import { useRepo } from 'pinia-orm'
import { useViewerStore } from '@/stores/viewer'
import { storeToRefs } from 'pinia'

import QuestionModel from '../models/question'
import QuestionComponent from '../components/QuestionComponent.vue'
import QuestionControlComponent from '../components/QuestionControlComponent.vue'
import router from '../router/index'

const questionRepo = useRepo(QuestionModel)
const store = useViewerStore()

questionRepo.where('showResults', false).update({ showResults: true })

store.index = 0
store.showMobileMenu = false
store.viewMode = true
store.editMode = false
store.questions = questionRepo.with('answers').get()
const { index } = storeToRefs(store)
const { questions } = storeToRefs(store)

if (questionRepo.all().length === 0) {
  router.push('/')
}
</script>

<template>
  <div class="explore">
    <h1>Explore questions</h1>
    <div class="explore-container">
      <QuestionComponent
        v-if="questions.length >= 1"
        :key="questions[index].id"
        :question="questions[index]" />
      <QuestionControlComponent />
    </div>
  </div>
</template>

<style scoped>
.explore {
  width: 100%;
  max-width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.explore-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
}
</style>
