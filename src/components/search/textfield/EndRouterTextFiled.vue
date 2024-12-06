<script setup>
import {computed, ref} from "vue";
import {usePlannerStore} from "@/stores/planner.store.js";

// Store
const store = usePlannerStore();

// Para controlar el dialog
const dialog = ref(false);

// para controlar el campo de búsqueda
const searchTerm = ref("");
const loading = ref(false);
const itemsSearchResult = ref([
  {title: "Plantilla 1", subtitle: "Descripción de la plantilla 1", icon: "mdi-file"},
  {title: "Plantilla 2", subtitle: "Descripción de la plantilla 2", icon: "mdi-file"},
  {title: "Plantilla 3", subtitle: "Descripción de la plantilla 3", icon: "mdi-file"},
]);
const rules = {
  required: v => !!v || 'Este campo es requerido'
};

// Para buscar los datos
const onInput = (event) => {
  if (searchTerm.value.length > 3) {
    loading.value = true
    console.log(`Buscando: ${searchTerm.value}`)
    console.log(`Event: ${event}`)

    const data = {
      "input": `${searchTerm.value}`,
      "withProducts": "1",
      "type": "S",
      "maxNo": ""
    };

    store.onRetrieveLocationByName(data)
      .then((result) => {
        console.log(`Busqueda completada`)
        loading.value = false
        itemsSearchResult.value = result
      });
  }
}

// Para seleccionar un item de los datos obtenidos
const resultTerm = ref("");
const onSelect = (event) => {
  const value = event.value;
  resultTerm.value = value.name;
  store.setDestinationLocation(value)
}

//Para mostrar el resultado final de la busqueda
const endRute = computed(() => {
  if (resultTerm.value.length > 3) {
    return "destination: " + resultTerm.value
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
        <v-text-field
          v-model="searchTerm"
          :loading="loading"
          :rules="[rules.required]"
          append-icon="mdi-magnify"
          density="compact"
          hide-details
          single-line
          @input="onInput($event)"
        />
      </v-card-text>

      <v-list>
        <v-list-item
          v-for="item in itemsSearchResult"
          :key="item.title"
          :prepend-icon="item.icon"
          :subtitle="item.subtitle"
          :title="item.title"
          @click="onSelect($event)"
        />
      </v-list>
    </v-card>

  </v-dialog>

  <v-text-field
    v-model="endRute"
    label="End Rute"
    v-on:click="dialog = true"
  />
</template>

<style scoped>

</style>
