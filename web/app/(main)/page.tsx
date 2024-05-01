import Container from '@/components/Container';

const stats = [
  { name: 'Total Guards', stat: '12' },
  { name: 'Active Security', stat: '04' },
  { name: 'Assigned Tasks', stat: '16' },
  { name: 'Completed Tasks', stat: '05' },
];

export default async function HomePage() {
  return (
    <Container>
      <header id='header' className='relative z-20'>
        <div>
          <div className='flex items-center'>
            <h1 className='inline-block text-2xl  font-semibold text-zinc-900 tracking-tight'>
              Dashboard
            </h1>
          </div>
        </div>
        <p className='mt-2 text-secondary'>
          Monitor the locations of your organization&apos;s security teams on shift.
        </p>
      </header>
      <div className='mt-8'>
        <dl className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 xl:grid-cols-4'>
          {stats.map((item) => (
            <div
              key={item.name}
              className='overflow-hidden border border-zinc-200 rounded-lg bg-default px-4 py-5 shadow sm:p-6'
            >
              <dt className='truncate text-sm font-medium text-secondary'>{item.name}</dt>
              <dd className='mt-1 text-3xl font-semibold tracking-tight text-default'>
                {item.stat}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Container>
  );
}
