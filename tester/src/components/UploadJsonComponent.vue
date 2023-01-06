<script setup>
const emit = defineEmits(["data"]);
const props = defineProps(["uploadThing"]);

function chooseFiles() {
  document.getElementById("fileUpload").click();
}

function onFileUpload($event) {
  const file = $event.target.files[0];
  const reader = new FileReader();
  if (file) {
    reader.readAsText(file);
    reader.onload = () => {
      // convert the JSON string to objects
      const result = JSON.parse(reader.result);
      // Emit the file with the new previewBase64 property on it

      emit("data", result);
    };
    reader.onerror = (error) => {
      console.log("Error ", error);
    };
  }
}
</script>

<template>
  <div>
    <input id="fileUpload" type="file" @change="onFileUpload($event)" hidden />
    <button class="file-upload button" @click="chooseFiles()">
      <span class="but-text">Select {{ props.uploadThing }}</span>
    </button>
  </div>
</template>

<style scoped>
.button {
  display: flex;
  border-radius: 5px;
  padding: 10px 20px;
  width: 100%;
}
</style>
