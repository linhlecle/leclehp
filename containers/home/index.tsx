import { useState } from 'react';
import dynamic from 'next/dynamic';

import { Flex } from '@chakra-ui/react';
import useHeight from 'hooks/useHeight';

const Swiper = dynamic(() => import('./Home'), { ssr: false });

function HomeContainer() {
  const [index, setIndex] = useState<number>(0);
  const height = useHeight();

  return (
    <Flex w={'100vw'} h={height}>
      <Swiper index={index} setIndex={setIndex} />
    </Flex>
  );
}

export default HomeContainer;
