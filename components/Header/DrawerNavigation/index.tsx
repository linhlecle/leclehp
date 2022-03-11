import { useRef } from 'react';
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerOverlay, Flex, Link, useDisclosure } from '@chakra-ui/react';
import MenuIcon from 'components/@Icons/System/Menu';
import AccordionMenu from './AccordionMenu';
import { hoverStyle } from '../hoverStyle';
import useMedia from 'hooks/useMedia';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

type DrawerNavigationProps = {
  activeIndex?: number;
  animationComplete?: boolean;
  alreadyLoaded?: boolean;
};

function DrawerNavigation({ activeIndex, animationComplete, alreadyLoaded }: DrawerNavigationProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const { isTablet, isMobile } = useMedia();
  const router = useRouter();

  const handleDrawerButtonColor = () => {
    if (router.pathname === '/') {
      if (isTablet && !isMobile) {
        return 'white';
      }
      if (activeIndex !== 0) {
        return 'white';
      }
    } else {
      return 'white';
    }
  };

  return (
    <>
      <Button ref={btnRef} onClick={onOpen} p={'0px'} bgColor={'transparent'} _hover={{ bgColor: 'transparent' }} _active={{ bgColor: 'transparent' }}>
        <MenuIcon w={'24px'} h={'24px'} color={animationComplete || alreadyLoaded ? handleDrawerButtonColor() : 'white'} />
      </Button>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef} size={'xs'}>
        <DrawerOverlay />

        <DrawerContent px={'16px'}>
          <Flex h={'80px'} align={'center'} justify={'flex-end'}>
            <DrawerCloseButton
              position={'static'}
              size={'lg'}
              p={'0px'}
              w={'24px'}
              h={'24px'}
              color={'black'}
              bgColor={'transparent'}
              _hover={{ bgColor: 'transparent' }}
              _active={{ bgColor: 'transparent' }}
              _focus={{ outline: 'none' }}
            />
          </Flex>

          <DrawerBody
            p={'0px'}
            css={{
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            }}
          >
            <AccordionMenu />
          </DrawerBody>

          <DrawerFooter p={'0px'} h={'80px'}>
            <Flex flexDir={'row'} align={'center'} justify={'flex-start'} minH={'80px'} w={'100%'}>
              <Box textStyle={'md'} fontWeight={'700'} color={'black'} cursor={'pointer'} {...hoverStyle}>
                <NextLink href={'https://www.lecle.co.kr/'} passHref>
                  <Link target={'_blank'}>KOR</Link>
                </NextLink>
              </Box>
              <Box px={'10px'} color={'gray.700'}>
                |
              </Box>
              <Box textStyle={'md'} fontWeight={'400'} color={'gray.700'} cursor={'not-allowed'}>
                <NextLink href={'#'} passHref>
                  <Link target={'_blank'}>ENG</Link>
                </NextLink>
              </Box>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default DrawerNavigation;
