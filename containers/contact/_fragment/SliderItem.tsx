import { Box } from '@chakra-ui/react';

type SliderItemProps = {
  active?: boolean;
  onClick: () => void;
};

function SliderItem({ active, onClick }: SliderItemProps) {
  return (
    <Box position={'relative'} w={'100%'} h={'10px'} bgColor={active ? 'point' : 'transparent'} borderRadius={'5px'} cursor={'pointer'} onClick={onClick}>
      {active && (
        <>
          <Box
            position={'absolute'}
            zIndex={0}
            left={0}
            transform={'translate3d(-10px, -5px, 0px)'}
            w={'20px'}
            h={'20px'}
            borderRadius={'50%'}
            bgColor={'white'}
            boxShadow={'0px 0px 10px rgba(26, 26, 26, 0.2)'}
          />
          <Box
            position={'absolute'}
            zIndex={0}
            right={0}
            transform={'translate3d(10px, -5px, 0px)'}
            w={'20px'}
            h={'20px'}
            borderRadius={'50%'}
            bgColor={'white'}
            boxShadow={'0px 0px 10px rgba(26, 26, 26, 0.2)'}
          />
        </>
      )}
    </Box>
  );
}

export default SliderItem;
