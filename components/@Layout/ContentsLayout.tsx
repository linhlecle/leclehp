// Home을 제외한 나머지 페이지에서 레이아웃 적용
import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';

type ContentsLayoutProps = {
  children?: JSX.Element;
};

function ContentsLayout({ children }: ContentsLayoutProps) {
  const router = useRouter();

  return (
    <Flex
      flexDirection={'column'}
      flexGrow={1}
      w={'100%'}
      bg={'gray.50'}
      pb={router.pathname === '/company' ? '0px' : ['100px', '100px', '150px']}
      position={'relative'}
    >
      {children}
    </Flex>
  );
}

export default ContentsLayout;
