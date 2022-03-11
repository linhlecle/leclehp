import React, { useRef } from 'react';
import ReactLottie from 'react-lottie';
import animationData from '../../../public/lottie/lottie.json';

import { Flex } from '@chakra-ui/react';
import useHeight from 'hooks/useHeight';

type LottieProps = {
  setLottieComplete: (value: boolean) => void;
};

function Lottie({ setLottieComplete }: LottieProps) {
  const lottieRef = useRef<any>(null);
  const height = useHeight();
  // lottie options
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Flex position={'absolute'} top={0} zIndex={5} bgColor={'white'} w={'100vw'} h={'100vh'} pointerEvents={'none'}>
      <ReactLottie
        ref={lottieRef}
        options={defaultOptions}
        width={'100%'}
        height={height}
        eventListeners={[
          {
            eventName: 'DOMLoaded',
            callback: () => {
              const { anim } = lottieRef?.current;
              anim.onComplete = () => {
                sessionStorage.setItem('loaded', 'end');
                setLottieComplete(true);
                anim.destroy();
              };
            },
          },
        ]}
      />
    </Flex>
  );
}

export default Lottie;
