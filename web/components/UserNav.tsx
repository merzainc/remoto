import {
  Dropdown,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown';
import { AvatarButton } from './ui/avatar';

export default async function UserNav() {
  const defaultAvatar =
    'https://lh3.googleusercontent.com/a/ACg8ocLIZIJU1N_f6fxFMM8ECAZ1vd9H_dMgIuN7D43NMBRYbH8=s96-c';

  return (
    <Dropdown
      className='relative'
      trigger={
        <AvatarButton className='hidden ml-6 size-8 lg:flex  object-cover' src={defaultAvatar} />
      }
    >
      <DropdownMenuContent>
        <div className='px-2'>
          <p className='text-sm'>Signed in as</p>
          <p className=' truncate text-sm font-medium text-slate-900 dark:text-slate-300'>
            h200649z@hit.ac.zw
          </p>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Dashboard</DropdownMenuItem>
        <DropdownMenuItem>Manage Teams</DropdownMenuItem>
        <DropdownMenuItem>Completed Patrols</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </Dropdown>
  );
}
