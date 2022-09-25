import { Layout } from '@/components/common';
import { AppProps } from 'next/app';
import { FC } from 'react';
import '@/assets/main.css';

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC } }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

// serves as a wrapper for all pages
// ...pageProps:
