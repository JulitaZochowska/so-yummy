import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'layout/Layout';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import SigninPage from 'pages/SigninPage/SigninPage';
import MainPage from 'pages/MainPage/MainPage';
import { selectLoggedIn } from 'redux/selectors/users.selectors';
import { refreshUser } from 'redux/actions/users.actions';
import { Navigate } from 'react-router-dom';
import RecipesPage from 'pages/RecipesPage/RecipesPage';
import CategoriesPage from 'pages/CategoriesPage/CategoriesPage';
import SearchPage from 'pages/SearchPage/SearchPage';
import AddRecipePage from 'pages/AddRecipePage/AddRecipePage';

const unathorisedRoute = (
  <Route path="/">
    <Route index element={<WelcomePage />}></Route>
    <Route path="/register" element={<RegisterPage />}></Route>
    <Route path="/signin" element={<SigninPage />}></Route>
    <Route path="*" element={<Navigate replace to={'/'} />}></Route>
  </Route>
);

const authorisedRoute = (
  <Route path="/" element={<Layout />}>
    <Route index element={<Navigate replace to={'/main'} />} />
    <Route path="/main" element={<MainPage />} />
    <Route path="/recipe/:recipeId" element={<RecipesPage />} />
    <Route path="/categories" element={<CategoriesPage />} />
    <Route path="/categories/:categoryName" element={<CategoriesPage />} />
    <Route path="/search" element={<SearchPage />} />
    <Route path="/ownRecipes/add" element={<AddRecipePage />} />

    <Route path="*" element={<Navigate replace to={'/main'} />}></Route>
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
