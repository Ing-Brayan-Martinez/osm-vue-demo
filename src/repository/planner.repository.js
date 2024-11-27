export const retrieveLocationByName = async (data) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa(data.data.user + ":" + data.data.password + ":" + data.data.group),
    },
    body: "",
  };

  return await fetch(data.url + "/identity/rb-token-auth/", options)
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
      Authorization: "Basic " + btoa(data.data.user + ":" + data.data.password + ":" + data.data.group),
    },
    body: "",
  };

  return await fetch(data.url + "/identity/rb-token-auth/", options)
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
      Authorization: "Basic " + btoa(data.data.user + ":" + data.data.password + ":" + data.data.group),
    },
    body: "",
  };

  return await fetch(data.url + "/identity/rb-token-auth/", options)
    .then((res) => {
      return res.json()
    })
    .catch((error) => {
      throw new Error(error)
    });
};
