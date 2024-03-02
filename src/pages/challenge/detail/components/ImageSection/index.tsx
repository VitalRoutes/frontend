import Spot from '@/components/common/Spot';
import { BASE_IMG_SCR } from '@/constants/src';

const TEMP_DATA = [
  `${BASE_IMG_SCR}/intro/intro_1.png`,
  `${BASE_IMG_SCR}/intro/intro_1.png`,
  `${BASE_IMG_SCR}/intro/intro_1.png`,
  `${BASE_IMG_SCR}/intro/intro_1.png`,
  `${BASE_IMG_SCR}/intro/intro_1.png`,
];

function ImageSection() {
  return (
    <section className="flex gap-4">
      {TEMP_DATA.map((src, index) => (
        <div className="flex flex-col items-center gap-4">
          <Spot label={`Spot ${index + 1}`} />
          <img src={src} alt="spot" />
        </div>
      ))}
    </section>
  );
}

export default ImageSection;
