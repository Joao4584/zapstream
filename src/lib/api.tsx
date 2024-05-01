'use client';
// * Modules * //
import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import { getToken } from "./token";

// * Exports * //

// Interface para o token
interface TokenData {
  token: string | null;
}

// * Components * //

const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:3000/api',
  headers: {
    Authorization: `Bearer ${getToken()?.replace(/"/g, "") || ''}`
  }
});

// Interceptor para tratamento de erros
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response) {
      if (error.response.status >= 500) {
        console.error('Erro 500', error);
      }

      if (error.response.status === 401) {
        setTimeout(() => {
          window.location.href = "/auth";
        }, 4000);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
