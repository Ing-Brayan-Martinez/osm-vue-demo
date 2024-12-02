import {defineStore} from "pinia";
import {login} from "@/repository/auth.repository.js";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    //
  }),
  getters: {
    //
  },
  actions: {
    async onLogin(data) {
      try {
        const result = await login(data) ?? [];


        const any = R.map((list) => list, result);
        console.log(any);

      } catch (error) {
        return error
      }
    },
    isLoggedIn() {

    },
    onLogout() {

    },
  }
})
