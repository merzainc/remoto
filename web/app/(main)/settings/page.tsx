'use client';
import mapStyles from '@/components/mapStyles';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import ControlPanel from './ControlPanel';
import { useState } from 'react';
import { Circle } from './cirlce';

const INITIAL_CENTER = { lat: -17.837938230551487, lng: 31.00712999655143 };

function MapConfigurationsPage() {
  const [center, setCenter] = useState(INITIAL_CENTER);
  const [radius, setRadius] = useState(45);

  const changeCenter = (newCenter: google.maps.LatLng | null) => {
    if (!newCenter) return;
    setCenter({ lng: newCenter.lng(), lat: newCenter.lat() });
  };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY!}>
      <Map
        styles={mapStyles}
        defaultZoom={18}
        defaultCenter={INITIAL_CENTER}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        zoomControl
        fullscreenControl
      >
        <Circle
          radius={radius}
          center={center}
          onRadiusChanged={setRadius}
          onCenterChanged={changeCenter}
          strokeColor={'#0c4cb3'}
          strokeOpacity={1}
          strokeWeight={3}
          fillColor={'#3b82f6'}
          fillOpacity={0.3}
          editable
          draggable
        />
      </Map>
      <ControlPanel
        center={center}
        radius={radius}
        onCenterChanged={setCenter}
        onRadiusChanged={setRadius}
      />
    </APIProvider>
  );
}

export default MapConfigurationsPage;
