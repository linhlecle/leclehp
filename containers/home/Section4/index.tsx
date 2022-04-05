import { Box, Flex, Image } from '@chakra-ui/react';
import SectionLayout from 'components/@Layout/SectionLayout';
import useMedia from 'hooks/useMedia';
import useHeight from 'hooks/useHeight';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';

function Section4() {
  const t = useTranslations('Home');
  const { locale } = useRouter();
  const { isMobile } = useMedia();
  const height = useHeight();

  return (
    <SectionLayout>
      <Flex
        flexDir={'column'}
        align={'center'}
        justify={'center'}
        minW={'100vw'}
        w={'100%'}
        h={height}
        px={['16px', '120px', '95px']}
        bgColor={'primary.500'}
        bgImage={["url('/images/home/section4/frame_mobile.png')", "url('/images/home/section4/frame.png')", "url('/images/home/section4/frame.png')"]}
        backgroundRepeat={'no-repeat'}
        backgroundSize={['100%', 'contain', 'contain']}
        backgroundPosition={['bottom']}
      >
        <Flex w={'100%'} h={'100%'} justify={'center'} align={'center'}>
          <Box
            w={['280px', '437px', '704px']}
            textStyle={'3xl'}
            textAlign={'center'}
            wordBreak={'keep-all'}
            color={'white'}
            fontWeight={'500'}
            position={'relative'}
          >
            {isMobile ? (
              <>
                <Box>{t('s4mobile')}</Box>
                <Image
                  src={`/images/home/section4/arrow_mobile.png`}
                  alt={'text decoration image'}
                  position={'absolute'}
                  top={'-65px'}
                  left={'15px'}
                  w={'75px'}
                  h={'61px'}
                />
                <Image
                  src={`/images/home/section4/check_mobile.png`}
                  alt={'text decoration image'}
                  position={'absolute'}
                  top={'0px'}
                  left={locale === 'en' ? '50px' : '126px'}
                  w={locale === 'en' ? '160px' : '126px'}
                  h={'52px'}
                />
                <Image
                  src={`/images/home/section4/underline_mobile.png`}
                  alt={'text decoration image'}
                  position={'absolute'}
                  top={'90px'}
                  left={'70px'}
                  w={'112px'}
                  h={'5px'}
                />
              </>
            ) : (
              <>
                {t.rich('s4', {
                  // eslint-disable-next-line react/display-name
                  box: (children) => <Box>{children}</Box>,
                  // eslint-disable-next-line react/display-name
                  box2: (children) => <Box>{children}</Box>,
                  // eslint-disable-next-line react/display-name
                  box3: (children) => <Box>{children}</Box>,
                })}
                <Image
                  srcSet={`/images/home/section4/arrow_tab.png 208w,
                  /images/home/section4/arrow_pc.png 284w`}
                  alt={'text decoration image'}
                  position={'absolute'}
                  top={['-50px', '-50px', '-50px']}
                  left={['0px', '-60px', '-25px']}
                  w={'102px'}
                  h={'126px'}
                />
                <Image
                  srcSet={`/images/home/section4/check_tab.png 276w,
                  /images/home/section4/check_pc.png 425w`}
                  alt={'text decoration image'}
                  position={'absolute'}
                  top={['0px', '0px', '0px']}
                  left={['0px', locale === 'en' ? '155px' : '170px', locale === 'en' ? '250px' : '280px']}
                  w={['0px', locale === 'en' ? '165px' : '135px', locale === 'en' ? '260px' : '207px']}
                  h={['0px', '55px', '84px']}
                />
                <Image
                  srcSet={`/images/home/section4/underline_tab.png 208w,
                  /images/home/section4/underline_pc.png 284w`}
                  alt={'text decoration image'}
                  position={'absolute'}
                  top={['0px', '105px', '150px']}
                  left={['0px', '55px', '100px']}
                  w={['0px', '125px', '192.29px']}
                  h={['0px', '3px', '5.38px']}
                />
              </>
            )}
          </Box>
        </Flex>
      </Flex>
    </SectionLayout>
  );
}

export default Section4;
