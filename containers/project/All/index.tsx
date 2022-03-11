import React from 'react';
import Project from '../_fragment/Project';
import api, { PROJECT_URL } from 'apis/Projects/GET';
import { useInfiniteQuery } from 'react-query';

function All() {
  const { status, data, fetchNextPage, hasNextPage } = useInfiniteQuery<any>('projects', ({ pageParam = PROJECT_URL }) => api.getAllProjects(pageParam), {
    getNextPageParam: (lastPage) => {
      return lastPage.next ?? false;
    },
  });

  const onClickMore = () => {
    fetchNextPage();
  };

  return <Project status={status} datas={status === 'success' && data} onClickMore={onClickMore} hasNextPage={hasNextPage} />;
}

export default All;
