import SubHeader from 'components/SubHeader';
import { useTranslations } from 'next-intl';
import React from 'react';
import NewsLists from './_fragment/NewsLists';

function News() {
  const t = useTranslations('News');
  return (
    <>
      <SubHeader title={t('title')} subtitle={t('subTitle')} subtitle2={t('subTitle2')} />
      <NewsLists />
    </>
  );
}

export default News;
