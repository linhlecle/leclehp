import { useEffect, useRef, useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { Flex, Button, Image, Box, Text, AspectRatio, SimpleGrid, Link } from '@chakra-ui/react';
import SubHeader from 'components/SubHeader';
import { BUSINESS } from 'constants/business';

const Business = () => {
  const router = useRouter();
  const [activeType, setActiveType] = useState<number>(0);
  const cardRef = useRef<any>([]);

  const onClick = (idx: number) => {
    setActiveType(idx + 1);
  };

  useEffect(() => {
    const { type } = router.query;
    if (type) {
      window.scrollTo({
        top: cardRef.current[Number(type) - 1].offsetTop - 95,
        behavior: 'smooth',
      });
      setActiveType(Number(type));
    }
  }, [router]);

  return (
    <>
      <SubHeader title={'사업영역'} subtitle={'레클에서는 다양한 분야에서'} subtitle2={'전문적인 솔루션을 제공합니다.'} />
      <Flex align={'center'} justify={'center'} w={'100%'} h={'100%'}>
        <Flex flexDir={'column'} px={['16px', '120px', '100px']} w={'100%'} maxW={['100%', '100%', 'calc(100% - 200px)']}>
          <SimpleGrid columns={[1, 2, 2, 3]} spacing={['20px', '20px', '18px']} mt={['40px', '40px', '70px']}>
            {BUSINESS.map((d: any, idx: number) => {
              const isActive = activeType === idx + 1;
              return (
                <AspectRatio
                  key={idx}
                  ratio={0.95}
                  borderRadius="20px"
                  onClick={() => onClick(idx)}
                  overflow="hidden"
                  isolation={'isolate'}
                  cursor={'pointer'}
                  ref={(el) => (cardRef.current[idx] = el)}
                >
                  <>
                    <Image src={d.image} alt={'business image'} objectFit="cover" loading="lazy" />
                    <Box h="100%" backdropFilter={isActive ? 'blur(10px)' : 'blur(0px)'} transition="0.2s">
                      <Flex h="100%" w="100%" alignItems="flex-start" justifyContent="flex-start" px="30px" py="35px" direction="column">
                        <Text
                          whiteSpace="pre-line"
                          textStyle="sm"
                          color="white"
                          fontWeight="bold"
                          mb="5px"
                          position="absolute"
                          visibility={isActive ? 'visible' : 'hidden'}
                          opacity={isActive ? '1' : '0'}
                          transition="0.2s"
                          fontFamily={'montserrat'}
                        >
                          {d.type}
                        </Text>
                        <Text whiteSpace="pre-line" textStyle="lg" color="white" fontWeight="bold" mt={isActive ? '25px' : '0px'} transition="0.2s">
                          {d.title}
                        </Text>
                        <Image
                          src="/business/icon.png"
                          alt={'business icon'}
                          loading="lazy"
                          w="24px"
                          h="24px"
                          mt="20px"
                          visibility={isActive ? 'hidden' : 'visible'}
                          opacity={isActive ? '0' : '1'}
                          transition="0.2s"
                        />
                        <Text
                          whiteSpace="pre-line"
                          textStyle="md"
                          color="white"
                          mt="-35px"
                          visibility={isActive ? 'visible' : 'hidden'}
                          opacity={isActive ? '1' : '0'}
                          transition="0.2s"
                        >
                          {d.content}
                        </Text>
                      </Flex>
                    </Box>
                  </>
                </AspectRatio>
              );
            })}
            <AspectRatio bg="black" ratio={0.95} borderRadius="20px">
              <Flex h="100%" w="100%" direction="column">
                <Text textStyle="lg" textAlign="center" color="white" fontWeight="bold">
                  더 자세한 상담이
                  <br />
                  필요하신가요?
                </Text>
                <NextLink href="/contact" passHref>
                  <Link>
                    <Button as="a" colorScheme="darkgray" mt="20px">
                      개발문의하기
                    </Button>
                  </Link>
                </NextLink>
              </Flex>
            </AspectRatio>
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
};

export default Business;
