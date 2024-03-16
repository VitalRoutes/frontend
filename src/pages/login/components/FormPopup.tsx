import { FormProvider, useForm } from 'react-hook-form';
import { ReactNode } from 'react';
import { SocialSignUpNickname } from '@/types/user';
import SocialNicknameInput from '@/pages/login/components/SocialNicknameInput';

interface Props {
  contents?: ReactNode;
  content?: string;
  subContent?: string;
  buttons?: ReactNode;
}

function FormPopup({ contents, buttons, content, subContent }: Props) {
  const methods = useForm<SocialSignUpNickname>();
  return (
    <div className="w-10/12 min-w-[300px] max-w-[500px] overflow-hidden rounded-[12px] bg-gray-11 ">
      <div className="flex flex-col gap-[12px] p-[40px]">
        {contents}
        <div className="text-center text-[20px] font-bold">{content}</div>
        <div className="text-center">{subContent}</div>
      </div>
      <div className="w-11/12 flex-col items-center justify-center mt-[-35px] ml-5 mb-[12px]">
        <FormProvider {...methods}>
          <form>
            <SocialNicknameInput />
          </form>
        </FormProvider>
      </div>

      <div className="flex">{buttons}</div>
    </div>
  );
}

export default FormPopup;
