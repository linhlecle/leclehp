import { Box, Flex, Image, chakra } from '@chakra-ui/react';
import SectionLayout from 'components/@Layout/SectionLayout';
import useMedia from 'hooks/useMedia';
import { useTranslations } from 'next-intl';

import Animation from './_fragments/Animation';

type Section1Props = {
  lottieComplete: boolean;
  animationComplete: boolean;
  setAnimationComplete: (value: boolean) => void;
  alreadyLoaded?: boolean;
};

function Section1({ lottieComplete, animationComplete, setAnimationComplete, alreadyLoaded }: Section1Props) {
  // const { locale } = useRouter();
  const t = useTranslations('Home');
  const { isSmallerThanPC, isSmallPc, isSmaller600Height, isSmaller1200Height, isSmaller2000Height } = useMedia();
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
        // bgImage={["url('/images/home/section1/mobile.png')", "url('/images/home/section1/tablet.png')", "url('/images/home/section1/pc.png')"]}
        // backgroundRepeat={'no-repeat'}
        // backgroundSize={'contain'}
        // backgroundPosition={['50% calc(100% - 60px)', 'calc(100% - 90px)', 'calc(100% - 25px)']}
        position={'relative'}
        top={0}
      >
        {alreadyLoaded ? null : <Animation lottieComplete={lottieComplete} animationComplete={animationComplete} setAnimationComplete={setAnimationComplete} />}
        <Flex w={'100%'} h={'100%'} zIndex={3} flexDirection={['column', 'column', 'row']}>
          <>
            <Flex
              flexDir={'column'}
              justify={'flex-start'}
              mt={'80px'}
              mr={'10px'}
              mb={['0', '20px']}
              pt={['0px', '0', '100px']}
              minWidth={['320px', '350px', '350px', '575px']}
            >
              <Image
                src={`/images/home/section1/${animationComplete || alreadyLoaded ? 'buildupidea.png' : 'buildupidea_white.svg'}`}
                w={'124px'}
                alt="build up idea"
              />
              <Box color={animationComplete || alreadyLoaded ? 'primary.500' : 'white'} mt={['5px', '10px', '20px']}>
                {t.rich('idea', {
                  // eslint-disable-next-line react/display-name
                  box: (children) => (
                    <Box fontSize={['31px', '31px', '31px', '50px']} fontWeight={'900'}>
                      {children}
                    </Box>
                  ),
                  // eslint-disable-next-line react/display-name
                  box2: (children) => (
                    <Box fontSize={['31px', '31px', '31px', '50px']} fontWeight={'900'}>
                      {children}
                    </Box>
                  ),
                })}
              </Box>
              <Box color={animationComplete || alreadyLoaded ? 'gray.500' : 'white'} mt={'20px'}>
                {t.rich('ideaDescription', {
                  // eslint-disable-next-line react/display-name
                  box: (children) => (
                    <Box fontSize={['31px', '31px', '31px', '50px']} fontWeight={'900'}>
                      {children}
                    </Box>
                  ),
                  // eslint-disable-next-line react/display-name
                  box2: (children) => (
                    <Box fontSize={['31px', '31px', '31px', '50px']} fontWeight={'900'}>
                      {children}
                    </Box>
                  ),
                  // eslint-disable-next-line react/display-name
                  box3: (children) => (
                    <Box fontSize={['31px', '31px', '31px', '50px']} fontWeight={'900'}>
                      {children}
                    </Box>
                  ),
                  // eslint-disable-next-line react/display-name
                  span: (children) => <chakra.span color={animationComplete || alreadyLoaded ? 'point' : 'white'}>{children}</chakra.span>,
                })}
              </Box>
            </Flex>
            {isSmallerThanPC ? (
              <Image
                src={`/images/home/section1/mobile.png`}
                alt={'text decoration image'}
                width={'100vw'}
                maxWidth={'100vw'}
                ml={['-16px', '-120px', '-95px']}
              />
            ) : isSmallPc ? (
              <Flex ml={'auto'} mr={isSmaller600Height ? '-30px' : isSmaller1200Height ? '-50px' : isSmaller2000Height ? '-95px' : '-120px'}>
                <Image
                  src={`/images/home/section1/tablet.png`}
                  alt={'text decoration image'}
                  objectFit={'cover'}
                  objectPosition={'right'}
                  maxWidth={'100%'}
                  height={'100%'}
                />
              </Flex>
            ) : (
              <Flex ml={'auto'} mr={isSmaller600Height ? '-50px' : isSmaller1200Height ? '-90px' : isSmaller2000Height ? '-150px' : '-200px'}>
                <Image
                  src={`/images/home/section1/pc.png`}
                  alt={'text decoration image'}
                  objectFit={'cover'}
                  objectPosition={'right'}
                  maxWidth={'100%'}
                  height={'100%'}
                />
              </Flex>
            )}
          </>
        </Flex>
      </Flex>
    </SectionLayout>
  );
}

export default Section1;
