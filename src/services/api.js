import axios from "axios";
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const api = axios.create({
  baseURL: "https://api.compartilhe.online",
});

api.interceptors.request.use(function (config) {
  const jwt = JSON.parse(localStorage.getItem("jwt")) || null;
  if (jwt) {
    const decoded = jwt_decode(jwt.token);
    const currentDate = new Date();
    if (decoded.exp * 1000 < currentDate.getTime()) {
      localStorage.clear();
      return config;
    } else {
      const token = jwt.token;
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.clear();
    }
    return error;
  }
);

export default api;
