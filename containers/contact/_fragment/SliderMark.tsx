import { Box, Slider, SliderMark as Mark } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import React from 'react';

function SliderMark({ checked, prevent }: { checked: boolean; prevent?: boolean }) {
  const t = useTranslations('Contact');
  return (
    <>
      <Slider mt={['20px', '20px', '20px']} w={'99%'} h={'20px'}>
        <Mark value={0.2} textStyle={'sm'} color={checked || prevent ? 'gray.500' : 'gray.800'}>
          {t('q6Range1')}
        </Mark>
        <Mark value={(100 / 6) * 1} textStyle={'sm'} color={checked || prevent ? 'gray.500' : 'gray.800'}>
          {t('q6Range2')}
        </Mark>
        <Mark value={(100 / 6) * 2} textStyle={'sm'} color={checked || prevent ? 'gray.500' : 'gray.800'}>
          {t('q6Range3')}
        </Mark>
        <Mark value={(100 / 6) * 3} textStyle={'sm'} color={checked || prevent ? 'gray.500' : 'gray.800'}>
          {t('q6Range4')}
        </Mark>
        <Mark value={(100 / 6) * 4} textStyle={'sm'} color={checked || prevent ? 'gray.500' : 'gray.800'}>
          {t('q6Range5')}
        </Mark>
        <Mark value={(100 / 6) * 5} textStyle={'sm'} color={checked || prevent ? 'gray.500' : 'gray.800'}>
          {t('q6Range6')}
        </Mark>
        <Box width={'101%'} textAlign={'right'} textStyle={'sm'} color={checked || prevent ? 'gray.500' : 'gray.800'}>
          {t('q6Range7')}
        </Box>
      </Slider>
    </>
  );
}

export default SliderMark;
