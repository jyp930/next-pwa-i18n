import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/router';
import Test from '../../components/containers/projects/data/test/Test';

const Project = ({ projectName }: { projectName: string }) => {
  const { t } = useTranslation('common');
  const router = useRouter();

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
        <Link
          href="/projects/test"
          locale={router.locale === 'en' ? 'ko' : 'en'}
        >
          <Button>{t('change-locale')}</Button>
        </Link>

        {projectName === 'test' && <Test />}
      </main>
    </>
  );
};
export default Project;

export async function getStaticPaths() {
  const projects = await (
    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/ko/projects`)
  ).json();

  return {
    paths: projects
      .map((project: { name: string }) => [
        { params: { name: project.name } },
        { params: { name: project.name }, locale: 'en' },
      ])
      .flat(),
    fallback: false,
  };
}

export async function getStaticProps({
  params,
  locale,
}: {
  params: { name: string };
  locale: 'ko' | 'en';
}) {
  return {
    props: {
      projectName: params.name,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
