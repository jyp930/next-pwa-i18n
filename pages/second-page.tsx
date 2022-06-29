import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

const SecondPage = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <NextSeo
        title={t('second-title')}
        description="TODO"
        canonical="TODO"
        openGraph={{
          url: 'TODO',
        }}
      />

      <main>
        <h1>{t('h1')}</h1>
        <Link href="/">
          <button type="button">{t('back-to-home')}</button>
        </Link>
      </main>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: 'ko' | 'en' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default SecondPage;
