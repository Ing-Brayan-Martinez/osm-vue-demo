<script setup>
import {defineProps, onMounted} from "vue";
import {usePlannerStore} from "@/stores/planner.store.js";

const store = usePlannerStore();

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
});

onMounted(async () => {
  const param = {
    "ctx": "H|1|W$A=1@O=Ricaurte B - 2 ó 5@L=61601@a=128@$A=1@O=Ricaurte A - 2 ó 5@L=73814@a=128@$202411121738$202411121744$$$1$$$$$$|%23VE%232%23CF%23100%23CA%234%23CM%230%23SICT%230%23AM%2311534385%23AM2%230%23AT0AN%23ba%23%23RT%230%23",
    "poly": "1",
    "polyEnc": "N"
  };

  store.onRetrieveGisRoute(param)
    .then((data) => {
      console.log(`ruta a pie`)
      console.log(data);
      //alert(JSON.stringify(data));
    })
    .catch((error) => {
      console.log(error);
    });
});

</script>

<template>
  <div id="route-card">
    <h1>{{ props.item.duration }}</h1>
    <p>Hora de inicio: {{ props.item.Origin.time }}</p>
    <p>Hora de final: {{ props.item.Destination.time }}</p>
  </div>
</template>

<style scoped>

#route-card {
  width: 100%;
  height: 150px;
  padding: 10px;

  margin-bottom: 10px;
  background-color: white;
  border-radius: 10px;

  border: 1px solid #000;
}
</style>
