import { useEffect, useState } from 'react';
import axios from 'axios';
import { socialLoginTempStore } from '@/store/user/socialLoginTempStore';
import KakaoSignUp from './KakaoSignup';

function KakaoLogin() {
  const { setSocialLoginInfo } = socialLoginTempStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCode = new URL(window.location.href).searchParams.get('code');

    const getAuthorizationCode = async () => {
      try {
        const res = await axios.get(`/oauth2/kakao/login?code=${getCode}`);
        setSocialLoginInfo({
          name: res.data.data.name,
          socialId: res.data.data.socialId,
          socialType: res.data.type
        });
      } finally {
        setLoading(false);
      }
    };

    if (getCode) {
      getAuthorizationCode();
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <KakaoSignUp />
      <p>{socialLoginTempStore.getState().socialType}, {socialLoginTempStore.getState().socialId}, {socialLoginTempStore.getState().name}</p>
    </div>
  );
}

export default KakaoLogin;
