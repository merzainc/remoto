import '@/css/fonts.css';
import '@/css/main.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In - Remoto',
  description: 'A description goes here....',
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='font-sans antialiased bg-white text-zinc-600 min-h-full flex flex-col'>
        {children}
      </body>
    </html>
  );
}
