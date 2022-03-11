import { Box, Flex, Image, chakra } from '@chakra-ui/react';
import SectionLayout from 'components/@Layout/SectionLayout';

import Animation from './_fragments/Animation';

type Section1Props = {
  lottieComplete: boolean;
  animationComplete: boolean;
  setAnimationComplete: (value: boolean) => void;
  alreadyLoaded?: boolean;
};

function Section1({ lottieComplete, animationComplete, setAnimationComplete, alreadyLoaded }: Section1Props) {
  return (
    <SectionLayout>
      <Flex
        flexDir={'column'}
        align={'center'}
        justify={'center'}
        minW={'100vw'}
        w={'100%'}
        minH={'100%'}
        h={'100%'}
        px={['16px', '120px', '95px']}
        bgColor={'gray.50'}
        bgImage={["url('/images/home/section1/mobile.png')", "url('/images/home/section1/tablet.png')", "url('/images/home/section1/pc.png')"]}
        backgroundRepeat={'no-repeat'}
        backgroundSize={'contain'}
        backgroundPosition={['50% calc(100% - 60px)', 'calc(100% - 90px)', 'calc(100% - 25px)']}
        position={'relative'}
        top={0}
      >
        {alreadyLoaded ? null : <Animation lottieComplete={lottieComplete} animationComplete={animationComplete} setAnimationComplete={setAnimationComplete} />}
        <Flex w={'100%'} h={'100%'} zIndex={3}>
          <Flex flexDir={'column'} justify={'flex-start'} mt={'80px'} pt={['0px', '125px', '100px']}>
            <Image
              src={`/images/home/section1/${animationComplete || alreadyLoaded ? 'buildupidea.png' : 'buildupidea_white.svg'}`}
              w={'124px'}
              alt="build up idea"
            />
            <Box color={animationComplete || alreadyLoaded ? 'primary.500' : 'white'} mt={['5px', '10px', '20px']}>
              <Box textStyle={'2xl'} fontWeight={'900'}>
                아이디어,
              </Box>
              <Box textStyle={'2xl'} fontWeight={'900'}>
                한 단계 더 쌓아올리다.
              </Box>
            </Box>
            <Box color={animationComplete || alreadyLoaded ? 'gray.500' : 'white'} mt={'20px'}>
              <Box textStyle={'2xl'} fontWeight={'900'}>
                8년 노하우 글로벌
              </Box>
              <Box textStyle={'2xl'} fontWeight={'900'}>
                소프트웨어 하우스
              </Box>
              <Box textStyle={'2xl'} fontWeight={'900'}>
                오직 <chakra.span color={animationComplete || alreadyLoaded ? 'point' : 'white'}>LECLE</chakra.span> 에서
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </SectionLayout>
  );
}

export default Section1;
