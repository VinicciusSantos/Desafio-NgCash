import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3050/api",
});

const token = localStorage.getItem('token')
if (token){
  api.defaults.headers.Authorization = token
}

export default api;