import Container from '@/components/Container';
import { Badge } from '@/components/ui/badge';
import UserGroupIcon from '@heroicons/react/24/outline/UserGroupIcon';
import PatrolForm from './PatrolForm';

const patrols = [
  {
    start: 'Thursday 02 14:00',
    end: 'Thursday 02 13:60PM',
    point: 'Library',
    desc: 'Test',
    status: 'pending',
    guard: 'Mataga Believe',
  },
  {
    start: 'Wednesday 01 11:40',
    end: 'Wednesday 01 18:00',
    point: 'Main Gate',
    desc: 'Test',
    status: 'completed',
    guard: 'Rakinzi Silver',
  },
];

export default function PatrolsPage() {
  return (
    <Container>
      <div className='grid w-full  grid-cols-1 items-center pb-2 pt-8'>
        <div className='flex items-center justify-between gap-3 max-md-gutters:flex-col max-md-gutters:items-start'>
          <div className='grid grid-cols-1 gap-2'>
            <div className='flex items-center gap-3'>
              <UserGroupIcon className='size-7 shrink-0' />
              <h1 className='text-default text-[25px] font-semibold leading-[1.4] tracking-[-0.021rem] max-md-gutters:text-[22px] max-md-gutters:leading-[1.409] max-sm-gutters:text-[19px] max-sm-gutters:leading-[1.5263] truncate'>
                Guards
              </h1>
            </div>
            <p className='font-normal text-[14px] leading-[1.5715] tracking-[-0.006rem] text-secondary'>
              Schedule a patrol to be carried out by the security teams, around the premises.
            </p>
          </div>
          <div className='justify-self-end'>
            <PatrolForm />
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
                      Start Time
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-zinc-900'
                    >
                      End Time
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-zinc-900'
                    >
                      Checkpoint
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-zinc-900'
                    >
                      Guard Assigned
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-zinc-900'
                    >
                      Status
                    </th>

                    <th scope='col' className='relative py-3.5 pl-3 pr-4 sm:pr-6'>
                      <span className='sr-only'>Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-zinc-200 bg-white'>
                  {patrols.length === 0 && (
                    <tr>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-zinc-500 text-center'>
                        No patrols were found
                      </td>
                    </tr>
                  )}
                  {patrols.map((patrol) => (
                    <tr key={patrol.guard}>
                      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-zinc-500  sm:pl-6'>
                        {patrol.start}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-zinc-500'>
                        {patrol.end}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-zinc-500'>
                        {patrol.point}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-zinc-500'>
                        {patrol.guard}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-zinc-500'>
                        {patrol.status === 'pending' ? (
                          <Badge color='red'>Pending</Badge>
                        ) : (
                          <Badge color='green'>Completed</Badge>
                        )}
                      </td>
                      <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                        <button className='text-red-500 hover:text-red-400'>
                          Delete<span className='sr-only'>,</span>
                        </button>
                        <button className='text-blue-500 ml-4 hover:text-blue-400'>
                          Details<span className='sr-only'>,</span>
                        </button>
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
