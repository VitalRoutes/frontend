import { useFormContext } from 'react-hook-form';
import Input from '@/components/common/Input';

function PasswordInput() {
  const { register } = useFormContext();

  const passwordRegister = register('password');
  const passwordConfirmRegister = register('password');

  return (
    <>
      <Input
        type="password"
        label="이전 비밀번호"
        placeholder="비밀번호를 입력해주세요."
        {...passwordRegister}
      />
      <div>
        <Input
          type="password"
          label="새 비밀번호"
          placeholder="비밀번호를 입력해주세요."
          {...passwordConfirmRegister}
        />
        <div className="mt-[16px] text-[13px] text-gray-2">
          비밀번호는 최소 8자 이상이며, 대문자, 소문자, 숫자 전부 포함해야
          합니다.
        </div>
      </div>
    </>
  );
}

export default PasswordInput;
