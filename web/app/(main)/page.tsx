import { authOptions } from '@/lib/auth';
import { getCurrentUser } from '@/lib/session';
import { redirect } from 'next/navigation';

const stats = [
  { name: 'Total Guards', stat: '12' },
  { name: 'Active Security', stat: '04' },
  { name: 'Assigned Tasks', stat: '16' },
  { name: 'Completed Tasks', stat: '05' },
];

export default async function HomePage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect(authOptions?.pages?.signIn || '/login');
  }
  return (
    <div>
      <h2 className='heading-xl font-semibold'>Dashboard</h2>
      <div className='mt-8'>
        <dl className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 xl:grid-cols-4'>
          {stats.map((item) => (
            <div
              key={item.name}
              className='overflow-hidden border border-default rounded-lg bg-default px-4 py-5 shadow sm:p-6'
            >
              <dt className='truncate text-sm font-medium text-secondary'>
                {item.name}
              </dt>
              <dd className='mt-1 text-3xl font-semibold tracking-tight text-default'>
                {item.stat}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
