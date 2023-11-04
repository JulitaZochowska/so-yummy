import PropTypes from 'prop-types';
import css from './MainTitle.module.css';

const MainTitle = ({ title }) => {
  return (
    <div className={css.container}>
      <div className={css.dot1}></div>
      <div className={css.dot2}></div>
      <div className={css.dot3}></div>
      <h2 className={css.mainTitle}>{title}</h2>
    </div>
  );
};

MainTitle.propTypes = {
  title: PropTypes.string,
};

export default MainTitle;
