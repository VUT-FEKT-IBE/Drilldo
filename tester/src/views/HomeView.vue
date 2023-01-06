<script setup>
import { ref } from "vue";
import { useViewerStore } from "@/stores/viewer";

const store = useViewerStore();
store.showMobileMenu = false;

const view = ref(false);
const ready = ref(false);
function getReady(data) {
  view.value = data.view;
  ready.value = true;
}
</script>

<template>
  <div class="app">
    <p>This is a work in progress version</p>
    <p>
      Use the navigation bar to upload your questions, explore them and test
      your knowledge.
    </p>
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
p {
  width: 100%;
  max-width: 600px;
}
</style>
