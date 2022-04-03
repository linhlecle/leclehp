import { Textarea } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import React, { forwardRef } from 'react';

type DetailItemProps = {
  value: string;
  onChange: (e: any) => void;
};

function DetailItem({ value, onChange }: DetailItemProps, ref: any) {
  const t = useTranslations('Contact');
  return (
    <Textarea
      ref={ref}
      value={value}
      onChange={onChange}
      placeholder={t('q4Input')}
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
