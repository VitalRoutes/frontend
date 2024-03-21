import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import BannerInput from './components/BannerInput';
import EditorSection from './components/EditorSection';
import MapSection from './components/MapSection';
import TagSection from './components/TagSection';
import TransportSection from './components/TransportSection';
import { ChallengeRegisterationForm, Spot } from '@/types/posts';
import Button from '@/components/common/Button';
import useChallengeWriteMutation from '@/hooks/challenge/useChallengeWriteMutation';
import useOnInvalid from './components/model/useOnInvalid';

function RegistrationPage() {
  const onInvalid = useOnInvalid();
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
      tags,
    } = data;

    const titleImage = titleImageList.item(0);

    const filteredSpots = [
      spots.at(0),
      spots.at(1),
      spots.at(2),
      spots.at(3),
      spots.at(4),
    ].filter((spot): spot is Spot => spot?.files?.item(0) !== null);

    const startSpot = filteredSpots.shift();
    const destSpot = filteredSpots.pop();
    const startingPositionImage = startSpot?.files?.item(0);
    const destinationImage = destSpot?.files?.item(0);
    const transformedTags = tags.filter((tag): tag is string => tag !== false);

    if (
      !startingPositionImage ||
      !destinationImage ||
      !titleImage ||
      !startSpot ||
      !destSpot
    ) {
      return;
    }
    mutate({
      challengeTitle: title,
      challengeContents: contents,
      challengeTransportation: transportation,
      titleImage,
      startingPositionImage,
      destinationImage,
      stopOverImage1: filteredSpots.at(0)?.files?.item(0) || null,
      stopOverImage2: filteredSpots.at(1)?.files?.item(0) || null,
      stopOverImage3: filteredSpots.at(2)?.files?.item(0) || null,
      tags: transformedTags,
      startingPosLat: startSpot.lat,
      startingPosLon: startSpot.lng,
      destinationLat: destSpot.lat,
      destinationLon: destSpot.lng,
      stopOver1Lat: filteredSpots.at(0)?.lat || null,
      stopOver1Lon: filteredSpots.at(0)?.lng || null,
      stopOver2Lat: filteredSpots.at(0)?.lat || null,
      stopOver2Lon: filteredSpots.at(0)?.lng || null,
      stopOver3Lat: filteredSpots.at(0)?.lat || null,
      stopOver3Lon: filteredSpots.at(0)?.lng || null,
    });
  };

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <FormProvider {...methods}>
        <BannerInput />
        <div className="mx-auto my-[120px] flex max-w-[940px] flex-col gap-[62px] px-[21px]">
          <EditorSection />
          <TransportSection />
          <TagSection />
          <MapSection />
          <Button type="submit" disabled={isPending}>
            등록하기
          </Button>
        </div>
      </FormProvider>
    </form>
  );
}

export default RegistrationPage;
