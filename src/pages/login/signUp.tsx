import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import { userInfoStore } from '../../store/user/userInfoStore';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import { getImageUrl } from '@/utils/getImageUrl';
import { API_URL } from '@/constants/api';

interface FormValues {
  name: string;
  nickname: string;
  email: string;
  password: string;
  username: string;
  isChecked: boolean;
}

function SignUp() {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();
  const setUserValues = userInfoStore((state) => state.setuserValues);
  const [isNicknameValid, setIsNicknameValid] = useState<boolean>(false); // 닉네임 중복체크 여부
  const [verifiedNickname, setVerifiedNickname] = useState<string>(''); // 중복체크 완료한 닉네임

  /**
   * 백엔드 통신-중복 닉네임 인증
   * @param nickname 닉네임 input의 값
   * @returns 닉네임 중복 인증 성공: true, 실패: false
   */
  const checkNickNameExists = async (nickname: string) => {
    if (nickname.trim().length < 3 || nickname.trim().length > 16) {
      return '※ 닉네임은 3글자 이상 16글자 이하로 입력해주세요.';
    }

    try {
      const res = await axios.post('/member/duplicateCheck', {
        nickname,
      });

      setIsNicknameValid(false);
      if (res.data.type === 'SUCCESS') {
        setIsNicknameValid(true);
        return true;
      }
      return isNicknameValid === false && false;
    } catch (error) {
      throw new Error('Error 발생. 관리자에게 문의해주세요.');
    }
  };

  /* 중복 인증 버튼 클릭시 동작 */
  const handleCheckDuplicate = async () => {
    try {
      const nickName = watch('nickname');
      const result = await checkNickNameExists(nickName);

      if (result === true) {
        setVerifiedNickname(nickName);
      }
    } catch (error) {
      throw new Error('Error 발생. 관리자에게 문의해주세요.');
    }
  };

  const onSubmit = async (data: FormValues) => {
    if (isNicknameValid && verifiedNickname === watch('nickname')) {
      setUserValues(data);
      axios.post(`${API_URL}/member/signUp`, data).then(() => {
        window.location.href = '/login';
      });
    }
  };

  return (
    <div>
      <div className="flex h-screen items-center justify-center">
        <div className="hidden h-screen w-1/3 xl:flex">
          <img
            src={getImageUrl('login/login_img.jpg')}
            alt="login_img"
            className="h-full w-full object-cover"
          />
        </div>
        <form
          className="mx-auto w-3/4 space-y-8 sm:w-[580px] xl:w-[580px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <span className="text-xl font-bold leading-8 text-gray-1">
            Vitalroutes에 가입하세요.
          </span>
          <Input
            label="이름"
            type="name"
            id="signUp_name"
            placeholder="김루트"
            className="h-[58px]"
            {...register('name', {
              required: '※ 이름을 입력해 주세요.',
              minLength: {
                value: 3,
                message: '※ 이름은 최소 3글자 이상이어야 합니다.',
              },
              maxLength: {
                value: 16,
                message: '※ 이름은 최대 16글자까지만 허용됩니다.',
              },
            })}
            errorMessage={errors.name?.message}
          />

          <div className="relative">
            <Input
              label="닉네임"
              type="nickname"
              id="signUp_nickname"
              placeholder="닉네임을 입력해 주세요."
              className="h-[58px]"
              {...register('nickname', {
                required: '※ 닉네임을 입력해주세요.',
                minLength: {
                  value: 3,
                  message: '※ 닉네임은 최소 3글자 이상이어야 합니다.',
                },
                maxLength: {
                  value: 16,
                  message: '※ 닉네임은 최대 16글자까지만 허용됩니다.',
                },
                validate: async (value) => checkNickNameExists(value),
              })}
              errorMessage={errors.nickname?.message}
            />
            <Button
              variant="tag-b"
              type="button"
              className="absolute right-4 top-[42px] mt-2 px-4 py-2 text-[13px] tracking-tighter text-gray-2"
              onClick={handleCheckDuplicate}
            >
              중복 인증
            </Button>
          </div>

          <Input
            label="이메일"
            type="email"
            id="signUp_email"
            placeholder="example@vitalroutes.com"
            className="h-[58px]"
            {...register('email', {
              required: '※ 이메일 입력란이 비어있습니다.',
              pattern: {
                value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: '※ 올바른 이메일 형식에 맞게 작성해주세요.',
              },
            })}
            errorMessage={errors.email?.message}
          />

          <div className="relative">
            <Input
              label="비밀번호"
              type="password"
              id="signUp_password"
              placeholder="비밀번호 8~16자리를 입력해주세요"
              className="h-[58px]"
              {...register('password', {
                required: '※ 비밀번호 입력란이 비어있습니다.',
                pattern: {
                  value:
                    /^(?=(?:.*[a-z])(?:.*[A-Z])|(?:(?=.*\d)(?=.*[a-z]))|(?:(?=.*\d)(?=.*[A-Z])))[a-zA-Z\d]{8,16}$/,
                  message: '※ 올바른 비밀번호 형식에 맞게 작성해주세요.',
                },
              })}
              errorMessage={errors.password?.message}
            />
          </div>
          <span className="text-[13px] tracking-tight text-gray-2">
            비밀번호는 8~16자리이며, 대문자, 소문자, 숫자 중 최소 2종류를
            포함해야 합니다.
          </span>

          <div className="relative flex items-center">
            <div className="relative mr-2 mt-2 w-[16px] flex-col">
              <Input
                type="checkbox"
                id="signUp_checkbox"
                className="h-[16px] w-[16px]"
                {...register('isChecked', {
                  required: '※ 약관에 동의하셔야 회원가입이 가능합니다.',
                })}
                errorMessage={errors.isChecked?.message}
              />
            </div>

            <p className="absolute top-[21px] ml-6 text-[15px] tracking-tight">
              Vitalroutes의 서비스 약관개인정보 보호정책 및 위치기반 서비스에
              동의합니다.
            </p>

            {/* footer 완성시 변경예정 */}
            {/* <p className="absolute top-[21px] ml-6 text-[15px] tracking-tight">
              Vitalroutes의 <Link to="#" className="underline">서비스 약관</Link>,{" "}
              <Link to="#" className="underline">개인정보 보호정책</Link> 및{" "}
              <Link to="#" className="underline">위치기반 서비스</Link>에 동의합니다.
            </p> */}
          </div>

          <Button variant="secondary-a" type="submit" disabled={isSubmitting}>
            계정 만들기
          </Button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
