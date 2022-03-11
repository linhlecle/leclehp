import { Badge, Flex } from '@chakra-ui/react';
import useTab from 'hooks/useTab';
import { useRouter } from 'next/router';

type Tab = {
  name: string;
  value: string;
};

type TabProps = {
  tabList: Tab[];
  tab: string;
  setTab: (value: string) => void;
};

function Tab({ tabList, setTab, tab }: TabProps) {
  const { onClickTabButton } = useTab(setTab);
  const router = useRouter();

  return (
    <Flex align={'center'} justify={'center'} w={'100%'} h={'100%'} bg={'gray.50'}>
      <Flex
        flexDir={'row'}
        align={'center'}
        justify={[router.pathname === '/company' ? 'center' : 'flex-start', 'center', 'center']}
        pt={['40px', '40px', '50px']}
        px={['16px', '120px', '100px']}
        w={'100%'}
        maxW={['100%', '100%', 'calc(100% - 200px)']}
        gap={'10px'}
        overflow={'auto'}
        css={{
          '&::-webkit-scrollbar': {
            width: '0px',
          },
        }}
      >
        {tabList.map((v, index) => {
          const isActive = tab === v.value;
          return (
            <Badge
              key={index}
              onClick={() => onClickTabButton(v.value)}
              border={'none'}
              borderRadius={'30px'}
              px={'12px'}
              py={'10px'}
              bgColor={isActive ? 'blue' : 'gray.50'}
              color={isActive ? 'white' : 'black'}
              textStyle={'md'}
              fontWeight={'700'}
              cursor={isActive ? 'default' : 'pointer'}
            >
              {v.name}
            </Badge>
          );
        })}
      </Flex>
    </Flex>
  );
}

export default Tab;
