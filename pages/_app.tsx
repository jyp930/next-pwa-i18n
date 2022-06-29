import type { AppProps } from 'next/app';
import '../styles/globals.css';

/** SEO */
import { DefaultSeo } from 'next-seo';
import SEO from '../seo.config';

/** Next UI */
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
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </NextUIProvider>
  </NextThemesProvider>
);

export default appWithTranslation(MyApp);
