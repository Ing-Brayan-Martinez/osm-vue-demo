import {API_KEY, BASE_URL, DEBUG} from "@/config/config.js";

/**
 * Buscar la ubicaciones segun el nombre.
 *
 * @param data {object}
 * @returns {Promise<any>}
 */
export const retrieveLocationByName = async (data) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic " + API_KEY,
    },
    body: JSON.stringify(data),
  };

  if (DEBUG) {
    console.log(`${BASE_URL}/api/RoutePlanner/RetrieveLocationByName`);
    console.log(options);
  }

  return await fetch(`${BASE_URL}/api/RoutePlanner/RetrieveLocationByName`, options)
    .then((res) => {
      return res.json()
    })
    .catch((error) => {
      throw new Error(error)
    });
};

/**
 * Buscar el viaje segun los parametros.
 *
 * @param data
 * @returns {Promise<any>}
 */
export const retrieveTripSearchDoor2Door = async (data) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic " + API_KEY,
    },
    body: JSON.stringify(data),
  };

  if (DEBUG) {
    console.log(`${BASE_URL}/api/RoutePlanner/RetrieveTripSearchDoor2Door`);
    console.log(options);
  }

  return await fetch(`${BASE_URL}/api/RoutePlanner/RetrieveTripSearchDoor2Door`, options)
    .then((res) => {
      return res.json()
    })
    .catch((error) => {
      throw new Error(error)
    });
};

/**
 * Buscar el viaje a pie.
 *
 * @param data
 * @returns {Promise<any>}
 */
export const retrieveGisRoute = async (data) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic " + API_KEY,
    },
    body: JSON.stringify(data),
  };

  if (DEBUG) {
    console.log(`${BASE_URL}/api/RoutePlanner/RetrieveGisRoute`);
    console.log(options);
  }

  return await fetch(`${BASE_URL}/api/RoutePlanner/RetrieveGisRoute`, options)
    .then((res) => {
      return res.json()
    })
    .catch((error) => {
      throw new Error(error)
    });
};

/**
 * Extraer la ruta completa del bus para saber donde abordar.
 *
 * @param data
 * @returns {Promise<any>}
 */
export const retrieveJourneyDetail = async (data) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic " + API_KEY,
    },
    body: JSON.stringify(data),
  };

  if (DEBUG) {
    console.log(`${BASE_URL}/api/RoutePlanner/RetrieveJourneyDetail`);
    console.log(options);
  }

  return await fetch(`${BASE_URL}/api/RoutePlanner/RetrieveJourneyDetail`, options)
    .then((res) => {
      return res.json()
    })
    .catch((error) => {
      throw new Error(error)
    });
};
