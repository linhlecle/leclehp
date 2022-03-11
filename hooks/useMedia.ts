import { useMediaQuery } from '@chakra-ui/react';
import breakpoints from 'styles/theme/foundations/breakpoints';

function useMedia() {
  // tablet
  const [isSmallerThanPC] = useMediaQuery(`(max-width: ${breakpoints.sm})`);
  // mobile
  const [isSmallerThanTablet] = useMediaQuery(`(max-width: ${breakpoints.xs})`);

  const [isPc] = useMediaQuery(`(min-width: ${breakpoints.sm})`);
  const [isTablet] = useMediaQuery(`(max-width: ${breakpoints.sm}) and (min-width: ${breakpoints.xs})`);
  const [isMobile] = useMediaQuery(`(max-width: ${breakpoints.xs})`);

  return { isSmallerThanPC, isSmallerThanTablet, isPc, isTablet, isMobile };
}

export default useMedia;
