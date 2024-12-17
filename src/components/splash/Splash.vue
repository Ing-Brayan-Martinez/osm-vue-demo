<script setup>
import IconMaasLogo from "@/components/icon/IconMaasLogo.vue";
import Loading from "@/components/icon/Loading.vue";
import {onMounted} from "vue";
import {usePlannerStore} from "@/stores/planner.store.js";
import {storeToRefs} from "pinia";

const store = usePlannerStore();
const {isShowSplash} = storeToRefs(store);

onMounted(async () => {
  await store.onStart();
});
</script>

<template>
  <div v-if="isShowSplash" id="splash-layer">
    <div id="splash-logo-container">
      <IconMaasLogo/>
      <h1>Web Planner</h1>
      <p>
        The Maas platform web planner is an ideal tool for finding transport routes that will take
        you to your destination.
      </p>
      <Loading/>
    </div>
  </div>
</template>

<style>
@import '../../main.css';

#splash-layer {
  width: 100%;
  height: 100vh;

  background-color: var(--maas-white);

  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 2;
}

#splash-layer > div[id="splash-logo-container"] {
  width: 470px;
  height: 390px;
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
  border: 1px solid #000;
}

#splash-layer > div[id="splash-logo-container"] > svg {
  width: 300px;
}

#splash-layer > div[id="splash-logo-container"] > h1 {
  font-family: "Rubik", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-size: 30px;
  color: var(--maas-white);
}

#splash-layer > div[id="splash-logo-container"] > p {
  font-family: "Rubik", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  color: var(--maas-white);

  margin-bottom: 20px;
}
</style>
