import {
  Dropdown,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/Dropdown';
import { useSession } from 'next-auth/react';
import { AvatarButton } from './ui/avatar';

export default function UserNav() {
  const { data: session, status } = useSession();
  return (
    <Dropdown
      className='relative'
      trigger={
        <AvatarButton
          square
          className='hidden size-8 lg:flex'
          src={status === 'loading' ? null : session?.user?.image}
        />
      }
    >
      <DropdownMenuContent>
        <div className='px-2'>
          <p className='prose prose-slate text-sm'>Signed in as</p>
          <p className='prose prose-slate truncate text-sm font-medium text-slate-900'>
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
