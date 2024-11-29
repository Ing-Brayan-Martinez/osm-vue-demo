import {defineStore} from "pinia";
import {sleep} from "@/config/helpers.js";

export const useGlobalStore = defineStore('global', {
  state: () => ({
    route: 'splash',
    position: null,
  }),
  actions: {
    async onStart() {
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

          sleep(1000).then(() => this.navigateTo('main'));
        });

      } else {
        // si no esta disponible se muestra un alert de error y se navega a la pagina de login
        alert('Geolocation is not available...');
        this.navigateTo('login');
      }
    },
     navigateTo(route) {

      this.route = route;
    },
  }
});
