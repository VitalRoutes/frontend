import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SocialSignUp } from '@/types/user';
import usePopup from '../../usePopup';
import Popup from '@/components/common/Popup';
import Button from '@/components/common/Button';

function useSocialSignupMutation() {
  const { openPopup, closePopup } = usePopup();
  const navigate = useNavigate();
  const mutationFn = (data: SocialSignUp) => axios.post('/oauth2/signUp', data);
  const onSuccess = () => {
    const confirm = () => {
      closePopup();
      navigate('/login');
    };

    openPopup(
      <Popup
        content="회원가입이 완료되었습니다."
        subContent="이제부터 VitalRoutes 서비스를 이용해보세요!"
        buttons={
          <Button variant="popup" onClick={confirm}>
            확인
          </Button>
        }
      />,
    );
  };
  const onError = (error: Error) => {
    openPopup(
      <Popup content="회원가입이 실패했습니다." subContent={error.message} />,
    );
  };
  return useMutation({ mutationFn, onSuccess, onError });
}

export default useSocialSignupMutation;
