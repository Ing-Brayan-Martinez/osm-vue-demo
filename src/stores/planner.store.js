import {defineStore} from "pinia";
import {
  retrieveGisRoute,
  retrieveJourneyDetail,
  retrieveLocationByName,
  retrieveTripSearchDoor2Door
} from "@/repository/planner.repository.js";

export const usePlannerStore = defineStore('planner', {
  state: () => ({
    userData: null,
    // ...
  }),
  actions: {
    /**
     *
     * @param data
     * @returns {Promise<*>}
     */
    async onRetrieveLocationByName(data) {
      try {
        const result = await retrieveLocationByName(data);
        const any = R.map((list) => list, result);
        this.userData = any;
      } catch (error) {
        //showTooltip(error)
        //let the form component display the error
        return error
      }
    },
    /**
     *
     * @param data
     * @returns {Promise<*>}
     */
    async onRetrieveTripSearchDoor2Doors(data) {
      try {
        const result = await retrieveTripSearchDoor2Door(data);
        const any = R.map((list) => list, result);
        this.userData = any;
      } catch (error) {
        //showTooltip(error)
        //let the form component display the error
        return error
      }
    },
    /**
     *
     * @param data
     * @returns {Promise<*>}
     */
    async onRetrieveGisRoute(data) {
      try {
        const result = await retrieveGisRoute(data);
        const any = R.map((list) => list, result);
        this.userData = any;
      } catch (error) {
        //showTooltip(error)
        //let the form component display the error
        return error
      }
    },
    /**
     *
     * @param data
     * @returns {Promise<*>}
     */
    async onRetrieveJourneyDetail(data) {
      try {
        const result = await retrieveJourneyDetail(data);
        const any = R.map((list) => list, result);
        this.userData = any;
      } catch (error) {
        //showTooltip(error)
        //let the form component display the error
        return error
      }
    },
  },
  getters: {
    //
  }
})
