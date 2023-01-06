<script setup>
const emit = defineEmits(["data"]);
const props = defineProps(["name", "filename"]);

function onTestSelect() {
  fetch(
    "https://raw.githubusercontent.com/VUT-FEKT-IBE/FEKT-tester/main/docs/data/" +
      props.filename
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
      emit("data", json);
    })
    .catch(function (err) {
      console.log(`Error: ${err}`);
    });
}
</script>

<template>
  <div>
    <button class="button" @click="onTestSelect()">
      <span class="but-text">{{ props.name }}</span>
    </button>
  </div>
</template>

<style scoped>
.button {
  width: 100%;
}
</style>
