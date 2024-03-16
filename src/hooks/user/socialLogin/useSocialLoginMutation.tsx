import { useMutation } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { LoginResponse } from '@/types/user';
import { useLoginStore } from '@/store/user/loginInfoStore';
import usePopup from '../../usePopup';
import Popup from '@/components/common/Popup';
import Button from '@/components/common/Button';

function useSocialLoginMutation() {
  const navigate = useNavigate();
  const { openPopup, closePopup } = usePopup();
  const { setLoginInfo, setIsLogin } = useLoginStore();

  const mutationFn = async ({
    name,
    nickname,
    socialId,
    socialType,
    isChecked
  }: {
    name: string;
    nickname: string;
    socialId: string;
    socialType: string;
    isChecked: boolean;
  }) => {
    const data = {
      name,
      nickname,
      socialId,
      socialType,
      isChecked
    };

    return (axios.post('/oauth2/signUp', data));
  };

  const onSuccess = ({ data }: AxiosResponse<{ data: LoginResponse }>) => {
    navigate('/');
    setLoginInfo(data.data);
    setIsLogin(true);

    if (data.data.accessToken !== null && data.data.refreshToken !== null) {
      localStorage.setItem('accessToken', data.data.accessToken);
      localStorage.setItem('refreshToken', data.data.refreshToken);

      axios.defaults.headers.common.Authorization = `Bearer ${data.data.accessToken}`
    }
  };


  const onError = (error: Error) => {
    navigate('/login');
    openPopup(
      <Popup
        content="회원가입이 실패했습니다."
        subContent={error.message}
        buttons={
          <Button variant="popup" onClick={closePopup}>
            확인
          </Button>
        }
      />,
    );
  };

  return useMutation({ mutationFn, onSuccess, onError });
}

export default useSocialLoginMutation;
