import { Map, MapMarker } from 'react-kakao-maps-sdk';

function KaKaoMap() {
  return (
    <Map className="h-full w-full" center={{ lat: 33.5563, lng: 126.79581 }}>
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
        <div style={{ color: '#000' }}>Hello World!</div>
      </MapMarker>
    </Map>
  );
}

export default KaKaoMap;
