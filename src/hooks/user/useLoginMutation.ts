import { useMutation } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { LoginResponse } from '@/types/user';
import { useLoginStore } from '@/store/user/loginInfoStore';

function useLoginMutation() {
  const navigate = useNavigate();
  const { setLoginInfo, setIsLogin } = useLoginStore();

  const mutationFn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const formData = new FormData();
    formData.append('username', email);
    formData.append('password', password);

    return axios.postForm('/member/login', formData);
  };

  const onSuccess = ({ data }: AxiosResponse<{ data: LoginResponse }>) => {
    navigate('/');
    setLoginInfo(data.data);
    setIsLogin(true);
  };

  return useMutation({ mutationFn, onSuccess });
}

export default useLoginMutation;
