<template>
  <div v-if="route === 'splash'">
    <SplashView />
  </div>
  <div v-else-if="route === 'login'">
    <LoginView />
  </div>
  <div v-else-if="route === 'main'">
    <MainView />
  </div>
  <div v-else-if="route === 'loading'">
    <LoadingView />
  </div>
  <div v-else>
    Not A/B/C
  </div>
</template>

<script>
import MainView from "@/views/MainView.vue";
import {useGlobalStore} from "@/stores/global.store.js";
import SplashView from "@/views/SplashView.vue";
import LoginView from "@/views/LoginView.vue";
import LoadingView from "@/views/LoadingView.vue";

export default {
  name: 'App',
  components: {LoadingView, LoginView, SplashView, MainView},
  data() {
    return {
      route: useGlobalStore().route
    }
  },
  async mounted() {
    await useGlobalStore().onStart();
  },
}
</script>

<style scoped>
  @import './main.css';
</style>
