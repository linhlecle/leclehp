import { Image, Flex, Box, Link } from '@chakra-ui/react';
import Navigation from 'components/Header/Navigation';
import useMedia from 'hooks/useMedia';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import DrawerNavigation from './DrawerNavigation';

type MainHeaderProps = {
  isHover: boolean;
  setIsHover: (value: boolean) => void;
  handleHeaderTextColor: () => string;
  activeIndex?: number;
  animationComplete?: boolean;
  alreadyLoaded?: boolean;
};

function MainHeader({ isHover, setIsHover, handleHeaderTextColor, activeIndex, animationComplete, alreadyLoaded }: MainHeaderProps) {
  const router = useRouter();
  const { isSmallerThanPC } = useMedia();

  return (
    <Flex flexDir={'row'} align={'center'} justify={'space-between'} w={'100%'} h={'fit-content'} overflow={'hidden'}>
      {router.pathname === '/' ? (
        <Flex as="h1" align={'center'} w={'100%'} minW={'fit-content'} minH={'80px'}>
          <Image
            src={animationComplete || alreadyLoaded ? `/images/lecle_${handleHeaderTextColor()}.svg` : '/images/lecle_white.svg'}
            alt={'LECLE'}
            cursor="pointer"
            onClick={() => router.push('/')}
          />
        </Flex>
      ) : (
        <Flex as="h1" align={'center'} w={'100%'} minW={'fit-content'} minH={'80px'}>
          <Image src={`/images/lecle_${handleHeaderTextColor()}.svg`} alt={'LECLE'} cursor="pointer" onClick={() => router.push('/')} />
        </Flex>
      )}
      {isSmallerThanPC ? (
        <DrawerNavigation activeIndex={activeIndex} animationComplete={animationComplete} alreadyLoaded={alreadyLoaded} />
      ) : (
        <>
          <Navigation
            setIsHover={setIsHover}
            handleHeaderTextColor={handleHeaderTextColor}
            animationComplete={animationComplete}
            alreadyLoaded={alreadyLoaded}
          />
          <Flex flexDir={'row'} align={'center'} justify={'flex-end'} minH={'80px'} w={'100%'}>
            <Box textStyle={'md'} fontWeight={'700'} color={isHover ? 'black' : 'white'} cursor={animationComplete ? 'pointer' : 'white'}>
              <NextLink href={'https://www.lecle.co.kr/'} passHref>
                <Link target={'_blank'}>KOR</Link>
              </NextLink>
            </Box>
            {router.pathname === '/' ? (
              <>
                <Box px={'10px'} color={isHover ? 'gray.700' : animationComplete || alreadyLoaded ? 'black' : 'white'}>
                  |
                </Box>
                <Box textStyle={'md'} fontWeight={'400'} color={isHover ? 'gray.700' : animationComplete || alreadyLoaded ? 'black' : 'white'}>
                  <NextLink href={'#'} passHref>
                    <Link cursor={'not-allowed'}>ENG</Link>
                  </NextLink>
                </Box>
              </>
            ) : (
              <>
                <Box px={'10px'} color={isHover ? 'gray.700' : 'black'}>
                  |
                </Box>
                <Box textStyle={'md'} fontWeight={'400'} color={isHover ? 'gray.700' : 'black'}>
                  <NextLink href={'#'} passHref>
                    <Link cursor={'not-allowed'}>ENG</Link>
                  </NextLink>
                </Box>
              </>
            )}
          </Flex>
        </>
      )}
    </Flex>
  );
}

export default MainHeader;
