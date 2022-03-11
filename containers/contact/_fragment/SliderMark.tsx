import { Box, Slider, SliderMark as Mark } from '@chakra-ui/react';
import React from 'react';

function SliderMark({ checked, prevent }: { checked: boolean; prevent?: boolean }) {
  return (
    <>
      <Slider mt={['20px', '20px', '20px']} w={'99%'} h={'20px'}>
        <Mark value={0.2} textStyle={'sm'} color={checked || prevent ? 'gray.500' : 'gray.800'}>
          5천 이하
        </Mark>
        <Mark value={(100 / 6) * 1} textStyle={'sm'} color={checked || prevent ? 'gray.500' : 'gray.800'}>
          5천
        </Mark>
        <Mark value={(100 / 6) * 2} textStyle={'sm'} color={checked || prevent ? 'gray.500' : 'gray.800'}>
          1억
        </Mark>
        <Mark value={(100 / 6) * 3} textStyle={'sm'} color={checked || prevent ? 'gray.500' : 'gray.800'}>
          2억
        </Mark>
        <Mark value={(100 / 6) * 4} textStyle={'sm'} color={checked || prevent ? 'gray.500' : 'gray.800'}>
          3억
        </Mark>
        <Mark value={(100 / 6) * 5} textStyle={'sm'} color={checked || prevent ? 'gray.500' : 'gray.800'}>
          4억
        </Mark>
        <Box width={'101%'} textAlign={'right'} textStyle={'sm'} color={checked || prevent ? 'gray.500' : 'gray.800'}>
          5억 이상
        </Box>
      </Slider>
    </>
  );
}

export default SliderMark;
