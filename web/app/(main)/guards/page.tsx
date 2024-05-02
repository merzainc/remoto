//@ts-nocheck

import Container from '@/components/Container';
import { UserGroupIcon } from '@heroicons/react/24/outline';
import AddGuardForm from './AddGuardForm';
import { GuardsTables } from './GuardsTables';

async function getGuards() {
  const res = await fetch('http://localhost:3000/api/guards', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-cache',
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    // throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function GuardsPage() {
  const guards = await getGuards();
  return (
    <Container>
      <div className='grid w-full [--gutter:theme(spacing.6)] sm:[--gutter:theme(spacing.8)]  grid-cols-1 items-center pb-2 pt-8'>
        <div className='flex items-center justify-between gap-3 max-md-gutters:flex-col max-md-gutters:items-start'>
          <div className='grid grid-cols-1 gap-2'>
            <div className='flex items-center gap-3'>
              <UserGroupIcon className='size-7 shrink-0' />
              <h1 className='text-default text-[25px] font-semibold leading-[1.4] tracking-[-0.021rem] max-md-gutters:text-[22px] max-md-gutters:leading-[1.409] max-sm-gutters:text-[19px] max-sm-gutters:leading-[1.5263] truncate'>
                Guards
              </h1>
            </div>
            <p className='font-normal text-[14px] leading-[1.5715] tracking-[-0.006rem] text-secondary'>
              View and manage all of the guards associated with your organization account.
            </p>
          </div>
          <div className='justify-self-end'>
            <AddGuardForm />
          </div>
        </div>
      </div>

      <GuardsTables guards={guards} />
    </Container>
  );
}
