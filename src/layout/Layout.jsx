import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={css.layoutContainer}>
      <Header />
      <div className={css.mainContent}>
        <Suspense fallback={<div>Loading</div>}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};
