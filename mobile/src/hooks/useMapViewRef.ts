import { useRef } from 'react';
import MapView from 'react-native-maps';

export default function useMapViewRef() {
  const mapRef = useRef<MapView>(null);
  return mapRef;
}
