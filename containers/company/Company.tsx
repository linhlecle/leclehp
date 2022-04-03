import SubHeader from 'components/SubHeader';
import Tab from 'components/Tab';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import About from './_fragments/About';
import History from './_fragments/History';
import Organization from './_fragments/Organization';
import Vision from './_fragments/Vision';

const TAB = (t: any) => [
  { name: t('tabAbout'), value: 'about' },
  { name: t('tabOrganization'), value: 'organization' },
  { name: t('tabVision'), value: 'vision' },
  { name: t('tabHistory'), value: 'history' },
];

function Company() {
  const t = useTranslations('AboutUs');
  const [activeTab, setTab] = useState<string>('about');

  return (
    <>
      <SubHeader title={t('title')} subtitle={t('subTitle')} />
      <Tab tabList={TAB(t)} tab={activeTab} setTab={setTab} />
      {activeTab === 'about' && <About />}
      {activeTab === 'organization' && <Organization />}
      {activeTab === 'vision' && <Vision />}
      {activeTab === 'history' && <History />}
    </>
  );
}

export default Company;
