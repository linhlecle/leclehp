import { Box, Flex, Image } from '@chakra-ui/react';
import SectionLayout from 'components/@Layout/SectionLayout';
import useMedia from 'hooks/useMedia';
import useHeight from 'hooks/useHeight';

function Section4() {
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
                <Box>블록체인 코어 개발은 물론 운영까지 동시에 가능한 기술적 역량을 보유한 기업입니다.</Box>
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
                  left={'126px'}
                  w={'126px'}
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
                <Box>블록체인 코어 개발은 물론</Box>
                <Box>운영까지 동시에 가능한</Box>
                <Box>기술적 역량을 보유한 기업입니다.</Box>
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
                  left={['0px', '170px', '280px']}
                  w={['0px', '135px', '207px']}
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
