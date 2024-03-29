import { authOptions, getCurrentUser } from '@/helpers';
import { redirect } from 'next/navigation';
import React from 'react';

const IndexPage = async () => {
  const user = await getCurrentUser();
  console.log(user);
  if (!user) {
    redirect(authOptions?.pages?.signIn || '/login');
  }

  return (
    <div className='mt-8 px-4'>
      <h1 className='prose text-2xl text-slate-900'>Heading 1</h1>
      <p className='mt-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        officiis numquam. Ipsa quo ipsum libero?
      </p>
    </div>
  );
};

export default IndexPage;
