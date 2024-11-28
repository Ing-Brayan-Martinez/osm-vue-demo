import {defineStore} from "pinia";

export const useGlobalStore = defineStore('global', {
  state: () => ({
    route: 'splash',
    userData: null,
    // ...
  }),
  actions: {
    async onStart() {

    },
     navigateTo(route) {


      this.route = route;
    },
  }
});
