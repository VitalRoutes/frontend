import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNicknameValidStore } from '@/store/user/signupStore';
import usePopup from '@/hooks/usePopup';
import Popup from '@/components/common/Popup';
import Button from '@/components/common/Button';
import useSocialLoginMutation from '@/hooks/user/socialLogin/useSocialLoginMutation';
import { socialLoginTempStore } from '@/store/user/socialLoginTempStore';
import FormPopup from './FormPopup';

function KakaoSignUp() {
    const { setSocialLoginInfo } = socialLoginTempStore();
    const navigate = useNavigate();
    const { isValid: nicknameValid, setIsValid: setNicknameValid } = useNicknameValidStore();
    const { openPopup, closePopup } = usePopup();
    const { mutate } = useSocialLoginMutation();
    const [confirmClicked, setConfirmClicked] = useState(false);

    const handleConfirm = () => {
        if (nicknameValid && confirmClicked) {
            setSocialLoginInfo({ isChecked: true })
            const { name, nickname, socialId, socialType, isChecked } = socialLoginTempStore.getState();
            mutate({ name, nickname, socialId, socialType, isChecked });
            setNicknameValid(false);
            setConfirmClicked(false);
            closePopup();
        } else {
            openPopup(
                <Popup
                    content="닉네임은 필수 입력사항입니다."
                    subContent="다시 소셜 로그인을 시도해주세요."
                    buttons={
                        <Button variant="popup" onClick={closePopup}>
                            확인
                        </Button>
                    }
                />,
            );
            navigate('/login');
        }
    }

    useEffect(() => {
        if (nicknameValid && confirmClicked) {
            handleConfirm();
        }
    }, [nicknameValid, confirmClicked]);

    useEffect(() => {
        if (socialLoginTempStore.getState().socialType === 'ONGOING') {
            openPopup(
                <FormPopup
                    content="닉네임을 설정해주세요."
                    subContent="닉네임을 입력하셔야 최종 가입이 완료됩니다."
                    buttons={
                        <Button variant="popup" onClick={() => setConfirmClicked(true)}>
                            확인
                        </Button>
                    }
                />
            );

        } else if (socialLoginTempStore.getState().socialType === "SUCCESS") {
            setNicknameValid(true);
            setConfirmClicked(true);

        } else {
            navigate('/login');
            openPopup(
                <Popup
                    content="로그인에 실패했습니다!!!"
                    buttons={
                        <Button variant="popup" onClick={closePopup}>
                            확인
                        </Button>
                    }
                />,
            );
        }
    }, []);
    return null;


}

export default KakaoSignUp;
