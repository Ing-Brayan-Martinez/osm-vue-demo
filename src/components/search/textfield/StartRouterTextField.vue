<script setup>

import {computed, ref} from "vue";
import {usePlannerStore} from "@/stores/planner.store.js";
import {storeToRefs} from "pinia";

// Store
const store = usePlannerStore();

// Para controlar el dialog
const dialog = ref(false);

// para controlar el campo de búsqueda
const searchTerm = ref("");
const loading = ref(false);
const rules = {
  required: v => !!v || 'Este campo es requerido'
};

// Para buscar los datos
const onInput = () => {
  loading.value = true
  console.log(`Buscando: ${searchTerm.value}`)

  const data = {
    "input": `${searchTerm.value}`,
    "withProducts": "1",
    "type": "S",
    "maxNo": ""
  };

  store.onRetrieveOriginLocationByName(data)
    .then(() => {
      console.log(`Busqueda completada: ${searchTerm.value}`)
      loading.value = false
    });
}


// Para obtener los datos
const {items} = storeToRefs(store);


// Para seleccionar un item de los datos obtenidos
const onSelect = () => {

}

const startRute = computed(() => {
  if (searchTerm.value.length > 3) {
    return "origin: " + searchTerm.value
  } else {
    return "";
  }
})
</script>

<template>

  <v-dialog
    v-model="dialog"
    max-width="400"
  >
    <v-card>

      <v-card-title class="headline">Search Route</v-card-title>

      <v-card-text>
        <p>{{ searchTerm }}</p>
        <v-text-field
          v-model="searchTerm"
          :loading="loading"
          :rules="[rules.required]"
          append-icon="mdi-magnify"
          density="compact"
          hide-details
          single-line
          @input="onInput"
        />
      </v-card-text>

      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :prepend-icon="item.icon"
          :subtitle="item.subtitle"
          :title="item.title"
        ></v-list-item>
      </v-list>
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
