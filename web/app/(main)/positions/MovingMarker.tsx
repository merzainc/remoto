'use client';
import { Marker } from '@vis.gl/react-google-maps';
import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import db from '@/config/firebase';

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
      console.log(positions);
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
        <Marker
          key={point.id}
          position={{ lat: point.location._lat, lng: point.location._long }}
        ></Marker>
      ))}
    </>
  );
};
