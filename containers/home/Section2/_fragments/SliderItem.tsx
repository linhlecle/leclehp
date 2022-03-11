import { Box, Flex } from '@chakra-ui/react';
import { Fragment } from 'react';

type DATA = {
  category: string;
  num: number | string;
};
type SliderItemProps = {
  datas?: DATA[] | [];
};

function SliderItem({ datas = [] }: SliderItemProps) {
  return (
    <Flex flexDir={'row'} align={'flex-end'} justify={'flex-start'}>
      {datas.map(({ category, num }: DATA, index: number) => {
        return (
          <Fragment key={index}>
            <Box minW={'max-content'} textStyle={'5xl'} color={'gray.800'} fontWeight={'700'} lineHeight={1.05}>
              {num}명
            </Box>
            <Box
              w={'200px'}
              h={'42px'}
              textStyle={'lg'}
              fontWeight={'700'}
              color={'gray.800'}
              transform={'rotate(270deg) translate(0%, 100%)'}
              transformOrigin={'bottom left'}
              mr={'-50px'}
            >
              {category.toUpperCase()}
            </Box>
          </Fragment>
        );
      })}
    </Flex>
  );
}

export default SliderItem;
