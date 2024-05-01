//@ts-nocheck

import Container from '@/components/Container';
import { formatDate } from '@/lib';
import { UserGroupIcon } from '@heroicons/react/24/outline';
import AddGuardForm from './AddGuardForm';

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

      <div className='mt-8 flow-root'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
            <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg'>
              <table className='min-w-full divide-y divide-zinc-300'>
                <thead className='bg-zinc-50'>
                  <tr>
                    <th
                      scope='col'
                      className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-zinc-900 sm:pl-6'
                    >
                      Force ID
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-zinc-900'
                    >
                      Name
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-zinc-900'
                    >
                      Phone
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-zinc-900'
                    >
                      Created At
                    </th>

                    <th scope='col' className='relative py-3.5 pl-3 pr-4 sm:pr-6'>
                      <span className='sr-only'>Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-zinc-200 bg-white'>
                  {guards.map((guard) => (
                    <tr key={guard.force}>
                      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-zinc-900 sm:pl-6'>
                        {guard.force}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-zinc-500'>
                        {guard.name}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-zinc-500'>
                        {guard.phone}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-zinc-500'>
                        {formatDate(guard.createdAt)}
                      </td>
                      <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                        <a href='#' className='text-red-600 hover:text-red-900'>
                          Remove<span className='sr-only'>, {guard.force}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
