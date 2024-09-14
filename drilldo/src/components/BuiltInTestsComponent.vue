<script setup>
import { useRepo } from 'pinia-orm'
import { useViewerStore } from '@/stores/viewer'

import UploadJsonComponent from '../components/UploadJsonComponent.vue'
import DataFile from '../components/DataFile.vue'
import QuestionModel from '../models/question'
import AnswerModel from '../models/answer'

const questionRepo = useRepo(QuestionModel)
const answerRepo = useRepo(AnswerModel)
const store = useViewerStore()

function fetchData(data) {
  questionRepo.flush()
  answerRepo.flush()
  data.forEach(function (item) {
    let maxScore = 0
    item.answers.forEach(function (answer) {
      if (answer.correct) {
        maxScore++
      }
    })
    questionRepo.save({
      number: item.number,
      question: item.question,
      maxScore: maxScore,
      answers: item.answers,
    })
  })
}
function getStats(stats) {
  if (stats.length != questionRepo.all().length) {
    console.error("Error loading stats: Number of questions doesn't match")
  }
  stats.forEach(function (item) {
    questionRepo
      .where('number', item.number)
      .update({ numCorrect: item.numCorrect, numIncorrect: item.numIncorrect })
  })
  store.statsLoaded = true
}
</script>

<template>
  <div class="premade-tests">
    <h3>Select from pre-made question sets:</h3>
    <div class="data-buttons">
      <DataFile name="FEKT Paragraf 4" filename="paragraf4.json" @data="fetchData" />
    </div>
    <div v-if="questionRepo.all().length > 0 && !store.statsLoaded" class="questions-loaded offset">
      <h4>Optionally load test statistics that you downloaded earlier</h4>
      <UploadJsonComponent button-text="Load statistics" @data="getStats" />
    </div>
  </div>
</template>

<style scoped>
.premade-tests {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.offset {
  padding-top: 10px;
}
h3 {
  padding-bottom: 10px;
}
.button {
  width: 100%;
}
.data-buttons {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
}
</style>
