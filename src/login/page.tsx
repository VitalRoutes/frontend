import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { userInfoStore } from './hook/userInfoStore';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import { getImageUrl } from '@/utils/getImageUrl';
import Modal from './components/Modal';


interface FormValues {
  email: string;
  password: string;
}

function LoginPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>();
  const [socialLoginModalOpen, setSocialLoginModalOpen] = useState<boolean>(false);
  const setUserValues = userInfoStore(state => state.setuserValues);

  const socialLoginToggle = () => {
    setSocialLoginModalOpen(!socialLoginModalOpen);
  }


  const onSubmit = (data: FormValues) => {
    setUserValues(data);
    // console.log('data', data) /* 로그인 연결예정 */
  }


  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/3 h-screen xl:flex hidden">
        <img src={getImageUrl('login/login_img.jpg')} alt='login_img' className="w-full h-full object-cover" />
      </div>

      <form className="xl:w-[580px] sm:w-[580px] w-3/4 mx-auto sm:space-y-12 space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <span className="text-xl font-bold text-gray-1 leading-8"><Link to='/'>Vitalroutes</Link>에 로그인</span>

        <Button className="border-2" variant="secondary-b" onClick={socialLoginToggle} type="button">소셜 로그인</Button>
        <Modal isOpen={socialLoginModalOpen} onClose={socialLoginToggle} title="소셜로그인">
          <a href="http://vital-routes.kro.kr:8080/login/kakaoLogin">
            <img src={getImageUrl('login/kakao_login_medium_wide.png')} alt="kakaoLogin" />
          </a>
        </Modal>

        <div>
          <Input
            label="이메일"
            type="email"
            id="login_email"
            placeholder="example@vitalroutes.com"
            className="h-[58px]"
            {...register("email", {
              required: "※ 이메일 입력란이 비어있습니다.",
              pattern: {
                value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "※ 올바른 이메일 형식에 맞게 작성해주세요."
              }
            })}
            errorMessage={errors.email?.message}
          />
        </div>

        <div className="relative">
          <Input
            label="비밀번호"
            type="password"
            id="login_password"
            placeholder="비밀번호 8~16자리를 입력해주세요"
            className="w-full h-[58px]"
            {...register("password", {
              required: "※ 비밀번호 입력란이 비어있습니다.",
              pattern: {
                value: /^(?=(?:.*[a-z])(?:.*[A-Z])|(?:(?=.*\d)(?=.*[a-z]))|(?:(?=.*\d)(?=.*[A-Z])))[a-zA-Z\d]{8,16}$/,
                message: "※ 올바른 비밀번호 형식에 맞게 작성해주세요."
              }
            })}
            errorMessage={errors.password?.message}
          />
          <Link to="findPassword" className="absolute text-right top-0 right-0 text-gray-2 underline mt-2">forget?</Link>
        </div>
        <span className='text-[13px] text-gray-2'>
          비밀번호는 8~16자리이며, 대문자, 소문자, 숫자 중 최소 2종류를 포함해야 합니다.
        </span>

        <Button variant="secondary-a" type="submit" disabled={isSubmitting}>
          로그인
        </Button>

        <div className="flex items-center justify-center">
          <span className='text-[14px] text-gray-2'>계정이 없으신가요?</span>
          <Link to="signUp" className='ml-[16px] text-[14px] text-gray-2 underline'>가입하기</Link>

        </div>
      </form>
    </div >
  )
}

export default LoginPage;