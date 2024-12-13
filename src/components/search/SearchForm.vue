<script setup>
import {ref} from "vue";
import {storeToRefs} from "pinia";
import {usePlannerStore} from "@/stores/planner.store.js";
import StartLocalizationTextField
  from "@/components/search/textfield/StartLocalizationTextField.vue";
import EndLocalizationTextFiled from "@/components/search/textfield/EndLocalizationTextFiled.vue";
import RouteCard from "@/components/search/card/RouteCard.vue";
import SearchLoading from "@/components/search/icon/SearchLoading.vue";
import {DEBUG} from "@/config/config.js";


const store = usePlannerStore();
const {startLocalization, endLocalization} = storeToRefs(store);

const isLoading = ref(false);
const isVisibleResult = ref(false);

const itemsSearchResult = ref([]);


const onSearch = () => {
  isLoading.value = true
  isVisibleResult.value = true

  if (startLocalization.value === null && endLocalization.value === null) {
    isLoading.value = false
    isVisibleResult.value = false
    itemsSearchResult.value = []

    alert("You must enter an origin and a destination")
    return;
  }

  const originCoordLong = String(startLocalization.value.lon);
  const originCoordLat = String(startLocalization.value.lat);
  const destCoordLong = String(endLocalization.value.lon);
  const destCoordLat = String(endLocalization.value.lat);

  if (originCoordLong === "" || originCoordLat === "" || destCoordLong === "" || destCoordLat === "") {
    isLoading.value = false
    isVisibleResult.value = false
    itemsSearchResult.value = []

    alert("You must enter an origin and a destination 2")
    return;
  }

  if (originCoordLong === destCoordLong && originCoordLat === destCoordLat) {
    isLoading.value = false
    isVisibleResult.value = false
    itemsSearchResult.value = []

    alert("You must enter different origin and destination")
    return;
  }

  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  let formattedTime = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');

  const param = {
    "originCoordLong": originCoordLong,
    "originCoordLat": originCoordLat,
    "destCoordLong": destCoordLong,
    "destCoordLat": destCoordLat,
    "withFreq": "0",
    "originWalk": "1,0,10000",
    "destWalk": "1,0,10000",
    "time": formattedTime,
  };

  store.onRetrieveTripSearchDoor2Doors(param)
    .then((result) => {
      if (Array.isArray(result)) {
        if (result.length > 0) {
          isLoading.value = false
          itemsSearchResult.value = result
          if (DEBUG) {
            console.log(`Búsqueda completada`)
          }
        } else {
          isLoading.value = false
          isVisibleResult.value = false
          itemsSearchResult.value = []

          alert("No results found")
        }
      }
    });

  // alert("la longitud y latitud de origen son: " + originCoordLong + " y " +
  //   originCoordLat + " y la longitud y latitud de destino son: " +
  //   destCoordLong + " y " + destCoordLat);
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
        <RouteCard v-for="item in itemsSearchResult"
                   :item="item"/>
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

  border: 1px solid #000;
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

  border: 1px solid #000;
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

  width: 100%;
  height: 238px;

  overflow-y: auto;
}

.loading {
  width: 100px;
  height: 100px;
}

/* Estilos para pantallas móviles (alto mínimo de 767px) */
@media (min-height: 767px) {
  #search-form-container > div[id="search-results"] {
    height: 600px;
  }

  #search-form-container > div[id="search-results"] > div[id="search-results-list"] {
    height: 528px;
  }
}

</style>
