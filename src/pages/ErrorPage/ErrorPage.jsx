import { ReactComponent as Image } from '../../images/error-page-image.svg';
import MainTitle from 'components/MainTitle/MainTitle';
import css from './ErrorPage.module.css';

const ErrorPage = () => {
  return (
    <section className={css.errorPage}>
      <div className={css.container}>
        <MainTitle />
        <div className={css.imageBox}>
          <Image className={css.image} />
          <p className={css.notice}>We are sorry,</p>
          <p className={css.description}>
            but the page you were looking for can't be found...
          </p>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
