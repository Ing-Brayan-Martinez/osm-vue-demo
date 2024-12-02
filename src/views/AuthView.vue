<script setup>

import LoginForm from "@/components/login/LoginForm.vue";
</script>

<template>
  <div id="login-container">
    <LoginForm/>
  </div>
</template>

<style>
@import '../main.css';

#login-container {
  width: 100%;
  height: 97vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
}

</style>
