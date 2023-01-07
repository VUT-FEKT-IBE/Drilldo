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
  <div class="home">
    <div class="load-route">
      <h3>Load your questions here:</h3>
      <button class="explore button" @click="$router.push('/load')">
        <span class="but-text">Load data</span>
      </button>
    </div>
    <BuiltInTestsComponent />
    <div class="navigator offset" v-if="questionRepo.all().length">
      <div class="but-par">
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
.home {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  place-items: center;
  gap: 15px;
}
.load-route {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.navigator {
  width: 100%;
}
.offset {
  padding-top: 10px;
}
.button {
  width: 100%;
}
h1 {
  width: 100%;
}
h3 {
  padding-bottom: 10px;
}
</style>
