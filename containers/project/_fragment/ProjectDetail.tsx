import { AspectRatio, Text, Flex, Image } from '@chakra-ui/react';

type ProjectDetailProps = {
  image?: string | null;
  content: string;
};

function ProjectDetail({ image, content }: ProjectDetailProps) {
  return (
    <Flex flexDir={'column'}>
      {image && (
        <AspectRatio w={'100%'} ratio={953 / 400} overflow={'hidden'} borderRadius={'20px'}>
          <Image src={image} objectFit="cover" loading={'lazy'} alt={image} />
        </AspectRatio>
      )}
      <Text mt={['20px', '20px', '30px']} textStyle={'md'} fontWeight={'400'} color={'black'} whiteSpace={'pre-line'}>
        {content}
      </Text>
    </Flex>
  );
}

export default ProjectDetail;
