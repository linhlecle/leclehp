import { Badge, Flex } from '@chakra-ui/react';
import React from 'react';

type SliderItemProps = {
  datas?: JSX.Element[] | string[];
  startItem?: number;
  endItem?: number | undefined;
};

function SliderItem({ datas = [], startItem, endItem }: SliderItemProps) {
  return (
    <>
      {datas.slice(startItem, endItem).map((value, index) => {
        return (
          <Badge
            key={index}
            w={'max-content'}
            h={['50px', '52px', '58px']}
            px={'15px'}
            py={['5px', '5px', '0px']}
            mr={['10px', '10px', '20px']}
            bgColor={value === 'ANGULAR' ? 'point' : 'black'}
            borderRadius={'20px'}
          >
            <Flex textStyle={'xl'} color={'white'} fontWeight={'400'}>
              {`#${value}`}
            </Flex>
          </Badge>
        );
      })}
    </>
  );
}

export default SliderItem;
