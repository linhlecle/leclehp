import { Text, Box, Flex, Image } from '@chakra-ui/react';
import useMedia from 'hooks/useMedia';
import React from 'react';
import { Table, TableMobile } from './_fragments/Table';

function Organization() {
  const { isMobile, isTablet } = useMedia();

  return (
    <Flex align={'center'} justify={'center'} w={'100%'} h={'100%'} bgColor={'gray.50'} pb={'130px'}>
      <Flex flexDir={'column'} pt={['30px', '50px', '60px']} px={['16px', '120px', '100px']} w={'100%'} maxW={['100%', '100%', 'calc(100% - 200px)']}>
        <Flex flexDir={'column'} align={'center'} justify={'center'}>
          <Text textStyle={'xl'} fontWeight={'700'} whiteSpace={'pre-line'} textAlign={'center'} w={['257px', '389px', '525px']} h={'104px'}>
            레클은 각 전문가들의 분업과 조화를 바탕으로 구성되어 있습니다.
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
