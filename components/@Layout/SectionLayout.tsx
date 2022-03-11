import { Flex } from '@chakra-ui/react';

type SectionLayoutProps = {
  children?: JSX.Element;
};

function SectionLayout({ children }: SectionLayoutProps) {
  return (
    <Flex flexDir={'column'} align={'center'} justify={'center'} minW={'100vw'} w={'100%'} h={'100vh'} px={['16px', '120px', '95px']}>
      {children}
    </Flex>
  );
}

export default SectionLayout;
