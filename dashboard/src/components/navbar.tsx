'use client';

import { useSession } from 'next-auth/react';
import { Avatar } from './ui/avatar';

export default function NavBar() {
  const { status, data: session } = useSession();
  return (
    <div className='stick top-0 z-10 flex h-15 items-center justify-between border-b border-zinc-950/10 px-4'>
      <div className=''></div>
      <div className=''>
        <Avatar
          className='size-8'
          src={status === 'loading' ? '' : session?.user?.image}
        />
      </div>
    </div>
  );
}
