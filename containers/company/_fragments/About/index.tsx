import { Box, Flex, Image, chakra, Button, Text } from '@chakra-ui/react';
import DownloadIcon from 'components/@Icons/System/Download';
import useMedia from 'hooks/useMedia';
import { fileDownloader } from 'utils/fileDownload';

function About() {
  const { isTablet, isMobile, isPc } = useMedia();

  return (
    <>
      <Flex align={'center'} justify={'center'} w={'100%'} h={'100%'} bgColor={'gray.50'} pb={'130px'}>
        <Flex flexDir={'column'} pt={['30px', '50px', '60px']} px={['16px', '120px', '100px']} w={'100%'} maxW={['100%', '100%', 'calc(100% - 200px)']}>
          <Flex flexWrap={['wrap', 'wrap', 'nowrap']} align={'flex-start'} justify={'flex-start'} gap={['0px', '0px', '35px']}>
            <Flex flexDir={'column'} w={'100%'}>
              <Text textStyle={'xl2'} fontWeight={'700'} wordBreak={'keep-all'}>
                다양한 문화와 기술이
              </Text>
              <Text textStyle={'xl2'} fontWeight={'700'} wordBreak={'keep-all'}>
                융합된 환경에서 찾아낸
              </Text>
              <Text textStyle={'xl2'} fontWeight={'700'} wordBreak={'keep-all'}>
                <chakra.span color={'point'}>유일한 솔루션</chakra.span>을 제공합니다.
              </Text>
              <Button
                rightIcon={<DownloadIcon w={'24px'} h={'24px'} />}
                borderRadius={'10px'}
                mt={['30px', '25px', '40px']}
                px={'21px'}
                py={'11px'}
                w={['213px', '196px', '204px']}
                h={'49px'}
                bgColor={'primary.500'}
                color={'white'}
                _hover={{ bgColor: 'none' }}
                _active={{ bgColor: 'none' }}
                onClick={() => fileDownloader('/files/레클 - 회사소개서.pdf')}
              >
                <Box fontWeight={'700'} textStyle={'md'}>
                  회사소개서 다운로드
                </Box>
              </Button>
            </Flex>
            <Flex w={'100%'} mt={['60px', '60px', '0px']}>
              {isPc && <Image src={'/images/company/about_pc.svg'} alt={'about company image'} w={'100%'} h={'100%'} />}
              {isTablet && <Image src={'/images/company/about_tablet.svg'} alt={'about company image'} w={'100%'} h={'100%'} />}
              {isMobile && <Image src={'/images/company/about_mobile.svg'} alt={'about company image'} w={'100%'} h={'100%'} objectFit={'fill'} />}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex align={'center'} justify={'center'} w={'100%'} h={'100%'} bgColor={'white'} pb={['130px', '0px', '0px']} pt={'26px'}>
        <Flex
          flexDir={'column'}
          align={'center'}
          justify={'center'}
          px={['16px', '120px', '100px']}
          w={'100%'}
          maxW={['100%', '100%', 'calc(100% - 200px)']}
          h={'500px'}
        >
          <Image src={'/images/home/section5/strength1.svg'} alt={'strength1'} px={'123px'} py={'30px'} />
          <Text mt={'20px'} textStyle={'xl'} fontWeight={'700'} textAlign={'center'}>
            글로벌 소프트웨어 하우스 <chakra.span color={'point'}>LECLE</chakra.span>
          </Text>
          {isMobile ? (
            <Text textStyle="md" textAlign={'center'} color="black" fontWeight="normal" w={'fit-content'} mt={'30px'}>
              레클은 2014년 창업을 하여 초기 기업 투자 VC인 <chakra.span fontWeight={'700'}>(주)더벤처스의 투자</chakra.span>를 받아 중기청의
              <chakra.span fontWeight={'700'}> TIPS 프로그램에 선정</chakra.span>이 되었으며, 이어 2015~2016년 사이에 투자연계멘토링 지원사업,
              <chakra.span whiteSpace={'pre'}> K-Global</chakra.span> ICT 유망기술지원사업 등에 선정되기도 한{' '}
              <chakra.span fontWeight={'700'}>유망한 기술 기반 스타트업</chakra.span>
              입니다. 2017년에는 미국의 스타트업 엑셀러레이터인 <chakra.span fontWeight={'700'}>Plug&Play의 인큐베이팅 프로그램에 선정</chakra.span>이 되었고,
              미래창조과학부의
              <chakra.span fontWeight={'700'} whiteSpace={'pre'}>
                {' '}
                K-Global 300 기업에 선정
              </chakra.span>
              이 되기도 하였습니다.
            </Text>
          ) : (
            <>
              <Text
                textStyle="md"
                textAlign={'center'}
                color="black"
                fontWeight="normal"
                w={'fit-content'}
                maxW={['', '604px', '650px']}
                mt={'30px'}
                whiteSpace={'pre-wrap'}
                wordBreak={'keep-all'}
              >
                레클은 2014년 창업을 하여 초기 기업 투자 VC인 <chakra.span fontWeight={'700'}>(주)더벤처스의 투자</chakra.span>를 받아 중기청의
                <chakra.span fontWeight={'700'}> TIPS 프로그램에 선정</chakra.span>이 되었으며, 이어 2015~2016년 사이에 투자연계멘토링 지원사업,
                <chakra.span whiteSpace={'pre'}> K-Global</chakra.span> ICT 유망기술지원사업 등에 선정되기도 한{' '}
                <chakra.span fontWeight={'700'}>유망한 기술 기반 스타트업</chakra.span>
                입니다.
              </Text>
              <Text
                textStyle="md"
                textAlign={'center'}
                color="black"
                fontWeight="normal"
                w={'fit-content'}
                maxW={['', '604px', '650px']}
                whiteSpace={'pre-wrap'}
                wordBreak={'keep-all'}
              >
                2017년에는 미국의 스타트업 엑셀러레이터인 <chakra.span fontWeight={'700'}>Plug&Play의 인큐베이팅 프로그램에 선정</chakra.span>이 되었고,
                미래창조과학부의
                <chakra.span fontWeight={'700'} whiteSpace={'pre'}>
                  {' '}
                  K-Global 300 기업에 선정
                </chakra.span>
                이 되기도 하였습니다.
              </Text>
            </>
          )}
        </Flex>
      </Flex>
    </>
  );
}

export default About;
