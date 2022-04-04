import { Box, Flex, Image, chakra, Button, Text } from '@chakra-ui/react';
import DownloadIcon from 'components/@Icons/System/Download';
import useMedia from 'hooks/useMedia';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { fileDownloader } from 'utils/fileDownload';

function About() {
  const t = useTranslations('AboutUs');
  const { locale } = useRouter();
  const { isTablet, isMobile, isPc } = useMedia();

  return (
    <>
      <Flex align={'center'} justify={'center'} w={'100%'} h={'100%'} bgColor={'gray.50'} pb={'130px'}>
        <Flex flexDir={'column'} pt={['30px', '50px', '60px']} px={['16px', '120px', '100px']} w={'100%'} maxW={['100%', '100%', 'calc(100% - 200px)']}>
          <Flex flexWrap={['wrap', 'wrap', 'nowrap']} align={'flex-start'} justify={'flex-start'} gap={['0px', '0px', '35px']}>
            <Flex flexDir={'column'} w={'100%'}>
              {t.rich('aboutText', {
                // eslint-disable-next-line react/display-name
                text: (children) => (
                  <Text textStyle={'xl2'} fontWeight={'700'} wordBreak={'keep-all'}>
                    {children}
                  </Text>
                ),
                // eslint-disable-next-line react/display-name
                text2: (children) => (
                  <Text textStyle={'xl2'} fontWeight={'700'} wordBreak={'keep-all'}>
                    {children}
                  </Text>
                ),
                // eslint-disable-next-line react/display-name
                text3: (children) => (
                  <Text textStyle={'xl2'} fontWeight={'700'} wordBreak={'keep-all'}>
                    {children}
                  </Text>
                ),
                // eslint-disable-next-line react/display-name
                span: (children) => <chakra.span color={'point'}>{children}</chakra.span>,
              })}
              <Button
                rightIcon={<DownloadIcon w={'24px'} h={'24px'} />}
                borderRadius={'10px'}
                mt={['30px', '25px', '40px']}
                px={'21px'}
                py={'11px'}
                w={locale === 'ko' ? ['213px', '196px', '204px'] : ['310px', '280px', '300px']}
                h={'49px'}
                bgColor={'primary.500'}
                color={'white'}
                _hover={{ bgColor: 'none' }}
                _active={{ bgColor: 'none' }}
                onClick={() => fileDownloader('/files/레클 - 회사소개서.pdf')}
              >
                <Box fontWeight={'700'} textStyle={'md'}>
                  {t('aboutDownloadBtnText')}
                </Box>
              </Button>
            </Flex>
            {locale === 'ko' ? (
              <Flex w={'100%'} mt={['60px', '60px', '0px']}>
                {isPc && <Image src={'/images/company/about_pc.svg'} alt={'about company image'} w={'100%'} h={'100%'} />}
                {isTablet && <Image src={'/images/company/about_tablet.svg'} alt={'about company image'} w={'100%'} h={'100%'} />}
                {isMobile && <Image src={'/images/company/about_mobile.svg'} alt={'about company image'} w={'100%'} h={'100%'} objectFit={'fill'} />}
              </Flex>
            ) : (
              <Flex w={'100%'} mt={['60px', '60px', '0px']}>
                {isPc && <Image src={'/images/company/Eng_about_pc.svg'} alt={'about company image'} w={'100%'} h={'100%'} />}
                {isTablet && <Image src={'/images/company/Eng_about_tab.svg'} alt={'about company image'} w={'100%'} h={'100%'} />}
                {isMobile && <Image src={'/images/company/Eng_about_mobile.svg'} alt={'about company image'} w={'100%'} h={'100%'} objectFit={'fill'} />}
              </Flex>
            )}
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
          {t.rich('aboutFooterTitle', {
            // eslint-disable-next-line react/display-name
            text: (children) => (
              <Text mt={'20px'} textStyle={'xl'} fontWeight={'700'} textAlign={'center'}>
                {children}
              </Text>
            ),
            // eslint-disable-next-line react/display-name
            span: (children) => <chakra.span color={'point'}>{children}</chakra.span>,
          })}
          {isMobile ? (
            <>
              {t.rich('aboutFooterDes1', {
                // eslint-disable-next-line react/display-name
                text: (children) => (
                  <Text textStyle="md" textAlign={'center'} color="black" fontWeight="normal" w={'fit-content'} mt={'30px'}>
                    {children}
                  </Text>
                ),
                // eslint-disable-next-line react/display-name
                span: (children) => <chakra.span fontWeight={'700'}>{children}</chakra.span>,
                // eslint-disable-next-line react/display-name
                span2: (children) => <chakra.span fontWeight={'700'}>{children}</chakra.span>,
                // eslint-disable-next-line react/display-name
                span3: (children) => <chakra.span whiteSpace={'pre'}>{children}</chakra.span>,
                // eslint-disable-next-line react/display-name
                span4: (children) => <chakra.span fontWeight={'700'}>{children}</chakra.span>,
              })}
              {t.rich('aboutFooterDes2', {
                // eslint-disable-next-line react/display-name
                text: (children) => (
                  <Text textStyle="md" textAlign={'center'} color="black" fontWeight="normal" w={'fit-content'}>
                    {children}
                  </Text>
                ),
                // eslint-disable-next-line react/display-name
                span: (children) => <chakra.span fontWeight={'700'}>{children}</chakra.span>,
                // eslint-disable-next-line react/display-name
                span2: (children) => (
                  <chakra.span fontWeight={'700'} whiteSpace={'pre'}>
                    {children}
                  </chakra.span>
                ),
              })}
            </>
          ) : (
            <>
              {t.rich('aboutFooterDes1', {
                // eslint-disable-next-line react/display-name
                text: (children) => (
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
                    {children}
                  </Text>
                ),
                // eslint-disable-next-line react/display-name
                span: (children) => <chakra.span fontWeight={'700'}>{children}</chakra.span>,
                // eslint-disable-next-line react/display-name
                span2: (children) => <chakra.span fontWeight={'700'}>{children}</chakra.span>,
                // eslint-disable-next-line react/display-name
                span3: (children) => <chakra.span whiteSpace={'pre'}>{children}</chakra.span>,
                // eslint-disable-next-line react/display-name
                span4: (children) => <chakra.span fontWeight={'700'}>{children}</chakra.span>,
              })}
              {t.rich('aboutFooterDes2', {
                // eslint-disable-next-line react/display-name
                text: (children) => (
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
                    {children}
                  </Text>
                ),
                // eslint-disable-next-line react/display-name
                span: (children) => <chakra.span fontWeight={'700'}>{children}</chakra.span>,
                // eslint-disable-next-line react/display-name
                span2: (children) => (
                  <chakra.span fontWeight={'700'} whiteSpace={'pre'}>
                    {children}
                  </chakra.span>
                ),
              })}
            </>
          )}
        </Flex>
      </Flex>
    </>
  );
}

export default About;
