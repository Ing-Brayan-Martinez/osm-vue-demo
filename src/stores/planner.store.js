import {defineStore} from "pinia";
import {
  retrieveGisRoute,
  retrieveJourneyDetail,
  retrieveLocationByName,
  retrieveTripSearchDoor2Door
} from "@/repository/planner.repository.js";
import {getConfig, isEmptyConfig} from "@/repository/local.repository.js";
import Optional from "optional-js";

export const usePlannerStore = defineStore('planner', {
  state: () => ({
    count: 0,
    isVisibleResult: false,
    startRute: "x",
    endRute: "x",
    items: [
      {title: "Plantilla 1", subtitle: "Descripción de la plantilla 1", icon: "mdi-file"},
      {title: "Plantilla 2", subtitle: "Descripción de la plantilla 2", icon: "mdi-file"},
      {title: "Plantilla 3", subtitle: "Descripción de la plantilla 3", icon: "mdi-file"},
    ]
  }),
  getters: {
    doubleCount(state) {
      return state.count * 2;
    }
  },
  actions: {
    increment() {
      this.count++;
      if (this.count <= 0) {
        this.isVisibleResult = false;
      } else {
        if (this.isVisibleResult !== true) {
          this.isVisibleResult = true;
        }
      }
    },
    /**
     * Metodo para obtener la localizacion actual del usuario desde el localStorage.
     *
     * @returns {Optional<Object | null>} - Devuelve un Optional con la localizacion actual del
     * usuario, si no esta se devuelve un Optional vacio.
     */
    getLocationFromConfig() {
      const empty = isEmptyConfig();
      if (empty) {
        return Optional.empty();
      } else {
        const data = getConfig();
        const position = data.position.coords;

        return Optional.ofNullable(position);
      }
    },
    /**
     *
     * @param data
     * @returns {Promise<*>}
     */
    async onRetrieveLocationByName(data) {
      try {
        const result = await retrieveLocationByName(data);
        //const any = R.map((list) => list, result);

      } catch (error) {
        //showTooltip(error)
        //let the form component display the error
        return error
      }
    },
    /**
     *
     * @param data
     * @returns {Promise<*>}
     */
    async onRetrieveTripSearchDoor2Doors(data) {
      try {
        const result = await retrieveTripSearchDoor2Door(data);
        const any = R.map((list) => list, result);

      } catch (error) {
        //showTooltip(error)
        //let the form component display the error
        return error
      }
    },
    /**
     *
     * @param data
     * @returns {Promise<*>}
     */
    async onRetrieveGisRoute(data) {
      try {
        const result = await retrieveGisRoute(data);
        const any = R.map((list) => list, result);

      } catch (error) {
        //showTooltip(error)
        //let the form component display the error
        return error
      }
    },
    /**
     *
     * @param data
     * @returns {Promise<*>}
     */
    async onRetrieveJourneyDetail(data) {
      try {
        const result = await retrieveJourneyDetail(data);
        const any = R.map((list) => list, result);

      } catch (error) {
        //showTooltip(error)
        //let the form component display the error
        return error
      }
    },
  }
})
