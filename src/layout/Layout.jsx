import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutContainer, MainContent } from './Layout.styled';

export const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <MainContent>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </MainContent>
      <Footer />
    </LayoutContainer>
  );
};
