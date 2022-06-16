import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Switch, Button, useTheme } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';

const Home: NextPage = () => {
  const router = useRouter();
  const { t } = useTranslation('common');

  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <div>
      <Head>
        <title>{t('title')}</title>
      </Head>

      <main>
        <h1>{t('h1')}</h1>
        <div>
          <Link href="/" locale={router.locale === 'en' ? 'ko' : 'en'}>
            <Button>{t('change-locale')}</Button>
          </Link>
          <Link href="/second-page">
            <Button color="secondary">{t('to-second-page')}</Button>
          </Link>
        </div>
        <div>
          The current theme is: {type}
          <Switch
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
          />
        </div>
      </main>
    </div>
  );
};
export default Home;

export const getStaticProps = async ({ locale }: { locale: 'ko' | 'en' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
