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
import { useState } from 'react';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const isRegistered = useSelector(selectRegistered);
  const [isNameValid, setIsNameValid] = useState('neutral');
  const [isEmailValid, setIsEmailValid] = useState('neutral');
  const [isPasswordValid, setIsPasswordValid] = useState('neutral');

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

  const handleNameChange = event => {
    const { value } = event.target;
    if (value.length === 0) {
      setIsNameValid('neutral');
    } else if (value.length < 3) {
      setIsNameValid('invalid');
    } else {
      setIsNameValid('valid');
    }
  };
  const handleEmailChange = event => {
    const { value } = event.target;

    if (value.length === 0) {
      setIsEmailValid('neutral');
    } else if (value.includes('@')) {
      setIsEmailValid('valid');
    } else {
      setIsEmailValid('invalid');
    }
  };
  const handlePasswordChange = event => {
    const { value } = event.target;

    if (value.length === 0) {
      setIsPasswordValid('neutral');
    } else if (value.length < 8) {
      setIsPasswordValid('invalid');
    } else if (
      !/(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(value)
    ) {
      setIsPasswordValid('invalid');
    } else {
      setIsPasswordValid('valid');
    }
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
          <div className={css.item}>
            <input
              className={
                isNameValid === 'valid'
                  ? css.inputValid
                  : isNameValid === 'invalid'
                  ? css.inputInvalid
                  : css.input
              }
              type="text"
              placeholder="Name"
              name="name"
              required
              onChange={handleNameChange}
            ></input>
            <Name
              className={
                isNameValid === 'valid'
                  ? css.iconGreen
                  : isNameValid === 'invalid'
                  ? css.iconRed
                  : css.icon
              }
            />
            <Invalid
              className={
                isNameValid === 'valid'
                  ? css.iconHide
                  : isNameValid === 'invalid'
                  ? css.iconShow
                  : css.iconHide
              }
            />
            <Valid
              className={
                isNameValid === 'valid'
                  ? css.iconShow
                  : isNameValid === 'invalid'
                  ? css.iconHide
                  : css.iconHide
              }
            />
          </div>
          <div className={css.item}>
            <input
              className={
                isEmailValid === 'valid'
                  ? css.inputValid
                  : isEmailValid === 'invalid'
                  ? css.inputInvalid
                  : css.input
              }
              type="email"
              placeholder="Email"
              name="email"
              required
              onChange={handleEmailChange}
            ></input>
            <Email
              className={
                isEmailValid === 'valid'
                  ? css.iconGreen
                  : isEmailValid === 'invalid'
                  ? css.iconRed
                  : css.icon
              }
            />
            <Invalid
              className={
                isEmailValid === 'valid'
                  ? css.iconHide
                  : isEmailValid === 'invalid'
                  ? css.iconShow
                  : css.iconHide
              }
            />
            <Valid
              className={
                isEmailValid === 'valid'
                  ? css.iconShow
                  : isEmailValid === 'invalid'
                  ? css.iconHide
                  : css.iconHide
              }
            />
          </div>
          <div className={css.item}>
            <input
              className={
                isPasswordValid === 'valid'
                  ? css.inputValid
                  : isPasswordValid === 'invalid'
                  ? css.inputInvalid
                  : css.input
              }
              type="password"
              placeholder="Password"
              name="password"
              required
              onChange={handlePasswordChange}
            ></input>
            <p
              className={
                isPasswordValid === 'valid'
                  ? css.noticeGreen
                  : isPasswordValid === 'invalid'
                  ? css.noticeRed
                  : css.notice
              }
            >
              {isPasswordValid === 'valid'
                ? 'Password is secure'
                : isPasswordValid === 'invalid'
                ? 'Enter a valid Password'
                : ''}
            </p>
            <Password
              className={
                isPasswordValid === 'valid'
                  ? css.iconGreen
                  : isPasswordValid === 'invalid'
                  ? css.iconRed
                  : css.icon
              }
            />
            <Invalid
              className={
                isPasswordValid === 'valid'
                  ? css.iconHide
                  : isPasswordValid === 'invalid'
                  ? css.iconShow
                  : css.iconHide
              }
            />
            <Valid
              className={
                isPasswordValid === 'valid'
                  ? css.iconShow
                  : isPasswordValid === 'invalid'
                  ? css.iconHide
                  : css.iconHide
              }
            />
          </div>
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
