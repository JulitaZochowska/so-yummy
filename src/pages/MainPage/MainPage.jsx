import React from 'react';
import css from './MainPage.module.css';
import { useNavigate } from 'react-router-dom';
import Search from 'components/Search/Search';
import ChooseYourBreakfast from 'components/ChooseYourBreakfast/ChooseYourBreakfast';
import PreviewCategories from 'components/PreviewCategories/PreviewCategories';

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className={css.headerContainer}>
        <Search />
        <ChooseYourBreakfast />
      </div>
      <PreviewCategories />
      <div className={css.otherCategoriesContainer}>
        <button
          className={css.otherCategoriesButton}
          onClick={() => navigate('/categories')}
        >
          Other categories
        </button>
      </div>
    </div>
  );
};

export default MainPage;
