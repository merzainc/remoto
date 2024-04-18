import Link from 'next/link';
import UserNav from './UserNav';
import MobileNav from './MobileNav';

export default function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div
      className='sticky top-0 border-b'
      style={{
        transform: 'translateZ(0)',
        WebkitBackdropFilter: 'saturate(180%) blur(5px)',
        backdropFilter: 'saturate(180%) blur(5px)',
        background: 'hsla(0,0%,100%,.8)',
      }}
    >
      <div className='flex h-14 items-center px-4 sm:px-6'>
        <Link className='mr-6 flex items-center space-x-2' href='/'>
          <img
            src='/remoto.svg'
            className='h-6 w-6 text-slate-700'
            alt='Remoto'
          />
          <span className='inline-block font-bold text-slate-900'>Remoto</span>
        </Link>
        <nav
          className='mx-6 hidden space-x-4 lg:flex lg:items-center lg:space-x-6'
          {...props}
        >
          <Link
            href='/'
            className='text-sm font-medium transition-colors hover:text-primary'
          >
            Overview
          </Link>
          <Link
            href='/guards'
            className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
          >
            Guards
          </Link>
          <Link
            href='/checkpoints'
            className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
          >
            Checkpoints
          </Link>
          <Link
            href='/tasks'
            className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
          >
            Patrol Orders
          </Link>
          <Link
            href='/settings'
            className='text-sm  font-medium text-muted-foreground transition-colors hover:text-primary'
          >
            Settings
          </Link>
        </nav>
        <div className='ml-auto flex items-center space-x-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='icon-lg mr-3 text-slate-500'
            role='img'
          >
            <g id='bell-03-outline-icon'>
              <path
                id='Icon'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M14.9997 19C14.9997 20.6569 13.6566 22 11.9997 22C10.3429 22 8.99972 20.6569 8.99972 19M13.7962 6.23856C14.2317 5.78864 14.4997 5.17562 14.4997 4.5C14.4997 3.11929 13.3804 2 11.9997 2C10.619 2 9.49972 3.11929 9.49972 4.5C9.49972 5.17562 9.76772 5.78864 10.2032 6.23856M17.9997 11.2C17.9997 9.82087 17.3676 8.49823 16.2424 7.52304C15.1171 6.54786 13.591 6 11.9997 6C10.4084 6 8.8823 6.54786 7.75708 7.52304C6.63186 8.49823 5.99972 9.82087 5.99972 11.2C5.99972 13.4818 5.43385 15.1506 4.72778 16.3447C3.92306 17.7056 3.5207 18.3861 3.53659 18.5486C3.55476 18.7346 3.58824 18.7933 3.73906 18.9036C3.87089 19 4.53323 19 5.85791 19H18.1415C19.4662 19 20.1286 19 20.2604 18.9036C20.4112 18.7933 20.4447 18.7346 20.4629 18.5486C20.4787 18.3861 20.0764 17.7056 19.2717 16.3447C18.5656 15.1506 17.9997 13.4818 17.9997 11.2Z'
              />
            </g>
          </svg>

          <MobileNav />
          <UserNav />
        </div>
      </div>
    </div>
  );
}
