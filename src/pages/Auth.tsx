import { useState, useEffect } from 'react';
import { SplashScreen, AuthLayout } from '@components/index';

type AppPage = 'splash' | 'auth';

export const Auth = () => {
  const [page, setPage] = useState<AppPage>('splash');

  useEffect(() => {
    if (page === 'splash') {
      const timer = setTimeout(() => setPage('auth'), 5000);
      return () => clearTimeout(timer);
    }
  }, [page]);

  return (
    <div>
      {page === 'splash' && (
        <SplashScreen onComplete={() => setPage('auth')} />
      )}
      {page === 'auth' && <AuthLayout />}
    </div>
  );
};
