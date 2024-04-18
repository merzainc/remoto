'use client';
import mergeClasses from '@/helpers';
import { Dialog } from '@headlessui/react';
import Link from 'next/link';
import { ReactNode, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import {
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineMapPin,
  HiOutlinePencilSquare,
  HiOutlineUsers,
} from 'react-icons/hi2';

export default function MobileNav() {
  const [isNavOpen, setNavOpen] = useState(false);
  return (
    <>
      <button
        type='button'
        onClick={() => setNavOpen(true)}
        className='text-slate-500 hover:text-slate-600 lg:hidden'
      >
        <span className='sr-only'>Navigation</span>
        <svg width={24} height={24}>
          <path
            d='M5 6h14M5 12h14M5 18h14'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            strokeLinecap='round'
          />
        </svg>
      </button>
      <Dialog
        as='div'
        open={isNavOpen}
        onClose={setNavOpen}
        className='fixed inset-0 z-50 overflow-y-auto lg:hidden'
      >
        <Dialog.Overlay className='fixed inset-0 bg-black/20 backdrop-blur-sm' />
        <div className='relative h-dvh w-80 max-w-[calc(100%-3rem)] bg-white p-6'>
          <button
            type='button'
            onClick={() => setNavOpen(false)}
            className='absolute right-5 top-5 z-10 flex h-8 w-8 items-center justify-center text-slate-500 hover:text-slate-600'
          >
            <span className='sr-only'>Close navigation</span>
            <svg viewBox='0 0 10 10' className='h-2.5 w-2.5 overflow-visible'>
              <path
                d='M0 0L10 10M10 0L0 10'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          </button>
          <nav id='nav' className='relative lg:text-sm lg:leading-6'>
            <ul>
              <ItemLink
                icon={
                  <HiOutlineHome className='icon-md mr-4 text-slate-500 hover:text-slate-600' />
                }
                href='/'
                className='mb-4'
              >
                Dashboard
              </ItemLink>
              <ItemLink
                icon={
                  <HiOutlineUsers className='icon-md mr-4 text-slate-500 hover:text-slate-600' />
                }
                href='/guards'
                className='mb-4'
              >
                Manage Guards
              </ItemLink>

              <ItemLink
                icon={
                  <HiOutlineMapPin className='icon-md mr-4 text-slate-500 hover:text-slate-600' />
                }
                href='/guards'
                className='mb-4'
              >
                Checkpoints
              </ItemLink>
              <ItemLink
                icon={
                  <HiOutlinePencilSquare className='icon-md mr-4 text-slate-500 hover:text-slate-600' />
                }
                href='/tasks'
                className='mb-4'
              >
                Patrol Orders
              </ItemLink>
              <ItemLink
                icon={
                  <HiOutlineCog6Tooth className='icon-md mr-4 text-slate-500 hover:text-slate-600' />
                }
                href='/settings'
                className='mb-4'
              >
                Settings
              </ItemLink>
              <ItemLink
                icon={
                  <FiLogOut className='icon-md mr-4 text-slate-500 hover:text-slate-600' />
                }
                href='/settings'
                className='mb-4'
              >
                Log out
              </ItemLink>
            </ul>
          </nav>
        </div>
      </Dialog>
    </>
  );
}

function ItemLink({
  children,
  href,
  className,
  isActive,
  onClick,
  icon,
}: {
  children: ReactNode;
  href: string;
  className?: any;
  isActive?: boolean;
  onClick?: () => void;
  icon: ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className={mergeClasses(
          'group flex items-center lg:text-sm lg:leading-6',
          className,
          isActive
            ? 'font-semibold text-sky-500'
            : 'font-medium text-slate-700 hover:text-slate-900'
        )}
      >
        {icon}
        {children}
      </Link>
    </li>
  );
}
