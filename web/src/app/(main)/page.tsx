import { CalendarDateRangePicker } from '@/components/date-range-picker';
import { Button } from '@/components/ui/button';
import mergeClasses from '@/helpers';
import { ArrowDownIcon, ArrowUpIcon } from '@radix-ui/react-icons';
import Positions from './positions';

const stats = [
  {
    name: 'Total Subscribers',
    stat: '71,897',
    previousStat: '70,946',
    change: '12%',
    changeType: 'increase',
  },
  {
    name: 'Avg. Open Rate',
    stat: '58.16%',
    previousStat: '56.14%',
    change: '2.02%',
    changeType: 'increase',
  },
  {
    name: 'Avg. Click Rate',
    stat: '24.57%',
    previousStat: '28.62%',
    change: '4.05%',
    changeType: 'decrease',
  },
  {
    name: 'Test Card',
    stat: '24.57%',
    previousStat: '28.62%',
    change: '4.05%',
    changeType: 'decrease',
  },
];

export default function DashboardPage() {
  return (
    <>
      <div className='sm:flex sm:items-center'>
        <div className='sm:flex-auto'>
          <h1 className='inline-block text-2xl font-extrabold tracking-tight text-slate-900  sm:text-3xl'>
            Overview
          </h1>
        </div>
        <div className='mt-4 hidden sm:ml-16 sm:mt-0 sm:flex sm:items-center sm:gap-4'>
          <CalendarDateRangePicker />
          <Button>Download</Button>
        </div>
      </div>
      {/* Statistics */}

      <div className='my-6 grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
        <div className='col-span-4 h-[75vh] overflow-hidden rounded-md border border-slate-950/10 shadow-xs'>
          <header className='flex h-12 items-center border-b bg-default px-4'>
            <h2 className='text-xl font-bold leading-7 tracking-tight text-slate-900'>
              Live Tracking
            </h2>
          </header>
          <Positions />
        </div>
        <div className='col-span-3'></div>
      </div>
    </>
  );
}
