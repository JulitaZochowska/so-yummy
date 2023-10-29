import { Route, Routes } from 'react-router-dom';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import SigninPage from 'pages/SigninPage/SigninPage';
import { Layout } from 'pages/Layout/Layout';

const App = () => {
  return (
    <Routes>
      <Route></Route>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/start" element={<Layout />} />
    </Routes>
  );
};

export default App;
