import { Box, chakra, Flex, Input, InputGroup } from '@chakra-ui/react';
import AttachmentFileIcon from 'components/@Icons/System/AttachmentFile';
import { useTranslations } from 'next-intl';
import React from 'react';

type FileUploaderProps = {
  files: File[];
  onChange: (e: any) => void;
};

function FileUploader({ files, onChange }: FileUploaderProps) {
  const t = useTranslations('Contact');
  const filename = files ? files[0]?.name : '';

  return (
    <InputGroup border="2px" borderRight={'none'} borderLeft={'none'} borderTop={'none'} borderColor={'gray.300'} py={['11px', '12px', '15px']}>
      <chakra.label htmlFor="input-file" width={'100%'} cursor={'pointer'}>
        <Flex flexDir={'row'} align={'center'} justify={'space-between'}>
          <Box textStyle={'md'} color={'gray.700'}>
            {t('q4FileUpload')}
          </Box>
          <Flex flexDir={'row'} align={'center'} textStyle={'md'} color={'black'}>
            {files && <Box mr={'10px'}>{files.length > 1 ? t('file', { name: filename, length: files.length - 1 }) : filename}</Box>}
            <AttachmentFileIcon w={'24px'} h={'24px'} />
          </Flex>
        </Flex>
      </chakra.label>
      <Input type="file" display={'none'} id="input-file" name={'file'} multiple onChange={(e) => onChange(e.target.files)} />
    </InputGroup>
  );
}

export default FileUploader;
