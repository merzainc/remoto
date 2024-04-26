//@ts-nocheck
import { Button } from '@/components';
import { PlusIcon } from '@expo/styleguide-icons';
import { Metadata } from 'next';
import { HiOutlineUserGroup } from 'react-icons/hi2';

async function getGuards() {
  const res = await fetch('https://remoto-alpha.vercel.app/api/guards');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export const metadata: Metadata = {
  title: 'Guards - Remoto',
  description:
    ' View  and manage all of the security teams associated with your account. ',
};

export default async function GuardsPage() {
  const guards = await getGuards();
  return (
    <>
      <div className='flex items-center justify-between gap-3 max-md-gutters:flex-col max-md-gutters:items-start'>
        <div className='grid grid-cols-1 gap-2'>
          <div className='flex items-center gap-3'>
            <HiOutlineUserGroup className='text-icon-default icon-xl shrink-0' />
            <h1 className='text-default text-[25px] font-semibold leading-[1.4] tracking-[-0.021rem] max-md-gutters:text-[22px] max-md-gutters:leading-[1.409] max-sm-gutters:text-[19px] max-sm-gutters:leading-[1.5263] truncate'>
              Security Teams
            </h1>
          </div>
          <p className='font-normal text-[15px] leading-[1.5715] tracking-[-0.006rem] text-secondary'>
            View and manage all of the security teams associated with your
            account.
          </p>
        </div>
        <div className='justify-self-end'>
          <Button
            leftSlot={<PlusIcon className='icon-sm text-button-primary-icon' />}
          >
            Register Guard
          </Button>
        </div>
      </div>
      <div className='mt-16 flow-root'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
            <table className='min-w-full divide-y divide-secondary'>
              <thead>
                <tr>
                  <th
                    scope='col'
                    className='py-3.5 pl-4 pr-3 text-left text-sm font-medium text-secondary sm:pl-3'
                  >
                    ID
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-medium text-secondary'
                  >
                    Name
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-medium text-secondary'
                  >
                    Device ID
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-medium text-secondary'
                  >
                    Phone
                  </th>
                  <th scope='col' className='relative py-3.5 pl-3 pr-4 sm:pr-3'>
                    <span className='sr-only'>Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className='bg-default'>
                {guards.map((person, personIdx) => (
                  <tr
                    key={person.force}
                    className={personIdx % 2 === 0 ? undefined : 'bg-[#f9fafb]'}
                  >
                    <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-default sm:pl-3'>
                      {person.force}
                    </td>
                    <td className='whitespace-nowrap px-3 py-4 text-sm text-default'>
                      {person.name}
                    </td>
                    <td className='whitespace-nowrap px-3 py-4 text-sm text-default'>
                      N/A
                    </td>
                    <td className='whitespace-nowrap px-3 py-4 text-sm text-default'>
                      {person.phone}
                    </td>
                    <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3'>
                      <a
                        href='#'
                        className='text-palette-red9 hover:text-palette-red10'
                      >
                        Edit<span className='sr-only'>, {person.name}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
