import React, { useCallback, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Mousewheel } from 'swiper';
SwiperCore.use([Mousewheel]);

import Lottie from './_fragments/Lottie';
import Header from 'components/Header';

import Section1 from 'containers/home/Section1';
import Section2 from 'containers/home/Section2';
import Section3 from 'containers/home/Section3';
import Section4 from 'containers/home/Section4';
import Section5 from 'containers/home/Section5';
import Section6 from 'containers/home/Section6';

import { Box, Flex, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import useMedia from 'hooks/useMedia';
import FloatingButton from 'components/FloatingButton';

type HomeProps = {
  index: number;
  setIndex: (value: number) => void;
};

function Home({ index, setIndex }: HomeProps) {
  const loadedState = sessionStorage.getItem('loaded') === 'end';
  const [alreadyLoaded, setAlreadyLoaded] = useState(false);

  const router = useRouter();
  const [swiper, setSwiper] = useState<SwiperCore>();
  const [lottieComplete, setLottieComplete] = useState<boolean>(false);
  const [animationComplete, setAnimationComplete] = useState<boolean>(false);
  const [showContactButton, setShowContactButton] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [allowSlide, setAllowSlide] = useState<boolean>(false || alreadyLoaded);
  const { isMobile, isTablet } = useMedia();

  const topBottom = isMobile ? '110px' : isTablet ? '130px' : '130px';
  const topRight = isMobile ? '16px' : isTablet ? '120px' : '95px';
  const contactBottom = isMobile ? '30px' : isTablet ? '50px' : '50px';
  const contactRight = isMobile ? '16px' : isTablet ? '120px' : '95px';

  // in millisecond
  const contactButtonOpenTime = 2500;
  const contactButtonDuration = contactButtonOpenTime + 3000;
  const thresholdDelta = 30;

  const sections = [
    {
      section: (
        <Section1
          lottieComplete={lottieComplete}
          animationComplete={animationComplete}
          setAnimationComplete={setAnimationComplete}
          alreadyLoaded={alreadyLoaded}
        />
      ),
    },
    { section: <Section2 /> },
    { section: <Section3 /> },
    { section: <Section4 /> },
    { section: <Section5 /> },
    { section: <Section6 swiper={swiper} /> },
  ];

  const wheelHandler = useCallback(
    (e: WheelEvent) => {
      if (e.deltaY <= -`${thresholdDelta}`) {
        swiper?.mousewheel.enable();
      }
    },
    [swiper?.mousewheel],
  );

  useEffect(() => {
    if (router.pathname !== '/') return;
    if (index !== 5) return;
    if (isMobile) {
      window.addEventListener('wheel', wheelHandler);
    }
    return () => {
      window.removeEventListener('wheel', wheelHandler);
    };
  }, [index, router.pathname, isMobile, wheelHandler]);

  useEffect(() => {
    if (lottieComplete && !animationComplete) {
      setTimeout(() => setShowContactButton(true), 1000);
      setTimeout(() => setIsHover(true), contactButtonOpenTime);
      setTimeout(() => setAllowSlide(true), 3500);
      setTimeout(() => setIsHover(false), contactButtonDuration);
    } else if (lottieComplete && animationComplete) {
      setTimeout(() => setShowContactButton(true), 1000);
      setTimeout(() => setAllowSlide(true), 3700);
    } else if (loadedState) {
      setAlreadyLoaded(true);
      setShowContactButton(true);
      setAllowSlide(true);
    }
  }, [loadedState, animationComplete, lottieComplete, contactButtonOpenTime, contactButtonDuration]);

  return (
    <Flex minW={'100vw'} w={'100vw'} h={'100%'} position={'relative'} top={0} zIndex={1}>
      <Swiper
        className="mySwiper"
        direction={'vertical'}
        slidesPerView={1}
        onSwiper={setSwiper}
        allowTouchMove
        allowSlideNext={allowSlide}
        mousewheel={{
          forceToAxis: true,
        }}
        speed={1300}
        autoHeight
        onActiveIndexChange={(swiper) => {
          setIndex(swiper.activeIndex);
        }}
        onReachEnd={() => {
          if (isMobile) {
            swiper?.mousewheel.disable();
          }
        }}
        touchRatio={1}
      >
        {sections.map(({ section }, index) => {
          return <SwiperSlide key={index}>{section}</SwiperSlide>;
        })}

        {alreadyLoaded ? null : !lottieComplete && <Lottie setLottieComplete={setLottieComplete} />}
        <Header activeIndex={index} animationComplete={animationComplete} alreadyLoaded={alreadyLoaded} />
        <Flex
          position={'absolute'}
          bottom={topBottom}
          right={topRight}
          zIndex={2}
          flexDir={'column'}
          align={'center'}
          justify={'center'}
          w={'60px'}
          h={'60px'}
          bgColor={'white'}
          borderRadius={'50%'}
          boxShadow={'0px 0px 10px rgba(26, 26, 26, 0.1)'}
          cursor={'pointer'}
          onClick={() => swiper?.slideTo(0, 1000)}
          visibility={index !== 0 ? 'visible' : 'hidden'}
          opacity={index !== 0 ? 1 : 0}
          transition={'opacity 0.5s ease'}
        >
          <Image src={'/icons/top.svg'} alt={'top icon'} w={'16px'} />
          <Box textStyle={'md'} fontWeight={'700'} textAlign={'center'}>
            TOP
          </Box>
        </Flex>
        {showContactButton && <FloatingButton isHover={isHover} setIsHover={setIsHover} bottom={contactBottom} right={contactRight} />}
      </Swiper>
    </Flex>
  );
}

export default Home;
