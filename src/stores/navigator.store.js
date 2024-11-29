import {defineStore} from "pinia";

export const useNavigatorStore = defineStore('navigator', {
  state: () => ({
    route: '/splash',
  }),
  actions: {
     navigateTo(route) {
      this.route = route;
    },
  }
});
