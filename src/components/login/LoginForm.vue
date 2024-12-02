<script setup>
import {useAuthStore} from "@/stores/auth.store.js";
import {useNavigatorStore} from "@/stores/navigator.store.js";
import IconMaasLogo from "@/components/splash/icons/IconMaasLogo.vue";
import {ref} from "vue";
import LoginToast from "@/components/login/LoginToast.vue";


const navigator = useNavigatorStore();
const authStore = useAuthStore();

//============================
//  Toast
//============================

const isVisibleToast = ref(false);
const message = ref("");
const color = ref("");

const showToast = (msg) => {
  //Mostrar mensaje de toast
  isVisibleToast.value = true;
  message.value = msg;
  color.value = "var(--maas-green)";

  //Esperar para cerrar el toast automáticamente
  setTimeout(() => {
    isVisibleToast.value = false;
  }, 3000);
}

//============================
//  Login
//============================

const email = ref("");
const password = ref("");

const onSubmit = () => {
  const regex = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";

  if (email.value === null) {
    showToast("Please enter your email");
    return;
  } else if (email.value === undefined) {
    showToast("Please enter your email");
    return;
  } else if (email.value === "") {
    showToast("Please enter your email");
    return;
  } else if (String(password.value).trim().match(regex) === null) {
    showToast("Please enter a valid email");
    return;
  }


  if (password.value === null) {
    showToast("Please enter your password");
    return;
  } else if (password.value === undefined) {
    showToast("Please enter your password");
    return;
  } else if (password.value === "") {
    showToast("Please enter your password");
    return;
  }

  const data = {
    email: email.value,
    password: password.value
  }

  authStore.onLogin(data)
    .then((result) => {
      if (result) {
        showToast("Login successful");
        navigator.navigateTo("/main");
      }
    })
    .catch((error) => {
      showToast(error);
    });

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
      <button @click="onSubmit">
        Submit
      </button>
      <p>{{ email }}</p>
      <p>{{ password }}</p>
    </div>

    <LoginToast
      v-if="isVisibleToast"
      :color="color"
      :message="message"
    />
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
