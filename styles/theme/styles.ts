/* eslint-disable @typescript-eslint/no-explicit-any */
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props: any) => ({
    body: {
      fontFamily: 'Noto Sans KR, sans-serif, Montserrat',
      color: mode('#000000', '#FFFFFF')(props),
      bg: mode('#FFFFFF', '#363636')(props),
    },
    input: {
      fontSize: ['16px', '14px', '15px'],
    },
    '#__next': {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      all: 'unset',
      userSelect: 'none', // ? check input
    },
  }),
};

export default styles;
