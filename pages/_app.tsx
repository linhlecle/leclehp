import type { AppProps } from 'next/app';

import { NextIntlProvider } from 'next-intl';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { ThemeProvider, useColorMode, useTheme } from '@chakra-ui/react';
import { mode } from 'styles/theme/foundations/colors';
import '@fontsource/montserrat';
import { withChakraProvider } from 'styles/provider';

import Auth from '0auth-sdk';
import { useEffect } from 'react';
import * as ga from '../utils/ga';
import { useRouter } from 'next/router';

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

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    Auth.initialize({ brand: 'test' });
  }, []);

  useEffect(() => {
    // ONLY LIGHT MODE
    localStorage.setItem('chakra-ui-color-mode', 'light');
    setColorMode('light');
  });

  return (
    <NextIntlProvider messages={pageProps.messages}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={{ ...theme, colors: { ...theme.colors, ...mode[colorMode] } }}>
          <Component {...pageProps} />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </NextIntlProvider>
  );
}

export default withChakraProvider(MyApp);
