import { motion } from 'framer-motion';
import { ChangeEvent, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import SpotFileInput from '@/components/units/SpotFileInput';
import { ChallengeRegisterationForm } from '@/types/posts';
import { getGpsFromImg } from '@/utils/ExifReader';

function SpotInputList() {
  const constraintsRef = useRef(null);
  const { register, watch, setValue } =
    useFormContext<ChallengeRegisterationForm>();

  return (
    <div className="w-full" ref={constraintsRef}>
      <motion.div
        drag="x"
        dragConstraints={constraintsRef}
        className="flex w-max gap-[4.6px] xl:justify-between"
      >
        {[1, 2, 3, 4, 5].map((key, index) => {
          const spotLabel = `Spot ${key}`;
          const spot = watch('spots')[index];
          const file = spot?.files?.item(0);
          const previewImgSrc = file ? URL.createObjectURL(file) : undefined;
          const required = index === 0 || index === 1;

          const spotRegister = register(`spots.${index}.files`, {
            onChange: async (e: ChangeEvent<HTMLInputElement>) => {
              const { files } = e.target;
              const targetFile = files?.item(0);
              if (!targetFile) return;
              const { lat, lng } = await getGpsFromImg(targetFile);
              setValue(`spots.${index}.lat`, lat);
              setValue(`spots.${index}.lng`, lng);
            },
            required,
          });

          return (
            <SpotFileInput
              key={key}
              previewImgSrc={previewImgSrc}
              spotKey={spotLabel}
              {...spotRegister}
            />
          );
        })}
      </motion.div>
    </div>
  );
}

export default SpotInputList;
