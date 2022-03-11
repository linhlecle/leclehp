import { Box, Flex } from '@chakra-ui/react';
import SectionLayout from 'components/@Layout/SectionLayout';
import InfiniteSlider from 'components/InfiniteSlider';
import { useQuery } from 'react-query';
import SliderItem from './_fragments/SliderItem';
import api from 'apis/Hr/GET';
import { dateToUpdated } from 'utils/formatDateToString';

function Section2() {
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
              각 전문가들의 확실한 분업과 조화를 기반으로 높은 완성도와 차별화된 기술력을 보유하고 있습니다.
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
            <Box mt={['10px', '5px', '5px']}>
              현재 전체 인원 {totalCount}명+ 중 실제 개발이 가능한 인원 분포가 93.3%라는 타사 대비 월등히 높은 수치로 그 어느 회사보다 전문적인 개발기업입니다.
            </Box>
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
