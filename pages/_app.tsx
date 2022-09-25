import { Layout } from '@/components/common';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

// serves as a wrapper for all pages
// ...pageProps:
