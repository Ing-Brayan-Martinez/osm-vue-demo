import {defineStore} from "pinia";
import {sleep} from "@/config/helpers.js";
import {SplashStatus} from "@/config/enums.js";


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
        sleep(500)
          .then(() => {

            // se usa para verificar si la geolocalizacion esta disponible
            if ("geolocation" in navigator) {

              const success = (position) => {
                console.log(position);
                console.log('La ubicación es: ', position.coords.latitude, 'y esta: ', position.coords.longitude);

                //se debe guardar en el cola storage
                //this.position = position;

                // se usa para mostrar la pantalla de splash
                sleep(500).then(() => resolve(SplashStatus.SUCCESS));
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
