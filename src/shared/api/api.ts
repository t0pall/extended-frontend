import axios from 'axios';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localstorage';

export const $api = axios.create({
  baseURL: __API_URL__,
});

$api.interceptors.request.use((config) => {
  const authorization = localStorage.getItem(LOCAL_STORAGE_USER_KEY);

  if (authorization && config.headers) {
    config.headers.authorization = authorization;
  }

  return config;
});
