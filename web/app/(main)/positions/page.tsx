'use client';
import mapStyles from '@/components/mapStyles';
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import React from 'react';
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  Timestamp,
  where,
} from 'firebase/firestore';
import db from '@/config/firebase';

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

export default function LivePositions() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY!,
  });
  const [map, setMap] = React.useState(null);
  const [userLocations, setUserLocations] = React.useState([]);

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
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);
    const endOfToday = new Date();
    endOfToday.setHours(23, 59, 59, 999);

    const unsubscribe = onSnapshot(
      query(
        collection(db, 'positions'),
        where('timestamp', '>=', Timestamp.fromDate(startOfToday)),
        where('timestamp', '<=', Timestamp.fromDate(endOfToday))
      ),
      (snapshot) => {
        console.log('Executed!');
        const updatedUserLocations = snapshot.docs.map((doc) => doc.data());
        console.log(updatedUserLocations);
        //@ts-ignore
        setUserLocations(updatedUserLocations);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2 className='heading-xl font-semibold'>Guard Tracking</h2>
      <p className='text-base mt-1 mb-3 text-secondary'>
        Monitor the locations of your organization&apos;s security teams on
        shift.
      </p>
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
            {points.map((point, index) => (
              <MarkerF key={index} position={point}></MarkerF>
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
