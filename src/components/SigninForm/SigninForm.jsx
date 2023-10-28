import email from '../../images/mail-icon.svg';
import password from '../../images/password-icon.svg';
import css from './SigninForm.module.css';
import { Link } from 'react-router-dom';

const SigninForm = () => {
  return (
    <div className={css.container}>
      <form className={css.form} name="signinForm" autoComplete="off">
        <div role="group" aria-labelledby="signinForm-head">
          <h3 className={css.formHeadline} id="signinForm-head">
            Sign in
          </h3>
          <ul>
            <li className={css.item}>
              <input
                className={css.input}
                type="email"
                placeholder="Email"
              ></input>
              <img className={css.icon} src={email} alt="email icon" />
            </li>
            <li className={css.item}>
              <input
                className={css.input}
                type="password"
                placeholder="Password"
              ></input>
              <img className={css.icon} src={password} alt="email icon" />
            </li>
          </ul>
        </div>
        <button className={css.button} type="submit">
          Sing in
        </button>
      </form>
      <Link className={css.link} to="/register">
        Registration
      </Link>
    </div>
  );
};

export default SigninForm;
