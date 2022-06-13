import Link from 'next/link'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from "next/head";

const SecondPage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('second-title')}</title>
      </Head>
      <main>
        <h1>{t('h1')}</h1>
        <Link href='/'>
          <button
            type='button'
          >
            {t('back-to-home')}
          </button>
        </Link>
      </main>
    </>
  )
}

export const getStaticProps = async ({ locale }: { locale: 'ko' | 'en' }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default SecondPage
