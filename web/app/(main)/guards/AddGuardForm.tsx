'use client';

import { useToast } from '@/components/toast/use-toast';
import { Button } from '@/components/ui/button';
import { Dialog, DialogActions, DialogBody, DialogTitle } from '@/components/ui/dialog';
import { Field, FieldGroup, Label } from '@/components/ui/fieldset';
import { Input } from '@/components/ui/input';
import { PlusIcon } from '@expo/styleguide-icons';
import axios, { AxiosError } from 'axios';
import { useState } from 'react';

export default function AddGuardForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [guard, setGuard] = useState({ name: '', id: '', phone: '' });
  const { toast } = useToast();

  return (
    <>
      <Button type='button' color='blue' onClick={() => setIsOpen(true)}>
        <PlusIcon className='size-4' /> Add New Guard
      </Button>
      <Dialog size='xl' open={isOpen} onClose={setIsOpen}>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            axios
              .post('http://localhost:3000/api/guards', {
                name: guard.name,
                force: guard.id,
                phone: guard.phone,
                password: '1234',
              })
              .then((res) => {
                if (res.status === 200 || res.status === 201) {
                  setGuard({ name: '', id: '', phone: '' });
                  toast({
                    title: 'Guard Registration',
                    description: 'Guard was successfully registered.',
                  });
                  setIsOpen(false);
                  window.location.href = '/guards';
                } else {
                  toast({
                    title: 'Guard Registration',
                    description: res.data.message,
                  });
                }
              })
              .catch((err: AxiosError) => {
                toast({
                  variant: 'destructive',
                  title: 'Guard Registration',
                  //@ts-ignore
                  description: err.response?.data.message,
                });
              });
          }}
        >
          <DialogTitle>Register Guard</DialogTitle>
          <DialogBody>
            <FieldGroup className='space-y-4'>
              <Field>
                <Label>Force ID</Label>
                <Input
                  name='id'
                  type='text'
                  onChange={(e) => setGuard({ ...guard, id: e.target.value })}
                  value={guard.id}
                />
              </Field>
              <Field>
                <Label>Name</Label>
                <Input
                  name='name'
                  type='text'
                  onChange={(e) => setGuard({ ...guard, name: e.target.value })}
                  value={guard.name}
                />
              </Field>
              <Field>
                <Label>Phone</Label>
                <Input
                  name='name'
                  type='text'
                  onChange={(e) => setGuard({ ...guard, phone: e.target.value })}
                  value={guard.phone}
                />
              </Field>
            </FieldGroup>
          </DialogBody>
          <DialogActions>
            <Button outline onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button type='submit'>Submit</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
