'use client';
import mapStyles from '@/components/mapStyles';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import ControlPanel from './ControlPanel';

import { MovingMarker } from './MovingMarker';

export default function LocationUpdatesPage() {
  return (
    <APIProvider libraries={['marker']} apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY!}>
      <Map
        styles={mapStyles}
        style={{ overflow: 'hidden', width: '100%', height: '100%' }}
        fullscreenControl
        defaultZoom={18}
        defaultCenter={{ lat: -17.837938230551487, lng: 31.00712999655143 }}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        zoomControl
      />
      {/* continously updated marker */}
      <MovingMarker />
      <ControlPanel />
    </APIProvider>
  );
}
