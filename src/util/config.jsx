import axios from "axios";
import { history } from "../index";

import axios from "axios";

//cấu hình hệ thống
export const DOMAIN = "https://shop.cyberlearn.vn";
export const USER_LOGIN = "userLogin";
export const TOKEN = "accessToken";

export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 30000,
});

export const { saveStorageJSON, getStorageJSON, clearStorage } = {
  saveStorageJSON: (name, data) => {
    const string = JSON.stringify(data);
    localStorage.setItem(name, string);
  },
  getStorageJSON: (name) => {
    if (localStorage.getItem(name)) {
      const data = JSON.parse(localStorage.getItem(name));
      return data;
    }
    return undefined;
  },
  clearStorage: (name) => {
    localStorage.removeItem(name);
  },
};
// http.interceptors.request.use((config) => {

//     config.headers = {...config.headers}
//     let token = JSON.parse(getStorageJSON(USER_LOGIN))?.accessToken;
//     config.headers.Authorization = `Bearer ${token}`

//     return config;
// }, (err) => {
//     return Promise.reject(err);
// })

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
//Cấu hình cho response (kết quả trả về từ api)
httpProduct.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    //Xử lý lỗi cho api bị lỗi theo status code
    console.log(err);
    if (err.response?.status === 401) {
      alert("Đăng nhập để vào trang này !");
      history.push("/login");
    }
    return Promise.reject(err);
  }
);
