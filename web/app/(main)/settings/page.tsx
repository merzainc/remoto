'use client';
import mapStyles from '@/components/mapStyles';
import { APIProvider, InfoWindow, Map, Marker } from '@vis.gl/react-google-maps';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Circle } from './cirlce';
import ControlPanel from './ControlPanel';

const INITIAL_CENTER = { lat: -17.837938230551487, lng: 31.00712999655143 };

interface Point {
  id: number;
  name: string;
  lat: number;
  lng: number;
}

function MapConfigurationsPage() {
  const [center, setCenter] = useState(INITIAL_CENTER);
  const [radius, setRadius] = useState(45);
  const [points, setPoints] = useState<Point[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/points')
      .then((res) => {
        setPoints(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
        {points.length > 0 &&
          points.map((pt) => (
            <>
              <Marker
                onClick={() => setOpen(true)}
                key={pt.id}
                position={{ lat: pt.lat, lng: pt.lng }}
              />
              {open && (
                <InfoWindow
                  position={{ lat: pt.lat, lng: pt.lng }}
                  onCloseClick={() => setOpen(false)}
                >
                  <p className='text-slate-900'>Name: {pt.name}</p>
                  <p>Latitude: {pt.lat}</p>
                  <p>Longitude: {pt.lng}</p>
                </InfoWindow>
              )}
            </>
          ))}
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
