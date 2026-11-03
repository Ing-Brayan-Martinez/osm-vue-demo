import {defineStore} from "pinia";
import {
  retrieveGisRoute,
  retrieveJourneyDetail,
  retrieveLocationByName,
  retrieveTripSearchDoor2Door
} from "@/repository/planner.repository.js";
import {
  createConfigDefault,
  getConfig,
  isEmptyConfig,
  updateConfig
} from "@/repository/local.repository.js";
import Optional from "optional-js";
import {sleep} from "@/config/helpers.js";
import {DEBUG} from "@/config/config.js";

export const usePlannerStore = defineStore('planner', {
  state: () => ({
    startLocalization: null, //Se usa para guardar el resultado de la búsqueda de la localización de
    // origen
    endLocalization: null, //Se usa para guardar el resultado de la búsqueda de la localización de
    // destino
    isShowSplash: true,
  }),
  getters: {
    //
  },
  actions: {
    /**
     * Método para obtener la localización actual del usuario desde el API.
     *
     * @returns {Promise<Void>}
     */
    async onStart() {
      return new Promise((resolve, reject) => {

        // se usa para detener la ejecucion del hilo para que no se ejecute la proxima linea
        // y que se pueda mostar la pantalla de splash correctamente
        sleep(100)
          .then(() => {

            // se usa para verificar si la geolocalizacion esta disponible
            if ("geolocation" in navigator) {

              const success = (position) => {

                if (DEBUG) {
                  console.log(position);
                  console.log('La latitud eje Y es: ', position.coords.latitude, 'y la longitud' +
                    ' eje X es: ', position.coords.longitude);
                }

                //se debe guardar en el localstorage
                const empty = isEmptyConfig();

                if (empty) {
                  const data = createConfigDefault();
                  data.position = position;

                  updateConfig(data);

                } else {
                  const data = getConfig();
                  data.position = position;

                  updateConfig(data);
                }

                sleep(1800)
                  .then(() => {
                    this.isShowSplash = false;
                    resolve(null);
                  });

              };

              const error = (err) => {
                console.error(err);
                reject(err);
              }

              // se usa para obtener la ubicacion del usuario
              navigator.geolocation.getCurrentPosition(success, error);


            } else {
              // si no esta disponible se muestra un alert de error y se navega a la pagina de login
              alert('Geolocation is not available...');
              resolve(null);
            }

          })
          .catch((err) => {
            console.error(err);
            reject();
          });

      });
    },
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
     * Método para obtener la ruta de un viaje.
     *
     * @param data Parámetros para la búsqueda de la ruta usando los datos de la localización de
     * origen y destino.
     * @returns {Promise<[]>} Devuelve un Array con las posibles rutas que coinciden con las
     * localizaciones de origen y destino.
     */
    async onRetrieveTripSearchDoor2Doors(data) {
      try {
        const result = await retrieveTripSearchDoor2Door(data);

        if (result === null || result === undefined) {
          return [];
        } else if (result.data === null || result.data === undefined) {
          return [];
        } else if (result.data.Trip === null
          || result.data.Trip === undefined) {
          return [];
        }
        return result.data.Trip;

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

        if (result === null || result === undefined) {
          return [];
        } else if (result.data === null || result.data === undefined) {
          return [];
        } else if (result.data.Trip === null
          || result.data.Trip === undefined) {
          return [];
        }

        console.log(result);
        console.log(result.data.Trip);

        return result.data.Trip;

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
