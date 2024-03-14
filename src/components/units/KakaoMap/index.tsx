import { Map } from 'react-kakao-maps-sdk';
import { useEffect, useState } from 'react';
import CustomMarker from './CustomMarker';

interface Props {
  spots?: {
    lat: number;
    lng: number;
  }[];
}

function KaKaoMap({ spots }: Props) {
  const [center, setCenter] = useState({
    lat: 33.450701,
    lng: 126.570667,
  });

  useEffect(() => {
    if (!spots || spots?.length === 0) return;
    const latValues = spots.map((spot) => spot.lat);
    const lngValues = spots.map((spot) => spot.lng);
    const sumOfLng = lngValues.reduce((sum, lng) => sum + lng, 0);
    const sumOfLat = latValues.reduce((sum, lat) => sum + lat, 0);
    const averageLat = sumOfLat / spots.length;
    const averageLng = sumOfLng / spots.length;
    setCenter({ lat: averageLat, lng: averageLng });
  }, [spots, setCenter]);

  return (
    <Map className="h-full w-full" center={center}>
      {spots?.map(({ lat, lng }, idx) => (
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
