import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { Loader } from 'components/Loader/Loader';
import { ToastContainer } from 'react-toastify';

export const Layout = () => {
  return (
    <div className={css.layoutContainer}>
      <Header />
      <div className={css.mainContent}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
      <ToastContainer autoClose={4000} />
    </div>
  );
};
