/* eslint-disable @next/next/no-img-element */
import '@/styles/main.css';
import '@expo/styleguide/dist/expo-theme.css';

import inter from '@/styles/fonts/font';
import type { Metadata } from 'next';

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
    <html lang='en' className='h-full bg-screen' suppressHydrationWarning>
      <head>
        <link rel='preconnect' href='https://rsms.me/' />
      </head>
      <body
        className={`antialiased h-full text-pretty bg-default text-default font-inter ${inter.className}`}
        suppressHydrationWarning
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
