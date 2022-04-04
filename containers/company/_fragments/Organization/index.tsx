import { Text, Box, Flex, Image } from '@chakra-ui/react';
import useMedia from 'hooks/useMedia';
import { useTranslations } from 'next-intl';
import React from 'react';
import { Table, TableMobile } from './_fragments/Table';

function Organization() {
  const t = useTranslations('AboutUs');
  const { isMobile, isTablet } = useMedia();

  return (
    <Flex align={'center'} justify={'center'} w={'100%'} h={'100%'} bgColor={'gray.50'} pb={'130px'}>
      <Flex flexDir={'column'} pt={['30px', '50px', '60px']} px={['16px', '120px', '100px']} w={'100%'} maxW={['100%', '100%', 'calc(100% - 200px)']}>
        <Flex flexDir={'column'} align={'center'} justify={'center'}>
          <Text textStyle={'xl'} fontWeight={'700'} whiteSpace={'pre-line'} textAlign={'center'} w={['257px', '389px', '525px']} h={'104px'}>
            {t('orgTitle')}
          </Text>
          <Box mt={'90px'}>
            {isMobile ? (
              <Image src={'/images/company/organization_mobile.svg'} alt={'organization image'} w={'100%'} h={'100%'} objectFit={'fill'} />
            ) : isTablet ? (
              <Image src={'/images/company/organization_tablet.svg'} alt={'organization image'} w={'100%'} h={'100%'} />
            ) : (
              <Image src={'/images/company/organization_pc.svg'} alt={'organization image'} w={'100%'} h={'100%'} />
            )}
          </Box>
        </Flex>
        {isMobile ? <TableMobile /> : <Table />}
      </Flex>
    </Flex>
  );
}

export default Organization;
