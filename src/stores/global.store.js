import {defineStore} from "pinia";

export const useGlobalStore = defineStore('global', {
  state: () => ({
    route: '/main',
  }),
  actions: {
     navigateTo(route) {
      this.route = route;
    },
  }
});
