<template>
  <div v-if="route === '/splash'">
    <SplashView />
  </div>
  <div v-else-if="route === '/login'">
    <AuthView/>
  </div>
  <div v-else-if="route === '/main'">
    <MainView />
  </div>
  <div v-else>
    Not A/B/C
  </div>
</template>

<script setup>
import SplashView from "@/views/SplashView.vue";
import AuthView from "@/views/AuthView.vue";
import MainView from "@/views/MainView.vue";

import {useGlobalStore} from "@/stores/global.store.js";
import {storeToRefs} from "pinia";

const store = useGlobalStore();
const {route} = storeToRefs(store);
</script>

<style scoped>
  @import './main.css';
</style>
