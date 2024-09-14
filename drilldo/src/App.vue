<script setup>
import { RouterView } from 'vue-router'
import MenuComponent from './components/MenuComponent.vue'
</script>

<template>
  <div class="app-contents">
    <header>
      <MenuComponent />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  padding-top: 25px;
}
.app-contents {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
