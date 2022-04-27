import { Badge, Box, Flex, chakra } from '@chakra-ui/react';
import SectionLayout from 'components/@Layout/SectionLayout';
import useMedia from 'hooks/useMedia';
import InfiniteSlider from 'components/InfiniteSlider';
import SliderItem from './_fragments/SliderItem';
import { MARQUEE } from 'constants/marquee';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';

function Section3() {
  const t = useTranslations('Home');
  const { locale } = useRouter();
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
              minW={['300px', locale === 'en' ? '450px' : '380px', '612px', locale === 'en' ? '950px' : '612px']}
              width={[locale === 'ko' ? '300px' : 'auto', 'auto']}
              textStyle={locale === 'ko' ? ['2xl', 'xl', 'xl', '3xl'] : ['lg', 'xl', 'xl', '3xl']}
              fontWeight={'500'}
              color={'black'}
              wordBreak={'keep-all'}
            >
              <Box whiteSpace={['initial', 'nowrap']}>
                {t.rich('s3first', {
                  // eslint-disable-next-line react/display-name
                  box: (children) => <chakra.span fontWeight={'700'}>{children}</chakra.span>,
                })}
              </Box>
              <Flex flexDir={['column', 'row', 'row']} align={['none', 'center', 'center']}>
                <Badge
                  w={'fit-content'}
                  px={['16.5px', '16.5px', '22px']}
                  py={['5px', '5px', '5px']}
                  mr={['0px', '16.5px', '22px']}
                  border={'2px solid black'}
                  borderRadius={'20px'}
                  whiteSpace={['initial', 'nowrap']}
                >
                  <Box textStyle={locale === 'ko' ? ['2xl', 'xl', 'xl', '3xl'] : ['lg', 'xl', 'xl', '3xl']} color={'black'} fontWeight={'500'}>
                    {t('s3Second')}
                  </Box>
                </Badge>
                {locale === 'ko' ? isSmallerThanTablet ? null : <Box>모든</Box> : null}
              </Flex>
              <Box whiteSpace={['initial', 'nowrap']}>
                {t.rich('s33', {
                  // eslint-disable-next-line react/display-name
                  span: (children) => (!isSmallerThanTablet ? null : <chakra.span>{children}</chakra.span>),
                })}
              </Box>
            </Flex>
          </Flex>
        </Flex>
        {isMobile ? (
          <Flex flexDir={'column'} w={'100vw'} h={'245px'} mb={'83px'} gap={'15px'}>
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
