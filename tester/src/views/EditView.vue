<script setup>
import Question from "../models/question";
import { useRepo } from "pinia-orm";
import { useViewerStore } from "@/stores/viewer";

const store = useViewerStore();
store.showMobileMenu = false;

const questionRepo = useRepo(Question);
</script>

<template>
  <div class="app">
    <p>Nothing here yet!</p>
    <p>Feel free to contribute to solve this issue</p>
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
p {
  width: 100%;
  max-width: 600px;
}
</style>
