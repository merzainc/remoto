'use client';
import { Button } from '@/components/ui/button';
import { Edit03Icon, PlusIcon, Settings03Icon } from '@expo/styleguide-icons';
import { Cog6ToothIcon, Cog8ToothIcon } from '@heroicons/react/24/outline';
import * as React from 'react';

function ControlPanel() {
  return (
    <div className='control-panel'>
      <h3>Remoto Configurations</h3>
      <p>
        The map allows admins to create geofences or define working zones. You can also update
        general system settings.
      </p>
      <div className='flex flex-col gap-y-3'>
        <Button>
          <Cog6ToothIcon className='!size-5' />
          General Settings
        </Button>
        <Button href='/points'>
          <Edit03Icon className='size-5' />
          New Checkpoint
        </Button>
      </div>
    </div>
  );
}

export default React.memo(ControlPanel);
