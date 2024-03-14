import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
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
  const { mutate, isPending } = useChallengeWriteMutation();

  const onValid: SubmitHandler<ChallengeRegisterationForm> = (data) => {
    const {
      title,
      titleImage: titleImageList,
      spots,
      contents,
      transportation,
    } = data;

    const titleImage = titleImageList.item(0);

    const spotFiles = [
      spots.at(0)?.files?.item(0),
      spots.at(1)?.files?.item(0),
      spots.at(2)?.files?.item(0),
      spots.at(3)?.files?.item(0),
      spots.at(4)?.files?.item(0),
    ].filter((file): file is File => file !== null);

    const startingPositionImage = spotFiles.at(0);
    const destinationImage = spotFiles.at(-1);

    if (!startingPositionImage || !destinationImage || !titleImage) return;
    mutate({
      challengeWriter: 'test nickname',
      challengeTitle: title,
      challengeContents: contents,
      challengeTransportation: transportation,
      titleImage,
      startingPositionImage,
      destinationImage,
      stopOverImage1: spots.at(1)?.files?.item(0) || null,
      stopOverImage2: spots.at(2)?.files?.item(0) || null,
      stopOverImage3: spots.at(3)?.files?.item(0) || null,
    });
  };

  const onInvalid: SubmitErrorHandler<ChallengeRegisterationForm> = () => {};

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <FormProvider {...methods}>
        <BannerInput />
        <div className="mx-auto my-[120px] flex max-w-[940px] flex-col gap-[62px] px-[21px]">
          <EditorSection />
          <TransportSection />
          <TagSection />
          <MapSection />
          <Button disabled={isPending}>등록하기</Button>
        </div>
      </FormProvider>
    </form>
  );
}

export default RegistrationPage;
