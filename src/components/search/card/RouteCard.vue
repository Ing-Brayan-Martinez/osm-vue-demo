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
  <p>{{ props.name }}</p>
</template>

<style scoped>

</style>
