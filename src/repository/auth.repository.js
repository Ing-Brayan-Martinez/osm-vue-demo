import {BASE_URL} from "@/config/config.js";

export const login = async (data) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa(data.data.user + ":" + data.data.password + ":" + data.data.group),
    },
    body: "",
  };

  return await fetch(BASE_URL + "/identity/rb-token-auth/", options)
    .then((res) => {
      return res.json()
    })
    .catch((error) => {
      throw new Error(error)
    });
};
