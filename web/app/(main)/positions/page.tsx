'use client';
import mapStyles from '@/components/mapStyles';
import db from '@/config/firebase';
import { GoogleMap, InfoWindow, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { collection, onSnapshot } from 'firebase/firestore';
import React, { useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '100%',
  outline: 'none',
  overflow: 'none',
};

const center = {
  lat: -17.837747913085387,
  lng: 31.007124879660747,
};

const points = [
  {
    lat: -17.837184419476355,
    lng: 31.007419856308367,
  },
  {
    lat: -17.836459287240768,
    lng: 31.007119448896013,
  },
  {
    lat: -17.83942107636083,
    lng: 31.007537873506077,
  },
  {
    lat: -17.838890000557562,
    lng: 31.006765397302875,
  },
];

interface Point {
  _lat: number;
  _long: number;
}

interface Battery {
  level: string;
  status: string;
}

interface Position {
  id: string;
  name: string;
  location: Point;
  battery: Battery;
}

export default function LivePositions() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY!,
  });
  const [map, setMap] = React.useState(null);
  const [guardPositions, setGuardPositions] = React.useState<Position[]>([]);
  const [selectedMarker, setSelectedMarker] = useState<Position>();

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  React.useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'positions'), (snapshot) => {
      //@ts-ignore
      const positions = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.signedIn) {
          positions.push({
            id: doc.id,
            name: data.name,
            location: data.location,
            battery: data.battery,
          });
        }
      });
      //@ts-ignore
      console.log(positions);
      //@ts-ignore
      setGuardPositions(positions);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <header id='header' className='relative z-20'>
        <div>
          <div className='flex items-center'>
            <h1 className='inline-block text-2xl  font-semibold text-zinc-900 tracking-tight'>
              Guard Tracking
            </h1>
          </div>
        </div>
        <p className='mt-2  text-secondary'>
          Monitor the locations of your organization&apos;s security teams on shift.
        </p>
      </header>

      <div className='w-full border border-default shadow h-[600px] mt-16'>
        {isLoaded ? (
          <GoogleMap
            mapContainerClassName='hocus:outline-none outline-none border-none '
            mapContainerStyle={containerStyle}
            zoom={3}
            center={center}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
              styles: mapStyles,
            }}
          >
            {guardPositions.map((point, index) => (
              <MarkerF
                key={index}
                position={{
                  lat: point.location._lat,
                  lng: point.location._long,
                }}
                onClick={() => setSelectedMarker(point)}
              >
                {selectedMarker === point && (
                  <InfoWindow
                    position={{
                      lat: point.location._lat,
                      lng: point.location._long,
                    }}
                    //@ts-ignore
                    onCloseClick={() => setSelectedMarker(null)}
                  >
                    <div>
                      <h3>{point.name}</h3>
                      <p>{`Force Number: ${point.id}`}</p>
                      <p>{`Battery Level: ${point.battery.level}`}</p>
                      <p>{`Battery Status: ${point.battery.status}`}</p>
                    </div>
                  </InfoWindow>
                )}
              </MarkerF>
            ))}
            <></>
          </GoogleMap>
        ) : (
          <>
            <p className='text-secondary'>Loading map...</p>
          </>
        )}
      </div>
    </div>
  );
}
