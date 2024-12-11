<script setup>
import {computed, onMounted, ref} from "vue";
import {usePlannerStore} from "@/stores/planner.store.js";
import {DEBUG} from "@/config/config.js";

// Store
const store = usePlannerStore();

// Para controlar el dialog
const dialog = ref(false);

// Para controlar el campo de búsqueda
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
    if (DEBUG) {
      console.log(`Buscando: ${searchTerm.value}`)
    }

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
            if (DEBUG) {
              console.log(`Búsqueda completada`)
            }
          } else {
            itemsSearchResult.value = []
            alert(`No se encontraron resultados`)
          }
        }
      });
  }
}

// Para seleccionar un item de los datos obtenidos
const resultTerm = ref("");
const onSelect = (value) => {
  if (value == null) {
    alert(`No results were found for the destination location`)
  } else {
    // set value
    if (DEBUG) {
      console.log(value)
      console.log(value.name)
    }
    resultTerm.value = value.name;
    store.setDestinationLocation(value)

    // clean
    dialog.value = false
    searchTerm.value = ""
    itemsSearchResult.value = []
  }
}

//Para mostrar el resultado final de la busqueda
const endLocalization = computed(() => {
  if (resultTerm.value.length > 3) {
    return "Destination: " + resultTerm.value
  } else {
    return "";
  }
})

const onCancel = () => {
  dialog.value = false
  loading.value = false
  searchTerm.value = ""
  itemsSearchResult.value = []
}

onMounted(() => {
  store.setDestinationLocation(null);
})
</script>

<template>

  <v-dialog
    v-model="dialog"
    max-width="400"
  >
    <v-card rounded="lg">

      <v-card-title class="headline">Search End Localization</v-card-title>

      <v-card-text>
        <v-row>
          <v-text-field
            v-model="searchTerm"
            :loading="loading"
            :rules="[rules.required]"
            density="compact"
            hide-details
            single-line
            @input="onInput()"
          />
          <v-btn
            :class="{ 'custom-btn': true }"
            @click="onCancel()"
          >
            Cancel
          </v-btn>
        </v-row>
      </v-card-text>

      <v-list>
        <v-list-item
          v-for="item in itemsSearchResult"
          :title="item.StopLocation.name"
          @click="onSelect(item.StopLocation)"
        />
      </v-list>
    </v-card>

  </v-dialog>

  <v-text-field
    v-model="endLocalization"
    label="End Localization"
    @click="dialog = true"
  />
</template>

<style>
@import '../../../main.css';

.custom-btn {
  margin-left: 10px; /* Create separation between text field and button */
  color: var(--maas-black); /* Customize button text color using red */
}
</style>
