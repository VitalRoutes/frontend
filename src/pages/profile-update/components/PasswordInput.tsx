import { useFormContext } from 'react-hook-form';
import Input from '@/components/common/Input';
import { ProfileUpdateForm } from '@/types/user';

function PasswordInput() {
  const { register } = useFormContext<ProfileUpdateForm>();

  const prePasswordRegister = register('prePassword');
  const newPasswordRegister = register('newPassword');

  return (
    <>
      <Input
        type="password"
        label="이전 비밀번호"
        placeholder="비밀번호를 입력해주세요."
        {...prePasswordRegister}
      />
      <div>
        <Input
          type="password"
          label="새 비밀번호"
          placeholder="비밀번호를 입력해주세요."
          {...newPasswordRegister}
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
