import axios, { AxiosRequestHeaders } from 'axios';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localstorage';

const headersFactory = () => {
  const headers: AxiosRequestHeaders = {};

  const authorization = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
  if (authorization) {
    headers.authorization = authorization;
  }

  return headers;
};

export const $api = axios.create({
  baseURL: __API_URL__,
  headers: headersFactory(),
});
