import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './CategoriesList.module.css';
import { fetchCategoriesList } from 'redux/actions/recipes.actions';
import { selectCategoriesList } from 'redux/selectors/recipes.selectors';
import { useNavigate } from 'react-router-dom';

const CategoriesList = ({ categoryName }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCategoriesList());
  }, [dispatch]);

  const categoryList = useSelector(selectCategoriesList); // Corrected the variable name

  const categoriesListElements = categoryList.map(
    (
      category // Corrected the variable name
    ) => (
      <nav key={category.name}>
        <h2
          className={css.CategoriesPage_nav_h2}
          onClick={() => navigate('/categories/' + category.name)}
          style={{
            color: categoryName === category.name ? '#8BAA36' : '#BDBDBD',
          }}
        >
          {category.name}
        </h2>
      </nav>
    )
  );

  return <div className={css.CategoriesPage_nav}>{categoriesListElements}</div>;
};

export default CategoriesList;
