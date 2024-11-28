<script>
import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import Zoom from "@arcgis/core/widgets/Zoom";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import SearchForm from "@/components/search/SearchForm.vue";


export default {
  name: 'MainView',
  components: {SearchForm},
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

  }
}
</script>

<template>
  <div class="mapdiv">
    <SearchForm/>
  </div>
</template>

<style scoped>
.mapdiv {
  position: relative;

  height: 98vh;
  width: 100%;
}
</style>
