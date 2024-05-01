'use client';
import { Button } from '@/components/ui/button';
import { MarkerPin04Icon, Settings02Icon } from '@expo/styleguide-icons';
import * as React from 'react';
import AppSettingsForm from './AppSettings';

type Props = {
  center: google.maps.LatLngLiteral;
  radius: number;
  onCenterChanged: (c: google.maps.LatLngLiteral) => void;
  onRadiusChanged: (r: number) => void;
};

function ControlPanel({ center, radius, onRadiusChanged, onCenterChanged }: Props) {
  return (
    <div className='control-panel'>
      <h3>Remoto Configurations</h3>

      <div style={{ marginBottom: '2rem', borderTop: '1px solid #ccc' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <label htmlFor='radius' className='text-zinc-900'>
              Radius:
            </label>
            <input
              type='number'
              value={radius}
              onChange={(e) => onRadiusChanged(Number(e.target.value))}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <label htmlFor='lat' className='text-zinc-900'>
              Lat:
            </label>
            <input
              type='number'
              value={center.lat}
              onChange={(e) => onCenterChanged({ lat: Number(e.target.value), lng: center.lng })}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <label htmlFor='lng' className='text-zinc-900'>
              Lng:
            </label>
            <input
              type='number'
              value={center.lng}
              onChange={(e) => onCenterChanged({ lat: center.lat, lng: Number(e.target.value) })}
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-y-3'>
        <Button>
          <MarkerPin04Icon className='size-5' />
          Save Region
        </Button>
        <AppSettingsForm />
      </div>
    </div>
  );
}

export default React.memo(ControlPanel);
