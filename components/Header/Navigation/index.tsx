import { Flex, Link } from '@chakra-ui/react';
import { NAVIGATION } from 'constants/navigation';
import { useTranslations } from 'next-intl';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { hoverStyle } from '../hoverStyle';

type NavigationProps = {
  setIsHover: (value: boolean) => void;
  handleHeaderTextColor: () => string;
  animationComplete?: boolean;
  alreadyLoaded?: boolean;
};

function Navigation({ setIsHover, handleHeaderTextColor, animationComplete, alreadyLoaded }: NavigationProps) {
  const router = useRouter();
  const t = useTranslations('Navigation');

  return (
    <Flex flexDir={'column'} w={'460px'} h={'80px'} onMouseEnter={() => setIsHover(true)}>
      <Flex flexDir={'row'} align={'center'} justify={'space-between'} w={'100%'} minH={'80px'} gap={'20px'}>
        {NAVIGATION(t).map(({ ko, en }, index) => {
          return (
            <NextLink href={en} key={index} passHref>
              <Link w={'100px'} h={'100%'} {...hoverStyle}>
                {router.pathname === '/' ? (
                  <Flex
                    key={index}
                    align={'center'}
                    justify={'center'}
                    w={'100%'}
                    h={'100%'}
                    whiteSpace={'nowrap'}
                    color={animationComplete || alreadyLoaded ? handleHeaderTextColor() : 'white'}
                  >
                    {ko}
                  </Flex>
                ) : (
                  <Flex
                    key={index}
                    align={'center'}
                    justify={'center'}
                    w={'100%'}
                    h={'100%'}
                    whiteSpace={'nowrap'}
                    color={handleHeaderTextColor()}
                    fontWeight={router.pathname === `${en}` ? '700' : '400'}
                  >
                    {ko}
                  </Flex>
                )}
              </Link>
            </NextLink>
          );
        })}
      </Flex>
    </Flex>
  );
}

export default Navigation;
