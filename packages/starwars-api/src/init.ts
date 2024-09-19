import axios, { AxiosInstance } from 'axios';
import { errorToMessage } from './error';

export let instance: AxiosInstance;

export type InitParams = {
  onError?: (error: any) => void;
};

export const init = (params: InitParams) => {
  instance = axios.create({
    baseURL: 'https://swapi.dev/api/',
  });

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // get URL
      const url = error.config.url;
      const method = error.config.method;

      if (params.onError) {
        const message = errorToMessage(method, url);
        params.onError(message);
        return;
      }
    }
  );
};
