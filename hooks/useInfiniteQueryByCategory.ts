import api from 'apis/Projects/GET';
import { useInfiniteQuery } from 'react-query';

type HooksProps = {
  category: string;
  url: string;
};

function useInfiniteQueryByCategory({ category, url }: HooksProps) {
  const { status, data, fetchNextPage, hasNextPage } = useInfiniteQuery<any>(
    ['projects', category],
    ({ pageParam = url, queryKey }) => api.getProjectsByCategory(pageParam, queryKey),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.next ?? false;
      },
    },
  );

  const fetchMore = () => {
    fetchNextPage();
  };

  return { status, datas: data, hasNextPage, fetchMore };
}

export default useInfiniteQueryByCategory;
