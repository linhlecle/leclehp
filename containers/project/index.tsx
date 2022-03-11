import PageLayout from 'components/@Layout/PageLayout';
import ContentsLayout from 'components/@Layout/ContentsLayout';

import Projects from './Projects';

function ProjectContainer() {
  return (
    <PageLayout>
      <ContentsLayout>
        <Projects />
      </ContentsLayout>
    </PageLayout>
  );
}

export default ProjectContainer;
