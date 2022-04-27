import { Box, Slider, SliderMark as Mark } from '@chakra-ui/react';
import useMedia from 'hooks/useMedia';
import { useTranslations } from 'next-intl';
import React from 'react';

function SliderMark({ checked, prevent }: { checked: boolean; prevent?: boolean }) {
  const t = useTranslations('Contact');
  const { isPc, isOldSmallMobile } = useMedia();
  return (
    <>
      <Slider mt={['20px', '20px', '20px']} w={'99%'} h={'20px'}>
        <Mark value={0.2} fontSize={isPc ? '12px' : '10px'} color={checked || prevent ? 'gray.500' : 'gray.800'}>
          {t('q6Range1')}
        </Mark>
        <Mark
          value={isOldSmallMobile ? (100 / 6) * 1 - 3 : (100 / 6) * 1}
          fontSize={isPc ? '12px' : '10px'}
          color={checked || prevent ? 'gray.500' : 'gray.800'}
        >
          {t('q6Range2')}
        </Mark>
        <Mark
          value={isOldSmallMobile ? (100 / 6) * 2 - 3 : (100 / 6) * 2}
          fontSize={isPc ? '12px' : '10px'}
          color={checked || prevent ? 'gray.500' : 'gray.800'}
        >
          {t('q6Range3')}
        </Mark>
        <Mark
          value={isOldSmallMobile ? (100 / 6) * 3 - 3 : (100 / 6) * 3}
          fontSize={isPc ? '12px' : '10px'}
          color={checked || prevent ? 'gray.500' : 'gray.800'}
        >
          {t('q6Range4')}
        </Mark>
        <Mark
          value={isOldSmallMobile ? (100 / 6) * 4 - 3 : (100 / 6) * 4}
          fontSize={isPc ? '12px' : '10px'}
          color={checked || prevent ? 'gray.500' : 'gray.800'}
        >
          {t('q6Range5')}
        </Mark>
        <Mark
          value={isOldSmallMobile ? (100 / 6) * 5 - 4 : (100 / 6) * 5}
          fontSize={isPc ? '12px' : '10px'}
          color={checked || prevent ? 'gray.500' : 'gray.800'}
        >
          {t('q6Range6')}
        </Mark>
        <Box
          width={isOldSmallMobile ? '103%' : '101%'}
          textAlign={'right'}
          fontSize={isPc ? '12px' : '10px'}
          color={checked || prevent ? 'gray.500' : 'gray.800'}
        >
          {t('q6Range7')}
        </Box>
      </Slider>
    </>
  );
}

export default SliderMark;
