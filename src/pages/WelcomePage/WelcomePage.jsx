import { Link } from 'react-router-dom';
import logo from '../../images/logo-mobile.svg';
import css from './WelcomePage.module.css';

const WelcomePage = () => {
  return (
    <section className={css.welcome}>
      <div className={css.container}>
        <img className={css.logo} src={logo} alt="Logo" />
        <p className={css.title}>Welcome to the app!</p>
        <p className={css.description}>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </p>
        <div className="buttons">
          <Link className={css.register} to="register">
            Registration
          </Link>
          <Link className={css.signin} to="signin">
            Sign In
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WelcomePage;
