import { useState } from 'react';
import { useRouter } from 'next/router';
import { Container } from '@chakra-ui/react';
import MainHeader from './MainHeader';
import SubNavigation from 'components/Header/SubNavigation';
import useMedia from 'hooks/useMedia';

type HeaderProps = {
  activeIndex?: number;
  animationComplete?: boolean;
  alreadyLoaded?: boolean;
};

function Header({ activeIndex, animationComplete, alreadyLoaded }: HeaderProps) {
  const router = useRouter();
  const [isHover, setIsHover] = useState<boolean>(false);
  const { isSmallerThanPC } = useMedia();

  const handleHeaderBgColor = () => {
    // 'white', 'point', 'transparent'
    if (activeIndex === 0 && isHover) {
      return 'white';
    } else if (activeIndex !== 0 && isHover) {
      return 'white';
    } else if (activeIndex !== 0 && !isHover) {
      return 'point';
    } else if (router.pathname !== '/') {
      return 'point';
    } else {
      return 'transparent';
    }
  };

  const handleHeaderTextColor = () => {
    // 'black', 'white', 'black'
    if (activeIndex === 0 && isHover) {
      return 'black';
    } else if (activeIndex !== 0 && isHover) {
      return 'black';
    } else if (activeIndex !== 0 && !isHover) {
      return 'white';
    } else if (router.pathname !== '/') {
      return 'white';
    } else {
      return 'black';
    }
  };

  return (
    <Container
      as={'header'}
      px={['16px', '120px', '95px']}
      w={'100%'}
      minW={'100vw'}
      h={'fit-content'}
      minH={'60px'}
      bgColor={handleHeaderBgColor()}
      position={'fixed'}
      top={0}
      right={0}
      left={0}
      bottom={0}
      zIndex={3}
      transitionProperty={'background-color'}
      transitionDuration={'0.5s'}
      transitionTimingFunction={'ease'}
      overflowX={'hidden'}
    >
      <MainHeader
        isHover={isHover}
        setIsHover={setIsHover}
        handleHeaderTextColor={handleHeaderTextColor}
        activeIndex={activeIndex}
        animationComplete={animationComplete}
        alreadyLoaded={alreadyLoaded}
      />
      {isSmallerThanPC ? null : isHover ? <SubNavigation isHover={isHover} setIsHover={setIsHover} /> : null}
    </Container>
  );
}

export default Header;
