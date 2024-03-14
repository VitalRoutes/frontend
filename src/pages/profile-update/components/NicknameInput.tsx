import { useFormContext } from 'react-hook-form';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import { ProfileUpdateForm } from '@/types/user';

function NicknameInput() {
  const { register } = useFormContext<ProfileUpdateForm>();

  const nicknameRegister = register('nickname');

  return (
    <div>
      <Input
        label="닉네임"
        placeholder="김루트"
        button={<Button variant="third-b">중복 인증</Button>}
        {...nicknameRegister}
      />
      <div className="mt-[16px] text-[13px] text-gray-2">
        닉네임은 특수문자 없이 최소 3자에서 최대 16자 사이로 제한합니다.
      </div>
    </div>
  );
}

export default NicknameInput;
