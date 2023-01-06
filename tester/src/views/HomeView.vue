<script setup>
import { useRepo } from "pinia-orm";
import { useViewerStore } from "@/stores/viewer";

import BuiltInTestsComponent from "../components/BuiltInTestsComponent.vue";
import QuestionModel from "../models/question";

const questionRepo = useRepo(QuestionModel);
const store = useViewerStore();

store.showMobileMenu = false;
</script>

<template>
  <div class="app">
    <div class="load-route">
      <h3>Load your questions here:</h3>
      <button class="explore button" @click="$router.push('/load')">
        <span class="but-text">Load data</span>
      </button>
    </div>
    <BuiltInTestsComponent />
    <div class="navigator offset" v-if="questionRepo.all().length">
      <div class="but-par" :class="{ offset: !store.statsLoaded }">
        <p class="explore text">Explore questions to revise your knowledge:</p>
        <button class="explore button" @click="$router.push('/explore')">
          <span class="but-text">Explore questions</span>
        </button>
      </div>
      <div class="but-par">
        <p class="test text">Or you can start testing right away:</p>
        <button class="test button" @click="$router.push('/test')">
          <span class="but-text">Start testing</span>
        </button>
      </div>
    </div>
    <!-- Provide basic navigation and have the ability to use preincluded question sets here -->
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  width: 100%;
  place-items: center;
  padding: 25px;
}
.load-route {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  padding-bottom: 25px;
}
.navigator {
  width: 100%;
  max-width: 500px;
}
.offset {
  padding-top: 25px;
}
.button {
  width: 100%;
}
h3 {
  padding-bottom: 10px;
}
p {
  width: 100%;
  max-width: 600px;
}
</style>
