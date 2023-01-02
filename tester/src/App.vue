<script setup>
import { RouterLink, RouterView } from "vue-router";
import Menu from "./components/Menu.vue";
</script>

<template>
  <div>
    <Menu />

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
main {
  display: flex;
  place-items: center;
}
</style>
