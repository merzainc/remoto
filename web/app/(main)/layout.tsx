import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
import '@/css/fonts.css';
import '@/css/main.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Remoto',
  description: 'A description goes here....',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='font-sans antialiased bg-screen text-zinc-600' suppressHydrationWarning>
        <div className='w-full h-dvh overflow-hidden mx-auto flex flex-col'>
          <div className='max-lg-gutters:sticky'>
            <NavBar />
          </div>
          <div className='flex mx-auto justify-between items-center w-full h-[calc(100vh-60px)]'>
            <SideBar />
            <main className='w-full h-[calc(100vh-60px)] bg-screen flex overflow-hidden max-lg-gutters:overflow-auto'>
              <div className='size-full overflow-x-hidden overflow-y-auto'>{children}</div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
