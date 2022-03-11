import SubHeader from 'components/SubHeader';
import React from 'react';
import NewsLists from './_fragment/NewsLists';

function News() {
  return (
    <>
      <SubHeader title={'레클 뉴스'} subtitle={'레클이 만들어가는 세상의'} subtitle2={'소식을 전해 드립니다.'} />
      <NewsLists />
    </>
  );
}

export default News;
