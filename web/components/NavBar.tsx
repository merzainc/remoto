'use client';

import { Bell03Icon, Menu01Icon } from '@expo/styleguide-icons';
import Link from 'next/link';
import UserNav from './UserNav';
import { Button } from './ui/button';
import { Icons } from './ui/icons';

export default function NavBar() {
  return (
    <nav className='h-15 flex items-center justify-end px-4 bg-white z-20 gap-2.5 border-b border-b-default'>
      <div className='flex items-center flex-1 bg-transparent gap-8'>
        <Link className='mr-3 flex items-center space-x-2' href='/'>
          <Icons.logo className='size-6' />
          <span className='inline-block text-zinc-900 font-semibold'>Remoto</span>
        </Link>
      </div>
      <div className='flex items-center gap-2  justify-end'>
        <Button plain>
          <Bell03Icon className='size-5 text-slate-500' />
        </Button>
        <UserNav />
        <Button plain className='lg:hidden'>
          <span className='flex self-center text-inherit leading-none'>
            <Menu01Icon className='text-icon-default icon-md' />
          </span>
        </Button>
      </div>
    </nav>
  );
}
