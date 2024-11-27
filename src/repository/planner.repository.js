import {API_KEY, BASE_URL, DEBUG} from "@/config/config.js";

//buscar la ubicaciones segun el nombre
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

// buscar el viaje segun los parametros
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

// buscar el viaje a pie
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

// Extraer la ruta completa del bus para saber donde abordar
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
