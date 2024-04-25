/* eslint-disable @next/next/no-img-element */
import '@expo/styleguide/dist/expo-theme.css';
import '@/styles/main.css';

import type { Metadata } from 'next';
import inter from '@/styles/fonts/font';
import Link from 'next/link';

import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';

export const metadata: Metadata = {
  title: 'Remoto',
  description: 'Product description goes here',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel='preconnect' href='https://rsms.me/' />
      </head>
      <body
        className={`antialiased text-pretty bg-default text-default font-inter ${inter.className}`}
        suppressHydrationWarning
      >
        <div className='w-full h-dvh overflow-hidden mx-auto flex flex-col'>
          <div className='max-lg-gutters:sticky'>
            <NavBar />
          </div>
          <div className='flex mx-auto justify-between items-center w-full h-[calc(100vh-60px)]'>
            <SideBar />
            <main className='w-full h-[calc(100vh-60px)] flex overflow-hidden max-lg-gutters:overflow-auto'>
              <div className='size-full overflow-x-hidden overflow-y-auto'>
                <div className='max-w-screen-xl mx-auto'>
                  <div className='mx-auto py-10 px-14 max-lg-gutters:px-4 max-lg-gutters:pt-5 max-lg-gutters:pb-12'>
                    {children}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
