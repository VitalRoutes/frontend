import { useFormContext } from 'react-hook-form';
import KaKaoMap from '@/components/units/KakaoMap';
import SpotFileInput from '@/components/units/SpotFileInput';
import { ChallengeRegisterationForm } from '@/types/posts';

function MapSection() {
  const { register, watch } = useFormContext<ChallengeRegisterationForm>();

  return (
    <section>
      <div className="h-[450px] w-full">
        <KaKaoMap spots={undefined} />
      </div>

      <div className="flex justify-between">
        {[1, 2, 3, 4, 5].map((key, index) => {
          const spotLabel = `Spot ${key}`;
          const spot = watch('spots')[index];
          const file = spot?.files?.item(0);
          const previewImgSrc = file ? URL.createObjectURL(file) : undefined;

          return (
            <SpotFileInput
              key={key}
              previewImgSrc={previewImgSrc}
              spotKey={spotLabel}
              {...register(`spots.${index}.files`)}
            />
          );
        })}
      </div>
    </section>
  );
}

export default MapSection;
