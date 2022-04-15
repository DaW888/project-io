import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }: AppProps) {
  const darkTheme = createTheme({
    type: 'dark',
  });
  return (
    <NextUIProvider theme={darkTheme}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </NextUIProvider>
  );
}

export default MyApp;
