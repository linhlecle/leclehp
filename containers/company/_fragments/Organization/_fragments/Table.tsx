import { chakra } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import api from 'apis/Hr/GET';
import { useRouter } from 'next/router';

type DataType = {
  id: number;
  category: string;
  num: number;
};

const categoryMapLang: any = {
  개발자: 'Developer',
  디자인: 'Design',
  '클라우드 엔지니어': 'Cloud Engineer',
  PM: 'PM',
  기획: 'UX',
  QA: 'QA',
  기타: 'Others',
  TOTAL: 'TOTAL',
};

function Table() {
  const { locale } = useRouter();
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
                {locale === 'en' ? categoryMapLang[category].toUpperCase() : category.toUpperCase()}
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
                {num}
                {locale === 'ko' ? '명' : ''}
              </chakra.th>
            );
          })}
        </chakra.tr>
      </chakra.tbody>
    </chakra.table>
  );
}

function TableMobile() {
  const { locale } = useRouter();
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
              {locale === 'en' ? categoryMapLang[category] : category}
            </chakra.td>
            <chakra.td textAlign={'center'} textStyle={'sm'}>
              {num}
              {locale === 'ko' ? '명' : ''}
            </chakra.td>
          </chakra.tr>
        );
      })}
    </chakra.table>
  );
}

export { Table, TableMobile };
