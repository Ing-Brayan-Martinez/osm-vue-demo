<script setup>
import {storeToRefs} from "pinia";
import {usePlannerStore} from "@/stores/planner.store.js";
import StartRouterTextField from "@/components/search/textfield/StartRouterTextField.vue";
import EndRouterTextFiled from "@/components/search/textfield/EndRouterTextFiled.vue";

const store = usePlannerStore();
const {increment} = store;
const {count, doubleCount, isVisibleResult, startRute, endRute} = storeToRefs(store)

const url = import.meta.env.VITE_API_URL;

</script>

<template>
  <div id="search-form-container">
    <div id="search-form">
      <h1>Search rute</h1>

      <StartRouterTextField/>

      <EndRouterTextFiled/>

      <v-btn @click="increment">
        Search
      </v-btn>

    </div>

    <div
      v-if="isVisibleResult"
      id="search-results"
    >
      <h1>Results</h1>
      <p>{{ count }}</p>
      <p>{{ doubleCount }}</p>
      <p>La URL de la API es: {{ url }}</p>

      <p>{{ startRute }}</p>
      <p>{{ endRute }}</p>
    </div>
  </div>
</template>

<style scoped>
/* Estilos para el contenedor padre */

#search-form-container {
  width: 400px;
  height: auto;
  background-color: transparent;

  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 1;
}


/* Estilos para el formulario de búsqueda */

#search-form-container > div[id="search-form"] {
  position: relative;
  padding: 10px;
  margin-bottom: 10px;
  background-color: white;
  border-radius: 10px;
}

#search-form-container > div[id="search-form"]  > h1 {
  margin-top: 0px;
  margin-bottom: 10px;
}

#search-form-container > div[id="search-form"] > input[type="text"] {
  width: 97%;
  margin-bottom: 8px;
  border-radius: 5px;
}

#search-form-container > div[id="search-form"] > button {
  border-radius: 10px;
}

/* Estilos para el resultado de búsqueda */

#search-form-container > div[id="search-results"] {
  position: relative;
  padding: 10px;
  height: 308px;
  margin-bottom: 10px;
  background-color: white;
  border-radius: 10px;
}

#search-form-container > div[id="search-results"]  > h1 {
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>
