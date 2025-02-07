import { Head, Html, Main, NextScript } from 'next/document';

/**
 * Custom Document component for Next.js
 */
const Document = () => {
  return (
    <Html lang='en'>
      <Head />
      <body className='antialiased'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
