import { Flex, Accordion } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import NewsItem from '../NewsItem';
import Pagination from './Pagination';
import api from 'apis/News/GET';
import { NewsItemProps } from '../news_type';
import { useRouter } from 'next/router';

function NewsLists() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const limit = 10; // news per page
  const offset = (currentPage - 1) * limit;
  const { data } = useQuery<any>(['news', limit, offset], api.getNews, { keepPreviousData: true });
  const DATA = data?.results;
  const count = data?.count;

  const categoryEnToKo = (category: string) => {
    switch (category) {
      case 'log':
        return '레클로그';
      case 'prize':
        return '수상실적';
      case 'out':
        return '외부소식';
      default:
        return '레클로그';
    }
  };

  useEffect(() => {
    const { page } = router.query;
    if (Number(page) >= 1) {
      setCurrentPage(Number(page));
    }
  }, [router.query, currentPage, setCurrentPage]);

  return (
    <Flex align={'center'} justify={'center'} w={'100%'} h={'100%'} bgColor={'gray.50'}>
      <Flex flexDir={'column'} pt={['30px', '50px', '60px']} px={['16px', '120px', '100px']} w={'100%'} maxW={['100%', '100%', 'calc(100% - 200px)']}>
        <Accordion allowToggle allowMultiple>
          {DATA?.map(({ category, title, subtitle, content, image, publishDate, source }: NewsItemProps, index: number) => {
            return (
              <NewsItem
                key={index}
                category={categoryEnToKo(category)}
                title={title}
                subtitle={subtitle}
                content={content}
                image={image}
                publishDate={publishDate}
                source={source}
              />
            );
          })}
        </Accordion>
        {DATA && (
          <Flex mt={['50px', '50px', '100px']}>
            <Pagination pages={Math.ceil(count / limit)} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}

export default NewsLists;
