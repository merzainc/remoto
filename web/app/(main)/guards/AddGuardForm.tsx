'use client';

import { useState } from 'react';
import { Dialog, DialogActions, DialogBody, DialogTitle } from '@/components/ui/dialog';
import { ErrorMessage, Field, FieldGroup, Label } from '@/components/ui/fieldset';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlusIcon } from '@expo/styleguide-icons';

export default function AddGuardForm() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button type='button' color='blue' onClick={() => setIsOpen(true)}>
        <PlusIcon className='size-4' /> Add New Guard
      </Button>
      <Dialog size='xl' open={isOpen} onClose={setIsOpen}>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
          }}
        >
          <DialogTitle>Register Guard</DialogTitle>
          <DialogBody>
            <FieldGroup className='space-y-4'>
              <Field>
                <Label>Force ID</Label>
                <Input name='id' type='text' />
              </Field>
              <Field>
                <Label>Name</Label>
                <Input name='name' type='text' />
              </Field>
              <Field>
                <Label>Phone</Label>
                <Input name='name' type='text' />
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
