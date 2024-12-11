import {defineStore} from "pinia";
import {sleep} from "@/config/helpers.js";
import {SplashStatus} from "@/config/enums.js";
import {
  createConfigDefault,
  getConfig,
  isEmptyConfig,
  updateConfig
} from "@/repository/local.repository.js";
import {DEBUG} from "@/config/config.js";


export const useSplashStore = defineStore('splash', {
  state: () => ({
    //
  }),
  getters: {
    //
  },
  actions: {
    async onStart() {
      return new Promise((resolve) => {

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

                // se usa para mostrar la pantalla de splash
                resolve(SplashStatus.SUCCESS);

              };

              const error = (err) => {
                console.error(err);
                resolve(SplashStatus.FAILURE);
              }

              // se usa para obtener la ubicacion del usuario
              navigator.geolocation.getCurrentPosition(success, error);


            } else {
              // si no esta disponible se muestra un alert de error y se navega a la pagina de login
              alert('Geolocation is not available...');
              resolve(SplashStatus.SUCCESS_NOT_LOCATION);
            }

          })
          .catch((err) => {
            console.error(err);
            resolve(SplashStatus.FAILURE);
          });

      });
    },
  }
})
