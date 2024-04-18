'use client';
import mapStyles from '@/components/mapStyles';
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import React from 'react';

const containerStyle = {
  width: '100%',
  height: '100%',
  outline: 'none',
  overflow: 'visible',
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

export default function Positions() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY!,
  });

  const [map, setMap] = React.useState(null);
  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerClassName='hocus:outline-none outline-none border-none '
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        styles: mapStyles,
      }}
    >
      {points.map((point, index) => (
        <MarkerF key={index} position={point}></MarkerF>
      ))}
      <></>
    </GoogleMap>
  ) : (
    <>
      <h1>Map Here</h1>
    </>
  );
}
