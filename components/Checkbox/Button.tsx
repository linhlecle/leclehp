import { Button, Text } from '@chakra-ui/react';

type ButtonItemProps = {
  value: string;
  active: boolean;
  onClick: () => void;
  prevent?: boolean;
};

function ButtonItem({ value, active, onClick, prevent }: ButtonItemProps) {
  return (
    <Button
      variant={'outline'}
      p={'10px 15px'}
      bgColor={prevent ? 'gray.300' : active ? 'point' : 'white'}
      color={prevent ? 'gray.500' : active ? 'white' : 'gray.700'}
      border={'1px'}
      borderColor={prevent ? 'transparent' : active ? 'white' : 'gray.700'}
      borderRadius={'25px'}
      _hover={{
        bgColor: 'none',
      }}
      mt={'10px'}
      mr={'10px'}
      onClick={prevent ? undefined : onClick}
      cursor={prevent ? 'default' : 'cursor'}
    >
      <Text textStyle={'sm'} fontWeight={'700'}>
        {value}
      </Text>
    </Button>
  );
}

export default ButtonItem;
