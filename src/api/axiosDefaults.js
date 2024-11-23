import axios from "axios";

axios.defaults.baseURL = 'https://drf-api-dp-e6ac617a981a.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true

export const axiosReq = axios.create();
export const axiosRes = axios.create();