import {BASE_URL, DEBUG} from "@/config/config.js";

/**
 * Obtener el token JWT para poder operar en la API.
 *
 * @param data {object}
 * @returns {Promise<any>}
 */
export const login = async (data) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  if (DEBUG) {
    console.log(`${BASE_URL}/api/Auth/pinpassword/login`);
    console.log(options);
  }

  return await fetch(`${BASE_URL}/api/Auth/pinpassword/login`, options)
    .then((res) => {
      return res.json()
    })
    .catch((error) => {
      throw new Error(error)
    });
};
