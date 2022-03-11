import ContentsLayout from 'components/@Layout/ContentsLayout';
import PageLayout from 'components/@Layout/PageLayout';
import News from './News';

function NewsContainer() {
  return (
    <PageLayout>
      <ContentsLayout>
        <News />
      </ContentsLayout>
    </PageLayout>
  );
}

export default NewsContainer;
