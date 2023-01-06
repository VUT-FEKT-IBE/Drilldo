import { ref } from "vue";
import { defineStore } from "pinia";

export const useViewerStore = defineStore("viewer", () => {
  const index = ref(0);
  const viewMode = ref(false);
  const statsLoaded = ref(false);
  const showMobileMenu = ref(false);
  const questions = ref([]);
  function getIndex() {
    return index;
  }
  function next() {
    const next_num = index.value + 1;
    if (0 <= next_num && next_num <= questions.value.length - 1) {
      index.value = next_num;
    }
  }
  function previous() {
    const next_num = index.value - 1;
    if (0 <= next_num && next_num <= questions.value.length - 1) {
      index.value = next_num;
    }
  }

  return {
    index,
    viewMode,
    statsLoaded,
    showMobileMenu,
    questions,
    getIndex,
    next,
    previous,
  };
});
