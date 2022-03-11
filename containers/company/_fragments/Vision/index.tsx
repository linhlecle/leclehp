import { AspectRatio, Box, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react';
import useMedia from 'hooks/useMedia';
import React from 'react';
import { VISION, VISION2 } from 'constants/vision';

function Vision() {
  const { isMobile } = useMedia();
  return (
    <Flex align={'center'} justify={'center'} w={'100%'} h={'100%'} bgColor={'gray.50'} pb={'130px'}>
      <Flex flexDir={'column'} pt={['30px', '50px', '60px']} px={['16px', '120px', '100px']} w={'100%'} maxW={['100%', '100%', 'calc(100% - 200px)']}>
        <AspectRatio ratio={[343 / 450, 750 / 303, 1038 / 393]} borderRadius={'20px'} overflow={'hidden'} boxShadow={'0px 0px 10px rgba(26, 26, 26, 0.1)'}>
          <>
            {isMobile ? (
              <>
                <Image src={VISION[1].image} alt="비전" objectFit="contain" />
                <Flex flexDir={'column'} justify={'center'} align={'center'} h={'100%'}>
                  <Text textAlign={'center'} fontFamily={'montserrat'} fontWeight={'600'} textStyle={'sm'} color={'white'}>
                    {VISION[1].title}
                  </Text>
                  <Text mt={'10px'} whiteSpace={'pre-line'} textStyle={'xl'} color={'white'} fontWeight={'700'} textAlign={'center'}>
                    {VISION[1].content}
                  </Text>
                </Flex>
              </>
            ) : (
              <>
                <Image src={VISION[0].image} alt="비전" objectFit="contain" />
                <Flex flexDir={'column'} justify={'center'} align={'center'} h={'100%'}>
                  <Text textAlign={'center'} fontFamily={'montserrat'} fontWeight={'600'} textStyle={'sm'} color={'white'}>
                    {VISION[0].title}
                  </Text>
                  <Text mt={'10px'} whiteSpace={'pre-line'} textStyle={'xl'} color={'white'} fontWeight={'700'} textAlign={'center'}>
                    {VISION[0].content}
                  </Text>
                </Flex>
              </>
            )}
          </>
        </AspectRatio>
        <SimpleGrid columns={[1, 2, 3]} spacing={'24px'} mt={'24px'}>
          <>
            {VISION2.map(({ title, content, image }, index) => {
              return (
                <AspectRatio key={index} ratio={330 / 400} borderRadius={'20px'} overflow={'hidden'} boxShadow={'0px 0px 10px rgba(26, 26, 26, 0.1)'}>
                  <>
                    <Image src={image} alt="비전" />
                    <Box bgGradient={'linear(179.6deg, #FFFFFF 30.9%, rgba(255, 255, 255, 0) 99.68%)'}>
                      <Flex flexDir={'column'} align={'flex-start'} justify={'flex-start'} w={'100%'} h={'100%'} px={['30px', '30px', '40px']} py={'30px'}>
                        <Text fontFamily={'montserrat'} fontWeight={'400'} textStyle={'sm'} color={'black'} w={'100%'}>
                          {title}
                        </Text>
                        <Text mt={'10px'} whiteSpace={'pre-line'} textStyle={'lg2'} color={'black'} fontWeight={'700'} wordBreak={'keep-all'}>
                          {content}
                        </Text>
                      </Flex>
                    </Box>
                  </>
                </AspectRatio>
              );
            })}
          </>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}

export default Vision;
