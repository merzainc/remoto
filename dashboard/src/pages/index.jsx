import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <meta
          key='og:title'
          property='og:title'
          content='Remota - Enhancing security with remote access empowering you to seamlessly track guard activities in real-time.'
        />
        <title>Dashboard - Remota</title>
      </Head>
      <div className=''>
        <div className='flex items-center'>
          <h1 className='inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight'>
            Dashboard
          </h1>
        </div>
      </div>
    </>
  );
}
