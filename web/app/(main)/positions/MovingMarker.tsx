'use client';
import db from '@/config/firebase';
import { InfoWindow, Marker, Pin } from '@vis.gl/react-google-maps';
import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

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

export const MovingMarker = () => {
  const [guardPositions, setGuardPositions] = useState<Position[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
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
      setGuardPositions(positions);
    });
    return () => unsubscribe();
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const t = performance.now();
  //     const lat = Math.sin(t / 2000) * 5;
  //     const lng = Math.cos(t / 3000) * 5;

  //     setPosition({ lat, lng });
  //   }, 200);

  //   return () => clearInterval(interval);
  // });

  return (
    <>
      {guardPositions.map((point) => (
        <>
          <Marker
            onClick={() => setOpen(true)}
            key={point.id}
            position={{ lat: point.location._lat, lng: point.location._long }}
          />
          {open && (
            <InfoWindow
              position={{ lat: point.location._lat, lng: point.location._long }}
              onCloseClick={() => setOpen(false)}
            >
              <p>Force ID: {point.id}</p>
              <p>Name: {point.name}</p>
              <p>Battery Level: {point.battery.level}</p>
              <p>Battery Status: {point.battery.status}</p>
            </InfoWindow>
          )}
        </>
      ))}
    </>
  );
};
