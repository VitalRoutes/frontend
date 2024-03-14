import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SignUpForm } from '@/types/user';
import usePopup from '../usePopup';
import Popup from '@/components/common/Popup';
import Button from '@/components/common/Button';

function useSignupMutation() {
  const { openPopup, closePopup } = usePopup();
  const navigate = useNavigate();
  const mutationFn = (data: SignUpForm) => axios.post('/member/signUp', data);
  const onSuccess = () => {
    const confirm = () => {
      closePopup();
      navigate('/login');
    };

    openPopup(
      <Popup
        content="회원가입이 완료되었습니다."
        subContent="로그인을 진행해주세요."
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

export default useSignupMutation;
