import { Box, Flex, InputGroup } from '@chakra-ui/react';
import CalendarBigIcon from 'components/@Icons/System/CalendarBig';
import { forwardRef } from 'react';

type CustomInputProps = {
  value?: Date;
  onClick?: () => void;
  prevent?: boolean;
};

function CustomInput({ value, onClick, prevent }: CustomInputProps, ref?: any) {
  return (
    <InputGroup
      border="2px"
      borderRight={'none'}
      borderLeft={'none'}
      borderTop={'none'}
      borderColor={'gray.300'}
      py={['11px', '12px', '15px']}
      cursor={prevent ? 'default' : 'pointer'}
      onClick={prevent ? undefined : onClick}
    >
      <Flex flexDir={'row'} align={'center'} justify={'space-between'} w={'100%'}>
        <Box textStyle={'md'} color={prevent ? 'gray.500' : 'gray.700'}>
          {prevent ? 'YYYY-MM-DD' : value}
        </Box>
        <Box textStyle={'md'} color={prevent ? 'gray.500' : 'gray.700'}>
          <CalendarBigIcon w={'24px'} h={'24px'} />
        </Box>
      </Flex>
    </InputGroup>
  );
}

export default forwardRef(CustomInput);
