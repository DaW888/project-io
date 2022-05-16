import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'antd/dist/antd.dark.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
