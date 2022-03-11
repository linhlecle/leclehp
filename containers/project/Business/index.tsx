import Project from '../_fragment/Project';
import { PROJECT_URL_BUSINESS } from 'apis/Projects/GET';
import useInfiniteQueryByCategory from 'hooks/useInfiniteQueryByCategory';

function Business({ category }: { category: string }) {
  const { status, datas, hasNextPage, fetchMore } = useInfiniteQueryByCategory({
    category,
    url: PROJECT_URL_BUSINESS,
  });

  return <Project status={status} datas={status === 'success' && datas} hasNextPage={hasNextPage} onClickMore={fetchMore} />;
}

export default Business;
