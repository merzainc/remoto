import { Button } from '@/components/ui/button';
import { authOptions, getCurrentUser } from '@/helpers';
import { redirect } from 'next/navigation';
import React from 'react';

const IndexPage = async () => {
  const user = await getCurrentUser();
  if (!user) {
    redirect(authOptions?.pages?.signIn || '/login');
  }

  return (
    <div className='mt-8 px-4'>
      <h1 className='prose text-2xl text-slate-900'>Heading 1</h1>
      <Button className='mt-4'>Dropdown</Button>
    </div>
  );
};

export default IndexPage;
