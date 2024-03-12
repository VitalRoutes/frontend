import { useFormContext } from 'react-hook-form';
import { ChangeEvent } from 'react';
import KaKaoMap from '@/components/units/KakaoMap';
import SpotFileInput from '@/components/units/SpotFileInput';
import { ChallengeRegisterationForm } from '@/types/posts';
import { getGpsFromImg } from '@/utils/ExifReader';

function MapSection() {
  const { register, watch, setValue } =
    useFormContext<ChallengeRegisterationForm>();

  const spots = watch('spots');
  const spotGps = spots
    .map((spot) => {
      const lat = spot?.lat;
      const lng = spot?.lng;
      return { lat, lng };
    })
    .filter(
      (spot): spot is { lat: number; lng: number } =>
        spot?.lat !== undefined && spot?.lng !== undefined,
    );

  return (
    <>
      <div className="h-[450px] w-full overflow-hidden rounded-[30px]">
        <KaKaoMap spots={spotGps} />
      </div>
      <div className="flex flex-col gap-[32px]">
        <div className="font-bold leading-[150%] ">
          사진을 촬영해주세요. (최소 2개, 최대 5개 까지 가능)
        </div>

        <div className="flex justify-between">
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
        </div>
      </div>
    </>
  );
}

export default MapSection;
