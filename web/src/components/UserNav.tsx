import {
  Dropdown,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown';
import { AvatarButton } from './ui/avatar';

export default function UserNav() {
  return (
    <Dropdown
      className='relative'
      trigger={
        <AvatarButton
          square
          className='hidden size-8 lg:flex'
          src='https://lh3.googleusercontent.com/a/ACg8ocLIZIJU1N_f6fxFMM8ECAZ1vd9H_dMgIuN7D43NMBRYbH8=s96-c'
        />
      }
    >
      <DropdownMenuContent>
        <div className='px-2'>
          <p className='prose prose-slate text-sm'>Signed in as</p>
          <p className='prose prose-slate truncate text-sm font-medium text-slate-900'>
            h200649z@hit.ac.zw
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
