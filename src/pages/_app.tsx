import { AppProps } from 'next/dist/next-server/lib/router/router';
import React, { useEffect, useState } from 'react';
import { AuthProvider } from '../contexts/AuthContext';

import styles from '../styles/pages/Loading.module.css';

import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <AuthProvider>
      {isLoading ? (
        <div className={styles.loading}>
          <p>Carregando...</p>
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </AuthProvider>
  );
}

export default MyApp;
