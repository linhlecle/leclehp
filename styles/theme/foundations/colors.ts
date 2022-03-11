import Color from './colors.types';

/**
 * RECLE DESIGN SYSTEM
 * ONLY LIGHT MODE
 */
const Light: Color = {
  primary: {
    500: '#1A1A1A',
    600: '#E1E1E1',
  },
  secondary: '#3F4CB2',
  tertiary: '#0C1F6F',
  'primary.sub': '#C3DCFF',
  'secondary.sub': '#3F4CB2',
  'tertiary.sub': '#0C1F6F',
  point: '#0000F4',
  'point.sub': '#DCE4FF',
  warning: '#FF3D31',
  'warning.sub': '#FFCAC7',
  success: '#0000F4',
  'success.sub': '#C1CFFF',
  black: '#1A1A1A',
  dark: {
    500: '#1A1A1A',
    600: '#1A1A1A',
    700: '#1A1A1A',
  },
  white: '#FFFFFF',
  gray: {
    50: '#FAFAFA',
    100: '#F7F7F7',
    300: '#F0F0F0',
    500: '#CECECE',
    700: '#808080',
    800: '#444444',
  },
  darkgray: {
    500: '#444444',
    600: '#404040',
    700: '#333333',
  },
  background: {
    primary: '#FFFFFF',
    secondary: '#FAFAFA',
    tertiary: '#F0F0F0',
  },
  modal: '#FFFFFF',
};

const Dark: Color = {
  ...Light,
};

export const mode = {
  light: Light,
  dark: Dark,
};

const colors = {
  dim: {
    primary: '#1A1A1A80',
    secondary: '#1A1A1A33',
  },
  kakao: {
    500: '#FFDE32',
    600: '#F5D322',
    700: '#EFCC1A',
  },
  naver: {
    500: '#20CF5D',
    600: '#17c554',
    700: '#14bf50',
  },
  facebook: {
    500: '#1877F3',
    600: '#1874eb',
    700: '#146cdf',
  },
  google: {
    500: '#FFFFFF',
    600: '#F5F5F5',
    700: '#EEEEEE',
  },
  apple: {
    500: '#000000',
    600: '#111111',
    700: '#222222',
  },
};

export default colors;
