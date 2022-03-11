import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';
import { CheckedOffIcon, CheckedOnIcon } from 'components/@Icons/System';
import { BUDGET } from 'constants/budget';
import SliderItem from './SliderItem';
import SliderMark from './SliderMark';

type RangeSliderProps = {
  onClick: (index: number) => void;
  onToggle: () => void;
  checked: boolean;
  budget: string | 0;
  setBudget: (budget: string) => void;
  prevent?: boolean;
  active: number;
};

function RangeSlider({ onClick, onToggle, checked, budget, prevent, active }: RangeSliderProps) {
  return (
    <Flex flexDir={'column'} mt={'20px'}>
      <Flex flexDir={'row'} align={'center'} justify={'space-between'}>
        <Flex align={'center'}>
          {checked ? (
            <Text textStyle={'md'} color={prevent ? 'gray.500' : 'gray.700'}>
              예산 미정
            </Text>
          ) : (
            <>
              <Text mr={'10px'} textStyle={'md'}>
                {budget}
              </Text>
            </>
          )}
        </Flex>
        <Flex align={'center'}>
          <Box mr={'5px'} onClick={prevent ? undefined : onToggle}>
            {checked ? (
              <CheckedOnIcon
                marginTop={['4px', '4px', '2px']}
                w={['24px', '22.8px', '22.8px']}
                h={['24px', '22.8px', '22.8px']}
                color={prevent ? 'gray.500' : 'black'}
              />
            ) : (
              <CheckedOffIcon marginTop={['4px', '4px', '2px']} w={['24px', '22.8px', '22.8px']} h={['24px', '22.8px', '22.8px']} />
            )}
          </Box>
          <Text textStyle={'md'} color={prevent ? 'gray.500' : 'black'}>
            예산 미정
          </Text>
        </Flex>
      </Flex>
      <Flex flexDir={'column'} justify={'center'} w={'100%'} h={'100%'} mt={['12px', '25px', '25px']}>
        <Flex w={'100%'} border={'none'} bgColor={'gray.300'} h={'10px'} borderRadius={'5px'}>
          {!prevent && !checked && (
            <Flex w={'100%'}>
              {BUDGET.map((_, index) => {
                return <SliderItem key={index} active={active === index} onClick={() => onClick(index)} />;
              })}
            </Flex>
          )}
        </Flex>
      </Flex>
      <SliderMark checked={checked} prevent={prevent} />
    </Flex>
  );
}

export default RangeSlider;
