import imageMobile from '../../images/signin-image-mobile.png';
import imageMobile2x from '../../images/signin-image-mobile@2x.png';
import imageMobile3x from '../../images/signin-image-mobile@3x.png';
import imageTablet from '../../images/singin-image-tablet.png';
import imageTablet2x from '../../images/singin-image-tablet@2x.png';
import imageTablet3x from '../../images/singin-image-tablet@3x.png';
import imageDesktop from '../../images/signin-image-desktop.png';
import imageDesktop2x from '../../images/signin-image-desktop@2x.png';
import imageDesktop3x from '../../images/signin-image-desktop@3x.png';
import css from './RegisterPage.module.css';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { ToastContainer } from 'react-toastify';

const RegisterPage = () => {
  return (
    <section className={css.registerPage}>
      <div className={css.container}>
        <img
          src={imageMobile}
          srcSet={`${imageMobile} 285w, ${imageMobile2x} 570w, ${imageMobile3x} 855w, ${imageTablet} 409w, ${imageTablet2x} 818w, ${imageTablet3x} 1227w, ${imageDesktop} 532w, ${imageDesktop2x} 1064w, ${imageDesktop3x} 1596w`}
          sizes="(min-width: 1280px) 532px, (min-width: 768px) 409px, (min-width: 320px) 285px, 100vw"
          alt="Register hero"
        />
        <RegisterForm />
        <ToastContainer autoClose={4000} />
      </div>
    </section>
  );
};

export default RegisterPage;
