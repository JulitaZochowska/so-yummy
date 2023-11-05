import React from 'react';
import css from './ChooseYourBreakfast.module.css';
import { Link } from 'react-router-dom';

const ChooseYourBreakfast = () => {
  return (
    <div className={css.backgroundBlock}>
      <div className={css.backgroundRight}></div>
      <div className={css.spinachRight}></div>
      <div className={css.flipArrow}></div>
      <div className={css.plate}></div>

      <div className={css.chooseYourBreakfastBlock}>
        <span className={css.greenText}>Delicious and healthy</span> way to
        enjoy a variety of fresh ingredients in one satisfying meal
        <Link
          className={css.chooseYourBreakfastBlockLink}
          to="/categories/Breakfast"
        >
          See recipes ➔
        </Link>
      </div>
    </div>
  );
};

export default ChooseYourBreakfast;
