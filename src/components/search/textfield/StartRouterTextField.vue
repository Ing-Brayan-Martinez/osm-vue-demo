<script setup>

import {ref} from "vue";
import {usePlannerStore} from "@/stores/planner.store.js";
import {storeToRefs} from "pinia";

const dialog = ref(false);

const store = usePlannerStore();
const {startRute} = storeToRefs(store);

</script>

<template>

  <v-dialog v-model="dialog" max-width="400">
    <v-card>
      <v-card-title class="headline">Alerta</v-card-title>
      <v-card-text>
        Este es un mensaje de alerta.
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-text-field
      v-model="startRute"
    label="Start Rute"
    v-on:click="dialog = true"
  />
</template>

<style scoped>

</style>
