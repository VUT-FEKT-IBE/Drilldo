<script setup>
import { RouterLink } from "vue-router";
import { useRepo } from "pinia-orm";
import { storeToRefs } from "pinia";

import { useViewerStore } from "@/stores/viewer";
import Question from "../models/question";

const store = useViewerStore();
const questionRepo = useRepo(Question);
const { showMobileMenu } = storeToRefs(store);
</script>

<template>
  <div class="nav-menu" :class="showMobileMenu ? 'open-menu' : 'closed-menu'">
    <div class="burger-container">
      <div class="menu-icon" @click="showMobileMenu = !showMobileMenu">
        <svg class="burger-icon">
          <path
            d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"
          />
        </svg>
      </div>
    </div>

    <div class="nav-content">
      <ul class="nav-items">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/load">Load</RouterLink></li>
        <li v-if="questionRepo.all().length >= 1">
          <RouterLink to="/explore">Explore</RouterLink>
        </li>
        <li v-if="questionRepo.all().length >= 1">
          <RouterLink to="/test">Test</RouterLink>
        </li>
        <li><RouterLink to="/edit">Edit</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.nav-content {
  display: flex;
  justify-content: center;
  padding: 10px;
  align-items: center;
}
.nav-items {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}
.burger-container {
  display: none;
}
.nav-items li a {
  padding: 0 10px;
  color: var(--menu-text);
}
.nav-items li a.router-link-active {
  font-weight: 700;
}

@media screen and (min-width: 768px) {
  .nav-content {
    border-radius: 5px;
    border: 0px;
    background-color: var(--menu-background);
    color: var(--menu-text);
  }
}
@media screen and (max-width: 768px) {
  .nav-menu {
    padding-top: 10px;
    margin: 0 10px 10px 0;
    width: 100%;
  }
  .nav-menu.open-menu {
    padding: 10px;
    border-radius: 5px;
    border: 0px;
    background-color: var(--menu-background);
    color: var(--menu-text);
  }
  .open-menu .nav-content {
    display: flex;
    padding: 0px;
  }
  .closed-menu .nav-content {
    display: none;
  }
  .nav-content {
    flex-direction: column;
    z-index: 100;
    position: relative;
    transition: all 0.2s ease-out;
  }
  .nav-items {
    flex-direction: column;
    width: 100%;
  }
  .nav-items li {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0px;
  }
  .nav-items li a {
    width: 100%;
    text-align: center;
  }
  .burger-container {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
  .burger-icon {
    display: block;
    margin-right: 10px;
    width: 28px;
    height: 28px;
    fill: var(--burger-fill);
  }
  .open-menu .burger-container .burger-icon {
    opacity: 1;
    margin-right: 0px;
    fill: var(--burger-fill-open);
  }
}
</style>
