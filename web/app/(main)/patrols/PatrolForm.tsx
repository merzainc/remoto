'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogActions, DialogBody, DialogTitle } from '@/components/ui/dialog';
import { Field, FieldGroup, Label } from '@/components/ui/fieldset';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { PlusIcon } from '@expo/styleguide-icons';
import { useState } from 'react';

export default function PatrolForm() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button type='button' color='blue' onClick={() => setIsOpen(true)}>
        <PlusIcon className='size-4' /> Schedule Patrol
      </Button>
      <Dialog size='2xl' open={isOpen} onClose={setIsOpen}>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
          }}
        >
          <DialogTitle>Assign Patrol Duty</DialogTitle>
          <DialogBody>
            <FieldGroup className='space-y-4'>
              <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4'>
                <Field>
                  <Label>Start Time</Label>
                  <Input name='first_name' />
                </Field>
                <Field>
                  <Label>End Time</Label>
                  <Input name='last_name' />
                </Field>
              </div>
              <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4'>
                <Field>
                  <Label>Checkpoint</Label>
                  <Select name='name'></Select>
                </Field>
                <Field>
                  <Label>Guard</Label>
                  <Select name='name'></Select>
                </Field>
              </div>

              <Field>
                <Label>Description</Label>
                <Textarea rows={7} />
              </Field>
            </FieldGroup>
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
