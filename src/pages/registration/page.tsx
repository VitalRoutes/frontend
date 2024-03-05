import { FormProvider, useForm } from 'react-hook-form';
import BannerInput from './components/BannerInput';
import EditorSection from './components/EditorSection';
import MapSection from './components/MapSection';
import TagSection from './components/TagSection';
import TransportSection from './components/TransportSection';
import { ChallengeRegisterationForm } from '@/types/posts';

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
    <div>
      <FormProvider {...methods}>
        <BannerInput />
        <div className="mx-auto flex w-[940px] flex-col gap-[62px]">
          <EditorSection />
          <TransportSection />
          <TagSection />
          <MapSection />
        </div>
      </FormProvider>
    </div>
  );
}

export default RegistrationPage;
