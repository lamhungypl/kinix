import { GlobalUserAgentStyle } from '@kiti/shared/ui/app-global-style';
import { AppNormalize } from '@kiti/shared/ui/app-normalize';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>Welcome to kiti Merchant!</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
      <AppNormalize />
      <GlobalUserAgentStyle />
    </>
  );
}

export default CustomApp;
