<script setup>
import {defineProps} from "vue";
import Loading from "@/components/splash/icons/Loading.vue";

const props = defineProps({
  message: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="toast">
    <div class="toast-body">
      {{ props.message }}
    </div>
    <Loading class="toast-loader"/>
  </div>
</template>

<style scoped>
.toast {
  width: auto;
  height: 30px;
  padding: 15px;

  position: fixed;
  top: 20px;
  right: 20px;

  background-color: #5A63FD;

  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);


  display: flex;
  flex-direction: row;

}

.toast-body {
  font-family: "Rubik", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-size: 24px;
  color: #fff;

  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 50px;
}

.toast-loader {
  margin-top: -5px;
  width: 40px;
  height: 40px;
}

</style>
