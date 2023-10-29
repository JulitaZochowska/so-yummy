import { Suspense } from 'react';
import { Header } from 'components/Header/Header';

export const Layout = () => {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
    </>
  );
};
