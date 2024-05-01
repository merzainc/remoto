'use client';
import mapStyles from '@/components/mapStyles';
import { APIProvider, ControlPosition, Map } from '@vis.gl/react-google-maps';
import axios from 'axios';
import { useState } from 'react';
import { CustomMapControl } from './MapControl';
import MapHandler from './map-handler';

import { useToast } from '@/components/toast/use-toast';
import { Button } from '@/components/ui/button';
import { Dialog, DialogActions, DialogBody, DialogTitle } from '@/components/ui/dialog';
import { Field, FieldGroup, Label } from '@/components/ui/fieldset';
import { Input } from '@/components/ui/input';

export type AutocompleteMode = { id: string; label: string };

const autocompleteModes: Array<AutocompleteMode> = [
  { id: 'classic', label: 'Google Autocomplete Widget' },
  { id: 'custom', label: 'Custom Build' },
  { id: 'custom-hybrid', label: 'Custom w/ Select Widget' },
];

export default function PointsPage() {
  const [selectedAutocompleteMode, setSelectedAutocompleteMode] = useState<AutocompleteMode>(
    autocompleteModes[2]
  );

  const [selectedPlace, setSelectedPlace] = useState<google.maps.places.PlaceResult | null>(null);
  const [location, setLocation] = useState<google.maps.LatLngLiteral>({ lat: 0, lng: 0 });
  let [isOpen, setIsOpen] = useState(false);
  let [pointData, setPointData] = useState({ name: '', station: '' });
  const { toast } = useToast();

  return (
    <>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY!}>
        <Map
          styles={mapStyles}
          defaultZoom={3}
          defaultCenter={{ lat: 22.54992, lng: 0 }}
          gestureHandling={'greedy'}
          zoomControl
          fullscreenControl
          disableDefaultUI={true}
          onContextmenu={(e) => {
            if (e.detail.latLng) {
              setLocation(e.detail.latLng);
              setIsOpen(true);
            }
          }}
        />

        <CustomMapControl
          controlPosition={ControlPosition.TOP}
          selectedAutocompleteMode={selectedAutocompleteMode}
          onPlaceSelect={setSelectedPlace}
        />

        <MapHandler place={selectedPlace} />
      </APIProvider>
      <Dialog size='xl' open={isOpen} onClose={setIsOpen}>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            console.log(pointData, location);
          }}
        >
          <DialogTitle>Save Checkpoint</DialogTitle>
          <DialogBody>
            <FieldGroup className='space-y-4'>
              <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4'>
                <Field>
                  <Label>Name</Label>
                  <Input
                    name='name'
                    type='text'
                    placeholder='Library'
                    required
                    onChange={(e) => setPointData({ ...pointData, name: e.target.value })}
                    value={pointData.name}
                  />
                </Field>
                <Field>
                  <Label>Station</Label>
                  <Input
                    name='station'
                    type='text'
                    placeholder='HIT Campus'
                    required
                    onChange={(e) => setPointData({ ...pointData, station: e.target.value })}
                    value={pointData.station}
                  />
                </Field>
              </div>
              <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4'>
                <Field>
                  <Label>Latitude</Label>
                  <Input name='name' type='number' value={location.lat} disabled />
                </Field>
                <Field>
                  <Label>Longitude</Label>
                  <Input name='station' type='number' value={location.lng} disabled />
                </Field>
              </div>
            </FieldGroup>
          </DialogBody>
          <DialogActions>
            <Button outline onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                axios
                  .post(`/api/points`, {
                    name: pointData.name,
                    lat: location.lat,
                    lng: location.lng,
                  })
                  .then((res) => {
                    toast({
                      title: 'Checkpoint',
                      description: `${pointData.name} was successfully saved`,
                    });
                    setIsOpen(false);
                  })
                  .catch((err) => {
                    toast({
                      title: 'Checkpoint',
                      description: 'Failed to create a checkpoint, try again.',
                    });
                  });
              }}
            >
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
