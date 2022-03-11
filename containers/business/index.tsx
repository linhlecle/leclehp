import PageLayout from 'components/@Layout/PageLayout';
import ContentsLayout from 'components/@Layout/ContentsLayout';

import Business from './Business';

function BusinessContainer() {
  return (
    <PageLayout>
      <ContentsLayout>
        <Business />
      </ContentsLayout>
    </PageLayout>
  );
}

export default BusinessContainer;
