import { Flex, Box } from '@chakra-ui/react';
import useHeight from 'hooks/useHeight';
import useMedia from 'hooks/useMedia';
import React, { useEffect, useRef } from 'react';
import { keyframes, options } from './anime';

type AnimationProps = {
  lottieComplete: boolean;
  animationComplete: boolean;
  setAnimationComplete: (value: boolean) => void;
};

function Animation({ lottieComplete, animationComplete, setAnimationComplete }: AnimationProps) {
  const pointRef = useRef<any>(null);
  const { isMobile, isTablet } = useMedia();
  const height = useHeight();

  useEffect(() => {
    const { current } = pointRef;
    const bottom = isMobile ? '30px' : isTablet ? '50px' : '50px';
    const right = isMobile ? '16px' : isTablet ? '120px' : '95px';
    if (lottieComplete) {
      if (current) {
        current.animate(keyframes(bottom, right), options);
        setTimeout(() => setAnimationComplete(true), 1500);
      }
    }
  }, [isMobile, isTablet, lottieComplete, setAnimationComplete]);

  return (
    <Flex position={'absolute'} top={0} zIndex={2} w={'100%'} h={height} bgColor={animationComplete ? 'transparent' : 'white'}>
      <Box
        ref={pointRef}
        w={'8px'}
        h={'8px'}
        position={'absolute'}
        bottom={'50%'}
        right={'50%'}
        transform={'translate3d(76px, -20px, 0)'}
        bgColor={'point'}
        visibility={'visible'}
        opacity={1}
      />
    </Flex>
  );
}

export default Animation;
