import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
import '@/css/fonts.css';
import '@/css/main.css';
import Head from 'next/head';

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <meta
          key='twitter:card'
          name='twitter:card'
          content='summary_large_image'
        />
        <meta key='twitter:site' name='twitter:site' content='@merzadev' />
        {/* <meta key='twitter:image' name='twitter:image' content={image} /> */}
        <meta
          key='twitter:creator'
          name='twitter:creator'
          content='@merzadev'
        />
        <meta
          key='og:url'
          property='og:url'
          content={`https://remota.vercel.app${router.pathname}`}
        />
        {/* <meta key='og:image' property='og:image' content={image} /> */}
      </Head>
      <div className='w-full h-[100vh] overflow-hidden mx-auto flex flex-col'>
        <NavBar />
        <div className='flex'>
          <div className='w-64 h-dvh hidden lg:flex  flex-col border-r border-default border-t-0'>
            <SideBar />
          </div>
          <div className='flex-1 max-w-7xl overflow-x-auto mx-auto px-4 sm:px-6 lg:px-8 my-10'>
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </>
  );
}
