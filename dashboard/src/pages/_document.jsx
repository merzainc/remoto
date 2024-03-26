import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html
        lang='en'
        className='h-[100dvh][--scroll-mt:9.875rem] lg:[--scroll-mt:6.3125rem]'
      >
        <Head>
          <meta name='apple-mobile-web-app-title' content='Remota' />
          <meta name='application-name' content='Remota' />
          <meta name='msapplication-TileColor' content='#38bdf8' />
          <meta name='theme-color' content='#f8fafc' />
        </Head>
        <body className='antialiased text-pretty text-slate-500 bg-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
