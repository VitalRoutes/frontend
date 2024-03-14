import { useEffect } from 'react';
import axios from 'axios';

function KakaoLogin() {
    useEffect(() => {
        const getCode = new URL(window.location.href).searchParams.get("code");

        const getAuthorizationCode = () => {
            axios({
                method: "GET",
                url: `http://vital-routes.kro.kr:8080/oauth2/kakao/login?code=${getCode}`
            })
                .then((res) => {
                    console.log(res);
                })
                .catch((error) => {
                    console.log("소셜로그인 에러 발생", error)
                    alert("로그인 실패")
                })
        }
        if (getCode) {
            getAuthorizationCode();
        }
    }, [])

    return null;
}

export default KakaoLogin;
