import { Box, Flex, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';

type FloatingButtonProps = {
  isHover: boolean;
  setIsHover: (value: boolean) => void;
  right?: string;
  bottom?: string;
  top?: string;
  left?: string;
};

function FloatingButton({ isHover, setIsHover, right, bottom, top, left }: FloatingButtonProps) {
  const router = useRouter();

  return (
    <Flex maxWidth={'120px'}>
      <Flex
        bgColor={'point'}
        w={isHover ? '120px' : '60px'}
        h={'60px'}
        position={router.pathname === '/' ? 'fixed' : 'fixed'}
        bottom={bottom}
        right={right}
        top={top}
        left={left}
        zIndex={2}
        borderRadius={'30px'}
        onClick={() => router.push('/contact')}
        overflow={'hidden'}
        cursor={'pointer'}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        transition={'width 0.5s ease'}
        align={'center'}
        justify={'flex-start'}
        boxShadow={'0px 0px 10px rgba(26, 26, 26, 0.1)'}
      >
        <Image src="/icons/contact.svg" alt={'contact'} w={'30px'} h={'30px'} ml={'15px'} />
        <Box
          textStyle={'md'}
          fontWeight={'700'}
          textAlign={'center'}
          minW={'max-content'}
          color={isHover ? 'white' : 'point'}
          ml={'5px'}
          transition={'color 0.5s ease'}
        >
          개발문의
        </Box>
      </Flex>
    </Flex>
  );
}

export default FloatingButton;
