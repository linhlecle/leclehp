import type { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { ThemeProvider, useColorMode, useTheme } from '@chakra-ui/react';
import { mode } from 'styles/theme/foundations/colors';
import '@fontsource/montserrat';
import { withChakraProvider } from 'styles/provider';

import Auth from '0auth-sdk';
import { useEffect } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const { colorMode, setColorMode } = useColorMode();
  const theme = useTheme();

  useEffect(() => {
    Auth.initialize({ brand: 'test' });
  }, []);

  useEffect(() => {
    // ONLY LIGHT MODE
    localStorage.setItem('chakra-ui-color-mode', 'light');
    setColorMode('light');
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={{ ...theme, colors: { ...theme.colors, ...mode[colorMode] } }}>
        <Component {...pageProps} />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default withChakraProvider(MyApp);
