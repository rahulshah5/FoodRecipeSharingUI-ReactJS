import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

// Add a request interceptor
API.interceptors.request.use(function (config) {
  console.log('Request data:', config.data); // Logging request data
  return config;
}, function (error) {
  return Promise.reject(error);
});

export default API;

