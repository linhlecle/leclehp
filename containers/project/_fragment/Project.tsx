import { Flex, Image, Box, Text, AspectRatio, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Button } from '@chakra-ui/react';
import useMedia from 'hooks/useMedia';
import BehindStory from './BehindStory';
import ProjectDetail from './ProjectDetail';

type ProjectProps = {
  datas: any;
  onClickMore: () => void;
  hasNextPage?: boolean;
  status: 'idle' | 'success' | 'loading' | 'error';
};

type ProjectDataProps = {
  category: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  projectdetailSet: any[];
  behindstorySet: any[];
};

const enToKo = (category: string): string | undefined => {
  if (category === 'product') return '프로덕트';
  if (category === 'business') return '비즈니스';
  if (category === 'blockchain') return '블록체인';
  if (category === 'outsourcing') return '아웃소싱';
};

function Project({ status, datas, onClickMore, hasNextPage }: ProjectProps) {
  const DATA = status === 'success' ? datas.pages.map((page: any) => page.results).flatMap((v: any) => v) : [];
  const { isPc } = useMedia();

  return (
    <Flex align={'center'} justify={'center'} w={'100%'} h={'100%'} bgColor={'gray.50'}>
      <Flex flexDir={'column'} px={['16px', '120px', '100px']} w={'100%'} maxW={['100%', '100%', 'calc(100% - 200px)']}>
        <Accordion allowMultiple>
          {status === 'loading' && <div />}
          {status === 'error' && <div />}
          {status === 'success' &&
            DATA.map(({ category, title, subtitle, thumbnail, projectdetailSet, behindstorySet }: ProjectDataProps, index: number) => {
              return (
                <AccordionItem key={index} border="0px" w={'100%'}>
                  <Flex justifyContent="space-between" direction={['column', 'row', 'row']} mt={['40px', '50px', '60px']}>
                    <AspectRatio w={['100%', 'calc((100% - 25px) / 2)', 'calc((100% - 50px) / 2)']} ratio={1.6} borderRadius="20px" overflow="hidden">
                      <Image src={thumbnail} objectFit="cover" loading="lazy" alt={thumbnail} />
                    </AspectRatio>
                    <Flex
                      w={['100%', 'calc((100% - 25px) / 2)', 'calc((100% - 50px) / 2)']}
                      px={['20px', '0px', '0px']}
                      pt={['20px', '0px', '0px']}
                      pb={'0px'}
                      direction="column"
                    >
                      <Flex mb="10px" alignItems="center">
                        <Box w="10px" h="3px" bg="point" mr="10px" />
                        <Text textStyle="sm" fontWeight={'700'}>
                          {enToKo(category)}
                        </Text>
                      </Flex>
                      <Text textStyle={'lg'} fontWeight="bold">
                        {title}
                      </Text>
                      <Text textStyle={'md'}>{subtitle}</Text>
                      <Text textStyle="md" color={'gray.700'} mt="30px" noOfLines={isPc ? 3 : 2}>
                        {projectdetailSet[0]?.content}
                      </Text>
                      <AccordionButton
                        mt="auto"
                        p="0px"
                        w={'100%'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        h={['32px', '32px', '40px']}
                        _focus={{ outline: 'none' }}
                        _active={{ bgColor: 'none' }}
                        _hover={{ bgColor: 'none' }}
                      >
                        <AccordionIcon w={'24px'} h={'24px'} cursor={'pointer'} />
                      </AccordionButton>
                    </Flex>
                  </Flex>
                  <AccordionPanel
                    mt={['20px', '30px', '40px']}
                    py={['20px', '40px', '40px']}
                    borderTopWidth="1px"
                    borderBottomWidth="1px"
                    borderColor="gray.300"
                  >
                    <Flex flexDir={'column'}>
                      <Box textStyle={'md'} fontWeight={'700'} color={'black'}>
                        {title}
                      </Box>
                      <Box mt={'0px'} textStyle={'lg'} fontWeight={'400'} color={'black'}>
                        {subtitle}
                      </Box>
                    </Flex>
                    <Flex
                      flexDir={'column'}
                      border={'none'}
                      borderBottom={behindstorySet?.length > 0 ? '1px' : 'none'}
                      borderBottomStyle={'solid'}
                      borderBottomColor={'gray.300'}
                      gap={['40px', '30px', '40px']}
                      pb={behindstorySet?.length > 0 ? '30px' : '0px'}
                      mt={['20px', '20px', '30px']}
                    >
                      {projectdetailSet.map(({ image, content }: any, index: number) => (
                        <ProjectDetail key={index} image={image} content={content} />
                      ))}
                    </Flex>
                    {behindstorySet?.length > 0 && (
                      <>
                        <Box mt={'30px'} textStyle={'lg'} fontWeight={'700'} color={'black'}>
                          레클 비하인드 스토리
                        </Box>
                        <Flex flexDir={'column'} w={'100%'} gap={['30px', '40px', '40px']} mt={'20px'}>
                          {behindstorySet.map(({ content, participator }: any, index: number) => (
                            <BehindStory key={index} content={content} participator={participator} />
                          ))}
                        </Flex>
                      </>
                    )}
                  </AccordionPanel>
                </AccordionItem>
              );
            })}
        </Accordion>
        <Flex w={'100%'} align={'center'} justify={'center'} mt={['30px', '50px', '100px']}>
          <Button
            borderRadius={'10px'}
            px={'21px'}
            py={'11px'}
            w={['100%', '250px', '270px']}
            h={'49px'}
            bgColor={'gray.300'}
            color={'black'}
            _hover={{ bgColor: 'gray.500' }}
            _active={{ bgColor: 'gray.300' }}
            display={hasNextPage ? 'block' : 'none'}
            onClick={onClickMore}
          >
            <Box fontWeight={'700'} textStyle={'md'}>
              더보기
            </Box>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Project;
