import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './CategoriesList.module.css';
import { fetchCategoriesList } from 'redux/actions/recipes.actions';
import { selectCategoriesList } from 'redux/selectors/recipes.selectors';

const CategoriesList = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(null); // Initialize with null or a default category name

  useEffect(() => {
    dispatch(fetchCategoriesList());
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const categoryList = useSelector(selectCategoriesList); // Corrected the variable name

  const categoriesListElements = categoryList.map((category) => ( // Corrected the variable name
    <nav key={category.name}>
      <h2
        className={css.CategoriesPage_nav_h2}
        onClick={() => handleCategoryClick(category.name)}
        style={{
          color: selectedCategory === category.name ? '#8BAA36' : '#BDBDBD',
        }}
      >
        {category.name}
      </h2>
    </nav>
  ));

  return <div className={css.CategoriesPage_nav}>{categoriesListElements}</div>;
};

export default CategoriesList;
