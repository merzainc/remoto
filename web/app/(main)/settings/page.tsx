'use client';
import mapStyles from '@/components/mapStyles';
import { APIProvider, ControlPosition, Map, MapControl } from '@vis.gl/react-google-maps';
import ControlPanel from './ControlPanel';
import { UndoRedoControl } from './UndoRedoContorl';
import { useDrawingManager } from './useDrawingManager';

function MapConfigurationsPage() {
  const drawingManager = useDrawingManager();
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY!}>
      <Map
        styles={mapStyles}
        defaultZoom={18}
        defaultCenter={{ lat: -17.837938230551487, lng: 31.00712999655143 }}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        zoomControl
        fullscreenControl
      />
      <ControlPanel />
      {/* <MapControl position={ControlPosition.TOP_CENTER}>
        <UndoRedoControl drawingManager={drawingManager} />
      </MapControl> */}
    </APIProvider>
  );
}

export default MapConfigurationsPage;
