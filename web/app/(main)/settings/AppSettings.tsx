'use client';

import { Button } from '@/components/ui/button';
import { Checkbox, CheckboxField, CheckboxGroup } from '@/components/ui/checkbox';
import { Dialog, DialogActions, DialogBody, DialogTitle } from '@/components/ui/dialog';
import { Description, Field, FieldGroup, Fieldset, Label, Legend } from '@/components/ui/fieldset';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Settings02Icon } from '@expo/styleguide-icons';
import { useState } from 'react';

export default function AppSettingsForm() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button type='button' onClick={() => setIsOpen(true)}>
        <Settings02Icon className='size-5' /> App Settings
      </Button>
      <Dialog size='4xl' open={isOpen} onClose={setIsOpen}>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
          }}
        >
          <DialogTitle>Settings</DialogTitle>
          <DialogBody>
            <Fieldset>
              <Legend>Push Notificarions</Legend>
              <p className='prose prose-zinc text-sm'>
                Decide where your events can be found across the web.
              </p>
              <CheckboxGroup>
                <CheckboxField>
                  <Checkbox name='discoverability' value='show_on_events_page' defaultChecked />
                  <Label>Geofence alerts</Label>
                  <Description>Make this event visible on your profile.</Description>
                </CheckboxField>
                <CheckboxField>
                  <Checkbox name='discoverability' value='allow_embedding' />
                  <Label>Email notifications</Label>
                  <Description>
                    Allow others to embed your event details on their own site.
                  </Description>
                </CheckboxField>
              </CheckboxGroup>
            </Fieldset>
          </DialogBody>
          <DialogActions>
            <Button outline onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button type='submit' color='sky'>
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
