import fs from 'fs';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { Project } from '../../types/project';
import Test from '../../components/containers/projects/data/test/Test';

const Project = ({ projectName }: { projectName: Project['name'] }) => {
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
  const projectNames = fs.readdirSync('components/containers/projects/data');

  const projects = (
    await Promise.all(
      projectNames.map(
        (projectName) =>
          import(
            `/components/containers/projects/data/${projectName}/ko/meta.json`
          )
      )
    )
  ).map((object, index) => ({ name: projectNames[index], ...object.default }));

  return {
    paths: projects
      .map((project: Project) => [
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
  params: { name: Project['name'] };
  locale: 'ko' | 'en';
}) {
  return {
    props: {
      projectName: params.name,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
