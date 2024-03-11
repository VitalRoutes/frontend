import { useParams } from 'react-router-dom';
import Spot from '@/components/common/Spot';
import useChallengeDetail from '@/hooks/challenge/useChallengeDetail';

function ImageSection() {
  const { id } = useParams<{ id: string }>();
  const { data } = useChallengeDetail(id || '0');
  const images = [
    data?.destinationImage,
    data?.stopOverImage1,
    data?.stopOverImage2,
    data?.stopOverImage3,
    data?.destinationImage,
  ];

  return (
    <section className="flex w-full justify-between gap-4">
      {images.map((src, index) => {
        if (!src) return null; // 디자이너 상의 후 처리

        return (
          <div key={src} className="flex flex-col items-center gap-4">
            <Spot label={`Spot ${index + 1}`} />
            <img src={src} alt="spot" />
          </div>
        );
      })}
    </section>
  );
}

export default ImageSection;
