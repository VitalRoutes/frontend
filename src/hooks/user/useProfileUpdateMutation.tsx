import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLoginStore } from '@/store/user/loginInfoStore';
import { ProfileUpdateForm } from '@/types/user';
import usePopup from '../usePopup';
import Popup from '@/components/common/Popup';
import Button from '@/components/common/Button';

function useProfileUpdateMutation() {
  const { openPopup, closePopup } = usePopup();
  const navigate = useNavigate();
  const { memberId } = useLoginStore();
  const mutationFn = (data: ProfileUpdateForm) => {
    const formData = new FormData();

    formData.append('profile', data.profile);
    formData.append('memberId', String(data.memberId));
    formData.append('name', data.name);
    formData.append('nickname', data.nickname);
    formData.append('prePassword', data.prePassword);
    formData.append('newPassword', data.newPassword);

    return axios.patch(`/member/profile/${memberId}`, formData);
  };
  const onSuccess = () => {
    openPopup(
      <Popup
        content="프로필 수정이 완료되었습니다."
        subContent="수정하신 내용이 반영되었습니다."
        buttons={
          <Button
            variant="popup-point"
            onClick={() => {
              closePopup();
              navigate('/profile');
            }}
          >
            확인
          </Button>
        }
      />,
    );
  };
  const onError = () => {};

  return useMutation({ mutationFn, onSuccess, onError });
}

export default useProfileUpdateMutation;
