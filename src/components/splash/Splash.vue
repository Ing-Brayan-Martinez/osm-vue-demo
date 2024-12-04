<script setup>
import IconMaasLogo from "@/components/splash/icons/IconMaasLogo.vue";
import Loading from "@/components/splash/icons/Loading.vue";
import {onMounted} from "vue";
import {useSplashStore} from "@/stores/splash.store.js";
import {useNavigatorStore} from "@/stores/navigator.store.js";
import {SplashStatus} from "@/config/enums.js";

onMounted(async () => {
  const navigator = useNavigatorStore();
  const result = await useSplashStore().onStart();

  if (result === SplashStatus.SUCCESS) {
    navigator.navigateTo("/main");
  } else if (result === SplashStatus.SUCCESS_NOT_LOCATION) {
    navigator.navigateTo("/main");
  } else if (result === SplashStatus.FAILURE) {
    navigator.navigateTo("/splash");
  }
});
</script>

<template>
  <div id="splash-logo-container">
    <IconMaasLogo/>
    <h1>Web Planner</h1>
    <p>
      The Maas platform web planner is an ideal tool for finding transport routes that will take
      you to your destination.
    </p>
    <Loading/>
  </div>
</template>

<style>
@import '../../main.css';

div[id="splash-logo-container"] {
  width: 470px;
  height: 370px;
  padding: 20px;
  background-color: var(--maas-green);

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 10px;
}

div[id="splash-logo-container"] > svg {
  width: 300px;
}

div[id="splash-logo-container"] > h1 {
  font-family: "Rubik", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-size: 30px;
  color: var(--maas-white);
}

div[id="splash-logo-container"] > p {
  font-family: "Rubik", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  color: var(--maas-white);

  margin-bottom: 20px;
}
</style>
