import { AspectRatio, Box, Flex, Image, Text } from '@chakra-ui/react';
import useMedia from 'hooks/useMedia';

type Participator = {
  id?: number;
  position?: string;
  name?: string;
  profile?: string;
};

type BehindStoryProps = {
  content: string;
  participator: Participator;
};

function BehindStory({ content, participator }: BehindStoryProps) {
  const { isMobile } = useMedia();

  return (
    <Flex flexDir={['column', 'row', 'row']}>
      {isMobile ? (
        <>
          <Flex flexDir={'row'} align={'flex-end'}>
            <AspectRatio ratio={1 / 1} minW={['120px', '140px', '150px']} h={'100%'} borderRadius={'30px'} overflow={'hidden'}>
              <Image src={participator.profile} alt={participator.profile} loading={'lazy'} objectFit={'cover'} />
            </AspectRatio>
            <Flex flexDir={'column'} ml={'20px'}>
              <Box textStyle={'md'} fontWeight={'700'} color={'gray.700'}>
                {participator.position}
              </Box>
              <Box textStyle={'lg'} fontWeight={'400'} color={'black'}>
                {participator.name}
              </Box>
            </Flex>
          </Flex>
          <Text mt={'16px'} textStyle={'md'} fontWeight={'400'} color={'black'}>
            {content}
          </Text>
        </>
      ) : (
        <>
          <AspectRatio ratio={1 / 1} minW={['120px', '140px', '150px']} h={'100%'} borderRadius={'30px'} overflow={'hidden'}>
            <Image src={participator.profile} alt={participator.profile} loading={'lazy'} objectFit={'cover'} />
          </AspectRatio>
          <Flex flexDir={'column'} ml={['', '20px', '30px']}>
            <Box textStyle={'md'} fontWeight={'700'} color={'gray.700'}>
              {participator.position}
            </Box>
            <Box mt={['', '0px', '4px']} textStyle={'lg'} fontWeight={'400'} color={'black'}>
              {participator.name}
            </Box>
            <Text mt={'10px'} textStyle={'md'} fontWeight={'400'} color={'black'} whiteSpace={'pre-line'}>
              {content}
            </Text>
          </Flex>
        </>
      )}
    </Flex>
  );
}

export default BehindStory;
