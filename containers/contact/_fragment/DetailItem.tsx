import { Textarea } from '@chakra-ui/react';
import React, { forwardRef } from 'react';

type DetailItemProps = {
  value: string;
  onChange: (e: any) => void;
};

function DetailItem({ value, onChange }: DetailItemProps, ref: any) {
  return (
    <Textarea
      ref={ref}
      value={value}
      onChange={onChange}
      placeholder="문의사항 및 프로젝트 내용을 상세하게 입력해주세요."
      _placeholder={{ color: 'gray.500' }}
      resize={'none'}
      border={'2px'}
      borderColor={'gray.300'}
      borderRadius={'none'}
      borderLeft={'none'}
      borderRight={'none'}
      focusBorderColor={'none'}
      mt={'20px'}
      px={'0'}
      py={'10px'}
      h={'270px'}
      textStyle={'md'}
      color={'gray.700'}
    />
  );
}

export default forwardRef(DetailItem);
