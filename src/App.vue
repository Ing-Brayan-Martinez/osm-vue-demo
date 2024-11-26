<template>
  <div class="mapdiv">
    <demo/>
  </div>
</template>

<script>
import Demo from "@/components/Demo.vue";

import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import Zoom from "@arcgis/core/widgets/Zoom";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import Search from "@arcgis/core/webdoc/applicationProperties/Search";


export default {
  name: 'App',
  components: {Demo},
  async mounted() {
    const webmap = new WebMap({
      portalItem: {
        id: "aa1d3f80270146208328cf66d022e09c",
      },
    });

    const view = new MapView({
      // https://v3.vuejs.org/api/instance-properties.html#el
      container: this.$el,
      map: webmap,
    });

    // Create a basemap toggle widget
    let basemapToggle = new BasemapToggle({
      view: view,
      nextBasemap: "hybrid",
      visible: true
    });
    view.ui.add(basemapToggle, "top-left");

    // Create a zoom widget
    let zoom = new Zoom({
      view: view,
      visible: true,
    });
    view.ui.add(zoom, "top-left");

    // Create a search widget
    const searchWidget = new Search({
      view: view
    });
    view.ui.add(searchWidget, {
      position: "top-left",
      index: 2
    });
  }
}
</script>

<style scoped>
  @import './main.css';

  .mapdiv {
    position: relative;

    height: 98vh;
    width: 100%;
  }
</style>
