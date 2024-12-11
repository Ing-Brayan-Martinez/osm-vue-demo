<script setup>
import {ref} from "vue";
import {storeToRefs} from "pinia";
import {usePlannerStore} from "@/stores/planner.store.js";
import StartLocalizationTextField
  from "@/components/search/textfield/StartLocalizationTextField.vue";
import EndLocalizationTextFiled from "@/components/search/textfield/EndLocalizationTextFiled.vue";
import RouteCard from "@/components/search/card/RouteCard.vue";
import SearchLoading from "@/components/search/icon/SearchLoading.vue";


const store = usePlannerStore();
const {startLocalization, endLocalization} = storeToRefs(store);

const isLoading = ref(false);
const isVisibleResult = ref(false);

const itemsSearchResult = ref([]);


const onSearch = () => {
  isLoading.value = true
  isVisibleResult.value = true

  if (startLocalization.value !== null && endLocalization.value !== null) {

    console.log("StartLocalization: " + startLocalization.value);
    console.log("EndLocalization: " + endLocalization.value);

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

    store.onRetrieveTripSearchDoor2Doors(param)
      .then((result) => {
        if (Array.isArray(result)) {
          isLoading.value = false
          itemsSearchResult.value = result
        }
        console.log(`Busqueda completada`)
      });
  } else {
    alert("Debe ingresar un origen y un destino")
  }
}


</script>

<template>
  <div id="search-form-container">
    <div id="search-form">
      <h1>Search Route</h1>

      <StartLocalizationTextField class="search-input"/>

      <EndLocalizationTextFiled class="search-input"/>

      <v-btn class="search-button" @click="onSearch">
        Search
      </v-btn>

    </div>

    <div
      v-if="isVisibleResult"
      id="search-results"
    >
      <h1>Results</h1>

      <div v-if="isLoading" id="search-results-loading">
        <SearchLoading class="loading"/>
      </div>

      <div v-else id="search-results-list">
        <p>xczxczxc</p>
        <RouteCard v-for="route in itemsSearchResult"
                   :key="route.id"
                   :route="route"/>
      </div>


    </div>
  </div>
</template>

<style>
@import '../../main.css';

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
  background-color: var(--maas-white);
  border-radius: 10px;
}

#search-form-container > div[id="search-form"] > h1 {
  margin-top: 0px;
  margin-bottom: 10px;
}

.search-input {
  border-radius: 5px;
}

.search-button {
  margin-top: 0px;
  margin-bottom: 10px;
}


/* Estilos para el resultado de la búsqueda */

#search-form-container > div[id="search-results"] {
  position: relative;
  padding: 10px;
  height: 308px;
  margin-bottom: 10px;
  background-color: var(--maas-white);
  border-radius: 10px;
}

#search-form-container > div[id="search-results"] > h1 {
  margin-top: 0px;
  margin-bottom: 0px;
}

#search-form-container > div[id="search-results"] > div[id="search-results-loading"] {
  margin-top: 0px;
  margin-bottom: 0px;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

#search-form-container > div[id="search-results"] > div[id="search-results-list"] {
  margin-top: 0px;
  margin-bottom: 0px;
  background-color: red;
}

.loading {
  width: 100px;
  height: 100px;
}

</style>
