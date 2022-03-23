import { Image, Flex, Box, Link } from '@chakra-ui/react';
import Navigation from 'components/Header/Navigation';
import useMedia from 'hooks/useMedia';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
// import {useTranslations} from 'next-intl';
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
  // const router = useRouter();
  const { route, push, pathname, locale } = useRouter();
  // const otherLocale = locales?.find((cur) => cur !== locale);
  const { isSmallerThanPC } = useMedia();

  console.log(route, locale);

  return (
    <Flex flexDir={'row'} align={'center'} justify={'space-between'} w={'100%'} h={'fit-content'} overflow={'hidden'}>
      {pathname === '/' ? (
        <Flex as="h1" align={'center'} w={'100%'} minW={'fit-content'} minH={'80px'}>
          <Image
            src={animationComplete || alreadyLoaded ? `/images/lecle_${handleHeaderTextColor()}.svg` : '/images/lecle_white.svg'}
            alt={'LECLE'}
            cursor="pointer"
            onClick={() => push('/')}
          />
        </Flex>
      ) : (
        <Flex as="h1" align={'center'} w={'100%'} minW={'fit-content'} minH={'80px'}>
          <Image src={`/images/lecle_${handleHeaderTextColor()}.svg`} alt={'LECLE'} cursor="pointer" onClick={() => push('/')} />
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
            <Box textStyle={'md'} fontWeight={'700'} color={locale === 'ko' ? 'white' : 'black'} cursor={animationComplete ? 'pointer' : 'white'}>
              <NextLink href={route} locale="ko">
                <Link>KOR</Link>
              </NextLink>
            </Box>
            <Box px={'10px'} color={isHover ? 'gray.700' : animationComplete || alreadyLoaded ? 'black' : 'white'}>
              |
            </Box>
            <Box textStyle={'md'} fontWeight={'700'} color={locale === 'en' ? 'white' : 'black'} cursor={animationComplete ? 'pointer' : 'white'}>
              <NextLink href={route} locale="en">
                <Link>ENG</Link>
              </NextLink>
            </Box>
            {/* {pathname === '/' ? (
              <>
                <Box px={'10px'} color={isHover ? 'gray.700' : animationComplete || alreadyLoaded ? 'black' : 'white'}>
                  |
                </Box>
                <Box textStyle={'md'} fontWeight={'400'} color={isHover ? 'gray.700' : animationComplete || alreadyLoaded ? 'black' : 'white'}>
                  <NextLink href={route} locale="en">
                    <Link cursor={'_blank'}>ENG</Link>
                  </NextLink>
                </Box>
              </>
            ) : (
              <>
                <Box px={'10px'} color={isHover ? 'gray.700' : 'black'}>
                  |
                </Box>
                <Box textStyle={'md'} fontWeight={'400'} color={isHover ? 'gray.700' : 'black'}>
                  <NextLink href={route} locale="en">
                    <Link cursor={'_blank'}>ENG</Link>
                  </NextLink>
                </Box>
              </>
            )} */}
          </Flex>
        </>
      )}
    </Flex>
  );
}

export default MainHeader;
