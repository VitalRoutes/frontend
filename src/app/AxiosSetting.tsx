import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '@/constants/api';
import { useLoginStore } from '@/store/user/loginInfoStore';

function AxiosSetting() {
  const { accessToken, expiredTime, setExpiredTime } = useLoginStore();
  const navigate = useNavigate();

  useEffect(() => {
    axios.defaults.baseURL = API_URL;

    if (accessToken) {
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    }

    async function useToken() {
      if (expiredTime) {
        const remainingTime = Date.parse(String(expiredTime)) - Date.now();
        if (remainingTime < 15000) {
          try {
            const res = await axios.post('/token/refresh', null, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('refreshToken')}`
              }
            });
            localStorage.setItem('accessToken', res.data.data.accessToken);
            localStorage.setItem('expiredTime', res.data.data.cur_time);
            setExpiredTime((new Date(new Date().getTime() + (1 * 60 * 60 * 1000))).toISOString());
          } catch (error) {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            navigate('/login');
          }
        }
      }
    }

    useToken();

  }, [accessToken]);

  return null;
}

export default AxiosSetting;
