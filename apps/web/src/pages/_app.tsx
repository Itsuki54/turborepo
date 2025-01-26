import '@/styles/globals.css';
import '@repo/ui/styles.css';
import type { AppProps } from 'next/app';

/**
 * Main application component
 */
const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
