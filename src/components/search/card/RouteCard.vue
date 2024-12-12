<script setup>
import {defineProps} from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true
  },

});
</script>

<template>
  <div id="route-card">
    <h1>{{ props.name }}</h1>
  </div>
</template>

<style scoped>

#route-card {
  width: 100%;
  height: 150px;
  padding: 10px;

  margin-bottom: 10px;
  background-color: white;
  border-radius: 10px;

  border: 1px solid #000;
}
</style>
