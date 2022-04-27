import { useMediaQuery } from '@chakra-ui/react';
import breakpoints from 'styles/theme/foundations/breakpoints';

function useMedia() {
  // tablet
  const [isSmallerThanPC] = useMediaQuery(`(max-width: 991.9px)`);
  // mobile
  const [isSmallerThanTablet] = useMediaQuery(`(max-width: ${breakpoints.xs})`);

  const [isPc] = useMediaQuery(`(min-width: ${breakpoints.sm})`);
  const [isTablet] = useMediaQuery(`(max-width: ${breakpoints.sm}) and (min-width: ${breakpoints.xs})`);
  const [isMobile] = useMediaQuery(`(max-width: ${breakpoints.xs})`);
  const [isSmallPc] = useMediaQuery(`(max-width: 1279.9px) and (min-width: ${breakpoints.sm})`);
  const [isOldSmallMobile] = useMediaQuery(`(max-width: 480px)`);
  const [isSmaller600Height] = useMediaQuery(`(max-height: 600px)`);
  const [isSmaller1200Height] = useMediaQuery(`(max-height: 1200px)`);
  const [isSmaller2000Height] = useMediaQuery(`(max-height: 2000px)`);

  return {
    isSmallerThanPC,
    isSmallerThanTablet,
    isPc,
    isTablet,
    isMobile,
    isSmallPc,
    isOldSmallMobile,
    isSmaller600Height,
    isSmaller1200Height,
    isSmaller2000Height,
  };
}

export default useMedia;
