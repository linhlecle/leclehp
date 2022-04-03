import { useState } from 'react';
import SubHeader from 'components/SubHeader';
import Tab from 'components/Tab';
import All from './All';
import Product from './Product';
import Business from './Business';
import Blockchain from './Blockchain';
import Outsourcing from './Outsourcing';
import { useTranslations } from 'next-intl';

const TAB = (t: any) => [
  { name: t('all'), value: 'all' },
  { name: t('product'), value: 'product' },
  { name: t('business'), value: 'business' },
  { name: t('blockchain'), value: 'blockchain' },
  { name: t('outsourcing'), value: 'outsourcing' },
];

const Projects = () => {
  const t = useTranslations('Projects');
  const [activeTab, setActiveTab] = useState<string>('all');

  return (
    <>
      <SubHeader title={t('title')} subtitle={t('subTitle')} />
      <Tab tabList={TAB(t)} tab={activeTab} setTab={setActiveTab} />
      {(activeTab === '' || activeTab === 'all') && <All />}
      {activeTab === 'product' && <Product category={activeTab} />}
      {activeTab === 'business' && <Business category={activeTab} />}
      {activeTab === 'blockchain' && <Blockchain category={activeTab} />}
      {activeTab === 'outsourcing' && <Outsourcing category={activeTab} />}
    </>
  );
};

export default Projects;
