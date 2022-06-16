import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const lightTheme = createTheme({
  type: 'light',
});

const darkTheme = createTheme({
  type: 'dark',
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <NextThemesProvider
    defaultTheme="system"
    attribute="class"
    value={{
      light: lightTheme.className,
      dark: darkTheme.className,
    }}
  >
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  </NextThemesProvider>
);

export default appWithTranslation(MyApp);
