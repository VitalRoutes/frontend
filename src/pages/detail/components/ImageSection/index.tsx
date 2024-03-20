import { motion } from 'framer-motion';
import { useRef } from 'react';
import Spot from '@/components/common/Spot';
import useChallengeDetail from '@/hooks/challenge/useChallengeDetail';

function ImageSection() {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const { data } = useChallengeDetail();
  const images = [
    data?.storedStartingPositionImageName,
    data?.storedStopOverImage1Name,
    data?.storedStopOverImage2Name,
    data?.storedStopOverImage3Name,
    data?.storedDestinationImageName,
  ].filter((image): image is string => image !== undefined);

  return (
    <motion.div className="w-full" ref={constraintsRef}>
      <motion.div
        dragConstraints={constraintsRef}
        drag="x"
        className="flex w-max justify-between gap-4"
      >
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
      </motion.div>
    </motion.div>
  );
}

export default ImageSection;
