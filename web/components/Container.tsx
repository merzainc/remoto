import { ReactNode } from 'react';

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <div className='mx-auto py-10 px-14 max-lg-gutters:px-4 max-lg-gutters:pt-5 max-lg-gutters:pb-12'>
        {children}
      </div>
    </div>
  );
}
