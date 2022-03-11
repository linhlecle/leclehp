import React from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import ArrowLeftIcon from 'components/@Icons/System/ArrowLeft';
import ArrowRightIcon from 'components/@Icons/System/ArrowRight';
import { useRouter } from 'next/router';
import { generatePagination } from 'utils/generatePagination';

type PaginationProps = {
  pages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

function Pagination({ pages, currentPage, setCurrentPage }: PaginationProps) {
  const router = useRouter();
  const pagination = generatePagination(pages, currentPage, 5);
  const onClickPage = (page: number) => {
    setCurrentPage(page);
    router.push(`${router.pathname}?page=${page}`);
  };

  const onClickNextPage = () => {
    router.push(`${router.pathname}?page=${currentPage + 1}`);
  };

  const onClickPrevPage = () => {
    router.push(`${router.pathname}?page=${currentPage - 1}`);
  };

  return (
    <Flex align={'center'} justify={'center'} w={'100%'}>
      <Flex flexDir={'row'}>
        <Button onClick={onClickPrevPage} {...buttonStyle} visibility={currentPage === 1 || pages < 2 ? 'hidden' : 'visible'}>
          <ArrowLeftIcon />
        </Button>
        <Flex flexDir={'row'}>
          {pagination.map((page, index, arr) => {
            const active = currentPage === arr[index];
            return (
              <Button key={index} onClick={active ? undefined : () => onClickPage(page)} {...buttonStyle} cursor={active ? 'default' : 'pointer'}>
                <Box {...boxStyle} fontWeight={active ? '700' : '400'} textDecoration={active ? 'underline' : 'none'}>
                  {page}
                </Box>
              </Button>
            );
          })}
        </Flex>
        <Button onClick={onClickNextPage} {...buttonStyle} visibility={pages <= 5 || currentPage === pages ? 'hidden' : 'visible'}>
          <ArrowRightIcon />
        </Button>
      </Flex>
    </Flex>
  );
}

const buttonStyle = {
  color: 'black',
  bgColor: 'transparent',
  fontWeight: '400',
  cursor: 'pointer',
  p: '0',
  m: '0',
  w: '9px',
  h: '27px',
  _focus: {
    outline: 'none',
    bgColor: 'transparent',
  },
  _active: {
    bgColor: 'transparent',
  },
  _hover: {
    bgColor: 'transparent',
  },
};

const boxStyle = {
  w: '100%',
  h: '100%',
  textStyle: 'md',
  fontWeight: '400',
  _hover: {
    fontWeight: '700',
    textDecoration: 'underline',
  },
};

export default Pagination;
