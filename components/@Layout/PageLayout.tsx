// Home을 제외한 나머지 페이지에서 해당 레이아웃이 적용됨
import { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import FloatingButton from 'components/FloatingButton';
import useMedia from 'hooks/useMedia';
import { useRouter } from 'next/router';

type PageLayoutProps = {
  children?: JSX.Element;
};

function PageLayout({ children }: PageLayoutProps) {
  const [isHover, setIsHover] = useState<boolean>(false);
  const router = useRouter();
  const { isMobile, isTablet, isPc } = useMedia();

  return (
    <Flex direction="column" w={'100%'} minH={'100vh'} overflow={'hidden'}>
      <Header />
      {children}
      <Footer />
      {router.pathname !== '/contact' && isMobile && <FloatingButton isHover={isHover} setIsHover={setIsHover} bottom={'30px'} right={'16px'} />}
      {router.pathname !== '/contact' && isTablet && <FloatingButton isHover={isHover} setIsHover={setIsHover} bottom={'50px'} right={'120px'} />}
      {router.pathname !== '/contact' && isPc && <FloatingButton isHover={isHover} setIsHover={setIsHover} bottom={'50px'} right={'95px'} />}
    </Flex>
  );
}

export default PageLayout;
