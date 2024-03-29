import type { Metadata } from 'next';
import '@/styles/fonts.css';
import '@/styles/main.css';

export const metadata: Metadata = {
  title: {
    default: 'Remoto',
    template: 'Remoto - %s',
  },
  description: 'Generated by create next app',
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en_UK'
      className='antialiased h-full'
      suppressHydrationWarning={true}
    >
      <body
        className='text-slate-500 h-full bg-white'
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
