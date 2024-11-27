import {BASE_URL} from "@/config/config.js";

export const retrieveLocationByName = async (data) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: "",
  };

  return await fetch(BASE_URL + "/api/RoutePlanner/RetrieveLocationByName", options)
    .then((res) => {
      return res.json()
    })
    .catch((error) => {
      throw new Error(error)
    });
};


export const retrieveLocationByName2 = async (data) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: "",
  };

  return await fetch(BASE_URL + "/api/RoutePlanner/RetrieveLocationByName", options)
    .then((res) => {
      return res.json()
    })
    .catch((error) => {
      throw new Error(error)
    });
};


export const retrieveLocationByName3 = async (data) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: "",
  };

  return await fetch(BASE_URL + "/api/RoutePlanner/RetrieveLocationByName", options)
    .then((res) => {
      return res.json()
    })
    .catch((error) => {
      throw new Error(error)
    });
};
