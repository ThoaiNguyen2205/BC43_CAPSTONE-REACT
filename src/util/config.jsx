import axios from 'axios'

//cấu hình hệ thống
export const DOMAIN = 'https://shop.cyberlearn.vn';
export const USER_LOGIN = 'userLogin';
export const TOKEN ='accessToken';



export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 30000 
});

export const {saveStorageJSON,getStorageJSON,clearStorage} = {
    saveStorageJSON: (name,data) => {
        const string = JSON.stringify(data);
        localStorage.setItem(name,string);
    },
    getStorageJSON: (name) => {
        if(localStorage.getItem(name)) {
            const data = JSON.parse(localStorage.getItem(name));
            return data;
        }
        return undefined;
    },
    clearStorage: (name) => {
        localStorage.removeItem(name)
    }
}


// http.interceptors.request.use((config) => {
    
    
//     config.headers = {...config.headers}
//     let token = JSON.parse(getStorageJSON(USER_LOGIN))?.accessToken;
//     config.headers.Authorization = `Bearer ${token}`

//     return config;
// }, (err) => {
//     return Promise.reject(err);
// })