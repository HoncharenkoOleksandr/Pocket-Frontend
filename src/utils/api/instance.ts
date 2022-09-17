import axios, { AxiosRequestConfig } from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8080'
});

api.interceptors.request.use<AxiosRequestConfig>((config: AxiosRequestConfig) => {
  if (!config) {
    config = {};
  }
  if (!config.headers) {
    config.headers = {};
  }
  if (localStorage.getItem('token')) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return config;
});
