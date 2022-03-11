import ContentsLayout from 'components/@Layout/ContentsLayout';
import PageLayout from 'components/@Layout/PageLayout';
import Company from './Company';

function CompanyContainer() {
  return (
    <PageLayout>
      <ContentsLayout>
        <Company />
      </ContentsLayout>
    </PageLayout>
  );
}

export default CompanyContainer;
