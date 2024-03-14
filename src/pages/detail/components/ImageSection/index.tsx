import { useParams } from 'react-router-dom';
import Spot from '@/components/common/Spot';
import useChallengeDetail from '@/hooks/challenge/useChallengeDetail';

function ImageSection() {
  const { id } = useParams<{ id: string }>();
  const { data } = useChallengeDetail(id || '0');
  const images = [
    data?.storedStartingPositionImageName,
    data?.storedStopOverImage1Name,
    data?.storedStopOverImage2Name,
    data?.storedStopOverImage3Name,
    data?.storedDestinationImageName,
  ].filter((image): image is string => image !== undefined);

  return (
    <section className="flex w-full justify-between gap-4">
      {images.map((src, index) => (
        <div key={src} className="flex flex-col items-center gap-4 ">
          <Spot label={`Spot ${index + 1}`} />
          <img
            src={src}
            className="h-[121px] w-[175px] rounded-[16px]  object-cover "
            alt="spot"
          />
        </div>
      ))}
    </section>
  );
}

export default ImageSection;
