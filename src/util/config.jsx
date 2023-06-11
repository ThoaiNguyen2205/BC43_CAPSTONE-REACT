import axios from "axios";

export const DOMAIN = "https://shop.cyberlearn.vn/";
export const USER_LOGIN = "userLogin";
export const TOKEN = "accessToken";

export const httpProduct = axios.create({
  baseURL: DOMAIN,
  timeout: 30000,
});
export const { getStoreJson, setStoreJson, getStore, setStore } = {
  getStoreJson: (name) => {
    if (localStorage.getItem(name)) {
      const strResult = localStorage.getItem(name);
      return JSON.parse(strResult);
    }
    return undefined;
  },
  setStoreJson: (name, data) => {
    const strJson = JSON.stringify(data);
    localStorage.setItem(name, strJson);
  },
  getStore: (name) => {
    return localStorage.getItem(name);
  },
  setStore: (name, data) => {
    localStorage.setItem(name, data);
  },
};
httpProduct.interceptors.request.use(
  (config) => {
    config = { ...config };
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
