import { FormProvider, useForm } from 'react-hook-form';
import BannerInput from './components/BannerInput';
import EditorSection from './components/EditorSection';
import MapSection from './components/MapSection';
import TagSection from './components/TagSection';
import TransportSection from './components/TransportSection';
import { ChallengeRegisterationForm } from '@/types/posts';
import Button from '@/components/common/Button';

function RegistrationPage() {
  const methods = useForm<ChallengeRegisterationForm>({
    defaultValues: {
      spots: [
        { files: undefined },
        { files: undefined },
        { files: undefined },
        { files: undefined },
        { files: undefined },
      ],
    },
  });

  return (
    <form>
      <FormProvider {...methods}>
        <BannerInput />
        <div className="mx-auto my-[120px] flex w-[940px] flex-col gap-[62px]">
          <EditorSection />
          <TransportSection />
          <TagSection />
          <MapSection />
          <Button>등록하기</Button>
        </div>
      </FormProvider>
    </form>
  );
}

export default RegistrationPage;
