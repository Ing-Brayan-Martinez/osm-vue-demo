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
    startLocalization: null, //Se usa para guardar el resultado de la busqueda de la localizacion de
    // origen
    endLocalization: null, //Se usa para guardar el resultado de la busqueda de la localizacion de
    // destino
    items: [], //Se usa para guardar el resultado de la busqueda de todas las ruta de buses
  }),
  getters: {
    isVisibleResult: (state) => state.items.length > 0,
  },
  actions: {
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
     * Metodo para buscar una localizacion por su nombre desde el API para usarla como origen
     * o destino.
     *
     * @param data Parametros para la busqueda de la localizacion que contiene el nombre de
     * dicha localizacion.
     * @returns {Promise<[]>} Devuelve un Array con las posibles localizacion que coinciden con
     * el termino de busqueda.
     */
    async onRetrieveLocationByName(data) {
      try {
        const result = await retrieveLocationByName(data);
        //const any = R.map((list) => list, result);

        return result ?? [];

      } catch (error) {
        return error
      }
    },
    /**
     * Metodo para establecer la ruta de destino.
     *
     * @param data Datos de la localizacion de origen.
     */
    setOriginLocation(data) {
      try {
        this.startLocalization = data;

      } catch (error) {
        return error
      }
    },
    /**
     * Metodo para establecer la ruta de destino.
     *
     * @param data Datos de la localizacion de destino.
     */
    setDestinationLocation(data) {
      try {
        this.endLocalization = data;

      } catch (error) {
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
        this.isVisibleResult = true;

      } catch (error) {
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
        return error
      }
    },
  }
})
