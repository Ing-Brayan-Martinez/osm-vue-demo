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
const onInput = () => {
  if (searchTerm.value.length > 3) {
    loading.value = true
    console.log(`Buscando: ${searchTerm.value}`)

    const data = {
      "input": `${searchTerm.value}`,
      "withProducts": "1",
      "type": "S",
      "maxNo": ""
    };

    store.onRetrieveLocationByName(data)
        .then((result) => {
          if (Array.isArray(result)) {
            if (result.length > 0) {
              loading.value = false
              itemsSearchResult.value = result
              console.log(`Búsqueda completada`)
            } else {
              console.log(`No se encontraron resultados`)
              alert(`No se encontraron resultados`)
            }
          }
        });
  }
}

// Para seleccionar un item de los datos obtenidos
const resultTerm = ref("");
const onSelect = (event, value) => {
  // set value
  console.log(event)
  console.log(event.srcElement.innerText)
  resultTerm.value = event.srcElement.innerText;
  store.setOriginLocation(value)

  // clean
  dialog.value = false
  searchTerm.value = ""
  itemsSearchResult.value = []
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
          @input="onInput()"
        />
      </v-card-text>

      <v-list>
        <v-list-item
          v-for="item in itemsSearchResult"
          :title="item.StopLocation.name"
          @click="onSelect($event, item.StopLocation)"
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
