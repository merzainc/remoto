import { Button } from '@/components';
import { PlusIcon } from '@expo/styleguide-icons';
import { HiOutlineUserGroup } from 'react-icons/hi2';

const people = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'walton@example.com',
    role: 'Member',
  },
  {
    name: 'Mataga Ralph',
    title: 'Front-end Developer',
    email: 'ralph@example.com',
    role: 'Member',
  },
  {
    name: 'Yolanda Musiwa',
    title: 'Front-end Developer',
    email: 'marema@example.com',
    role: 'Member',
  },
  {
    name: 'Lisa Madenga',
    title: 'Front-end Developer',
    email: 'lisa@example.com',
    role: 'Member',
  },
  // More people...
];

export default function GuardsPage() {
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
            View all of the geofences associated with your account.
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
                {people.map((person, personIdx) => (
                  <tr
                    key={person.email}
                    className={personIdx % 2 === 0 ? undefined : 'bg-[#f9fafb]'}
                  >
                    <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-default sm:pl-3'>
                      {person.name}
                    </td>
                    <td className='whitespace-nowrap px-3 py-4 text-sm text-default'>
                      {person.title}
                    </td>
                    <td className='whitespace-nowrap px-3 py-4 text-sm text-default'>
                      {person.email}
                    </td>
                    <td className='whitespace-nowrap px-3 py-4 text-sm text-default'>
                      {person.role}
                    </td>
                    <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3'>
                      <a
                        href='#'
                        className='text-palette-blue9 hover:text-palette-blue10'
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
