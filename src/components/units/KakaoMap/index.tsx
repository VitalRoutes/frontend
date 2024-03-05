import { Map } from 'react-kakao-maps-sdk';
import CustomMarker from './CustomMarker';

interface Props {
  spots?: {
    lat: number;
    lng: number;
  }[];
}

function KaKaoMap({ spots }: Props) {
  if (!spots) {
    return <Map className="h-full w-full" center={{ lat: 0, lng: 0 }} />;
  }

  const latValues = spots.map((spot) => spot.lat);
  const lngValues = spots.map((spot) => spot.lng);
  const sumOfLng = lngValues.reduce((sum, lng) => sum + lng, 0);
  const sumOfLat = latValues.reduce((sum, lat) => sum + lat, 0);
  const averageLat = sumOfLat / spots.length;
  const averageLng = sumOfLng / spots.length;

  return (
    <Map
      className="h-full w-full"
      center={{ lat: averageLat, lng: averageLng }}
    >
      {spots.map(({ lat, lng }, idx) => (
        <CustomMarker
          key={`${lat}_${lng}`}
          label={`Spot ${idx + 1}`}
          lat={lat}
          lng={lng}
        />
      ))}
    </Map>
  );
}

export default KaKaoMap;
