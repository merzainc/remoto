'use client';
import { mergeClasses } from '@expo/styleguide';
import {
  Home05DuotoneIcon,
  MarkerPin04DuotoneIcon,
} from '@expo/styleguide-icons';
import {
  Cog6ToothIcon,
  MapIcon,
  MapPinIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { title: 'Home', icon: Home05DuotoneIcon, href: '/' },
  { title: 'Manage Guards', icon: UserGroupIcon, href: '/guards' },
  { title: 'Checkpoints', icon: MapPinIcon, href: '/points' },
  { title: 'Patrol Orders', icon: MapIcon, href: '/patrols' },
  { title: 'Live Positions', icon: MarkerPin04DuotoneIcon, href: '/positions' },
  { title: 'Settings', icon: Cog6ToothIcon, href: '/settings' },
];

export default function SideBar() {
  const pathname = usePathname();
  return (
    <div className='flex w-full flex-col shrink-0 max-w-[280px] h-full overflow-hidden border-r border-r-default max-lg-gutters:hidden'>
      <div className='flex flex-col flex-1 p-4 gap-0.5 bg-default'>
        <button
          className='cursor-pointer inline-flex border-solid rounded-md font-medium gap-2 items-center whitespace-nowrap transition h-9 px-4 text-xs text-button-secondary hocus:bg-button-secondary-hover active:scale-98 cmdk-trigger bg-default pl-2.5 pr-3 border border-default shadow-xs min-h-[40px] mb-2.5'
          type='button'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='icon-md text-icon-secondary'
          >
            <g id='search-sm-outline-icon'>
              <path
                id='Icon'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
              />
            </g>
          </svg>
          <span className='flex self-center text-inherit leading-none'>
            <p className='text-secondary font-normal leading-normal text-xs'>
              Search
            </p>
          </span>
        </button>
        {navItems.map((item) => (
          <Link
            key={item.title}
            className={mergeClasses(
              'flex items-center gap-3 rounded-md text-[15px] min-h-[32px] px-2 py-1 !leading-[100%] !opacity-100 focus-visible:relative focus-visible:z-10  font-medium css-1maw07k',
              pathname === item.href
                ? 'bg-palette-blue3 hocus:text-link hocus:bg-palette-blue4 text-link'
                : 'hocus:bg-element text-secondary'
            )}
            href={item.href}
          >
            <item.icon
              className={mergeClasses(
                pathname === item.href
                  ? 'text-palette-blue11'
                  : 'text-icon-tertiary',
                'icon-md'
              )}
            />
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
