import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from 'pages/CategoriesPage/CategoriesPage.module.css';
import { fetchCategoriesList } from 'redux/actions/recipes.actions';
import { selectCategoriesList } from 'redux/selectors/recipes.selectors';

const CategoriesList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesList());
  }, [dispatch]);

  const categoryList = useSelector(selectCategoriesList);
  const categoriesListElements = categoryList.map(category => (
    <nav key={category.name}>
      <h2 className={css.CategoriesPage_nav_h2}>{category.name}</h2>
    </nav>
  ));

  return <div className={css.CategoriesPage_nav}>{categoriesListElements}</div>;
};

export default CategoriesList;
