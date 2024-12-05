<script setup>

import {ref} from "vue";

const dialog = ref(false);
const itemsEnd = ref(['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']);

</script>

<template>

  <v-dialog v-model="dialog" max-width="290">
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

  <v-autocomplete
    :items="itemsEnd"
    label="End Rute"
    v-on:click="dialog = true"
  />
</template>

<style scoped>

</style>
