import Project from '../_fragment/Project';
import { PROJECT_URL_PRODUCT } from 'apis/Projects/GET';
import useInfiniteQueryByCategory from 'hooks/useInfiniteQueryByCategory';

function Product({ category }: { category: string }) {
  const { status, datas, hasNextPage, fetchMore } = useInfiniteQueryByCategory({
    category,
    url: PROJECT_URL_PRODUCT,
  });

  return <Project status={status} datas={status === 'success' && datas} hasNextPage={hasNextPage} onClickMore={fetchMore} />;
}

export default Product;
