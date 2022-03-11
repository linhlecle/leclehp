import { Badge, Box, Flex, chakra } from '@chakra-ui/react';
import SectionLayout from 'components/@Layout/SectionLayout';
import useMedia from 'hooks/useMedia';
import InfiniteSlider from 'components/InfiniteSlider';
import SliderItem from './_fragments/SliderItem';
import { MARQUEE } from 'constants/marquee';

function Section3() {
  const { isSmallerThanTablet, isMobile } = useMedia();

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
        bgColor={'gray.50'}
        position={'relative'}
        overflow={'hidden'}
      >
        <Flex w={'100%'} h={'100%'} mt={'80px'}>
          <Flex flexDir={'column'} align={['flex-start', 'flex-end', 'flex-end']} justify={'center'} w={'100%'} h={'100%'}>
            <Flex
              flexDir={'column'}
              mt={['0px', '0px', '0px']}
              mr={['0px', '37px', '108px']}
              w={['300px', '380px', '612px']}
              textStyle={'3xl'}
              fontWeight={'500'}
              color={'black'}
            >
              <Box wordBreak={'keep-all'}>레클에게 불가능은 없습니다.</Box>
              <Flex flexDir={['column', 'row', 'row']} align={['none', 'center', 'center']}>
                <Badge
                  w={'fit-content'}
                  px={['16.5px', '16.5px', '22px']}
                  py={['5px', '5px', '5px']}
                  mr={['0px', '16.5px', '22px']}
                  border={'2px solid black'}
                  borderRadius={'20px'}
                >
                  <Box textStyle={'4xl'} color={'black'} fontWeight={'500'}>
                    # 당신에게 필요한
                  </Box>
                </Badge>
                {isSmallerThanTablet ? null : <Box>모든</Box>}
              </Flex>
              <Box wordBreak={'keep-all'}>
                {!isSmallerThanTablet ? null : <chakra.span>모든 </chakra.span>}
                기술 베이스를 보유 중입니다.
              </Box>
            </Flex>
          </Flex>
        </Flex>
        {isMobile ? (
          <Flex flexDir={'column'} w={'100vw'} h={'300px'} mb={'83px'} gap={'20px'}>
            <InfiniteSlider flow={'right'} duration={20000}>
              <SliderItem startItem={0} endItem={7} datas={MARQUEE} />
            </InfiniteSlider>
            <InfiniteSlider flow={'left'} duration={20000}>
              <SliderItem startItem={7} endItem={12} datas={MARQUEE} />
            </InfiniteSlider>
            <InfiniteSlider flow={'right'} duration={20000}>
              <SliderItem startItem={12} endItem={17} datas={MARQUEE} />
            </InfiniteSlider>
            <InfiniteSlider flow={'left'} duration={20000}>
              <SliderItem startItem={17} endItem={23} datas={MARQUEE} />
            </InfiniteSlider>
          </Flex>
        ) : (
          <Flex flexDir={'column'} w={'100vw'} h={['0px', '220px', '280px']} mb={'83px'} gap={'20px'}>
            <InfiniteSlider flow={'right'} duration={20000}>
              <SliderItem startItem={0} endItem={9} datas={MARQUEE} />
            </InfiniteSlider>
            <InfiniteSlider flow={'left'} duration={20000}>
              <SliderItem startItem={9} endItem={16} datas={MARQUEE} />
            </InfiniteSlider>
            <InfiniteSlider flow={'right'} duration={20000}>
              <SliderItem datas={MARQUEE} startItem={14} endItem={23} />
            </InfiniteSlider>
          </Flex>
        )}
      </Flex>
    </SectionLayout>
  );
}

export default Section3;
