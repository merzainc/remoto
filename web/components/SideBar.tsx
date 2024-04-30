'use client';
import mergeClasses from '@/lib';
import {
  Home05SolidIcon,
  Map02SolidIcon,
  MarkerPin01SolidIcon,
  MarkerPin04SolidIcon,
} from '@expo/styleguide-icons';
import { Cog6ToothIcon, UserGroupIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { title: 'Home', href: '/', icon: Home05SolidIcon },
  { title: 'Manage Guards', href: '/guards', icon: UserGroupIcon },
  { title: 'Checkpoints', href: '/points', icon: MarkerPin01SolidIcon },
  { title: 'Guard Patrols', href: '/patrols', icon: Map02SolidIcon },
  { title: 'Live Positions', href: '/positions', icon: MarkerPin04SolidIcon },
  { title: 'Settings', href: '/settings', icon: Cog6ToothIcon },
];

export default function SideBar() {
  const pathname = usePathname();
  return (
    <div className='flex w-full flex-col shrink-0 max-w-[280px] h-full overflow-hidden border-r border-r-default max-lg-gutters:hidden'>
      <div className='flex flex-col flex-1 p-4 gap-0.5 bg-white'>
        <div className='rounded-md border mt-2 border-secondary'>
          <div className='rounded-md shadow'>
            <div className='flex items-center gap-2 px-3 py-1.5 text-zinc-500'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
                data-slot='icon'
                className='h-4 w-4'
              >
                <path
                  fillRule='evenodd'
                  d='M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z'
                  clipRule='evenodd'
                />
              </svg>
              <div className='text-sm leading-6'>Search</div>
            </div>
          </div>
        </div>

        <div className='mt-4 flex flex-col gap-0.5'>
          {navItems.map((navItem) => (
            <Link
              href={navItem.href}
              key={navItem.title}
              className={mergeClasses(
                'flex items-center gap-3 rounded-md px-3 py-1.5',
                pathname === navItem.href
                  ? 'bg-blue-100  hover:bg-blue-200'
                  : ' hover:bg-zinc-950/10'
              )}
            >
              <navItem.icon
                className={mergeClasses(
                  'size-5',
                  pathname === navItem.href ? 'text-blue-500' : 'text-zinc-500'
                )}
              />
              <div
                className={mergeClasses(
                  'text-sm font-medium leading-6',
                  pathname === navItem.href ? 'text-blue-500' : ' text-zinc-950'
                )}
              >
                {navItem.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
