import { useFormContext } from 'react-hook-form';
import Input from '@/components/common/Input';
import { SignUpForm } from '@/types/user';

function EmailInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext<SignUpForm>();

  const emailRegister = register('email', {
    required: '※ 이메일 입력란이 비어있습니다.',
    pattern: {
      value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      message: '※ 올바른 이메일 형식에 맞게 작성해주세요.',
    },
    minLength: 8,
    maxLength: 16,
  });

  return (
    <Input
      label="이메일"
      type="email"
      id="signUp_email"
      placeholder="example@vitalroutes.com"
      className="h-[58px]"
      {...emailRegister}
      errorMessage={errors.email?.message}
    />
  );
}

export default EmailInput;
