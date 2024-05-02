//@ts-nocheck
'use client';

import { useToast } from '@/components/toast/use-toast';
import { Button } from '@/components/ui/button';
import { Dialog, DialogActions, DialogBody, DialogTitle } from '@/components/ui/dialog';
import { Field, FieldGroup, Label } from '@/components/ui/fieldset';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { PlusIcon } from '@expo/styleguide-icons';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function PatrolForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [guards, setGuards] = useState([]);
  const [points, setPoints] = useState([]);
  const [data, setData] = useState({ start: '', end: '', point: '', guard: '', desc: '' });
  const [patrols, setPatrols] = useState([
    {
      start: 'Thursday 02 14:00',
      end: 'Thursday 02 13:60PM',
      point: 'Library',
      desc: 'Test',
      status: 'Pending',
    },
    {
      start: 'Wednesday 01 11:40',
      end: 'Wednesday 01 18:00',
      point: 'Main Gate',
      desc: 'Test',
      status: 'Completed',
    },
  ]);
  const { toast } = useToast();

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/guards')
      .then((res) => setGuards(res.data))
      .catch((err) =>
        toast({
          title: 'Fetch failed',
          description: 'Failed to load guards list, try reloading page.',
        })
      );
    axios
      .get('http://localhost:3000/api/points')
      .then((res) => setPoints(res.data))
      .catch((err) =>
        toast({
          title: 'Fetch failed',
          description: 'Failed to load checkpoints list, try reloading page.',
        })
      );
  }, []);

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
                  <Input
                    name='first_name'
                    type='datetime-local'
                    onChange={(e) => {
                      setData({ ...data, start: e.target.value });
                    }}
                    value={data.start}
                    required
                  />
                </Field>
                <Field>
                  <Label>End Time</Label>
                  <Input
                    name='last_name'
                    type='datetime-local'
                    onChange={(e) => {
                      setData({ ...data, end: e.target.value });
                    }}
                    value={data.end}
                    required
                  />
                </Field>
              </div>
              <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4'>
                <Field>
                  <Label>Target Area</Label>
                  <Select
                    name='point'
                    onChange={(e) => {
                      setData({ ...data, point: e.target.value });
                    }}
                    value={data.point}
                    required
                  >
                    {points.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                  </Select>
                </Field>
                <Field>
                  <Label>Guard</Label>
                  <Select
                    name='name'
                    onChange={(e) => {
                      setData({ ...data, guard: e.target.value });
                    }}
                    value={data.guard}
                    required
                  >
                    {guards.map((guard) => (
                      <option key={guard.force} value={guard.name}>
                        {guard.name}
                      </option>
                    ))}
                  </Select>
                </Field>
              </div>

              <Field>
                <Label>Instructions</Label>
                <Textarea
                  rows={7}
                  onChange={(e) => {
                    setData({ ...data, desc: e.target.value });
                  }}
                  value={data.desc}
                  required
                />
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
