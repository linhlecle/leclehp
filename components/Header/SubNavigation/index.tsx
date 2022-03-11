import { Flex, Link } from '@chakra-ui/react';
import { NAVIGATION } from 'constants/navigation';
import NextLink from 'next/link';
import { hoverStyle } from '../hoverStyle';

type SubNavigationProps = {
  isHover: boolean;
  setIsHover: (value: boolean) => void;
};

function SubNavigation({ isHover, setIsHover }: SubNavigationProps) {
  return (
    <Flex
      align={'center'}
      justify={'center'}
      visibility={isHover ? 'visible' : 'hidden'}
      opacity={isHover ? 1 : 0}
      onMouseLeave={() => setIsHover(false)}
      transitionProperty={'background color opacity visibility'}
      transitionDuration={'0.5s'}
      transitionTimingFunction={'ease'}
    >
      <Flex flexDir={'row'} align={'flex-start'} justify={'space-between'} w={'460px'} py={'30px'}>
        {NAVIGATION.map(({ en, SUB_NAVIGATION }, index) => {
          return (
            <Flex key={index} flexDir={'column'} align={'center'} justify={'center'} gap={'40px'}>
              {SUB_NAVIGATION.map(({ ko: ko2, en: en2 }, index2) => {
                return (
                  <NextLink href={`${en}${en2}`} key={index2} passHref>
                    <Link w={'100px'} h={'100%'} {...hoverStyle} onClick={() => setIsHover(false)}>
                      <Flex key={index} align={'center'} justify={'center'} w={'100%'} h={'100%'} color={'gray.700'}>
                        {ko2}
                      </Flex>
                    </Link>
                  </NextLink>
                );
              })}
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
}

export default SubNavigation;
