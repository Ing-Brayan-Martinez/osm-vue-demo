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
const itemsSearchResult = ref([]);
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
          if (Array.isArray(result)) {
            loading.value = false
            itemsSearchResult.value = result
          }
          console.log(`Busqueda completada`)
        });
  }
}

// Para seleccionar un item de los datos obtenidos
const resultTerm = ref("");
const onSelect = (event) => {
  const value = event.value;
  resultTerm.value = value.name;
  store.setOriginLocation(value)
}

//Para mostrar el resultado final de la busqueda
const startLocalization = computed(() => {
  if (resultTerm.value.length > 3) {
    return "origin: " + resultTerm.value
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

      <v-card-title class="headline">Search Start Localization</v-card-title>

      <v-card-text>
        <v-text-field
          v-model="searchTerm"
          :loading="loading"
          :rules="[rules.required]"
          append-icon="mdi-magnify"
          density="compact"
          hide-details
          single-line
          clearable
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
    v-model="startLocalization"
    label="Start Localization"
    @click="dialog = true"
  />
</template>

<style scoped>

</style>
