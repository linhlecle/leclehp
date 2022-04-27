import { Box, Flex, Image } from '@chakra-ui/react';
import SectionLayout from 'components/@Layout/SectionLayout';
import { IDENTITY } from 'constants/identity';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';

function Section5() {
  const t = useTranslations('Home');
  const { locale } = useRouter();
  return (
    <SectionLayout>
      <Flex flexDir={'column'} align={'center'} justify={'center'} minW={'100%'} w={'100vw'} h={'100vh'} px={['16px', '120px', '95px']} bgColor={'gray.50'}>
        <Flex w={'100%'} h={'100%'} align={'center'} justify={'center'}>
          <Flex flexDir={'column'} justify={'center'} pt={'0px'}>
            <Flex align={'center'} justify={'center'} mt={['100px', '120px', '120px']}>
              <Box fontFamily={'montserrat'} fontWeight={'600'} textStyle={'3xl'}>
                {"LECLE'S IDENTITY"}
              </Box>
            </Flex>
            <Flex
              gap={['10px', '10px', '22px']}
              align={'center'}
              justify={['flex-start', 'center', 'center']}
              mt={['20px', '50px', '0']}
              mb={['97px']}
              w={'100vw'}
              overflow={'scroll'}
              css={{
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
              }}
            >
              {IDENTITY(t).map(({ title, text, src, textW, textH }, index) => {
                return (
                  <Flex key={index} flexDir={'column'} align={'center'} justify={'center'} minW={['225px', '180px']} minH={['390px', '130px']} ml={['10px']}>
                    <Flex align={'center'} justify={'center'} w={['180px', '180px', '296px']} h={'130px'}>
                      <Image src={src} alt={`strength${index}`} w={'50px'} h={'50px'} />
                    </Flex>
                    <Box mt={['20px', '20px', '36px']} textStyle={locale === 'ko' ? 'xl' : 'lg'} fontWeight={'700'} color={'black'} textAlign={'center'}>
                      {title}
                    </Box>
                    <Box mt={['15px', '15px', '30px']} textStyle={'md'} fontWeight={'400'} textAlign={'center'} w={textW} h={textH} wordBreak={'keep-all'}>
                      {text}
                    </Box>
                  </Flex>
                );
              })}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </SectionLayout>
  );
}

export default Section5;
