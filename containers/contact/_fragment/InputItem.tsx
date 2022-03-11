import { Input } from '@chakra-ui/react';

type InputItemProps = {
  placeholder?: string;
  name: string;
  value: string;
  onChange: (e: any) => void;
};

function InputItem({ placeholder, name, value, onChange }: InputItemProps) {
  return (
    <Input
      variant={'flushed'}
      placeholder={placeholder || name}
      name={name}
      value={value}
      onChange={onChange}
      _placeholder={{ color: 'gray.500', textStyle: 'md' }}
      mt={['20px', '20px', '25px']}
      border={'2px'}
      borderTop={'none'}
      borderLeft={'none'}
      borderRight={'none'}
      borderBottomColor={'gray.300'}
    />
  );
}

export default InputItem;
