import { AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Flex, Text, AspectRatio, Image } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { NewsItemProps } from '../news_type';

function NewsItem({ category, title, subtitle, content, image, publishDate, source }: NewsItemProps) {
  const t = useTranslations('News');
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <AccordionItem border={'none'}>
      <AccordionButton
        justifyContent={'space-between'}
        p={'0px'}
        h={'140px'}
        borderBottomWidth={'1px'}
        borderBottomColor={'gray.300'}
        borderBottomStyle={'solid'}
        color={'gray.700'}
        _focus={{
          outline: 'none',
        }}
        _hover={{
          bgColor: 'none',
        }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Flex flexDir={'column'} align={'flex-start'} justify={'flex-start'} flexGrow={1}>
          <Text w={'100%'} textAlign={'left'} textStyle={'sm'} color={'point'} fontWeight={'700'}>
            {category}
          </Text>
          <Text
            mt={'5px'}
            w={'100%'}
            h={'100%'}
            color={'black'}
            textStyle={'lg'}
            textAlign={'left'}
            noOfLines={1}
            fontWeight={isHover ? '600' : '400'}
            transition={'font-weight 0.1s ease'}
          >
            {title}
          </Text>
          <Text mt={['10px', '10px', '5px']} w={'100%'} textAlign={'left'} color={'gray.700'}>
            {!publishDate ? '' : publishDate} {!source ? '' : source}
          </Text>
        </Flex>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel m={'0px'} px={'0px'} py={['20px', '20px', '30px']}>
        <Flex flexDir={'column'} borderRadius={'20px'} bgColor={'gray.100'} px={['20px', '40px', '40px']} py={['25px', '30px', '30px']}>
          <Box mt={'5px'} textStyle={'lg'} color={'black'}>
            {title}
          </Box>
          {!publishDate || !source ? (
            <div />
          ) : (
            <Box mt={['10px', '10px', '5px']} color={'gray.700'}>
              {publishDate} {source}
            </Box>
          )}
          {!image ? (
            <div />
          ) : (
            <AspectRatio ratio={[320 / 180, 670 / 310, 940 / 435]} borderRadius={'20px'} overflow={'hidden'} mt={['20px', '20px', '30px']}>
              <Image src={`${decodeURI(image)}`} alt={decodeURI(image)} objectFit="cover" />
            </AspectRatio>
          )}
          <Text mt={['30px', '20px', '30px']} whiteSpace={'pre-line'} textStyle={'md'}>
            {subtitle}
            {subtitle ? <br /> : null}
            {subtitle ? <br /> : null}
            {content}
            {!source ? null : <br />}
            {!source ? null : <br />}
            {!source ? null : `${t('source')} : ${source}`}
          </Text>
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  );
}

export default NewsItem;
