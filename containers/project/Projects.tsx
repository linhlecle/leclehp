import { useState } from 'react';
import SubHeader from 'components/SubHeader';
import Tab from 'components/Tab';
import All from './All';
import Product from './Product';
import Business from './Business';
import Blockchain from './Blockchain';
import Outsourcing from './Outsourcing';

const TAB = [
  { name: '전체', value: 'all' },
  { name: '프로덕트', value: 'product' },
  { name: '비즈니스', value: 'business' },
  { name: '블록체인', value: 'blockchain' },
  { name: '아웃소싱', value: 'outsourcing' },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  return (
    <>
      <SubHeader title={'레클 프로젝트'} subtitle={'레클은 고객이 원하는 프로덕트를 만듭니다.'} />
      <Tab tabList={TAB} tab={activeTab} setTab={setActiveTab} />
      {(activeTab === '' || activeTab === 'all') && <All />}
      {activeTab === 'product' && <Product category={activeTab} />}
      {activeTab === 'business' && <Business category={activeTab} />}
      {activeTab === 'blockchain' && <Blockchain category={activeTab} />}
      {activeTab === 'outsourcing' && <Outsourcing category={activeTab} />}
    </>
  );
};

export default Projects;
