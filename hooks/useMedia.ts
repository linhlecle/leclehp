import { useMediaQuery } from '@chakra-ui/react';
import breakpoints from 'styles/theme/foundations/breakpoints';

function useMedia() {
  // tablet
  const [isSmallerThanPC] = useMediaQuery(`(max-width: 991px)`);
  // mobile
  const [isSmallerThanTablet] = useMediaQuery(`(max-width: ${breakpoints.xs})`);

  const [isPc] = useMediaQuery(`(min-width: ${breakpoints.sm})`);
  const [isTablet] = useMediaQuery(`(max-width: ${breakpoints.sm}) and (min-width: ${breakpoints.xs})`);
  const [isMobile] = useMediaQuery(`(max-width: ${breakpoints.xs})`);
  const [isSmallPc] = useMediaQuery(`(max-width: 1279px) and (min-width: ${breakpoints.sm})`);
  const [isOldSmallMobile] = useMediaQuery(`(max-width: 480px)`);

  return { isSmallerThanPC, isSmallerThanTablet, isPc, isTablet, isMobile, isSmallPc, isOldSmallMobile };
}

export default useMedia;
