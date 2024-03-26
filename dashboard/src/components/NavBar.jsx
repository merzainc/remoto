import mergeClasses from '@/lib';
import { Button, Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { AvatarButton } from './Base/Avatar';
import { Link } from './Base/Link';
import { Dropdown } from './Dropdown';

export default function NavBar(props) {
  const router = useRouter();

  return (
    <Disclosure
      as='nav'
      className='bg-white border-b top-0 sticky border-default'
      style={{
        transform: 'translateZ(0)',
        WebkitBackdropFilter: 'saturate(180%) blur(5px)',
        backdropFilter: 'saturate(180%) blur(5px)',
        background: ['none', 'hsla(0,0%,100%,.8)'],
      }}
    >
      {({ open }) => (
        <>
          <div className='px-4 sm:px-6 lg:px-8'>
            <div className='relative flex h-14 justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block icon-lg' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block icon-lg' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex flex-shrink-0 items-center'>
                  <img
                    className='hidden h-8 w-auto lg:block'
                    src='https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600'
                    alt='Your Company'
                  />
                </div>
                <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
                  <Link
                    href='#'
                    className='inline-flex items-center border-b-2 border-sky-500 px-1 pt-1 text-xs font-medium text-slate-900'
                  >
                    Help
                  </Link>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center gap-x-4 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <button
                  type='button'
                  className='rounded-full bg-white p-1 text-slate-400 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2'
                >
                  <span className='sr-only'>View notifications</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    className='icon-lg'
                    {...props}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 19a3 3 0 11-6 0m4.796-12.761a2.5 2.5 0 10-3.593 0M18 11.2c0-1.38-.632-2.702-1.758-3.677C15.117 6.548 13.591 6 12 6c-1.592 0-3.118.548-4.243 1.523C6.632 8.498 6 9.821 6 11.2c0 2.282-.566 3.95-1.272 5.145-.805 1.36-1.207 2.041-1.191 2.204.018.186.051.244.202.355.132.096.794.096 2.119.096h12.284c1.324 0 1.987 0 2.118-.096.151-.11.185-.17.203-.355.016-.163-.387-.843-1.191-2.204C18.566 15.15 18 13.482 18 11.2z'
                    />
                  </svg>
                </button>

                {/* Profile dropdown */}
                <Dropdown
                  className='relative ml-3'
                  trigger={
                    <AvatarButton
                      square
                      className='size-8'
                      src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    />
                  }
                >
                  <div className='w-48 divide-y divide-slate-100'>
                    <div className='px-2.5 pb-2'>
                      <p className='text-2xs'>Signed in as</p>
                      <p className='truncate text-xs font-medium text-slate-900'>
                        Mataga Ralph
                      </p>
                    </div>
                    <div className='py-1'>
                      <Link
                        href='#'
                        className={mergeClasses(
                          router.pathname.startsWith('/settings')
                            ? 'bg-slate-100 text-slate-900'
                            : 'text-slate-700',
                          'block px-2.5 py-2  text-xs hover:bg-hover'
                        )}
                      >
                        Dashboard
                      </Link>
                      <Link
                        href='#'
                        className={mergeClasses(
                          router.pathname.startsWith('/settings')
                            ? 'bg-slate-100 text-slate-900'
                            : 'text-slate-700',
                          'block px-2.5 py-2 text-xs hover:bg-hover'
                        )}
                      >
                        Guard Monitoring
                      </Link>
                      <Link
                        href='#'
                        className={mergeClasses(
                          router.pathname.startsWith('/settings')
                            ? 'bg-slate-100 text-slate-900'
                            : 'text-slate-700',
                          'block px-2.5 py-2 text-xs hover:bg-hover'
                        )}
                      >
                        Completed Patrols
                      </Link>
                    </div>
                    <div className='py-1'>
                      <Button
                        plain
                        className='block px-2.5 py-1.5 text-xs text-rose-700 hover:bg-hover text-start w-full'
                      >
                        Sign Out
                      </Button>
                    </div>
                  </div>
                </Dropdown>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 pb-4 pt-2'>
              <Disclosure.Button
                as='a'
                href='#'
                className='block border-l-4 border-sky-500 bg-sky-50 py-2 pl-3 pr-4 text-base font-medium text-sky-700'
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='#'
                className='block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-slate-500 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-700'
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='#'
                className='block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-slate-500 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-700'
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='#'
                className='block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-slate-500 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-700'
              >
                Calendar
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
