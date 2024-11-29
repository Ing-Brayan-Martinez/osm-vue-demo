<script setup>
import {useAuthStore} from "@/stores/auth.store.js";
import {useNavigatorStore} from "@/stores/navigator.store.js";

const navigator = useNavigatorStore();
const authStore = useAuthStore();
</script>

<template>
  <div id="login-container">
    <div id="login-formulario">
      <h1>Hello World</h1>
    </div>
  </div>
</template>

<style>
@import '../main.css';

#login-container {
  width: 100%;
  height: 97vh;
  position: relative;
}

#login-container > div[id="login-formulario"] {
  width: 470px;
  height: 370px;
  padding: 20px;
  background-color: var(--maas-green);

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 10px;
}

</style>
