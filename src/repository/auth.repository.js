export const login = async (data) => {
  const response = await fetch(data.url + "/identity/rb-token-auth/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa(data.data.user + ":" + data.data.password + ":" + data.data.group),
    },
    body: "",
  }).then((res) => {
    return res.json()
  }).catch((error) => {
    throw new Error(error)
  });
  return response;
};
