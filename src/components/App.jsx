import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'layout/Layout';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import SigninPage from 'pages/SigninPage/SigninPage';
import { Layout } from 'pages/Layout/Layout';
import MainPage from 'pages/MainPage/MainPage';
import { selectLoggedIn } from 'redux/selectors/users.selectors';
import { refreshUser } from 'redux/actions/users.actions';


const unathorisedRoute = (
  <Route path="/">
    <Route index element={<WelcomePage />}></Route>
    <Route path="/register" element={<RegisterPage />}></Route>
    <Route path="/signin" element={<SigninPage />}></Route>
  </Route>
);

const authorisedRoute = (
  <Route path="/" element={<Layout />}>
    <Route index element={<MainPage />} />
  </Route>
);

export const App = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(selectLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (

    <div>
      <Routes>{isLogged ? authorisedRoute : unathorisedRoute}</Routes>
    </div>

  );
};

export default App;
