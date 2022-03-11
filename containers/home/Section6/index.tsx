import { Flex } from '@chakra-ui/react';
import ServiceSite from './_fragments/ServiceSite';
import Footer from 'components/Footer';
import { useCallback, useEffect, useRef, useState } from 'react';
import useMedia from 'hooks/useMedia';

function Section6({ swiper }: { swiper: any }) {
  const { isMobile } = useMedia();
  const section6Ref = useRef<any>(null);
  const [ts, setTs] = useState<number>(0);
  const [te, setTe] = useState<number>(0);

  const touchStartHandler = useCallback(
    (e: any) => {
      e.stopPropagation();
      setTs(e.targetTouches[0].clientY);
    },
    [setTs],
  );

  const touchMoveHandler = useCallback(
    (e: any) => {
      e.stopPropagation();
      setTe(e.touches[0].clientY);
    },
    [setTe],
  );

  useEffect(() => {
    if (!isMobile) return;
    const { current } = section6Ref;
    if (current) {
      current.addEventListener('touchstart', touchStartHandler);
      current.addEventListener('touchmove', touchMoveHandler);
      if (ts < te - 100) {
        // console.log('down');
        swiper?.slideTo(4, 1000);
      }
    }
  }, [isMobile, touchStartHandler, touchMoveHandler, ts, te, swiper]);

  return (
    <Flex
      ref={section6Ref}
      flexDir={'column'}
      minW={'100vw'}
      w={'100%'}
      h={'100%'}
      pt={'80px'}
      bgColor={'primary.500'}
      overflowX={'hidden'}
      overflowY={['scroll', 'hidden', 'hidden']}
      css={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <ServiceSite />
      <Footer />
    </Flex>
  );
}

export default Section6;
