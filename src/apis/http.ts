import axios, { AxiosRequestConfig } from 'axios';

export type ServerResponse<T> = {
  ok: boolean;
  message?: string;
  results: T;
};

const http = {
  get: <T>(url: string, config?: AxiosRequestConfig) =>
    axios.get<ServerResponse<T>>(url, config).then((res) => res.data),
  post: <T>(url: string, payload?: object) =>
    axios.post<ServerResponse<T>>(url, payload).then((res) => res.data),
};

export default http;
