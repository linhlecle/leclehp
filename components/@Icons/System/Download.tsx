import { Icon, IconProps } from '@chakra-ui/react';

const DownloadIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M8.0625 10.3135L12 14.25L15.9375 10.3135" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 3.75V14.2472" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M20.25 14.25V19.5C20.25 19.6989 20.171 19.8897 20.0303 20.0303C19.8897 20.171 19.6989 20.25 19.5 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V14.25"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default DownloadIcon;
