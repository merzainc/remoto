import Link from 'next/link';
import { Button } from '@/components';
import { ChevronRightIcon, Menu01Icon } from '@expo/styleguide-icons';
import { Icons } from './icons';
import { Avatar } from './ui/avatar';
import UserNav from './UserNav';

export default function NavBar() {
  return (
    <nav className='h-15 flex items-center justify-end px-4  z-20 gap-2.5 border-b border-default'>
      <div className='flex items-center flex-1 bg-transparent gap-8'>
        <Link className='flex items-center space-x-2' href='/'>
          <Icons.logo className='size-6' />
          <span className='inline-block font-bold'>Remoto</span>
          <ChevronRightIcon className='size-4 lg:hidden text-icon-default' />
          <Avatar
            src='https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80'
            className='size-6 lg:hidden'
          />
        </Link>
      </div>
      <div className='flex items-center gap-2 lg:gap-4 justify-end'>
        <button
          className='cursor-pointer  inline-flex border border-solid rounded-md font-medium gap-2 items-center whitespace-nowrap transition px-3 text-3xs border-button-quaternary bg-button-quaternary text-button-quaternary shadow-none hocus:bg-button-quaternary-hover active:scale-98 relative size-9 justify-center'
          type='button'
        >
          <span className='flex self-center text-inherit leading-none'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='icon-md text-icon-default'
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
          </span>
        </button>

        <UserNav />

        <Button theme='quaternary' className='lg:hidden'>
          <span className='flex self-center text-inherit leading-none'>
            <Menu01Icon className='text-icon-default icon-md' />
          </span>
        </Button>
      </div>
    </nav>
  );
}
