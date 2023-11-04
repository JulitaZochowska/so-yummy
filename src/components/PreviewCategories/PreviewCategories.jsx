import React, { useEffect } from 'react';
import css from './PreviewCategories.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoryRecipes } from 'redux/actions/recipes.actions';
import {
  selectBreakfastRecipes,
  selectChickenRecipes,
  selectDessertRecipes,
  selectMiscellaneousRecipes,
} from 'redux/selectors/recipes.selectors';
import PopularCategory from 'components/PopularCategory/PopularCategory';

const PreviewCategories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryRecipes('Breakfast'));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategoryRecipes('Miscellaneous'));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategoryRecipes('Chicken'));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategoryRecipes('Dessert'));
  }, [dispatch]);

  const breakfastRecipes = useSelector(selectBreakfastRecipes)?.slice(0, 4);
  const miscellaneousRecipes = useSelector(selectMiscellaneousRecipes)?.slice(
    0,
    4
  );
  const chickenRecipes = useSelector(selectChickenRecipes)?.slice(0, 4);
  const dessertRecipes = useSelector(selectDessertRecipes)?.slice(0, 4);

  return (
    <div className={css.categories}>
      {!!breakfastRecipes && breakfastRecipes.length > 0 ? (
        <PopularCategory
          title="Breakfast"
          category={breakfastRecipes}
        ></PopularCategory>
      ) : (
        ''
      )}
      {!!miscellaneousRecipes && miscellaneousRecipes.length > 0 ? (
        <PopularCategory
          title="Miscellaneous"
          category={miscellaneousRecipes}
        ></PopularCategory>
      ) : (
        ''
      )}
      {!!chickenRecipes && chickenRecipes.length > 0 ? (
        <PopularCategory
          title="Chicken"
          category={chickenRecipes}
        ></PopularCategory>
      ) : (
        ''
      )}
      {!!dessertRecipes && dessertRecipes.length > 0 ? (
        <PopularCategory
          title="Dessert"
          category={dessertRecipes}
        ></PopularCategory>
      ) : (
        ''
      )}
    </div>
  );
};

export default PreviewCategories;
