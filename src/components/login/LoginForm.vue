<script setup>
import {useAuthStore} from "@/stores/auth.store.js";
import {useNavigatorStore} from "@/stores/navigator.store.js";
import IconMaasLogo from "@/components/splash/icons/IconMaasLogo.vue";

const navigator = useNavigatorStore();
const authStore = useAuthStore();

const onSubmit = () => {
  alert("Login");
}
</script>

<template>

  <div id="login-form-container">

    <div id="login-logo">
      <IconMaasLogo/>
    </div>

    <div id="login-formulario">
      <h1>Login</h1>
      <input
        name="username"
        placeholder="Username"
        type="text"
      >
      <input
        name="password"
        placeholder="Password"
        type="password"
      >
      <button @click="onSubmit">Submit</button>
    </div>
  </div>
</template>

<style scoped>
@import '../../main.css';

#login-form-container {
  width: 510px;
  height: auto;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;

}

#login-form-container > div[id="login-logo"] {
  width: 470px;
  height: 120px;
  padding: 20px;

  background-color: var(--maas-green);
  margin-bottom: 20px;
  margin-top: 20px;

  border-radius: 10px;

  display: flex;
  flex-direction: row;
  justify-content: center;
}

#login-form-container > div[id="login-logo"] > svg {
  margin-top: -15px;
  margin-bottom: 0px;
  width: 400px;
}

#login-form-container > div[id="login-formulario"] {
  width: 470px;
  height: 250px;
  padding: 20px;

  margin-bottom: 20px;

  border-radius: 10px;
  border: 2px solid var(--maas-black);
}

#login-form-container > div[id="login-formulario"] > h1 {
  font-family: "Rubik", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-size: 50px;
  color: var(--maas-black);

  margin-top: 0px;
  margin-bottom: 0px;
}

#login-form-container > div[id="login-formulario"] > input[type="text"] {
  width: 97%;
  height: 30px;
  margin-top: 40px;
  margin-bottom: 20px;
  border-radius: 5px;
}

#login-form-container > div[id="login-formulario"] > input[type="password"] {
  width: 97%;
  height: 30px;
  margin-bottom: 20px;
  border-radius: 5px;
}

#login-form-container > div[id="login-formulario"] > button {
  width: 90px;
  padding: 5px;
  border-radius: 10px;
  background-color: var(--maas-green);
}
</style>
