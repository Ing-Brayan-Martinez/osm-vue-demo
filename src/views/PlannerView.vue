<script setup>
import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import Zoom from "@arcgis/core/widgets/Zoom";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import {onMounted, useTemplateRef} from "vue";
import SearchForm from "@/components/search/SearchForm.vue";
import {usePlannerStore} from "@/stores/planner.store.js";


// https://v3.vuejs.org/api/instance-properties.html#el
// https://vuejs.org/guide/essentials/template-refs.html
const container = useTemplateRef('my-input');

onMounted(async () => {
  const store = usePlannerStore();

  const webmap = new WebMap({
    portalItem: {
      id: "aa1d3f80270146208328cf66d022e09c",
    },
  });

  const view = new MapView({
    container: container.value,
    map: webmap,
    center: [
      -74.1, //la longitud eje X
      4.6    //la latitud eje Y
    ],
    zoom: 14,
  });

  // Se optiene la ubicacion actual del usuario que se obtubo con el API de
  // geolocation del navegador
  const positionOpt = store.getLocationFromConfig();

  // Si la posicion es valida, se lo asigna al mapa
  if (positionOpt.isPresent()) {
    const coordinate = positionOpt.get();

    const longitude = coordinate.longitude; // Es el eje X
    const latitude = coordinate.latitude; // Es el eje Y

    //TODO: Falta validar las coordenadas no esten fuera de la ciudad de Bogota
    //view.center = [longitude, latitude];
  }

  // Create a zoom widget
  let zoom = new Zoom({
    view: view,
    visible: true,
  });
  view.ui.add(zoom, "top-right");

  // Create a basemap toggle widget
  let basemapToggle = new BasemapToggle({
    view: view,
    nextBasemap: "hybrid",
    visible: true
  });
  view.ui.add(basemapToggle, "bottom-right");
})
</script>

<template>
  <div
    ref="my-input"
    class="mapdiv"
  >
    <SearchForm/>
  </div>
</template>

<style>
@import '../main.css';

.mapdiv {
  position: relative;

  height: 98vh;
  width: 100%;
}
</style>
