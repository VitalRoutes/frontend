
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLoginStore } from '@/store/user/loginInfoStore';
import usePopup from '@/hooks/usePopup';
import Popup from '@/components/common/Popup';
import Button from '@/components/common/Button';

function Logout() {
    const navigate = useNavigate();
    const { setLoginInfo, setIsLogin } = useLoginStore();
    const { openPopup, closePopup } = usePopup();

    useEffect(() => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');

        setIsLogin(false);
        setLoginInfo({
            memberId: null,
            profile: null,
            socialId: null,
            name: null,
            nickname: null,
            email: null,
            socialType: null,
            accessToken: null,
            refreshToken: null,
            expiredTime: null,
        });

        navigate('/');

        openPopup(
            <Popup
                content="로그아웃이 완료되었습니다."
                buttons={
                    <Button variant="popup" onClick={closePopup}>
                        확인
                    </Button>
                }
            />,
        )
    }, [])

    return null;
}

export default Logout