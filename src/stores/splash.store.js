import {defineStore} from "pinia";
import {sleep} from "@/config/helpers.js";


export const useSplashStore = defineStore('splash', {
  state: () => ({
    position: null
  }),
  actions: {
    async onStart() {
      let isSplash = false;

      // se usa para detener la ejecucion del hilo para que no se ejecute la proxima linea
      // y que se pueda mostar la pantalla de splash correctamente
      await sleep(1000);

      // se usa para verificar si la geolocalizacion esta disponible
      if ("geolocation" in navigator) {

        // se usa para obtener la ubicacion del usuario
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(position);
          console.log('la ubicacion es: ', position.coords.latitude, 'y esta: ', position.coords.longitude);

          this.position = position;

          // se usa para mostrar la pantalla de splash
          isSplash = true;
        });

        return isSplash;

      } else {
        // si no esta disponible se muestra un alert de error y se navega a la pagina de login
        alert('Geolocation is not available...');
        return isSplash;
      }
    },
  }
})
