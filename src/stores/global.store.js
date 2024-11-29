import {defineStore} from "pinia";

export const useGlobalStore = defineStore('global', {
  state: () => ({
    route: '/splash',
  }),
  actions: {
     navigateTo(route) {
      this.route = route;
    },
  }
});
