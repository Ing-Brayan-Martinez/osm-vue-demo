<script setup>
import {ref} from "vue";

const visible = ref(false);
const message = ref('');

const show = (msg) => {
  message.value = msg;
  visible.value = true;
  setTimeout(() => {
    visible.value = false;
  }, 3000);
};

const hide = () => {
  visible.value = false;
};
</script>

<template>
  <div v-show="visible" class="toast">
    <div class="toast-body">
      {{ message }}
    </div>
    <button class="toast-close" @click="hide">X</button>
  </div>
</template>

<style scoped>
.toast {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #333;
  color: #fff;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.toast-body {
  margin-right: 30px;
}

.toast-close {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
}
</style>
