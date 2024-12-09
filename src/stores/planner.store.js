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
    startLocalization: null, //Se usa para guardar el resultado de la búsqueda de la localización de
    // origen
    endLocalization: null, //Se usa para guardar el resultado de la búsqueda de la localización de
    // destino
  }),
  getters: {
    //
  },
  actions: {
    /**
     * Método para obtener la localización actual del usuario desde el localStorage.
     *
     * @returns {Optional<Object | null>} - Devuelve un Optional con la localización actual del
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
     * Método para buscar una localización por su nombre desde el API para usarla como origen
     * o destino.
     *
     * @param data Parámetros para la búsqueda de la localización que contiene el nombre de
     * dicha localización.
     * @returns {Promise<[]>} Devuelve un Array con las posibles localización que coinciden con
     * el termino de búsqueda.
     */
    async onRetrieveLocationByName(data) {
      try {
        const result = await retrieveLocationByName(data);

        if (result === null || result === undefined) {
          return [];
        } else if (result.data === null || result.data === undefined) {
          return [];
        } else if (result.data.stopLocationOrCoordLocation === null
          || result.data.stopLocationOrCoordLocation === undefined) {
          return [];
        }
        return result.data.stopLocationOrCoordLocation;

      } catch (error) {
        return error
      }
    },
    /**
     * Método para establecer la ruta de destino.
     *
     * @param data Datos de la localización de origen.
     */
    setOriginLocation(data) {
      this.startLocalization = data;
    },
    /**
     * Método para establecer la ruta de destino.
     *
     * @param data Datos de la localización de destino.
     */
    setDestinationLocation(data) {
      this.endLocalization = data;
    },
    /**
     *
     * @param data
     * @returns {Promise<*>}
     */
    async onRetrieveTripSearchDoor2Doors(data) {
      try {
        const result = await retrieveTripSearchDoor2Door(data);
        if (result === null || result === undefined) {
          return [];
        } else if (result.data === null || result.data === undefined) {
          return [];
        } else if (result.data.stopLocationOrCoordLocation === null
          || result.data.stopLocationOrCoordLocation === undefined) {
          return [];
        }
        return result.data.stopLocationOrCoordLocation;

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
