import { Box, Flex } from '@chakra-ui/react';
import SectionLayout from 'components/@Layout/SectionLayout';
import InfiniteSlider from 'components/InfiniteSlider';
import { useQuery } from 'react-query';
import SliderItem from './_fragments/SliderItem';
import api from 'apis/Hr/GET';
import { dateToUpdated } from 'utils/formatDateToString';
import { useTranslations } from 'next-intl';

function Section2() {
  const t = useTranslations('Home');
  const { data } = useQuery<any>(['hr'], api.getHr);
  const lastUpdated = dateToUpdated(data?.[data?.length - 1]?.updated);
  const totalCount = data?.find((hr: any) => hr.category === 'TOTAL').num;

  return (
    <SectionLayout>
      <Flex
        flexDir={'column'}
        align={'center'}
        justify={'center'}
        minW={'100vw'}
        w={'100%'}
        h={'100%'}
        px={['16px', '120px', '95px']}
        bgColor={'primary.500'}
        position={'relative'}
        overflow={'hidden'}
      >
        <Flex w={'100%'} h={'100%'}>
          <Flex flexDir={'column'} align={'flex-start'} justify={'space-between'}>
            <Box
              mt={['100px', '129px', '130px']}
              w={['310px', '430px', '640px']}
              textStyle={'3xl'}
              fontWeight={'500'}
              color={'white'}
              wordBreak={'keep-all'}
              zIndex={1}
            >
              {t('section2Description')}
            </Box>
            <Box textStyle={'md'} color={'gray.700'} fontWeight={'400'} mb={['100px', '55px', '53px']}>
              {`${lastUpdated} 기준`}
            </Box>
          </Flex>
          <Box
            position={'absolute'}
            top={['350px', '140px', '146px']}
            right={['23px', '120px', '200px']}
            textStyle={'md'}
            fontWeight={'400'}
            color={'white'}
            w={['170px', '180px', '190px']}
            wordBreak={['normal', 'keep-all', 'keep-all']}
            zIndex={2}
          >
            <Box textDecor={'underline'} fontFamily={'montserrat'} fontWeight={'600'}>
              LECLE IS
            </Box>
            <Box mt={['10px', '5px', '5px']}>{t('section2Lecle', { total: totalCount })}</Box>
          </Box>
        </Flex>
        <Flex w={'100%'} h={['200px', '280px', '400px']} position={'absolute'} zIndex={'0'} bottom={['150px', '82px', '150px']}>
          <InfiniteSlider flow={'left'} duration={50000}>
            <SliderItem datas={data} />
          </InfiniteSlider>
        </Flex>
      </Flex>
    </SectionLayout>
  );
}

export default Section2;
