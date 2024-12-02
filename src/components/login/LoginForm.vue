<script setup>
import {useAuthStore} from "@/stores/auth.store.js";
import {useNavigatorStore} from "@/stores/navigator.store.js";
import IconMaasLogo from "@/components/splash/icons/IconMaasLogo.vue";
import {ref} from "vue";
import LoginToast from "@/components/login/LoginToast.vue";

const showToastV = ref(false);
const toastMessage = ref("");


const showToast = () => {
  toastMessage.value = '¡Acción realizada con éxito!';
  showToastV.value = true;
}





const navigator = useNavigatorStore();
const authStore = useAuthStore();

const email = ref("");
const password = ref("");

const onSubmit = () => {
  if (email === null) {
    navigator.showToast("Please enter your email");
    return;
  }
  if (password === null) {
    navigator.showToast("Please enter your password");
    return;
  }
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
        v-model="email"
        name="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        placeholder="Email"
        required
        type="email"
      >
      <input
        v-model="password"
        name="password"
        placeholder="Password"
        required
        type="password"
      >
      <button @click="onSubmit">Submit</button>
      <p>{{ email }}</p>
      <p>{{ password }}</p>
    </div>

    <button @click="showToast">Mostrar Toast</button>
    <LoginToast v-if="showToast" :message="toastMessage"/>
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

#login-form-container > div[id="login-formulario"] > input[type="email"] {
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
