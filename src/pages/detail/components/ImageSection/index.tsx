import Spot from '@/components/common/Spot';
import { getImageUrl } from '@/utils/getImageUrl';

const TEMP_DATA = [
  getImageUrl('intro/intro_1.png'),
  getImageUrl('intro/intro_1.png'),
  getImageUrl('intro/intro_1.png'),
  getImageUrl('intro/intro_1.png'),
  getImageUrl('intro/intro_1.png'),
];

function ImageSection() {
  return (
    <section className="flex gap-4">
      {TEMP_DATA.map((src, index) => (
        <div key={src} className="flex flex-col items-center gap-4">
          <Spot label={`Spot ${index + 1}`} />
          <img src={src} alt="spot" />
        </div>
      ))}
    </section>
  );
}

export default ImageSection;
