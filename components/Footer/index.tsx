import NextLink from 'next/link';
import { Box, Container, Flex, Image, Link } from '@chakra-ui/react';

function Footer() {
  return (
    <Container
      as={'footer'}
      w={'100vw'}
      minW={'100vw'}
      h={['auto', '382px', '454px']}
      minH={['auto', '382px', '454px']}
      bg={'primary.500'}
      px={['16px', '120px', '95px']}
      py={['60px', '40px', '42px']}
    >
      <Flex flexDir={'column'} w={'100%'} h={'auto'} justify={'center'}>
        <Flex flexDir={'column'} position={'relative'}>
          <Box textStyle={'lg'} fontWeight={'700'} color={'point'}>
            LECLE
          </Box>
          <Box textStyle={'sm'} color={'white'} mt={['8.36px', '5px', '5px']}>
            ⓒ LECLE All Right Reserved.
          </Box>
          <Flex flexDir={'row'} position={'absolute'} bottom={0} right={0}>
            <NextLink href={'https://www.facebook.com/LecleVietnam'} passHref>
              <Link target="_blank">
                <Image src={'/icons/social/facebook.png'} alt={'LECLE facebook'} mr={'20px'} w={'24px'} h={'24px'} />
              </Link>
            </NextLink>
            <NextLink href={'https://lecle.vn/'} passHref>
              <Link target="_blank">
                <Image src={'/icons/social/global.png'} alt={'LECLE vietnam'} w={'24px'} h={'24px'} />
              </Link>
            </NextLink>
          </Flex>
        </Flex>

        <Flex flexDir={['column', 'row', 'row']} gap={['0px', '10px', '20px']}>
          <Flex flexDir={'column'} w={['100%', '50%', '50%']}>
            <Flex flexDir={'column'} mt={['40.48px', '30px', '40px']}>
              <Box textStyle={'sm'} color={'white'} fontWeight={'700'}>
                SEOUL, KOREA
              </Box>
              <Box textStyle={'sm'} color={'gray.500'} mt={['5px', '3px', '5px']}>
                16F HiteJinro, 14 Seochojungang-ro, Seocho-gu, Seoul, Korea
              </Box>
            </Flex>
            <Flex flexDir={'column'} mt={['20px', '20px', '25px']}>
              <Box textStyle={'sm'} color={'white'} fontWeight={'700'}>
                VIETNAM
              </Box>
              <Box textStyle={'sm'} color={'gray.500'} mt={['5px', '3px', '5px']}>
                81 Cách Mạng Tháng Tám, Phường Bến Thành, Quận 1, Hồ Chí Minh 700000
              </Box>
            </Flex>
            <Flex flexDir={'column'} mt={['20px', '20px', '25px']}>
              <Box textStyle={'sm'} color={'white'} fontWeight={'700'}>
                SINGAPORE
              </Box>
              <Box textStyle={'sm'} color={'gray.500'} mt={['5px', '3px', '5px']}>
                21 Heng Mui Keng Terrace, Singapore 119613
              </Box>
            </Flex>
            <Flex flexDir={'column'} mt={['20px', '20px', '25px']}>
              <Box textStyle={'sm'} color={'white'} fontWeight={'700'}>
                AUSTIN, USA
              </Box>
              <Box textStyle={'sm'} color={'gray.500'} mt={['5px', '3px', '5px']}>
                815-A Brazos St. #435 Austin, TX78701
              </Box>
            </Flex>
          </Flex>

          <Flex flexDir={'column'} w={['100%', '50%', '50%']}>
            <Flex flexDir={'column'} w={['100%', 'fit-content', 'fit-content']} alignSelf={['normal', 'flex-end', 'center']}>
              <Flex flexDir={'column'} mt={['20px', '40px', '40px']}>
                <Box textStyle={'sm'} color={'white'} fontWeight={'700'}>
                  CONTACT US
                </Box>
                <Box textStyle={'sm'} color={'gray.500'} mt={['5px', '3px', '5px']}>
                  <Link href="mailto:support@lecle.co.kr">support@lecle.co.kr</Link>
                </Box>
              </Flex>
              <Flex flexDir={'column'} mt={['20px', '20px', '25px']}>
                <Box textStyle={'sm'} color={'white'} fontWeight={'700'}>
                  BACKED BY
                </Box>
                <Flex flexWrap={'nowrap'} align={'center'} gap={['10px', '10px', '15px']} mt={['20px', '15px', '20px']}>
                  <NextLink href={'https://www.plugandplaytechcenter.com/'} passHref>
                    <Link target={'_blank'}>
                      <Image src={'/images/footer/pnp.svg'} alt={'plug and play tech center'} w={'100%'} maxW={'150px'} />
                    </Link>
                  </NextLink>
                  <NextLink href={'http://www.jointips.or.kr/'} passHref>
                    <Link target={'_blank'}>
                      <Image src={'/images/footer/tips.svg'} alt={'jointips'} w={'100%'} maxW={'150px'} />
                    </Link>
                  </NextLink>
                  <NextLink href={'https://www.theventures.co'} passHref>
                    <Link target={'_blank'}>
                      <Image src={'/images/footer/ventures.svg'} alt={'the ventures'} w={'100%'} maxW={'150px'} />
                    </Link>
                  </NextLink>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Footer;
