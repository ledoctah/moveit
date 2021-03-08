import { AppProps } from 'next/dist/next-server/lib/router/router';
import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { AuthProvider } from '../contexts/AuthContext';

import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <AuthProvider>
      {isLoading ? <Loading /> : <Component {...pageProps} />}
    </AuthProvider>
  );
}

export default MyApp;
