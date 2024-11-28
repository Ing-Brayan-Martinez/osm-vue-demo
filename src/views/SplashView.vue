<script setup>

import IconMaasLogo from "@/components/icons/IconMaasLogo.vue";
import Loading from "@/components/icons/Loading.vue";
</script>

<template>
  <div id="splash-container">
    <div id="splash-logo-container">
      <IconMaasLogo />
      <h1>Web Planner</h1>
      <p>
        The Maas platform web planner is an ideal tool for finding transport routes that will take you to your destination.
      </p>
      <Loading />
    </div>
  </div>
</template>

<style scoped>
#splash-container {
  width: 100%;
  height: 97vh;
  position: relative;
}

#splash-container > div[id="splash-logo-container"] {
  width: 470px;
  height: 370px;
  padding: 20px;
  background-color:  rgb(104, 214, 57);;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 10px;
}

#splash-container > div[id="splash-logo-container"] > svg {
  width: 300px;
}

#splash-container > div[id="splash-logo-container"] > h1 {
  font-family: "Rubik", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-size: 30px;
  color: white;
}

#splash-container > div[id="splash-logo-container"] > p {
  font-family: "Rubik", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  color: white;

  margin-bottom: 20px;
}
</style>
