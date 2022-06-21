import React from 'react';
import Ko from './ko/index.mdx';
import En from './en/index.mdx';
import { useTranslation } from 'next-i18next';

const Test = () => {
  const {
    i18n: { language },
  } = useTranslation('common');

  if (language === 'ko') return <Ko />;
  if (language === 'en') return <En />;
  return null;
};
export default Test;
