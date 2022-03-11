import { chakra } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import api from 'apis/Hr/GET';

type DataType = {
  id: number;
  category: string;
  num: number;
};

function Table() {
  const { data } = useQuery<any>(['hr'], api.getHr);

  return (
    <chakra.table
      mt={'100px'}
      borderTopWidth={'2px'}
      borderTopColor={'black'}
      borderTopStyle={'solid'}
      borderBottomWidth={'1px'}
      borderBottomColor={'gray.300'}
      borderBottomStyle={'solid'}
    >
      <chakra.thead borderBottomWidth={'1px'} borderBottomColor={'gray.300'} borderBottomStyle={'solid'}>
        <chakra.tr bgColor={'gray.100'}>
          {data?.map(({ category }: DataType, index: number, arr: []) => {
            return (
              <chakra.th
                key={index}
                w={`calc(100% / ${arr.length + 1})`}
                h={'60px'}
                textStyle={'sm'}
                wordBreak={'keep-all'}
                fontWeight={'700'}
                borderRightWidth={index === arr.length - 1 ? 'none' : '1px'}
                borderRightColor={index === arr.length - 1 ? 'none' : 'gray.300'}
                borderRightStyle={index === arr.length - 1 ? 'none' : 'solid'}
              >
                {category.toUpperCase()}
              </chakra.th>
            );
          })}
        </chakra.tr>
      </chakra.thead>
      <chakra.tbody>
        <chakra.tr>
          {data?.map(({ num }: DataType, index: number, arr: []) => {
            return (
              <chakra.th
                key={index}
                w={`calc(100% / ${arr.length + 1})`}
                h={'60px'}
                textStyle={'sm'}
                fontWeight={'400'}
                borderRightWidth={index === arr.length - 1 ? 'none' : '1px'}
                borderRightColor={index === arr.length - 1 ? 'none' : 'gray.300'}
                borderRightStyle={index === arr.length - 1 ? 'none' : 'solid'}
              >
                {num}명
              </chakra.th>
            );
          })}
        </chakra.tr>
      </chakra.tbody>
    </chakra.table>
  );
}

function TableMobile() {
  const { data } = useQuery<any>('hr', api.getHr);

  return (
    <chakra.table mt={'100px'} borderTopWidth={'2px'} borderTopColor={'black'} borderTopStyle={'solid'}>
      {data?.map(({ category, num }: DataType, index: number) => {
        return (
          <chakra.tr key={index} borderBottomWidth={'1px'} borderBottomColor={'gray.300'} borderBottomStyle={'solid'}>
            <chakra.td
              bgColor={'gray.100'}
              w={'150px'}
              h={'60px'}
              borderRightWidth={'1px'}
              borderRightColor={'gray.300'}
              borderRightStyle={'solid'}
              textAlign={'center'}
              textStyle={'sm'}
              fontWeight={'700'}
            >
              {category}
            </chakra.td>
            <chakra.td textAlign={'center'} textStyle={'sm'}>
              {num}명
            </chakra.td>
          </chakra.tr>
        );
      })}
    </chakra.table>
  );
}

export { Table, TableMobile };
