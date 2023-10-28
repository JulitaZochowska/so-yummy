import { ReactComponent as Name } from '../../images/user-icon.svg';
import { ReactComponent as Email } from '../../images/email-icon.svg';
import { ReactComponent as Password } from '../../images/password-icon.svg';
import { ReactComponent as Invalid } from '../../images/invalid-state.svg';
import { ReactComponent as Valid } from '../../images/valid-state.svg';
import css from './RegisterForm.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from 'redux/actions/users.actions';
import { selectRegistered } from 'redux/selectors/users.selectors';
import { useSelector } from 'react-redux';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const isRegistered = useSelector(selectRegistered);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  if (isRegistered) {
    return (
      <div className={css.container}>
        <div className={css.form}>
          <div role="group" aria-labelledby="register-head">
            <h3 className={css.formHeadline} id="register-head">
              Success
            </h3>
            <p className={css.notice}>
              To fully activate your account, please check your email for a
              message with an activation link.
            </p>
            <p className={css.notice}>
              If you haven't received our email, please click here to resend it.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={css.container}>
      <form className={css.form} autoComplete="off" onSubmit={handleSubmit}>
        <div role="group" aria-labelledby="register-head">
          <h3 className={css.formHeadline} id="register-head">
            Registration
          </h3>
          <ul>
            <li className={css.item}>
              <input
                className={css.input}
                type="text"
                placeholder="Name"
                name="name"
                required
              ></input>
              <Name className={css.icon} />
              <Valid className={css.iconValid} />
              <Invalid className={css.iconInvalid} />
            </li>
            <li className={css.item}>
              <input
                className={css.input}
                type="email"
                placeholder="Email"
                name="email"
                required
              ></input>
              <Email className={css.icon} />
              <Invalid className={css.iconInvalid} />
            </li>
            <li className={css.item}>
              <input
                className={css.input}
                type="password"
                placeholder="Password"
                name="password"
                required
              ></input>
              <Password className={css.icon} />
              <Invalid className={css.iconInvalid} />
            </li>
          </ul>
        </div>
        <button className={css.button} type="submit">
          Sing up
        </button>
      </form>
      <Link className={css.link} to="/signin">
        Sign in
      </Link>
    </div>
  );
};

export default RegisterForm;
