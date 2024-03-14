/* eslint-disable no-param-reassign */
import axios, { AxiosInstance } from 'axios';
import { useLoginStore } from '@/store/user/loginInfoStore';
import { API_URL } from '@/constants/api';

const useAxiosWithAuth = (): AxiosInstance => {
  const { accessToken } = useLoginStore();
  const axiosInstance = axios.create({
    baseURL: API_URL,
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${accessToken}`;
      return config;
    },
    (error) => Promise.reject(error),
  );

  return axiosInstance;
};

export default useAxiosWithAuth;
