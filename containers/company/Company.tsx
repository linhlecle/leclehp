import SubHeader from 'components/SubHeader';
import Tab from 'components/Tab';
import { useState } from 'react';
import About from './_fragments/About';
import History from './_fragments/History';
import Organization from './_fragments/Organization';
import Vision from './_fragments/Vision';

const TAB = [
  { name: '소개', value: 'about' },
  { name: '조직도', value: 'organization' },
  { name: '비전', value: 'vision' },
  { name: '히스토리', value: 'history' },
];

function Company() {
  const [activeTab, setTab] = useState<string>('about');

  return (
    <>
      <SubHeader title={'레클 소개'} subtitle={'아이디어를 현실로 만드는 레클입니다.'} />
      <Tab tabList={TAB} tab={activeTab} setTab={setTab} />
      {activeTab === 'about' && <About />}
      {activeTab === 'organization' && <Organization />}
      {activeTab === 'vision' && <Vision />}
      {activeTab === 'history' && <History />}
    </>
  );
}

export default Company;
