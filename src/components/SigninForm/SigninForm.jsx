import { ReactComponent as Email } from '../../images/email-icon.svg';
import { ReactComponent as Password } from '../../images/password-icon.svg';
import { ReactComponent as Invalid } from '../../images/invalid-state.svg';
import { ReactComponent as Valid } from '../../images/valid-state.svg';
import css from './SigninForm.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from 'redux/actions/users.actions';

const SigninForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      signIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };
  return (
    <div className={css.container}>
      <form
        className={css.form}
        name="signinForm"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
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
                name="email"
              ></input>
              <Email className={css.icon} />
              <Valid className={css.iconValid} />
              <Invalid className={css.iconInvalid} />
            </li>
            <li className={css.item}>
              <input
                className={css.input}
                type="password"
                placeholder="Password"
                name="password"
              ></input>
              <Password className={css.icon} />
              <Valid className={css.iconValid} />
              <Invalid className={css.iconInvalid} />
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
