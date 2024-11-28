import {defineStore} from "pinia";
import {login} from "@/repository/auth.repository.js";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    userData: null,
    // ...
  }),
  actions: {
    async onLogin(data) {
      try {
        const result = await login(data) ?? [];
        const any = R.map((list) => list, result);
        console.log(any);

      } catch (error) {
        //showTooltip(error)
        //let the form component display the error
        return error
      }
    },
    async onLogout() {

    },
  }
})
