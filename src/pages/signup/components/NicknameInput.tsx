import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import { SignUpForm } from '@/types/user';
import { socialLoginTempStore } from '@/store/user/socialLoginTempStore';
import useNicknameCheckMutation from '@/hooks/user/useNicknameCheckMutation';
import { useNicknameValidStore } from '@/store/user/signupStore';

function NicknameInput() {
  const { mutate } = useNicknameCheckMutation();
  const { setSocialLoginInfo } = socialLoginTempStore();
  const { isValid, setIsValid } = useNicknameValidStore();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext<SignUpForm>();

  const checkNicknameValidation = () => {
    console.log(isValid)
    const { nickname } = getValues();

    if (nickname.trim().length < 3 || nickname.trim().length > 16) {
      setIsValid(false);
      setError('※ 닉네임은 글자수를 확인해주세요.');
    } else {
      setIsValid(true);
      setError(null);
      setSocialLoginInfo({ nickname });
      mutate({ nickname });
    }
  };

  useEffect(() => {
    setIsValid(false);
  }, [])

  const nicknameRegister = register('nickname', {
    required: '※ 닉네임을 입력해주세요.',
    minLength: {
      value: 3,
      message: '※ 닉네임은 최소 3글자 이상이어야 합니다.',
    },
    maxLength: {
      value: 16,
      message: '※ 닉네임은 최대 16글자까지만 허용됩니다.',
    },
  });

  return (
    <div>
      <Input
        label="닉네임"
        type="nickname"
        id="signUp_nickname"
        placeholder="닉네임을 입력해 주세요."
        className="h-[58px]"
        button={
          <Button variant="tag-b" type="button" onClick={checkNicknameValidation}>
            중복 인증
          </Button>
        }
        {...nicknameRegister}
        errorMessage={errors.nickname?.message}
      />
      {error && <p className="text-alert text-sm mt-2">{error}</p>}
      {isValid && <p className='text-blue-600 text-sm mt-2'>※ 중복 인증이 완료되었습니다.</p>}
    </div>
  );
}

export default NicknameInput;
