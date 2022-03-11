import PageLayout from 'components/@Layout/PageLayout';
import ContentsLayout from 'components/@Layout/ContentsLayout';
import Contact from './Contact';

function ContactContainer() {
  return (
    <PageLayout>
      <ContentsLayout>
        <Contact />
      </ContentsLayout>
    </PageLayout>
  );
}

export default ContactContainer;
