import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home: NextPage = () => {
  const router = useRouter();
  const { t } = useTranslation('common');

  return (
    <div className={styles.container}>
      <Head>
        <title>{t('title')}</title>
      </Head>

      <main className={styles.main}>
        <h1>{t('h1')}</h1>
        <div>
          <Link href="/" locale={router.locale === 'en' ? 'ko' : 'en'}>
            <button>{t('change-locale')}</button>
          </Link>
          <Link href="/second-page">
            <button type="button">{t('to-second-page')}</button>
          </Link>
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
