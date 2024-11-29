<script setup>
import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import Zoom from "@arcgis/core/widgets/Zoom";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import {onMounted, useTemplateRef} from "vue";
import SearchForm from "@/components/search/SearchForm.vue";

const container = useTemplateRef('my-input');

onMounted(async () => {

  const webmap = new WebMap({
    portalItem: {
      id: "aa1d3f80270146208328cf66d022e09c",
    },
  });

  const view = new MapView({
    // https://v3.vuejs.org/api/instance-properties.html#el
    container: container.value,
    map: webmap,
  });

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
