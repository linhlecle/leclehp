import React from 'react';
import { Box, Flex, chakra, Select } from '@chakra-ui/react';
import { FAMILY_SITE } from 'constants/family-site';
import ArrowDownRegularIcon from 'components/@Icons/System/ArrowDownRegular';
import useMedia from 'hooks/useMedia';
import { useRouter } from 'next/router';

function ServiceSite() {
  const { locale } = useRouter();
  const { isMobile } = useMedia();

  const handleServiceSite = (src: string): void => {
    if (src === '') return;
    isMobile && window.location.assign(src);
    !isMobile && window.open(`${src}`, '_blank', 'noopener');
  };

  return (
    <Flex w={'100%'} h={'100%'} minH={['318px', '0px', '0px']} align={'center'} justify={'center'}>
      <Flex
        flexDir={'column'}
        align={'center'}
        justify={'center'}
        w={'100%'}
        h={'100%'}
        mx={['16px', '120px', '95px']}
        borderBottom={'1px solid'}
        borderColor={'gray.700'}
      >
        <Box textStyle={'2md'} fontFamily={'montserrat'} fontWeight={'700'} color={'point'}>
          LECLE PRODUCT
        </Box>
        {locale === 'ko' ? (
          <>
            <Box textStyle={'lg'} color={'white'} mt={'10px'}>
              다양한 <chakra.span fontWeight={'700'}>블록체인 서비스</chakra.span>와
            </Box>
            {isMobile ? (
              <>
                <Box textStyle={'lg'} color={'white'}>
                  <chakra.span fontWeight={'700'}>IT 인재 양성 기관</chakra.span>을
                </Box>
                <Box textStyle={'lg'} color={'white'}>
                  운영 중입니다.
                </Box>
              </>
            ) : (
              <Box textStyle={'lg'} color={'white'}>
                <chakra.span fontWeight={'700'}>IT 인재 양성 기관</chakra.span>을 운영 중입니다.
              </Box>
            )}
          </>
        ) : (
          <>
            <Box textStyle={'lg'} color={'white'} mt={'10px'}>
              We operate various <chakra.span fontWeight={'700'}>blockchain-related services</chakra.span>
            </Box>
            <Box textStyle={'lg'} color={'white'}>
              and facilitate an <chakra.span fontWeight={'700'}>IT expertise training academy.</chakra.span>
            </Box>
          </>
        )}
        <Select
          variant={'outline'}
          w={'207px'}
          h={'50px'}
          mt={['35px', '30px', '30px']}
          placeholder={'Service Site'}
          borderRadius={'30px'}
          borderColor={'gray.700'}
          color={'gray.700'}
          icon={<ArrowDownRegularIcon />}
          onChange={(e) => handleServiceSite(e.target.value)}
          _focus={{ outline: 'none' }}
          _active={{ bgColor: 'none' }}
          _hover={{ bgColor: 'none' }}
        >
          {FAMILY_SITE.map(({ text, src }, index) => {
            return (
              <option key={index} value={src}>
                {text}
              </option>
            );
          })}
        </Select>
      </Flex>
    </Flex>
  );
}

export default ServiceSite;
