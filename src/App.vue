<template>
  <div v-if="route === '/splash'">
    <SplashView />
  </div>
  <div v-else-if="route === '/login'">
    <AuthView/>
  </div>
  <div v-else-if="route === '/main'">
    <PlannerView/>
  </div>
  <div v-else>
    Not A/B/C
  </div>
</template>

<script setup>
import SplashView from "@/views/SplashView.vue";
import AuthView from "@/views/AuthView.vue";
import PlannerView from "@/views/PlannerView.vue";

import {useNavigatorStore} from "@/stores/navigator.store.js";
import {storeToRefs} from "pinia";

const store = useNavigatorStore();
const {route} = storeToRefs(store);
</script>

<style scoped>
  @import './main.css';
</style>
