<script setup>
import {storeToRefs} from "pinia";
import {usePlannerStore} from "@/stores/planner.store.js";
import StartLocalizationTextField
  from "@/components/search/textfield/StartLocalizationTextField.vue";
import EndLocalizationTextFiled from "@/components/search/textfield/EndLocalizationTextFiled.vue";


const store = usePlannerStore();
const {isVisibleResult, startLocalization, endLocalization} = storeToRefs(store)

const onSearch = () => {
  const param = {
    "originCoordLong": "-74.119018",
    "originCoordLat": "4.687623",
    "destCoordLong": "-74.06546",
    "destCoordLat": "4.643881",
    "withFreq": "0",
    "originWalk": "1,0,10000",
    "destWalk": "1,0,10000",
    "time": "08:00",
  };

  store.onRetrieveTripSearchDoor2Doors(param);
}

</script>

<template>
  <div id="search-form-container">
    <div id="search-form">
      <h1>Search Route</h1>

      <StartLocalizationTextField/>

      <EndLocalizationTextFiled/>

      <v-btn @click="onSearch">
        Search
      </v-btn>

    </div>

    <div
      v-if="isVisibleResult"
      id="search-results"
    >
      <h1>Results</h1>
      <p>{{ startLocalization }}</p>
      <p>{{ endLocalization }}</p>
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

#search-form-container > div[id="search-form"] > h1 {
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

#search-form-container > div[id="search-results"] > h1 {
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>
