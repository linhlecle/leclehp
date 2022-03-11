import { Flex, Box } from '@chakra-ui/react';

type SubHeaderProps = {
  title: string;
  subtitle?: string;
  subtitle2?: string;
};

function SubHeader({ title, subtitle, subtitle2 }: SubHeaderProps) {
  return (
    <Flex align={'center'} justify={'center'} w={'100%'} h={'100%'} pt={'80px'} bgColor={'gray.50'}>
      <Flex flexDir={'column'} pt={['30px', '50px', '60px']} px={['16px', '120px', '100px']} w={'100%'} maxW={['100%', '100%', 'calc(100% - 200px)']}>
        <Box as="h2" textStyle={'xl'} fontWeight={'700'}>
          {title}
        </Box>
        <Box textStyle={'md'}>{subtitle}</Box>
        <Box textStyle={'md'}>{subtitle2}</Box>
      </Flex>
    </Flex>
  );
}

export default SubHeader;
