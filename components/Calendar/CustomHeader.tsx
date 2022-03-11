import { Box, Button, Flex } from '@chakra-ui/react';
import ArrowLeftIcon from 'components/@Icons/System/ArrowLeft';
import ArrowRightIcon from 'components/@Icons/System/ArrowRight';

type CustomHeaderProps = {
  date: Date;
  decreaseMonth: () => void;
  increaseMonth: () => void;
};

function CustomHeader({ date, decreaseMonth, increaseMonth }: CustomHeaderProps) {
  return (
    <Flex flexDir={'row'} align={'center'} justify={'center'} w={'100%'} h={'50px'}>
      <Button
        onClick={decreaseMonth}
        w={'24px'}
        h={'24px'}
        mr={'15px'}
        p={'0px'}
        bgColor={'transparent'}
        _hover={{ bgColor: 'transparent' }}
        _active={{ bgColor: 'transparent' }}
      >
        <ArrowLeftIcon w={'20px'} h={'20px'} />
      </Button>
      <Box mr={'15px'} textStyle={'md'} fontWeight={'700'}>{`${date.getFullYear()}년 ${date.getMonth() + 1}월`}</Box>
      <Button
        onClick={increaseMonth}
        w={'24px'}
        h={'24px'}
        p={'0px'}
        bgColor={'transparent'}
        _hover={{ bgColor: 'transparent' }}
        _active={{ bgColor: 'transparent' }}
      >
        <ArrowRightIcon w={'20px'} h={'20px'} />
      </Button>
    </Flex>
  );
}

export default CustomHeader;
