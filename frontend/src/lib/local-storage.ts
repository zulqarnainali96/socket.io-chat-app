import type { userData } from "../types/type";

export const setLocalStorage = (key: string, data: userData) => {
  const parsedData = JSON.stringify(data);
  localStorage.setItem(key, parsedData);
};

export const getLocalStorageData = (key: string) => {
  const parsedData = JSON.parse(localStorage.getItem(key || "") as string);
  return parsedData;
};
