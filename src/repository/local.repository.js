const TAG = "config";

export const createConfigDefault = () => {
  const data = {
    "token": "",
    "position": null,
  }
  localStorage.setItem(TAG, JSON.stringify(data));
}

export const updateConfig = (data) => {
  localStorage.setItem(TAG, JSON.stringify(data));
}

export const getConfig = () => {
  return JSON.parse(localStorage.getItem(TAG));
}

export const isEmptyConfig = () => {
  const data = localStorage.getItem(TAG);

  if (data === null || data === undefined) return true;

  const parsedData = JSON.parse(data);

  if (Object.keys(parsedData).length === 0) return true;

  //if (parsedData.token === "" || parsedData.position === null) return true;

  return false;
}
