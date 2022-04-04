import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import useMedia from 'hooks/useMedia';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

function History() {
  const { locale } = useRouter();
  const t = useTranslations('AboutUs');
  const { isMobile, isTablet } = useMedia();
  const [isClose, setIsClose] = useState<boolean>(true);
  const onClickMore = () => {
    setIsClose(false);
  };

  return (
    <Flex align={'center'} justify={'center'} w={'100%'} h={'100%'} bgColor={'gray.50'} pb={'130px'}>
      <Flex flexDir={'column'} pt={['30px', '50px', '60px']} px={['16px', '120px', '100px']} w={'100%'} maxW={['100%', '100%', 'calc(100% - 200px)']}>
        <Flex flexDir={'column'} align={'center'} justify={'center'}>
          <Text textStyle={'xl'} fontWeight={'700'} whiteSpace={'pre-line'} textAlign={'center'} h={'104px'}>
            {isMobile ? t('historyMobile') : t('history')}
          </Text>
          {locale === 'ko' ? (
            isClose ? (
              <Box mt={'90px'}>
                {isMobile ? (
                  <Image src={'/images/company/history1_mobile.svg'} alt={'history image'} w={'100%'} h={'100%'} objectFit={'fill'} />
                ) : isTablet ? (
                  <Image src={'/images/company/history1_tablet.svg'} alt={'history image'} w={'100%'} h={'100%'} objectFit={'fill'} />
                ) : (
                  <Image src={'/images/company/history1_pc.svg'} alt={'history image'} w={'100%'} h={'100%'} objectFit={'fill'} />
                )}
              </Box>
            ) : (
              <Box mt={'90px'}>
                {isMobile ? (
                  <Image src={'/images/company/history2_mobile.svg'} alt={'history image'} w={'100%'} h={'100%'} objectFit={'fill'} />
                ) : isTablet ? (
                  <Image src={'/images/company/history2_tablet.svg'} alt={'history image'} w={'100%'} h={'100%'} objectFit={'fill'} />
                ) : (
                  <Image src={'/images/company/history2_pc.svg'} alt={'history image'} w={'100%'} h={'100%'} objectFit={'fill'} />
                )}
              </Box>
            )
          ) : isClose ? (
            <Box mt={'90px'}>
              {isMobile ? (
                <Image src={'/images/company/Eng_history1_mobile.svg'} alt={'history image'} w={'100%'} h={'100%'} objectFit={'fill'} />
              ) : isTablet ? (
                <Image src={'/images/company/Eng_history1_tab.svg'} alt={'history image'} w={'100%'} h={'100%'} objectFit={'fill'} />
              ) : (
                <Image src={'/images/company/Eng_history1_pc.svg'} alt={'history image'} w={'100%'} h={'100%'} objectFit={'fill'} />
              )}
            </Box>
          ) : (
            <Box mt={'90px'}>
              {isMobile ? (
                <Image src={'/images/company/Eng_history2_mobile.svg'} alt={'history image'} w={'100%'} h={'100%'} objectFit={'fill'} />
              ) : isTablet ? (
                <Image src={'/images/company/Eng_history2_tab.svg'} alt={'history image'} w={'100%'} h={'100%'} objectFit={'fill'} />
              ) : (
                <Image src={'/images/company/Eng_history2_pc.svg'} alt={'history image'} w={'100%'} h={'100%'} objectFit={'fill'} />
              )}
            </Box>
          )}
          <Button
            borderRadius={'10px'}
            mt={['30px', '25px', '40px']}
            px={'21px'}
            py={'11px'}
            w={['100%', '250px', '270px']}
            maxW={['343px']}
            h={'49px'}
            bgColor={'gray.300'}
            color={'black'}
            _hover={{ bgColor: 'gray.500' }}
            _active={{ bgColor: 'gray.300' }}
            onClick={onClickMore}
            visibility={isClose ? 'visible' : 'hidden'}
            height={isClose ? '100%' : '0px'}
          >
            <Box fontWeight={'700'} textStyle={'md'}>
              {t('viewMore')}
            </Box>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default History;
