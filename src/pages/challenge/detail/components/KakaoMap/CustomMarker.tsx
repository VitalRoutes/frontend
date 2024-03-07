import { CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk';
import { BASE_IMG_SRC } from '@/constants/src';
import Spot from '@/components/common/Spot';

interface Props {
  lat: number;
  lng: number;
  label: string;
}

function CustomMarker({ lat, lng, label }: Props) {
  return (
    <>
      <MapMarker
        image={{
          src: `${BASE_IMG_SRC}/picture/camera.png`,
          size: {
            width: 38,
            height: 38,
          },
          options: {
            offset: {
              x: 19,
              y: 19,
            },
          },
        }}
        position={{ lat, lng }}
      />
      <CustomOverlayMap position={{ lat, lng }} yAnchor={1}>
        <div className="relative -translate-y-6">
          <Spot label={label} />
        </div>
      </CustomOverlayMap>
    </>
  );
}

export default CustomMarker;
