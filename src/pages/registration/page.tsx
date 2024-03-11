import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import BannerInput from './components/BannerInput';
import EditorSection from './components/EditorSection';
import MapSection from './components/MapSection';
import TagSection from './components/TagSection';
import TransportSection from './components/TransportSection';
import { ChallengeRegisterationForm } from '@/types/posts';
import Button from '@/components/common/Button';
import useChallengeWriteMutation from '@/hooks/challenge/useChallengeWriteMutation';

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

  const { handleSubmit } = methods;

  const { mutate } = useChallengeWriteMutation();

  const onValid: SubmitHandler<ChallengeRegisterationForm> = (data) => {
    const { title, titleImg, spots, contents, transportation } = data;

    mutate({
      challengeWriter: 'test nickname',
      challengeTitle: title,
      challengeContents: contents,
      challengeTransportation: transportation,
      titleImage: titleImg[0],
      startingPositionImage: spots.at(0)?.files?.item(0) || null,
      stopOverImage1: spots.at(1)?.files?.item(0) || null,
      stopOverImage2: spots.at(2)?.files?.item(0) || null,
      stopOverImage3: spots.at(3)?.files?.item(0) || null,
      destinationImage: spots.at(-1)?.files?.item(0) || null,
    });
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
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
