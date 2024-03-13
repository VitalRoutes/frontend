import axios from 'axios';
import { API_URL, AUTH_TOKEN } from '@/constants/api';

export default function configureAxios() {
  axios.defaults.baseURL = API_URL;
  axios.defaults.headers.common.Authorization = `Bearer ${AUTH_TOKEN}`;
  axios.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded';
}
