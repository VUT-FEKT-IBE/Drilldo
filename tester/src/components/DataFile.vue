<script setup>
const emit = defineEmits(["data"]);
const props = defineProps(["name", "filename"]);

function onFileUpload($event) {
    fetch('data/' + props.filename)
        .then(function(response) {
            return response.json();
        })
        .then(function(json){
            console.log(json)
            emit("data", json);
        })
        .catch(function(err) {
            console.log(`Error: ${err}` )
        });
}
</script>

<template>
  <div>
    <button class="but-file-upload" @click="onFileUpload()">
      <span class="but-text">Select {{ props.name }}</span>
    </button>
  </div>
</template>

<style scoped>
.but-file-upload {
  display: flex;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 2px;
  width: 100%;
  text-align: center;
  border: 0px;
  background-color: #2a9d8f;
  color: white;
}
</style>