import { Box, Flex } from '@chakra-ui/react';

type ToastProps = {
  confirmed: boolean;
  message?: string;
};

function Toast({ confirmed, message }: ToastProps) {
  const width = ['280px', '495px', '495px'];
  return (
    <Flex
      position={'fixed'}
      top={'130px'}
      zIndex={10}
      align={'center'}
      justify={'center'}
      w={width}
      h={'60px'}
      bgColor={'#DCE4FF'}
      borderRadius={'10px'}
      opacity={confirmed ? 1 : 0}
      visibility={confirmed ? 'visible' : 'hidden'}
      transform={['translate3d(calc(100vw / 2 - 140px), 0, 0)', 'translate3d(calc(100vw / 2 - 247.5px), 0, 0)', 'translate3d(calc(100vw / 2 - 247.5px), 0, 0)']}
      transition={'opacity visible top 1s ease'}
    >
      <Box color={'point'} textStyle={'md'}>
        {message}
      </Box>
    </Flex>
  );
}

export default Toast;
