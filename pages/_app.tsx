import React from 'react';
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { appWithTranslation } from 'next-i18next';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <NextUIProvider>
    <Component {...pageProps} />
  </NextUIProvider>
);

export default appWithTranslation(MyApp);
