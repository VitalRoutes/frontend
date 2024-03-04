import { Map } from 'react-kakao-maps-sdk';
import CustomMarker from './CustomMarker';

function KaKaoMap() {
  return (
    <Map className="h-full w-full" center={{ lat: 33.5563, lng: 126.79581 }}>
      <CustomMarker label="spot1" lat={33.55635} lng={126.795841} />
      <CustomMarker label="spot2" lat={33.55638} lng={126.798041} />
    </Map>
  );
}

export default KaKaoMap;
