<script setup>
import {computed, defineProps, onMounted} from "vue";
import {usePlannerStore} from "@/stores/planner.store.js";

const store = usePlannerStore();

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
});

const bus = props.item.legList.leg.find((leg) => leg.type === "JNY");

const timeStart = computed(() => props.item.Origin.time);
const timeEnd = computed(() => props.item.Destination.time);

const busDescription = computed(() => {
  if (bus !== null) {
    return `Salida: ${bus.name}: ${bus.origin.time} ${bus.origin.name}`
  } else {
    return `No description`
  }
});

const duration = computed(() => props.item.duration);
const transferCount = computed(() => props.item.transferCount);

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
    <v-col>
      <v-row>
        <p>{{ timeStart }}</p>
        <p>Rutes</p>
        <p>{{ timeEnd }}</p>
      </v-row>
      <v-row>
        <p>{{ busDescription }}</p>
      </v-row>
      <v-row>
        <p>{{ duration }}</p>
        <p>{{ transferCount }}</p>
      </v-row>
    </v-col>

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
