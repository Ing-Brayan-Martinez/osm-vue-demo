import {defineStore} from "pinia";
import {login} from "@/repository/auth.repository.js";
import {
  createConfigDefault,
  getConfig,
  isEmptyConfig,
  updateConfig
} from "@/repository/local.repository.js";

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
        const result = await login(data);

        const empty = isEmptyConfig();

        if (empty) {
          const data = createConfigDefault();
          data.token = result.token;

          updateConfig(data);

        } else {
          const data = getConfig();
          data.token = result.token;

          updateConfig(data);
        }

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
