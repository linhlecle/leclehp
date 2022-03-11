import type { ButtonProps } from '@chakra-ui/react';
import { Text, Flex } from '@chakra-ui/react';

type MarginProps = string;
type ButtonGroupProps = {
  title: string;
  mt?: MarginProps[] | string;
  children: ButtonProps[] | JSX.Element;
};

function ButtonGroup({ title, mt = '60px', children }: ButtonGroupProps) {
  return (
    <Flex flexDir={'column'} mt={mt}>
      <Text as="h3" textStyle={'md'} fontWeight={'700'}>
        {title}
      </Text>
      {children}
    </Flex>
  );
}

export default ButtonGroup;
