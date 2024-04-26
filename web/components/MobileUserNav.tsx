'use client';
import {
  Dropdown,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/Dropdown';
import { useSession } from 'next-auth/react';
import { AvatarButton } from './ui/avatar';

export default function MobileUserNav() {
  const { data: session, status } = useSession();
  return (
    <Dropdown
      className='relative'
      trigger={
        <AvatarButton
          className='size-7 lg:hidden'
          src={status === 'loading' ? null : session?.user?.image}
        />
      }
    >
      <DropdownMenuContent>
        <div className='px-2'>
          <p className='text-secondary text-xs'>Signed in as</p>
          <p className='text-default truncate text-sm font-medium'>
            {status === 'loading' ? 'Loading..' : session?.user?.email}
          </p>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Dashboard</DropdownMenuItem>
        <DropdownMenuItem>Manage Guards</DropdownMenuItem>
        <DropdownMenuItem>Completed Patrols</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </Dropdown>
  );
}
