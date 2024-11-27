<script setup>
import {useCounterStore} from "@/stores/counter.js";
import {storeToRefs} from "pinia";

const store = useCounterStore();
const {increment, reset} = store;
const { count, doubleCount, isVisibleResult} = storeToRefs(store)
</script>

<template>
  <div id="search-form-container">

    <div id="search-form">
      <h1>Search rute</h1>
      <input type="text" name="start-route" placeholder="Start Rute">
      <input type="text" name="end-route" placeholder="End Rute">
      <button @click="increment">Search</button>
      <button @click="reset">Reset</button>
    </div>

    <div id="search-results" v-if="isVisibleResult">
      <h1>Results</h1>
      <p>{{ count }}</p>
      <p>{{ doubleCount }}</p>
    </div>

  </div>
</template>

<style scoped>
/* Estilos para el contenedor padre */

#search-form-container {
  width: 300px;
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
  margin-bottom: 0px;
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
