import { Box, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

type DATA = {
  category: string;
  num: number | string;
};
type SliderItemProps = {
  datas?: DATA[] | [];
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

function SliderItem({ datas = [] }: SliderItemProps) {
  const { locale } = useRouter();
  return (
    <Flex flexDir={'row'} align={'flex-end'} justify={'flex-start'}>
      {datas.map(({ category, num }: DATA, index: number) => {
        return (
          <Fragment key={index}>
            <Box minW={'max-content'} textStyle={'5xl'} color={'gray.800'} fontWeight={'700'} lineHeight={1.05}>
              {num}
              {locale === 'ko' ? '명' : ''}
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
              {locale === 'en' ? categoryMapLang[category].toUpperCase() : category.toUpperCase()}
            </Box>
          </Fragment>
        );
      })}
    </Flex>
  );
}

export default SliderItem;
