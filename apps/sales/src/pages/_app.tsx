import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import './styles.css';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  console.log({ getLayout });

  return (
    <>
      <Head>
        <title>Welcome to kiti!</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default CustomApp;
